---
sidebar_position: 4

---

# Tutorial to build a validator and enable on Safe Account

In this tutorial, we will create a basic 7579 validator module. This module can be installed into a Safe Account using the Safe 7579 adapter, enhancing the validation flow of the Safe Account.



## Getting started:

Before we install and enable any modules for Safe Accounts, they need to be developed and thoroughly tested. Once developed, these modules can be installed on either an existing or a new Safe Account.

In this tutorial, we will build a basic external validator. This validator will have the capability to add a new owner and verify transactions for an existing Safe Account.

::::steps

### Clone the module template repository:

```bash [Terminal] 
git clone https://github.com/koshikraj/module-template-7579.git
```

To simplify development, let's start with a module template that comes with all the necessary dependencies pre-installed. This module package combines both Hardhat and Foundry projects for a streamlined setup.

### Build the validator module

We will create an ownable validator using the 7579 standard that accomplishes the following tasks:

1. Adds a new owner address to the Safe by mapping it to the account address when installing the module.
2. Implements validation logic in the validateUserOp method to ensure the transaction is signed by the added owner.
3. Removes the new owner address mapped to the Safe account address when uninstalling the module.

Here is the module code that achieves these requirements:

```ts  [ OwnableValidator.sol ]

// [!include ~/code/OwnableValidator.sol]

```

You can now build and test this code against the Safe Account by placing it under the module/contracts directory.

```txt [ Project structure]
module-template-7579/
├── module/          // [!code focus]  
|   └── contracts/   // [!code focus] 
├── web/
└──  packages/
```

Make sure the module can build without any errors inside the project.

```bash [Terminal]
npm run build
```

### Test the validator module


The validator module can be tested against Safe using the 7579 adapter. The test setup automatically handles adding the 7579 adapter as the fallback handler and module to the Safe.

To test our validator module against Safe, follow these steps

1. **Install the Validator Module:** Use the Safe 7579 adapter to install the validator module by passing the owner address and module code, which is 1 for the validator.
2. **Construct the Nonce:** Add the validator address as the key to construct the nonce.
3. **Build the User Operation:**  Create the User Operation and send it, appending the valid signature that the validator will verify.


```ts  [ OwnableValidator.t.sol ]

    await execSafeTransaction(safe, 
    await safe7579.initializeAccount.populateTransaction([], [], [], [], {registry: ZeroAddress, attesters: [], threshold: 0}));  // [!code focus]  

    await execSafeTransaction(safe, 
    {to: await safe.getAddress(),  // [!code focus]  
    data:  ((await safe7579.installModule.populateTransaction(1, await ownableValidator.getAddress(), utils.defaultAbiCoder.encode(['address'], [user1.address]))).data as string),   // [!code focus]  
    value: 0})  // [!code focus]  

    const key = BigInt(pad(await ownableValidator.getAddress() as Hex, {    // [!code focus]  
        dir: "right",
        size: 24,
      }) || 0
    ) 
    const currentNonce = await entryPoint.getNonce(await safe.getAddress(), key);   // [!code focus]  


    let userOp = buildUnsignedUserOpTransaction(await safe.getAddress(), currentNonce, call)   // [!code focus]  

    const typedDataHash = ethers.getBytes(await entryPoint.getUserOpHash(userOp))
    userOp.signature = await user1.signMessage(typedDataHash)
```


You can now test the validator module against the Safe Account by placing the test script under the module/test directory. 

```txt [ Project structure]
module-template-7579/
├── module/          // [!code focus]  
|   └── test/   // [!code focus] 
├── web/
└── packages/
```

After setting up the validation test flow, you can run the tests to ensure everything is working correctly. 

```bash [Terminal]
npm run test


Safe7579 - Basic tests

3 passing (200ms)
```



### Install the validator module to Safe Account using a Safe App
 
Now that you have thoroughly tested the validator code, you can proceed to deploy the validator module and integrate it with a Safe Account. Follow these steps to deploy the validator module and use it on a Safe Account:

```bash [Terminal]
npm run deploy sepolia

depolyed "Safe7579" at 0x94952C0Ea317E9b8Bca613490AF25f6185623284
depolyed "OwnableValidator" at 0xe90044FE8855B307Fe8F9848fd9558D5D3479191

```


To add the validator to the Safe Account using a Safe App via Safe {Wallet}, you can build a custom Safe App using the provided template from your code base. Follow these steps to create and deploy the Safe App:

```txt [ Safe App structure]
web/src/
├── logic/ // [!code hl]
|   └── module.ts
├── pages/ // [!code hl]
└── utils/
``` 

Replace the deployed Safe7579 and OwnableValidator contract addresses to add and interact with the module. 

The Safe App can be added to the Safe {Wallet} as a custom Safe App.

![Validator App Add](/img/validator-app-add.png)

Here is the snippet of code that
1. Enables Safe7579 adapter as a module and fallback handler.
2. Initializes the Safe7579 account.
3. Installs the validator.

```ts  [ module.ts ]


export const addValidatorModule = async (ownerAddress: string ) => {

    
    if (!await isConnectedToSafe()) throw Error("Not connected to a Safe")

    const info = await getSafeInfo()

    const txs: BaseTransaction[] = []


    if (!await isModuleEnabled(info.safeAddress, safe7579Module)) {
        txs.push(await buildEnableModule(info.safeAddress, safe7579Module))
        txs.push(await buildUpdateFallbackHandler(info.safeAddress, safe7579Module))
    }

    txs.push(await buildInitSafe7579())

    txs.push(await buildInstallOwnable(ownerAddress))

    const provider = await getProvider()
    // Updating the provider RPC if it's from the Safe App.
    const chainId = (await provider.getNetwork()).chainId.toString()

    if (txs.length > 0)  
    await submitTxs(txs)
}

```

Before the OwnableValidator is installed, we just need to provide the owner address that needs to be added.

![Validator App Home](/img/validator-app-home.png)

The Safe App will then enable the Safe 7579 adapter as module and fallback handler along with installing the validator.

![Validator App Install](/img/validator-install.png)



### Use the Safe Account via new validator

Now that the validator module has been installed via Safe 7579 adapter, it can be validated via the new owner.
As the Safe Account is fullt compliant with the ERC-4337, thanks to the adapter, we can create and execute transactions via User Operations via bundlers.

Here is how we can contruct the user operation for the Ownable validator and execute it.


```ts  [ module.ts ]

export const sendTransaction = async (chainId: string, recipient: string, amount: bigint, walletProvider: any, safeAccount: string): Promise<any> => {

    const call = { target: recipient as Hex, value: amount, callData: '0x' as Hex }

    const key = BigInt(pad(ownableModule as Hex, {
        dir: "right",
        size: 24,
      }) || 0
    )
    
    const nonce = await getAccountNonce(publicClient(parseInt(chainId)), {
        sender: safeAccount as Hex,
        entryPoint: ENTRYPOINT_ADDRESS_V07,
        key: key
    })

    let unsignedUserOp = buildUnsignedUserOpTransaction(
        safeAccount as Hex,
        call,
        nonce,
      )

      const signUserOperation = async function signUserOperation(userOperation: UserOperation<"v0.7">) {

        const provider = await getJsonRpcProvider(chainId)
    
        const entryPoint = new Contract(
            ENTRYPOINT_ADDRESS_V07,
            EntryPoint.abi,
            provider
        )
        let typedDataHash = getBytes(await entryPoint.getUserOpHash(getPackedUserOperation(userOperation)))
        return await walletProvider.signMessage(typedDataHash) as `0x${string}`
    
    }

    const userOperationHash = await sendUserOperation(chainId, unsignedUserOp, signUserOperation )

    return userOperationHash;
}
```

![Validator UserOp](/img/validator-userop-tx.png)

As soon as the transaction is executed, it can be verified via the Safe {Wallet} transactions.
![Validator TX](/img/validator-tx.png)
::::



## Essential Links

- [Rhinestone Module Kit](https://github.com/rhinestonewtf/modulekit/tree/main) - *Repo*
- [Module template](https://github.com/rhinestonewtf/module-template) - *Repo*
- [How to build a module](https://docs.rhinestone.wtf/modulekit/build/module-basics) - *Docs*
- [7579 Module template](https://github.com/koshikraj/module-template-7579)
- [ERC 7579](https://erc7579.com)



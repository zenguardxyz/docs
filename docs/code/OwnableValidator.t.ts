it('should add a ownable validator and execute ops with signatures', async () => {
    const { user1, safe, ownableValidator, safe7579, entryPoint, relayer } = await setupTests()

    await entryPoint.depositTo(await safe.getAddress(), { value: ethers.parseEther('1.0') })

    await user1.sendTransaction({ to: await safe.getAddress(), value: ethers.parseEther('1') })

    const call = {target: user1.address as Hex, value: ethers.parseEther('1'), callData: '0x' as Hex} // Added the callData property

    await execSafeTransaction(safe, await safe7579.initializeAccount.populateTransaction([], [], [], [], {registry: ZeroAddress, attesters: [], threshold: 0}));

    await execSafeTransaction(safe, {to: await safe.getAddress(), data:  ((await safe7579.installModule.populateTransaction(1, await ownableValidator.getAddress(), utils.defaultAbiCoder.encode(['address'], [user1.address]))).data as string), value: 0})

    const key = BigInt(pad(await ownableValidator.getAddress() as Hex, {
        dir: "right",
        size: 24,
      }) || 0
    )
    const currentNonce = await entryPoint.getNonce(await safe.getAddress(), key);


    let userOp = buildUnsignedUserOpTransaction(await safe.getAddress(), currentNonce, call)

    const typedDataHash = ethers.getBytes(await entryPoint.getUserOpHash(userOp))
    userOp.signature = await user1.signMessage(typedDataHash)
    
    await logGas('Execute UserOp without a prefund payment', entryPoint.handleOps([userOp], relayer))
    expect(await ethers.provider.getBalance(await safe.getAddress())).to.be.eq(ethers.parseEther('0'))
  })
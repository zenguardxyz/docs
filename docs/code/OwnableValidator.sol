// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import { ERC7579ValidatorBase } from "../module-bases/ERC7579ValidatorBase.sol";
import { PackedUserOperation } from
    "@account-abstraction/contracts/core/UserOperationLib.sol"; 

import { SignatureCheckerLib } from "solady/utils/SignatureCheckerLib.sol";
import { ECDSA } from "solady/utils/ECDSA.sol";

contract OwnableValidator is ERC7579ValidatorBase {
    using SignatureCheckerLib for address;

    mapping(address subAccout => address owner) public owners;  // [!code focus]  

    function onInstall(bytes calldata data) external override {  // [!code focus]  
        if (data.length == 0) return;                            // [!code focus]                              
         address owner = abi.decode(data, (address));            // [!code focus]  
        owners[msg.sender] = owner;                              // [!code focus]  
    }

    function onUninstall(bytes calldata) external override {      // [!code focus]  
        delete owners[msg.sender];          // [!code focus]  
    }            // [!code focus]  
 
    function validateUserOp(  // [!code focus]  
        PackedUserOperation calldata userOp,  // [!code focus]  
        bytes32 userOpHash  // [!code focus]  
    )  
        external
        view
        override
        returns (ValidationData)
    {
        bool validSig = owners[userOp.sender].isValidSignatureNow(   // [!code focus]  
            ECDSA.toEthSignedMessageHash(userOpHash), userOp.signature  // [!code focus]  
        );  // [!code focus]  
        return _packValidationData(!validSig, type(uint48).max, 0);  // [!code focus]  
    }

    function isValidSignatureWithSender(
        address,
        bytes32 hash,
        bytes calldata data
    )
        external
        view
        override
        returns (bytes4)
    {
        address owner = owners[msg.sender];
        return SignatureCheckerLib.isValidSignatureNowCalldata(owner, hash, data)
            ? EIP1271_SUCCESS
            : EIP1271_FAILED;
    }

    function name() external pure returns (string memory) {
        return "OwnableValidator";
    }

    function version() external pure returns (string memory) {
        return "0.0.1";
    }

    function isModuleType(uint256 typeID) external pure override returns (bool) {
        return typeID == TYPE_VALIDATOR;
    }

    function isInitialized(address smartAccount) external view returns (bool) { }
}

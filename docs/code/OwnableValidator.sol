/**
 * @title OwnableValidator
 * @dev Module that allows users to designate EOA owners that can validate transactions using a
 * threshold
 * @author Rhinestone
 */
contract OwnableValidator is ERC7579ValidatorBase {


        /**
     * Validates a user operation
     */
    function validateUserOp(                                      // [!code focus]  
        PackedUserOperation calldata userOp,                      // [!code focus]    
        bytes32 userOpHash                                          // [!code focus]    
    )                                                               // [!code focus]                    
        external                                                  // [!code focus]  
        view                                                          // [!code focus]  
        override                                                          // [!code focus]  
        returns (ValidationData)                                        // [!code focus]                    
    {
        // validate the signature with the config                         // [!code focus]  
        bool isValid = _validateSignatureWithConfig(userOp.sender, userOpHash, userOp.signature);     // [!code focus]  

        if (isValid) {                                                // [!code focus]  
            return VALIDATION_SUCCESS;                                // [!code focus]  
        }                                                                 // [!code focus]  
        return VALIDATION_FAILED;                                         // [!code focus]  
    }                                                                     // [!code focus]  


    function _validateSignatureWithConfig(
        address account,
        bytes32 hash,
        bytes calldata data
    )
        internal
        view
        returns (bool)
    {

    }


    /**
     * Initializes the module with the threshold and owners
     */
    function onInstall(bytes calldata data) external override {

    }

    /**
     * Handles the uninstallation of the module and clears the threshold and owners
     */
    function onUninstall(bytes calldata) external override {

    }

    /**
     * Checks if the module is initialized
     */
    function isInitialized(address smartAccount) public view returns (bool) {
        return threshold[smartAccount] != 0;
    }

    /**
     * Sets the threshold for the account
     */
    function setThreshold(uint256 _threshold) external {

    }

    /**
     * Adds an owner to the account
     */
    function addOwner(address owner) external {

    }

    /**
     * Removes an owner from the account
     */
    function removeOwner(address prevOwner, address owner) external {

    }

    /**
     * Returns the owners of the account
     */
    function getOwners(address account) external view returns (address[] memory ownersArray) {
        // get the owners from the linked list
        (ownersArray,) = owners.getEntriesPaginated(account, SENTINEL, MAX_OWNERS);
    }


    /**
     * Returns the type of the module
     */
    function isModuleType(uint256 typeID) external pure override returns (bool) {
        return typeID == TYPE_VALIDATOR;
    }

    /**
     * Returns the name of the module
     */
    function name() external pure virtual returns (string memory) {
        return "OwnableValidator";
    }

    /**
     * Returns the version of the module
     */
    function version() external pure virtual returns (string memory) {
        return "1.0.0";
    }
}
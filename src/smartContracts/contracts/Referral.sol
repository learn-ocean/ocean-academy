//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract OceanAcademyReferral {
    using SafeERC20 for IERC20;
    bool public isActive = false;
    mapping(uint256 => bool) public hasReceived;
    mapping(address => bool) public hasReceivedAddress;
    address payable public owner;
    address public admin;
    address public oceanAddress;

    constructor(address payable _owner, address _oceanAddress) {
        owner = _owner;
        admin = _owner;
        oceanAddress = _oceanAddress;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }

    function getOceanBalance() public view returns (uint256) {
        return IERC20(oceanAddress).balanceOf(address(this));
    }

    function setActive(bool _isActive) public onlyOwner {
        isActive = _isActive;
    }

    function setAdmin(address _newAdmin) public onlyOwner {
        admin = _newAdmin;
    }

    function sendReward(
        uint256 _referrer,
        address payable _referrerWallet,
        uint256 _reward
    ) public onlyAdmin {
        require(isActive, "Program must be active.");
        require(
            hasReceived[_referrer] == false &&
                hasReceivedAddress[_referrerWallet] == false,
            "Referrer has already been rewarded."
        );
        require(
            getOceanBalance() > _reward,
            "Not enough ocean balance to send to the referrer."
        );

        IERC20(oceanAddress).transfer(_referrerWallet, _reward);

        hasReceived[_referrer] = true;
        hasReceivedAddress[_referrerWallet] = true;
    }

    /**
     *Deposit funds function
     */
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
}

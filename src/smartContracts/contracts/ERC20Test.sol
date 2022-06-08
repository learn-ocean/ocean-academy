//SPDX-License-Identifier: UNLICENSED
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ERC20Test {
    using SafeERC20 for IERC20;
    address oceanAddress;

    constructor(address _oceanAddress) {
        oceanAddress = _oceanAddress;
    }

    function getOceanBalance() public view returns (uint256) {
        return IERC20(oceanAddress).balanceOf(address(this));
    }

    function testTransfer(address _to, uint256 _amount) public {
        require(
            getOceanBalance() > _amount,
            "Not enough ocean balance to send to the referrer."
        );

        IERC20(oceanAddress).transfer(_to, _amount);
    }
}

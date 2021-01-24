pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract Certificate is ERC721 {
    constructor() public ERC721('Ocean Certificate', 'OC') {}

    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string memory _tokenURI
    ) public {
        // super._mint(_to, _tokenId);
        // super._setTokenURI(_tokenId, _tokenURI);
        super.mintWithTokenURI(_to, _tokenId, _tokenURI);
    }
}

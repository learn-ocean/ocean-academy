import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("Referral", function () {

  let Referral;
  let OceanToken
  let referral: Contract;
  let oceanToken: Contract;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async function () {
    Referral = await ethers.getContractFactory("OceanAcademyReferral");
    OceanToken = await ethers.getContractFactory("OceanToken");

    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    oceanToken = await OceanToken.deploy(addr2.address);
    referral = await Referral.deploy(owner.address, oceanToken.address);
  });

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {

    it("Should set the right owner", async function () {
      expect(await referral.owner()).to.equal(owner.address);
    });

    it("Check if owner is set.", async function () {
      expect(await referral.admin()).to.equal(owner.address);
    });

    it("Check if ocean address is set.", async function () {
      expect(await referral.oceanAddress()).to.equal(oceanToken.address);
    });

    it("Check that contract balance is 0.", async function () {
      expect(await referral.getOceanBalance()).to.equal(0);
    });

  });
});
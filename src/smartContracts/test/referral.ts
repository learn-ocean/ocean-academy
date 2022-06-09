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
  let addr3: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async function () {
    Referral = await ethers.getContractFactory("OceanAcademyReferral");
    OceanToken = await ethers.getContractFactory("OceanToken");

    [owner, addr1, addr2,addr3, ...addrs] = await ethers.getSigners();

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

  describe("Authentication", function () {

    it("Only owner should be able to set admin", async function () {
      const setAdmin = referral.connect(addr2).setAdmin(addr1.address);
      await expect(setAdmin).to.be.reverted
      const setAdminWork = referral.connect(owner).setAdmin(addr1.address);
      await expect(setAdminWork).to.not.be.reverted
    });

    it("Only owner should be able to set referral active", async function () {
      const setActive = referral.connect(addr2).setActive(true);
      await expect(setActive).to.be.reverted
      const setActiveWork = referral.connect(owner).setActive(true);
      await expect(setActiveWork).to.not.be.reverted
      const setActiveWork2 = referral.connect(owner).setActive(false);
      await expect(setActiveWork2).to.not.be.reverted
      const setActiveWork3 = referral.connect(owner).setActive(false);
      await expect(setActiveWork3).to.not.be.reverted
    });

  });

  describe("Sending rewards", function () {

    beforeEach(async function () {
      await oceanToken.connect(addr2).mint(addr2.address, 10);
      await expect( await oceanToken.balanceOf(addr2.address)).to.be.equal(10);
      await oceanToken.connect(addr2).transfer(referral.address, 10)
      await expect(await oceanToken.balanceOf(referral.address)).to.be.equal(10);
      //Set addr1 as admin 
      await referral.connect(owner).setAdmin(addr1.address);
      await referral.connect(owner).setActive(true);

    });

    it("Only admin should be able to send reward", async function () {
      const sendRewardFailed1 = referral.connect(addr2).sendReward(1, addr2.address, 10);
      await expect(sendRewardFailed1).to.be.revertedWith("Sender must be the admin");
      const sendReward = referral.connect(addr1).sendReward(1, addr3.address, 5)
      await expect(sendReward).to.not.be.reverted;
      await expect(await oceanToken.balanceOf(addr3.address)).to.be.equal(5);
    });

    it("Reward can't be sent to the same wallet or userId twice", async function() {
      const sendReward = referral.connect(addr1).sendReward(1, addr3.address, 5)
      await expect(sendReward).to.not.be.reverted;
      const sendRewardFailed1 = referral.connect(addr1).sendReward(2, addr3.address, 5);
      await expect(sendRewardFailed1).to.be.revertedWith("Referrer has already been rewarded.");
      const sendRewardFailed2 = referral.connect(addr1).sendReward(1, addr2.address,5);
      await expect(sendRewardFailed2).to.be.revertedWith("Referrer has already been rewarded");
    })

  });


  describe("Has received functions", function () {

    beforeEach(async function () {
      await oceanToken.connect(addr2).mint(addr2.address, 10);
      await expect( await oceanToken.balanceOf(addr2.address)).to.be.equal(10);
      await oceanToken.connect(addr2).transfer(referral.address, 10)
      await expect(await oceanToken.balanceOf(referral.address)).to.be.equal(10);
      //Set addr1 as admin 
      await referral.connect(owner).setAdmin(addr1.address);
      await referral.connect(owner).setActive(true);
    });

    it("Has received is true after rewarded address", async function () {
      const id = 1;
      const sendReward = referral.connect(addr1).sendReward(id, addr3.address, 5)
      await expect(sendReward).to.not.be.reverted;
      await expect(await oceanToken.balanceOf(addr3.address)).to.be.equal(5);
      await expect(await referral.hasReceivedAddress(addr3.address)).to.be.equal(true);
      await expect(await referral.hasReceived(id)).to.be.equal(true);

      await expect(await referral.hasReceivedAddress(addr1.address)).to.be.equal(false);
      await expect(await referral.hasReceived(0)).to.be.equal(false);

    });

  });

  describe("Withdraw tokens", function () {

    beforeEach(async function () {
      await oceanToken.connect(addr2).mint(addr2.address, 10);
      await expect( await oceanToken.balanceOf(addr2.address)).to.be.equal(10);
      await oceanToken.connect(addr2).transfer(referral.address, 10)
      await expect(await oceanToken.balanceOf(referral.address)).to.be.equal(10);
    });

    it("Only owner can withdraw tokens", async function () {
      const withdrawFailed = referral.connect(addr2).withdraw(addr2.address);
      await expect(withdrawFailed).to.be.revertedWith("Sender must be the owner");

      const withdrawSucceed = referral.connect(owner).withdraw(addr3.address);
      await expect(withdrawSucceed).to.not.be.reverted;
      await expect(await oceanToken.balanceOf(addr3.address)).to.be.equal(10);
    });

  });


});
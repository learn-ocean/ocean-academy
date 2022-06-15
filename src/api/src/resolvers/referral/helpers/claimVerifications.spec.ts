import { ReferralModel, Referral } from '../../../shared/referral/Referral'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import {verifyBrightId} from './claimVerifications'

let user: User
let user2: User

const linkedAddress = "0xC6DE6C8Fb1Df511DB82800980E8a2d3E724287Af"
const notLinkedAddress = "0x49A4F74A39D6fBD70470c5CA6d21D129D3aC2F53"
jest.setTimeout(10000);

describe('Claim Verifications', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    const created2 = await createTestUser('alice@test.com', 'alice', 'Alice1234#')

    user = created.user;
    user2 = created2.user;

    const nonce = 1000000000;
    const referralCode = "username-AAAA"
    
    await ReferralModel.create({
          referrerId: user._id,
          referralCode: referralCode,
          nonce: nonce,
          publicAddress: "0x9705e4E64D081b9Cf27577599eEAc3aD787e3CE3"
    } as Referral)
  })


  it('brightId Verification should fail for two accounts with the same brightID', async (done) => {
    try{
    await verifyBrightId(user2._id, linkedAddress);
    }
    catch(e){
      expect(e).toBeDefined();
      expect(e.message).toBe('Not elligible to reward.');
      done();
    }
  })

  it('brightId Verification should fail for not linked account', async (done) => {
    try{
    await verifyBrightId(user2._id, notLinkedAddress);
    }
    catch(e){
      expect(e).toBeDefined();
      expect(e.message).toBe(`BrightID error: The user linked to the contextId ${notLinkedAddress.toLowerCase()} is not sponsored.`);
      done();
    }
  })

    
  afterAll(async () => {
    await deleteTestUser(user._id)
    await deleteTestUser(user2._id)
  })
})

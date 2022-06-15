import { ReferralModel, Referral } from '../../../shared/referral/Referral'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import {verifyBrightId} from './claimVerifications'

let user: User
let user2: User

const secondPublicAddress = "0xC6DE6C8Fb1Df511DB82800980E8a2d3E724287Af"
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
    await verifyBrightId(user2._id, secondPublicAddress);
    }
    catch(e){
      expect(e).toBeDefined();
      expect(e.message).toBe('Not elligible to reward.');
      done();
    }
  })

    
  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})

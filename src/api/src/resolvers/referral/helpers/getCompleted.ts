import { ObjectId } from "mongodb";
import { UserModel } from "../../../shared/user/User";

export const getCompleted = async(referredUsers: ObjectId[]): Promise<number> => {
    let completed = 0;
    for(let i = 0; i < referredUsers.length; i++){
      const referred = referredUsers[i];
      const user = await UserModel.findOne({_id: referred}).lean()
      //TODO: Add completion time minimum
      if(user && user.ocean101?.completedAt){
        completed += 1;
      }
    }
    return completed
}
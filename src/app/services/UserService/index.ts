import envConfig from "@/src/config/envConfig";
import { TUser } from "@/src/types";


const getSingleUserReq = async(userId:string):Promise<{status:string,message:string,data:TUser}> => {
    
      const res = await fetch(`${envConfig.baseApi}/users/single-user/${userId}`);
      
      return await res.json();
   
}

export default getSingleUserReq

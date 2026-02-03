
import { API_BASE_URL } from "../../constants";

export  async function getAllAccountsByRole(role){
        const response=  await fetch(API_BASE_URL+"api/accounts/by-role?userRole="+role,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'LH':'Logic Hub Software Solutions'
            }
        });

         return  await response.json();
}




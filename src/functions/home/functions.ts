import apiCall from "@/globalFunction/apiCalls";
import { requests } from '../../constants/apiRoutes'
export function signIn(data:any) {
  
   apiCall(requests.signIn,data,"post",false).then((result) => {
    return result
   }).catch((err) => {
    return err
   });
}
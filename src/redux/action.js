
import axios from "axios";
import {USERNAME} from './constant'
import {GET_MENU} from './constant'
import {SIDE_MENU} from './constant'
import { GET_DATA } from "./constant";
import {SELLECT_DATA} from './constant'



 const Useraction=(Sellectdata)=> {
   console.log("Sellectdata",Sellectdata)
  return {
        type:SELLECT_DATA,
        payload:Sellectdata,
      } 
  
}

 const getdata = () => async (dispatch) => {
  const menu = await axios.get("https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1");
  console.log("jsonjhfhmenu",menu)
  dispatch({ type: GET_DATA, payload: menu });
};



export default { getdata,Useraction};
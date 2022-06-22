
import {SELLECT_DATA} from  './constant'
import { GET_DATA } from './constant'


const initialstate = {
  menu: [],
};


function getdatareducer(state = initialstate, action) {

  switch (action.type) {
    
    case GET_DATA:
      return { menu: action.payload };
    default:
      return state;
  }
}
function Useractionreducer(state = initialstate, action) {

  switch (action.type) {
    
    case SELLECT_DATA:
      return { menu: action.payload };
    default:
      return state;
  }
}



export { getdatareducer ,Useractionreducer};
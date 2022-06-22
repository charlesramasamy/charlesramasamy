import React,{useState,useEffect} from 'react'
import axios from "axios"
import MaterialTable from "material-table"
import AddBox from '@material-ui/icons/AddBox';
import { tableIcons } from './home';
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import  { forwardRef } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';



const Table = ()=> {
  const [state, setState] = useState([]);
  const [sellectdata, setSellectdata] = useState([]);
  const [data, setData] = useState(false);
  const [progress, setProgress] = useState(false);
    useEffect(() => {
        statusResponse();
      }, []);
     

    const statusResponse = () => {
        let AppStatusTable_API = "https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1"
        axios
          .get(AppStatusTable_API)
          .then((res) => {
           console.log(res.data);
           setState(res.data.data)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
        return (
            <div className=' container'>
              {progress === true ? (
        <Backdrop className={classes.backdrop} open={progress}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}
      {data===false?        <>
                <MaterialTable
      title="Actions On Selected Rows Preview"
      columns={[
        { title: 'First-Name', field: 'first_name' },
        { title: 'Last-Name', field: 'last_name' },
        { title: 'Email', field: 'email' },
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img
              style={{ height: 50, borderRadius: '50%' }}
              src={rowData.avatar}
              alt="img"
            />
          ),
        },
      ]}
      data={state}
      options={{
        showTextRowsSelected: true,
        toolbar: true,
        selection : true
      }}
      actions = {[{
        position: "toolbarOnSelect",

        tooltip: 'Export the selected activities!',
        icon:() => <AddBox  style={{ 
        color: "red",fontSize: "50px"}} />,

        onClick: (event, rowData) => {
          console.log("Row Data: " , rowData)
          setData(true)
         
          setSellectdata(rowData)
          
        }
       
      }]}
     
      icons={tableIcons}
    />
</>:""
}
    <br/>{data===true?         
    <div>
    <MaterialTable
      title="Actions On Selected Rows Preview"
      columns={[
        { title: 'First-Name', field: 'first_name' },
        { title: 'Last-Name', field: 'last_name' },
        { title: 'Email', field: 'email' },
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img
              style={{ height: 50, borderRadius: '50%' }}
              src={rowData.avatar}
              alt="img"
            />
          ),
        },
      ]}
      data={sellectdata}
      options={{
        toolbar: true, 
      }}
      actions = {[{
        position: "toolbarOnSelect",

        tooltip: 'back',
        icon:() => <ChevronLeft  style={{ 
        color: "red",fontSize: "50px"}} />,

        onClick: (event, rowData) => {
          
          setData(false)
         
          
        }
       
      }]}
      icons={tableIcons}
    />
</div> :""}
            </div>
           
            
        )
    
}

export default Table

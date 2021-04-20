import React, { useState } from 'react'
import {updateData} from "../Redux/Action/UpdateInvoice"
import {useDispatch} from 'react-redux'
const NewUpdatedData = ({location}) => {

    const dispatch = useDispatch()
    const[val,setVal] = useState({
        status: location.state.status,
        companyName : location.state.companyName
    })

    const changeStatus = (e) => {
        setVal(
            {...val,
            [e.target.name] : e.target.value}
        )
    }
    // const changeCompany = (e) => {
    //     setVal(...val,{
    //         [e.target.name] : e.target.value 
    //     }
           
    //     )
    // }

    const updateApi = (e) => {
     e.preventDefault();
        dispatch(updateData({
            status: val.status,
            companyName : val.companyName,
            id:location.state.id
        }))  


        console.log(val,"==================================?")     
 
    }
    return (
        <div>
          
       
        
            <input type="text" name="status" value={val.status} onChange={(e) => changeStatus(e)}/>
            <input type="text" name="companyName" value={val.companyName} onChange={(e) => changeStatus(e)}/>
           
             <button onClick={(e) => updateApi(e)}>Update</button>   
       

        </div>
    )
}

export default NewUpdatedData

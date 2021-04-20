import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllInvoices } from './../Redux/Action/allInvoiceAction'

import { reviewInvoice } from './../Redux/Action/previewInvoiceAction'
import { fetchUpdateRequest } from './../Redux/Action/UpdateInvoice'
import newUpdatedData from './NewUpdatedData'

const DownloadPage = ({ history }) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()



    //    const showAllInvoices = () => {

    //     dispatch(getAllInvoices());
    //        console.log(state,"all invoice statwe")
    //    }

    const previewInvoices = (e) => {

        const invoiceId = e.target.id;
        dispatch(reviewInvoice(invoiceId));

    }


    useEffect(() => {
        dispatch(getAllInvoices());
    }, [])

  


    const update = (a,b,id) => {


       
        history.push('/updatedInvoice',{
            status : a,
            companyName:b,
            id:id
        })


    }

    useEffect(() => {

    });


    return (
        <div>
            {/* <button onClick={() => showAllInvoices()}>show All Invoices</button> */}




            <table id="customers">
                <tr>
                    <th>Invoice Status</th>
                    <th>From</th>
                    <th>product name</th>
                    <th colSpan="2">Operation</th>
                </tr>

                {state.allInvoices.allInvoices.map((e) => (

                    <tr>
                        <td>{e.status}</td>
                        {/* <td>{e.from.companyName}</td> */}
                        <td>{e.productName}</td>
                        <td> <button onClick={(e) => previewInvoices(e)} id={e._id}>Download Invoice</button></td>
                        <td><button onClick={()=>update(e.status,e.from.companyName,e._id)} id={e._id}>Update Invoice</button></td>
                        {console.log(e)}
                    </tr>


                    // (e=>UpdateInvoice(e))


                ))}

            </table>
            {/* {
                state.previewInvoice.previewInvoice.map((e) => console.log(e) )

            } */}


        </div>
    )
}

export default DownloadPage

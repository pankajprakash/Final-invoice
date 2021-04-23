import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllInvoices } from "./../Redux/Action/allInvoiceAction";
import axios from "axios";
import { reviewInvoice } from "./../Redux/Action/previewInvoiceAction";
import ViewInvoice from "./ViewInvoice";

const DownloadPage = ({ history }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInvoices());

    console.log(state, "all invoice useEffect called");
  }, []);

  const previewInvoices = (e) => {
    const invoiceId = e.target.id;
    dispatch(reviewInvoice(invoiceId));
  };

  const viewFile = (e) => {
      history.push("/view_invoice", {
      from: e.from,
      to: e.to,
      companyName: e.from.companyName,
      contact: e.from.contact,
      country: e.from.country,
      createdAt: e.from.createdAt,
      email: e.from.email,
      state: e.from.state,
      updatedAt: e.from.updatedAt,
      webAddress: e.from.webAddress,
      Description: e.items[0].description,
      Price: e.items[0].unitPrice,
      Quantity: e.items[0].quantity,
      Product: e.items[0].productName,
      Total: e.items[0].total,
      Id: e._id,
      DueDate: e.dueDate,
      Status: e.status,
    });
  };

  const updateInvoice = (e) => {
    console.log(e);
  };

  const token = localStorage.getItem("user_token");
  const deleteInvoice = (e) => {
    console.log("delded", e);

    axios
      .delete(`http://192.168.1.78:9000/invoice/${e}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch({
          type: "INVOICE_DELETE",
          payload: e,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //   location.reload();
  };

  //   const updateState = () => {

  //   }

  return (
    <div>
      <table className="container" id="customers">
        <thead>
          <tr>
            <th>Invoice Status</th>
            <th>From</th>
            <th>To</th>
            <th>Product Name</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {state.allInvoices.allInvoices.map((e) => (
            <tr>
              <td>{e.status}</td>
              <td>{e.from.companyName}</td>
              <td>{e.to.companyName}</td>
              <td>{e.items[0].productName} </td>
              <td>
                <button
                  className="styled-btn"
                  onClick={(e) => previewInvoices(e)}
                  id={e._id}
                >
                  Download Invoice
                </button>
                <button className="styled-btn" onClick={() => viewFile(e)}>
                  View
                </button>
                <button
                  className="styled-btn"
                  onClick={() => updateInvoice(e._id)}
                >
                  {" "}
                  Update{" "}
                </button>
                <button
                  className="styled-btn"
                  onClick={() => deleteInvoice(e._id)}
                >
                  {" "}
                  Delete{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {
                state.previewInvoice.previewInvoice.map((e) => console.log(e) )

            } */}
    </div>
  );
};

export default DownloadPage;
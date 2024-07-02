import React from "react";
import styles from "./CompleteInvoice.module.css";

import { type InvoiceDataItem } from "@/app/types";

interface CompleteInvoiceProps {
  invoiceData: InvoiceDataItem;
}

const CompleteInvoice = ({ invoiceData }: CompleteInvoiceProps) => {
  console.log(invoiceData);

  return (
    <div className={styles.CompleteInvoice}>
      <button>Go Back</button>

      <div>
        <div>
          <span>Status</span>
        </div>

        <div>
          <p className={styles.idWrapper}>
            #<span className={styles.id}>{invoiceData.id}</span>
          </p>
          <p>{invoiceData.description}</p>

          <div>
            <p>Invoice Date</p>
            <p>{invoiceData.createdAt.toString()}</p>
          </div>

          <div>
            <p>Bill To</p>
            <p>{invoiceData.clientName}</p>
          </div>

          <div>
            <p>Payment Due</p>
            <p>{invoiceData.paymentDue.toString()}</p>
          </div>

          <div>
            <p>{invoiceData.clientAddress.street}</p>
            <p>{invoiceData.clientAddress.city}</p>
            <p>{invoiceData.clientAddress.postCode}</p>
            <p>{invoiceData.clientAddress.country}</p>
          </div>

          <div>
            <p>Sent to</p>
            <p>{invoiceData.clientEmail}</p>
          </div>
        </div>
      </div>

      <div>
        <p>Edit Delete Mark as Paid</p>
      </div>
    </div>
  );
};

export default CompleteInvoice;

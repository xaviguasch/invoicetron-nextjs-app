import React from "react";

import { type InvoiceDataItem } from "@/app/types";

import styles from "./Invoice.module.css";

type InvoiceProps = {
  item: InvoiceDataItem;
};

const Invoice = ({ item }: InvoiceProps) => {
  return (
    <div className={styles.Invoice}>
      <p>
        #<span>{item.id}</span>
      </p>
      <p>{item.clientName}</p>
      <p>Due {item.paymentDue.toString()}</p>
      <p>£ {item.total}</p>
      <p>{item.status}</p>
    </div>
  );
};

export default Invoice;

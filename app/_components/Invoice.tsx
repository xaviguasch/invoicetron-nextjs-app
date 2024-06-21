import React from "react";

import { type InvoiceDataItem } from "@/app/types";

import styles from "./Invoice.module.css";

type InvoiceProps = {
  item: InvoiceDataItem;
};

const Invoice = ({ item }: InvoiceProps) => {
  const statusString =
    item.status[0].toUpperCase() + item.status.slice(1).toLowerCase();
  return (
    <div className={styles.Invoice}>
      <p className={styles.idWrapper}>
        #<span className={styles.id}>{item.id}</span>
      </p>
      <p className={styles.invoiceText}>{item.clientName}</p>
      <p className={styles.invoiceText}>Due {item.paymentDue.toString()}</p>
      <p className={styles.total}>
        £{new Intl.NumberFormat("en-US").format(item.total)}
      </p>
      <div
        className={`${item.status === "paid" ? styles.paid : styles.pending} ${
          styles.statusWrapper
        }`}
      >
        <span className={styles.cercle}></span>
        <p className={styles.status}>{statusString}</p>
      </div>
    </div>
  );
};

export default Invoice;

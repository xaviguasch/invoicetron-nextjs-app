import React from "react";

import styles from "./page.module.css";

interface InvoicePageProps {
  params: {
    id: string;
  };
}

export default async function InvoicePage({ params }: InvoicePageProps) {
  console.log(params);
  return (
    <div className={styles.InvoicePage}>
      <h1>Invoice Page</h1>
    </div>
  );
}

import React from "react";

import styles from "./page.module.css";

import { type InvoiceDataItem } from "@/app/types";
import CompleteInvoice from "@/app/_components/CompleteInvoice";

import { promises as fs } from "fs";

interface InvoicePageProps {
  params: {
    id: string;
  };
}

export default async function InvoicePage({ params }: InvoicePageProps) {
  const file = await fs.readFile(
    process.cwd() + "/starter-code/data.json",
    "utf8"
  );

  const data: InvoiceDataItem[] = JSON.parse(file);
  const indInvoice = data.filter((invoice) => invoice.id === params.id)[0];

  console.log("..............");
  console.log(indInvoice);
  console.log("..............");

  return (
    <div className={styles.InvoicePage}>
      <h1>Invoice Page</h1>
      <CompleteInvoice invoiceData={indInvoice} />
    </div>
  );
}

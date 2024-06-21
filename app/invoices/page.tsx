import React from "react";
import Invoice from "@/app/_components/Invoice";
import { promises as fs } from "fs";

import { type InvoiceDataItem } from "@/app/types";

import styles from "./page.module.css";

export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + "/starter-code/data.json",
    "utf8"
  );

  const data = JSON.parse(file);

  return (
    <div className={styles.InvoicesPage}>
      <div className={styles.upper}>
        <h2>Invoices</h2>
        <p>7 invoices</p>

        <div>Filter / New</div>
      </div>

      <div className={styles.lower}>
        {data.map((item: InvoiceDataItem) => (
          <Invoice item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

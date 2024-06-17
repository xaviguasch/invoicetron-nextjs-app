import React from "react";
import Invoice from "@/app/_components/Invoice";
import { promises as fs } from "fs";

import { type InvoiceDataItem } from "@/app/types";

export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + "/starter-code/data.json",
    "utf8"
  );

  const data = JSON.parse(file);

  console.log(data);

  return (
    <div>
      <h1>Invoices page</h1>
      {data.map((item: InvoiceDataItem) => (
        <Invoice item={item} key={item.id} />
      ))}
    </div>
  );
}

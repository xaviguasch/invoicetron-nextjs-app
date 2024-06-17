import React from "react";

import { type InvoiceDataItem } from "@/app/types";

type InvoiceProps = {
  item: InvoiceDataItem;
};

const Invoice = ({ item }: InvoiceProps) => {
  return (
    <div>
      <p>#{item.id}</p>
      <p>{item.clientName}</p>
      <p>Due {item.paymentDue.toString()}</p>
      <p>£ {item.total}</p>
      <p>{item.status}</p>
    </div>
  );
};

export default Invoice;

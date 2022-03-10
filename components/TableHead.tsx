import React from "react";

const TableHead = () => {
  return (
    <tr>
      <th> </th>
      <th>#</th>
      <th className="sticky top-0 left-0">Name</th>
      <th>Price</th>
      <th>24h%</th>
      <th>7d%</th>
      <th>Market Cap</th>
      <th>Volume</th>
      <th>Circulating Supply</th>
      <th>Last 7 days</th>
    </tr>
  );
};

export default TableHead;

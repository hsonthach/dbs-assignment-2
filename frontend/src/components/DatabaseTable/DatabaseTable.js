import React from "react";
import { Table, Space } from "antd";
const { Column } = Table;

export default function DatabaseTable({ tableContent }) {
  const action = (
    <Column
      title=""
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      )}
    />
  );
  return (
    <Table key="home_table" dataSource={tableContent.dataSource}>
      {tableContent.columns.map((column) => (
        <Column {...column} />
      ))}
      {tableContent.columns.length && action}
    </Table>
  );
}

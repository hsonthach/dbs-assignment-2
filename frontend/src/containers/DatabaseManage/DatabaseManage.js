import { Menu, Button, Row, Space, Modal } from "antd";
import React, { Component } from "react";
import axios from "../../axios";
import DatabaseTable from "../../components/DatabaseTable/DatabaseTable";
import AddRecordForm from "./AddRecordForm/AddRecordForm";
import { formatMetadata } from "../../utils/formater";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class DatabaseManage extends Component {
  state = {
    allowedTables: [
      "Car",
      "Cartype",
      "Customer",
      "Delitype",
      "Delivering",
      "Empcode",
      "Employee",
      "Package",
      "Report",
      "ReportCode",
      "Request",
      "Storage",
    ],
    tableContent: {
      dataSource: [],
      metaData: [],
    },
    showAddRowForm: false,
    tableName: "",
  };

  addRowHandler = () => {
    this.setState({ showAddRowForm: true });
  };

  confirmAddRowHandler = async () => {
    this.setState({ showAddRowForm: false });
    await this.displayTableHandler(this.state.tableName);
  };
  cancelAddRowHandler = () => {
    this.setState({ showAddRowForm: false });
  };

  displayTableHandler = async (tableName) => {
    let dataSource = [];
    let metaData = [];
    try {
      const res = await axios.post("/get-table-content", { tableName });
      metaData = formatMetadata(res.data.metaData);
      const rows = res.data.rows;
      dataSource = rows.map((el, i) => ({
        key: i,
        ...el,
      }));

      this.setState({
        tableContent: {
          metaData,
          dataSource,
        },
        tableName,
      });
    } catch (error) {
      this.setState({
        tableContent: {
          metaData,
          dataSource,
        },
      });
    }
  };
  render() {
    const modal = (
      <Modal
        title="Create a Row"
        visible={this.state.showAddRowForm}
        onOk={this.confirmAddRowHandler}
        onCancel={this.cancelAddRowHandler}
      >
        <AddRecordForm
          tableContent={this.state.tableContent}
          tableName={this.state.tableName}
        />
      </Modal>
    );
    const tableButtons = (
      <Row justify={"center"} key="home_row">
        {modal}
        <Menu mode="horizontal" key="home_menu">
          <Space key="home_space">
            {this.state.allowedTables.map((tableButton, i) => (
              <Button
                onClick={(e) => this.displayTableHandler(tableButton)}
                key={"home_button_" + i}
              >
                {tableButton}
              </Button>
            ))}
          </Space>
        </Menu>
      </Row>
    );

    const addRowButton =
      this.state.tableName != "" ? (
        <Button
          onClick={this.addRowHandler}
          type="primary"
          style={{
            marginBottom: 16,
            marginTop: 16,
            float: "left",
          }}
        >
          Add a row
        </Button>
      ) : null;

    return (
      <div className="DatabaseManage" key="DatabaseManage">
        {tableButtons}
        {addRowButton}
        <DatabaseTable
          tableContent={{
            ...this.state.tableContent,
            columns: this.state.tableContent.metaData.map((el) => ({
              title: el.name,
              dataIndex: el.name,
              key: el.name,
            })),
          }}
        />
      </div>
    );
  }
}

export default withErrorHandler(DatabaseManage, axios);

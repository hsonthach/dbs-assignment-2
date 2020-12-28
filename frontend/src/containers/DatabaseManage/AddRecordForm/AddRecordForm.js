import React from "react";
import axios from "../../../axios";
import { Form, Input, Button, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default class AddRecordForm extends React.Component {
  formRef = React.createRef();

  onFinish = async (values) => {
    try {
      await axios.post("/insert-record", {
        data: values,
        tableName: this.props.tableName,
      });
    } catch (error) {}
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
        onValuesChange={this.onValuesChange}
      >
        {this.props.tableContent.metaData.map((meta) => (
          <Form.Item
            label={meta.name}
            name={meta.name}
            rules={[{ type: meta.type }]}
          >
            {meta.type == "number" ? (
              <InputNumber type={meta.type} />
            ) : (
              <Input type={meta.type} />
            )}
          </Form.Item>
        ))}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

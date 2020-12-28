import React, { Component } from "react";

import { Modal, Button } from "antd";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <div>
          <Modal
            title="Error"
            visible={this.state.error}
            onOk={this.errorConfirmedHandler}
            footer={[
              <Button
                key="OK"
                type="primary"
                onClick={this.errorConfirmedHandler}
              >
                OK
              </Button>,
            ]}
          >
            {this.state.error ? this.state.error.response.data : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withErrorHandler;

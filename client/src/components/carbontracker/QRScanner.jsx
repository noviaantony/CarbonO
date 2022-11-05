import React, { useContext } from "react";
import QrReader from "react-qr-scanner";
import CarbonTrackerService from "../../services/CarbonTrackerService";
import AuthContext from "../../hooks/AuthProvider";

class QRScanner extends React.Component {
  static contextType = AuthContext;

  // use state for qr code message
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  state = {
    delay: 10,
    result: "No result",
  };

  handleScan = (data) => {
    this.setState({
      result: data,
    });
    //this can be removed, its just a test to see if the data from qr scan is collected
    let result = "";
    if (data != null) {
      const response = JSON.parse(data.text);
      console.log(response);
      console.log(this.context.auth.userId);
      CarbonTrackerService.postDishConsumed(
        this.context.auth.accessToken,
        this.context.auth.userId,
        response.id
      ).then((response) => (result = response));

      this.setState({
        message: this.state.message + result,
      });
      return prev_state;
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          //style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />

        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default QRScanner;

import React, { useContext, useState } from "react";
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
    this.handleScan= this.handleScan.bind(this);
  }

  state = {
    delay: 10,
    result: "No result",
  };



  handleScan = (data) => {
    this.setState({
      result: data,
    });


    if (data != null) {

      let scannedMessage = "---";

      const response = JSON.parse(data.text);
      console.log(response);
      console.log(this.context.auth.userId);
      //(scannedMessage = "successfully claimed reward!")



        CarbonTrackerService.postDishConsumed(this.context.auth.accessToken,this.context.auth.userId,response.receiptId)
          .then((response) => scannedMessage = response)

          console.log(scannedMessage);
        
      this.setState({
        message:
          this.state.message + scannedMessage,
      });


      return prev_state;
    }


  };

  handleError = (err) => {
    console.error(err);

    // this.setState({
    //   message:
    //     this.state.message + "this receipt has already been redeemed.",
    // });

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

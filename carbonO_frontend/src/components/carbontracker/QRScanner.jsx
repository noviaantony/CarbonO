import React from "react";
import QrReader from "react-qr-scanner";

class QRScanner extends React.Component {


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
    console.log(data); //this can be removed, its just a test to see if the data from qr scan is collected

    if (data != null) {
      this.setState({
        message:
          this.state.message + "you have successfully claimed your reward!",
      });
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




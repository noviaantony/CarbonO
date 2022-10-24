import React from "react";
import QrReader from "react-qr-scanner";

class QRScan extends React.Component {
  state = {
    delay: 100,
    result: "No result"
  };

  handleScan = (data) => {
    this.setState({
      result: data
    });
    console.log(data) //this can be removed, its just a test to see if the data from qr scan is collected
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
        {/* <p>{this.state.result}</p> */}
      </div>
    );
  }
}

export default QRScan;
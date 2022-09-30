import React, { useState } from "react";
import axios from "axios";
import FileUploaded from "./FileUploader";


const ClaimReward2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const submitReceipt = () => {
    // const apiKey = "AIzaSyC3rJnOOPzFe0snLWmBrgukHmSqFxlimU8";

    console.log("in");
    console.log(selectedFile);

    // convert file to uri

    const encodeImageURI = require("encode-image-uri");

    encodeImageURI(selectedFile)
      .then((base64) => {

        // let body = {
        //   requests: [
        //     {
        //       image: {
        //         source: {
        //           imageUri: encodeImageURI(selectedFile),
        //           // "https://p2d7x8x2.stackpathcdn.com/content/uploads/2016/05/Bill.jpg", //image URL
        //         },
        //       },
        //       features: [
        //         {
        //           type: "TEXT_DETECTION",
        //           maxResults: 1,
        //         },
        //       ],
        //     },
        //   ],
        // };

        console.log(base64);
        console.log(base64.substring(23, base64.length));

        let body = {
          requests: [
            {
              image: {
                content: base64.substring(23, base64.length),
              },
              features: [
                {
                  type: "TEXT_DETECTION",
                },
              ],
            },
          ],
        };

        axios
          .post(
            "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC3rJnOOPzFe0snLWmBrgukHmSqFxlimU8",
            body
          )
          .then((response) => 
            // console.log(response)
            console.log(response.data.responses[0].textAnnotations)
          );

          

          


      })
      .catch((error) => {
        console.error(error);
        // Handle your error
      });



  };

  return (
    <div>
      <form>
        <FileUploaded
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
      </form>
      <button onClick={submitReceipt}>Submit</button>
    </div>
  );
};

export default ClaimReward2;



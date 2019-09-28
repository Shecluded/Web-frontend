const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "9d77ed1b",
  apiSecret: "a0133e1984f00e8d"
});

app.use(cors());
app.use(bodyParser.json());

const port = 5678;

app.post("/request", (req, res) => {
  // A user registers with a mobile phone number
  let phoneNumber = req.body.number;

  nexmo.verify.request(
    { number: phoneNumber, brand: "Shecluded" },
    (err, result) => {
      if (err) {
        console.log(err);

        //Oops! Something went wrong, respond with 500: Server Error
        res.status(500).send(err);
      } else {
        console.log(result);

        if (result && result.status == "0") {
          //A status of 0 means success! Respond with 200: OK
          res.status(200).send(result);
        } else {
          //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
          //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
          res.status(400).send(result);
        }
      }
    }
  );
});

app.post("/check", (req, res) => {
  //To verify the phone number the request ID and code are required.
  let code = req.body.code;
  let requestId = req.body.requestId;

  console.log("Code: " + code + " Request ID: " + requestId);

  nexmo.verify.check({ request_id: requestId, code: code }, (err, result) => {
    if (err) {
      console.log(err);

      //Oops! Something went wrong, respond with 500: Server Error
      res.status(500).send(err);
    } else {
      console.log(result);

      if (result && result.status == "0") {
        //A status of 0 means success! Respond with 200: OK
        res.status(200).send(result);
        console.log("Account verified!");
      } else {
        //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
        //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
        res.status(400).send(result);
        console.log("Error verifying account");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`we out here`);
});
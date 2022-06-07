const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// const  Web3 = require('web3modal');
const Web3Modal = global.Web3Modal;

let  ethers = require('ethers');

// const model = require('./model')

const { config } = require("./config");

const port = process.env.PORT || 5000;

// if (typeof web3 !== 'undefined') {
//   var web3 = new Web3(web3.currentProvider); 
// } else {
//   var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// }

    
    // console.log("done smit");
    // if (window.ethereum) {
    //     window.ethereum.request({ method: "eth_requestAccounts" });
    //     window.web3 = new Web3(window.ethereum);
    //   }
    //   let str1= window.web3.eth.getAccounts();
    //   console.log("mine is", str1);
    
    let web3Modal = new Web3Modal();
    console.log(web3Modal);
    const connection =  web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    
    // let modelContract = new ethers.Contract(config.contract.address, config.contract.abi, signer);
    // let _getPrice =  modelContract.getPrice();
    // _getPrice = ethers.utils.formatEther(_getPrice);
    // console.log("Price: ",_getPrice);
  
    // model();

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Demo API",
        description: "Demo API Information",
        contact: {
          name: "Blockchain Dev"
        },
        servers: ["http://localhost:5000"]
      }
    },
    // ['.routes/*.js']
    apis: ["api.js"]
  };
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/customers", (req, res) => {
    console.log("done smit1");

  //  const web3Modal = new Web3();
  //   console.log("done smit");
  //   if (window.ethereum) {
  //       window.ethereum.request({ method: "eth_requestAccounts" });
  //       window.web3 = new Web3(window.ethereum);
  //     }
  //     let str1= window.web3.eth.getAccounts();
  //     console.log("mine is", str1);
      
  //   const connection =  web3Modal.connect()
  //   const provider = new ethers.providers.Web3Provider(connection)    
  //   const signer = provider.getSigner()
    
  //   let modelContract = new ethers.Contract(config.contract.address, config.contract.abi);
  //   let _getPrice =  modelContract.getPrice();
  //   _getPrice = ethers.utils.formatEther(_getPrice);
  //   console.log("Price: ",_getPrice);
  

    res.status(200).send("Customer results");
});

/**
 * @swagger
 * /customers:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
app.put("/customer", (req, res) => {
    // model();
  res.status(200).send("Successfully updated customer");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
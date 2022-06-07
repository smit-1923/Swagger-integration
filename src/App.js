import React from 'react';
import './App.css';
import './index.css';
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
// import Button from '@material-ui/core/Button';
import SwaggerEditor, {plugins} from 'swagger-editor';
import 'swagger-editor/dist/swagger-editor.css';
import Swagger from './Swagger';



const { config } = require("./config");


function App() {

  async function model() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    console.log("web3Modal", web3Modal, "Connection:", connection);
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    
    let modelContract = new ethers.Contract(config.contract.address, config.contract.abi, signer);
    let _getPrice = await modelContract.getPrice();
    _getPrice = ethers.utils.formatEther(_getPrice);
    console.log("Price: ",_getPrice);
  }
 
    return (
      <div className="App">
            {/* <Swagger url="https://petstore.swagger.io/v2/swagger.json" /> */}
              <button className="butt" onClick={model}>Connect Wallet</button>
      </div>
    );
}

export default App;

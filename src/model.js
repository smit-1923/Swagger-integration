const Web3Modal = require('web3modal');
const ethers = require('ethers')

function Model() {
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

export default Model;
import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

const injected = new InjectedConnector({ supportedNetworks: [1, 4] });

const connect = async (activate) => {
    try {
        await activate(injected);
    } catch (error) {
        console.log(error);
    }
};

const disconnect = async (deactivate) => {
    try {
        deactivate();
    } catch (error) {
        console.log(error);
    }
};

const humanReadableAccount = (_account) => {
    return _account.slice(0, 6) + "..." + _account.slice(_account.length - 4);
};

export {
    connect,
    disconnect,
    humanReadableAccount,    
};

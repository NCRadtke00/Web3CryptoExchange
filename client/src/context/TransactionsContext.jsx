import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
    //remove clog when closer to being done.
    console.log({
        provider,
        signer,
        transactionContract
    });
    return transactionContract;
}
export const TransactionProvider = ({ children }) => {
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [currentAccount, setCurrentAccount] = useState;
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }
    const getAllTransactions = async () => {
        try {
            if (ethereum) {
                const transactionsContract = createEthereumContract();
            } else {
                console.log("Ethereum is not present");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask.")
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (account.length) {
                setCurrentAccount(account[0]);
                getAllTransactions();
            } else {
                console.log("No account found.")
            }
            console.log(accounts);
        } catch (error) {
            console.log(error);
        }

    };
    const checkIfTransactionsExist = async () => {
        try {
            if (ethereum) {

            } else {

            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask.")
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setCurrentAccount(account[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }
    const sendTransaction = async () => {
        try {

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
    }, [transactionCount]);

    return (
        <TransactionContext.Provider value={{ value: 'test' }}>
            {children}
        </TransactionContext.Provider>
    )
}
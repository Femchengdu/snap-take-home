
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ethers } from "ethers";
import EthDater = require("ethereum-block-by-date");
import * as dotenv from "dotenv";
dotenv.config();

const etherscanAPIKey = process.env.ETHERSCAN_API_KEY;

interface BlockResponse { date: string, block: number, timestamp: number }

export const getBlockByTimeStamp: (timestamp: number) => Promise<BlockResponse> = (timestamp: number) => new Promise<BlockResponse>((resolve, reject) => {
    const provider: any = new ethers.EtherscanProvider("homestead", etherscanAPIKey);
    const dater = new EthDater(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        provider
    );
    const date = new Date(timestamp);
    try {
        const block = dater.getDate(
            date, // Date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
            true // Block after, optional. Search for the nearest block before or after the given date. By default true.
        );
        resolve(block);
    } catch (error) {
        console.log("The error :", error)
        reject(error)
    }
})


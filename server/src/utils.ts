
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ethers } from "ethers";

export const getBlockByTimeStamp: (timestamp: number) => Promise<any> = async (timestamp: number) => {

    try {
        // Initialize variables
        const provider: any = new ethers.JsonRpcProvider();
        // A block takes approximately 12 seconds
        const averageBlockTime: number = 12
        const startBlockNumber: number = await provider.getBlockNumber();
        let currentBlockNumber = startBlockNumber
        let currentBlock = await provider.getBlock(currentBlockNumber);

        while (currentBlock.timestamp > timestamp) {
            let timeDiffrence = currentBlock.timestamp - timestamp
            const blockStepBack = Math.ceil(timeDiffrence / averageBlockTime); // Approximately 12 seconds per block
            if (blockStepBack < 1) break;
            // reduce the current block number by the block step back
            currentBlockNumber -= blockStepBack
            currentBlock = await provider.getBlock(currentBlockNumber);
        }

        // If we back step too low
        if (currentBlock.timestamp < timestamp) {
            // step forward a few blocks
            while (currentBlock.timestamp < timestamp) {
                let timeDiffrence = timestamp - currentBlock.timestamp
                const blockStepForward = Math.ceil(timeDiffrence / averageBlockTime);
                currentBlockNumber += blockStepForward
                if (currentBlockNumber > startBlockNumber) break;
                currentBlock = await provider.getBlock(currentBlockNumber);
            }
        }

        // At this stage we should be off by a block or two
        if (currentBlock.timestamp > timestamp) {
            // Step back block by block
            while (currentBlock.timestamp > timestamp) {
                currentBlockNumber -= 1
                currentBlock = await provider.getBlock(currentBlockNumber);
            }
        }

        return currentBlock

    } catch (error) {
        console.log("The error :", error)

    }
}
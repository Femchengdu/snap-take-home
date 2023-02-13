import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import {
    ApolloServer,
    ExpressContext,
    gql,
} from "apollo-server-express"
import * as express from "express"
import { Server } from "http"
import { getBlockByTimeStamp } from "./utils"


export async function createApolloServer(
    httpServer: Server,
    app: express.Application
): Promise<ApolloServer<ExpressContext>> {

    const typeDefs = gql`
    type Query {
      getBlock (timestamp: Float): Block!
    }
    type Block {
        blockNumber: Float
    }
  `



    const resolvers = {
        Query: {
            getBlock: async (_: unknown, { timestamp }: { timestamp: number }) => {
                const miliseconds = timestamp * 1000
                const res = await getBlockByTimeStamp(miliseconds)
                const block: number = res.block
                return { blockNumber: block }
            }
        },
    }


    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
        ],
    })
    await server.start()
    server.applyMiddleware({ app })
    return server
}
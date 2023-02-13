import * as chalk from 'chalk';
import * as express from 'express';
import { PORT } from './constants';

import { createApolloServer } from "./apollo-server"
import { createServer } from "http"

const app = express();

async function main() {
  const httpServer = createServer(app)
  const apolloServer = await createApolloServer(
    httpServer,
    app
  )
  await new Promise<void>((resolve) =>
    app.listen(PORT, () => {
      console.log(
        [
          chalk.bgMagentaBright.black.bold(' GraphQL API listening on   '),
          chalk.bgWhite.black(`\thttp://localhost:${PORT}${apolloServer.graphqlPath}\t`),
        ].join(' ')
      );
      resolve();
    })
  );
}

main().catch((err) => {
  console.error(err);
});

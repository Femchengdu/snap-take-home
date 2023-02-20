# Snapshot Take Home

Samuel's Snapshot take home

## Setup

First, if you want to ensure you're using the correct Node.js and package manager versions, [install Volta](http://volta.sh)

```sh
# install Volta
curl https://get.volta.sh | bash

# install Node
volta install node
```

Then, check out a local copy of this repository

```sh
git clone https://github.com/femchengdu/snap-take-home

cd snap-take-home
```

Next, install the project dependencies

```sh
yarn
```

Build the project for the first time

```sh
yarn build
```

You want to ensure you have an Ethereum node running locally by running the following commands

```sh
# Install homebrew Homebrew on mac and run
brew tap ethereum/ethereum

# Then install Geth
brew install ethereum
```

Once `Geth` is properly installed you can communicate programatically to the Ethereum blockchain using JSON RPC by running

```sh
geth --http --networkid 1 --syncmode "light"
```

And finally, start the project

```sh
yarn dev
```

After the server build processes is complete, you should see an graphql server running on [ http://localhost:3000/graphql](http://localhost:3000/graphql).

## Legal

&copy; 2023 Samuel Ajayi, all rights reserved.

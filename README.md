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

Create an Etherscan API key by follwoing the instructions here [ https://info.etherscan.com/api-keys/](https://info.etherscan.com/api-keys/)

Then create a `.env` file and replace `changeme` with your Etherscan API key

```sh
echo ETHERSCAN_API_KEY=changeme > ./server/.env
```

And finally, start the project

```sh
yarn dev
```

After the server build processes is complete, you should see an graphql server running on [ http://localhost:3000/graphql](http://localhost:3000/graphql).

## Legal

&copy; 2023 Samuel Ajayi, all rights reserved.

# DrugBox 💊

## Local Development Setup

First clone this repo.

Then install the [Node.js](https://nodejs.org) version `v16.5` which we have specified inside the `.node-version` file of this repo.

```bash
nvm install
```

Make sure that [yarn](https://yarnpkg.com) is installed with it as well in your system.

After `yarn` is installed, install the Node.js and Rails dependencies and also seed the database, by running:

```bash
./bin/setup
```

Start the server by executing following command.

```bash
bundle exec rails server -p 3000
```

Visit http://localhost:3000.

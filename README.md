<p align="center">
  <img
  alt="WisePlay logo"
  src="src/assets/images/logo-removebg.png"/>
</p>

# WisePlay

<p>List of movies and some information about them.</p>

### Prerequisites

Before you start, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Besides this, it is good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/)

### Running the project

```bash
# Clone this repository
$ git clone https://github.com/rodrigoalves2/WisePlay.git

# Go to the project folder in terminal/cmd
$ cd WisePlay

# Install the dependencies
$ npm install
  or
$ yarn install

# Run the application in development mode
$ npm start
  or
$ yarn start

# The server will start on port:3000 - acess http://localhost:3000
```

### Environment Variables

You must create a file called `.env.local` or rename the file `".env.example"`. It must contain the following keys:

```
  REACT_APP_BASE_URL
  REACT_APP_API_KEY
```

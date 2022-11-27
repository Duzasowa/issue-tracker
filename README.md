
# Issue-tracker

A simple issue tracker that allows a person not to forget what tasks he has to perform.



## Features

- Table of issues
- Deleting issues
- Removing issues




## Tech Stack

**Client:** React, Redux, react-redux, react-router-dom, redux-thunk, moment, react-dom

**Server:** Node, Express, mongoose


## Problems to be solved in the future

Prohibit the ability to change the issue status from "Done" --> "Progress" and "Progress" --> "Active"


## Run Locally

Clone the project

```bash
  git clone https://github.com/Duzasowa/issue-tracker
```

Go to the project directory

```bash
  cd issue-tracker
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm start
```

Start the server

```bash
  npm run server
```





## MongoDB

The database is running and ready to work. (Can accept a request from any IP address)




## How to use the project
 Server:

* server/Routes/IssueRoutes.js --> Elaboration of routes
* server/Models/IssueModel.js --> Description of the "Issue" model for the database
* server/config/MongoDB.js --> Сonnection to the database

 Client:

* frontend/components/ --> Project components
* frontend/Redux --> routers, actions, constants
* frontend/screens --> Project pages







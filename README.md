# GraphQL Backend API Server

GraphQL API server built with Node.js, Apollo Server v4, and Express.js. This server provides a comprehensive solution for managing NodeObjects, Actions, Triggers, Responses, and ResourceTemplates through a well-documented GraphQL interface.

## Features

- **Modern GraphQL Implementation** using Apollo Server v4
- **JWT Authentication** for secure API access
- **Modular Architecture** for easy maintenance and scaling
- **In-Memory Data Storage** using JSON files

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) (v8.x or later)

## Quick Start

### Installation

```bash
git clone https://github.com/Nahidjc/graphql-backend-node.git

cd graphql-backend-node

npm install
```

### Configuration

Create a `.env` file in the root directory with the following variables:

```
PORT=8088
JWT_SECRET=jadsdsahdfshdfasdkfaskhdfhaskfasdfh
```

### Running the Server

```bash
npm run dev

npm start
```

The server will be available at:
- Main endpoint: http://localhost:8088
- GraphQL playground: http://localhost:8088/graphql

## Authentication

This API uses JWT-based authentication. Include a valid Bearer token in the `Authorization` header:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3MTI0Mzk3MTI0IiwibmFtZSI6Ik5haGlkIEhhc2FuIiwicGhvbmUiOiIwMTkxMDEyNTQyOCIsImlhdCI6MTc0NTUyNTU3MiwiZXhwIjoxNzQ4MTE3NTcyfQ.DBa90u9iDFfFqvHUKzrIPFBBGs6ZTNftdGWlSVKC0vU
```

## API Documentation

### Key Entities

- **NodeObjects**: Core data objects in the system
- **Actions**: Operations that can be performed
- **Triggers**: Event-driven triggers for automation
- **Responses**: Standardized response templates
- **ResourceTemplates**: Reusable resource definitions

### Example Queries
### Example - 1
```graphql
query GetGlobalGreetingNode($nodeId: ID) {
  node(nodeId: $nodeId) {
    _id
    createdAt
    updatedAt
    name 
    description
    root
    priority
    compositeId
    global
    colour
    parents {
      _id
      name
      description
    }
    trigger {
      _id
      name
      description
      resourceTemplate {
        _id
        name
        description
        integrationId
        key
      }
    }
    actions {
      _id
      name
      description
      resourceTemplate {
        _id
        name
        description
        integrationId
        key
      }
    }
    responses {
      _id
      name
      description
      createdAt
      updatedAt
      platforms {
        integrationId
        build
        localeGroups {
          localeGroupId
          variations {
            name
            responses
          }
        }
      }
    }
  }
}
```
### Respone The query
 ```
{
  "data": {
    "node": {
      "_id": "6297164810f52524ba1a9300",
      "createdAt": 1654068808589,
      "updatedAt": 1696991678931,
      "name": "Sign up Webinar",
      "description": "",
      "root": false,
      "priority": null,
      "compositeId": "rCMUtmL3aOULyqBL",
      "global": false,
      "colour": null,
      "parents": [
        {
          "_id": "6296be3470a0c1052f89cccb",
          "name": "Greeting Message",
          "description": ""
        }
      ],
      "trigger": {
        "_id": "629716db70a0c1202689cd0a",
        "name": "Payload: WEBINAR",
        "description": "",
        "resourceTemplate": {
          "_id": "61e9ba20f9b581f25a2dbf51",
          "name": "Keyword / Payload",
          "description": "Use keyword or payload as triggers",
          "integrationId": "woztell-essential-pack",
          "key": "keyword-payload"
        }
      },
      "actions": [],
      "responses": [
        {
          "_id": "6297171270a0c17c5689cd0c",
          "name": "Ask for Email",
          "description": "",
          "createdAt": 1654069010275,
          "updatedAt": null,
          "platforms": [
            {
              "integrationId": "woztell-essential-pack",
              "build": 1,
              "localeGroups": [
                {
                  "localeGroupId": null,
                  "variations": [
                    {
                      "name": "Standard",
                      "responses": [
                        {
                          "type": "TEXT",
                          "text": "Please enter your email",
                          "id": "lQRFKIwH",
                          "transform": ""
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```
### Example - 2
```

## License

Copyright © 2025 [Nahid Hasan](https://github.com/Nahidjc).  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
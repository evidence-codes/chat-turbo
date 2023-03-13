# chat-turbo

## Getting started

### Prerequisites

To run this application, you need to have Node.js and npm installed

### Installation

Clone this repository

```
git clone https://github.com/CybertronicEvidence/chat-turbo.git
```

Install dependencies:

```
npm install
```

Start the server:

```
npm start
```

Start the development server:

```
npm run dev
```

### Testing the server with data

Make a `POST` request to `http://localhost:3060/api/chat` when the server gets started.
Request should be in JSON format. Example below:

```
{
    "message": "Who are you?"
}
```

Or you can use `curl` to test on the command line:

```
curl http://localhost:3060/api/chat \
 -H 'Content-Type: application/json' \
 -d '{
    "message" : "Who are you?"
 }'
```

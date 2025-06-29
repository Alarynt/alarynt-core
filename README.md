# Alarynt Core API

This is the backend for the multi-tenant serverless rule evaluation platform, Alarynt.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo
   ```sh
   git clone <your-repo-url>
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Running the application

To run the app in development mode:
```sh
npm run dev
```

This will start the server on `http://localhost:3000` with `nodemon`, which will automatically restart the server on file changes.

To build the application for production:
```sh
npm run build
```

This will compile the TypeScript files into JavaScript in the `dist` directory.

To run the production build:
```sh
npm start
```

## API Endpoints

- `POST /tenants`: Create a new tenant.
- `GET /tenants`: Get all tenants.
- `POST /rules`: Create a new rule.
- `GET /rules`: Get all rules.
- `PUT /rules/:id`: Update a rule.
- `POST /telemetry`: Ingest telemetry data. #   a l a r y n t - c o r e  
 
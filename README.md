# Bicycle Shop

## Introduction

This is a learning project for building a backend API and connecting a frontend to it. Using a bicycle shop as an example, you will learn how to create API endpoints, store data in MySQL, and make HTTP requests from a React interface to create, read, update, and delete bicycles.

The backend uses TypeScript, Express, and Sequelize. The frontend uses TypeScript, React, and Vite.

## Setup and development

### 1. Prerequisites

Install Git, Node.js with npm (a version compatible with Vite, such as Node.js 22.12+), and MySQL. Make sure the MySQL server is running before starting the backend.

### 2. Clone the learning branch

```bash
git clone --branch learning --single-branch https://github.com/alexiamarcee/bicycle-shop.git
cd bicycle-shop
```

Run the following setup steps from this project directory unless otherwise specified.

### 3. Create the database

Before running either application, create the database and configure both environment files.

Connect to MySQL using MySQL Workbench or the command-line client:

```bash
mysql -u root -p
```

Execute this SQL statement:

```sql
CREATE DATABASE IF NOT EXISTS dsw_products CHARACTER SET utf8mb4;
```

The backend's configured MySQL user must have permission to access this database and create its tables. In the completed implementation, Sequelize creates missing tables when the backend starts; the database itself must already exist.

### 4. Configure the backend environment

Create a file named `.env` inside `backend/`:

```dotenv
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=db_bicycle_shop
DB_USER=your-database-username
DB_PASSWORD=your-database-password
```

Replace `DB_USER` and `DB_PASSWORD` with your local MySQL credentials. Adjust the host, port, and database name if your setup differs.

### 5. Configure the frontend environment

Create a file named `.env` inside `frontend/`:

```dotenv
VITE_API_URL=http://localhost:3000/api
```

This is the backend's base URL. Do not add a trailing slash or `/bicycles`, because the frontend appends endpoint paths itself. If you change the backend port, update this URL as well. Restart the relevant development server after changing an environment file.

### 6. Install dependencies

Install dependencies for both applications using their existing lockfiles:

```bash
cd backend
npm ci
cd ../frontend
npm ci
cd ..
```

### 7. Start both applications

Open two terminals in the project root and keep both running.

In the first terminal, start the backend:

```bash
cd backend
npm run dev
```

With the configuration above, the API runs at [http://localhost:3000/api](http://localhost:3000/api), and the bicycle endpoint is [http://localhost:3000/api/bicycles](http://localhost:3000/api/bicycles).

In the second terminal, start the frontend:

```bash
cd frontend
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173). The frontend sends API requests to the URL configured in `frontend/.env`.

## POSTMAN link

- [POSTMAN documentation](https://documenter.getpostman.com/view/58320268/2sBYB4L7F9)

## Recommended links

- [Express documentation](https://expressjs.com/) — routing, middleware, and backend APIs.
- [Sequelize v6 documentation](https://sequelize.org/docs/v6/) — models and database queries.
- [MySQL: Creating and selecting a database](https://dev.mysql.com/doc/refman/8.4/en/creating-database.html) — database setup.
- [React: Quick Start](https://react.dev/learn) — components, state, and events.
- [Vite: Getting Started](https://vite.dev/guide/) — frontend development tooling and Node.js requirements.
- [npm ci documentation](https://docs.npmjs.com/cli/v11/commands/npm-ci/) — installing dependencies from a lockfile.

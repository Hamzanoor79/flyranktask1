# Task API

A simple RESTful Task API built with **Node.js** and **Express.js**. It demonstrates the complete CRUD (Create, Read, Update, Delete) operations using an in-memory list of tasks. The API is documented with **Swagger UI** for interactive testing.

## Features

- Express.js REST API
- In-memory task storage
- CRUD operations
- Input validation
- Proper HTTP status codes
- Swagger UI documentation

---

## Installation & Run

### Clone the repository

```bash
git clone https://github.com/Hamzanoor79/flyranktask1.git
cd task-api
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

The server starts at:

```
http://localhost:3000
```

Swagger documentation:

```
http://localhost:3000/docs
```

---

## API Endpoints

| Method | Endpoint | Description | Success |
|--------|----------|-------------|---------|
| GET | `/` | API information | 200 |
| GET | `/health` | Health check | 200 |
| GET | `/tasks` | Get all tasks | 200 |
| GET | `/tasks/:id` | Get task by ID | 200 / 404 |
| POST | `/tasks` | Create a new task | 201 / 400 |
| PUT | `/tasks/:id` | Update an existing task | 200 / 400 / 404 |
| DELETE | `/tasks/:id` | Delete a task | 204 / 404 |

---

## Example curl Request

```bash
curl -i http://localhost:3000/tasks
```

Example output:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 170
ETag: W/"aa-example"
Date: Sat, 25 Jul 2026 10:00:00 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
  {
    "id": 1,
    "title": "Learn Express",
    "done": false
  },
  {
    "id": 2,
    "title": "Build Task API",
    "done": true
  },
  {
    "id": 3,
    "title": "Test API endpoints",
    "done": false
  }
]
```

---

## Swagger UI

After starting the server, open:

```
http://localhost:3000/docs
```

Replace the image below with your own screenshot.

```
docs/swagger-screenshot.png
```

Example:

![Swagger UI](docs/swagger-screenshot.png)

---



## Author

Muhammad Hamza
#  Finance Dashboard Backend

## 📌 Overview

This project is a backend system for a finance dashboard that allows users to manage financial records and view analytics based on their roles.

It demonstrates backend architecture, role-based access control, data modeling, and aggregation logic.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## 👥 Roles & Permissions

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Viewer  | View dashboard only                  |
| Analyst | View records + analytics             |
| Admin   | Full access (CRUD + user management) |

---

## 🔐 Authentication

* JWT-based authentication
* Token required in headers:

```
Authorization: Bearer <token>
```

---

##  Features

###  User Management

* Register & Login
* Admin can update roles and status

###  Financial Records

* Create, Read, Update, Delete records
* Filtering by date, type, category

###  Dashboard APIs

* Total Income / Expense
* Net Balance
* Category-wise breakdown
* Monthly trends
* Recent transactions

---

##  API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Users (Admin)

* GET /api/users
* PATCH /api/users/:id

### Records

* POST /api/records
* GET /api/records
* PATCH /api/records/:id
* DELETE /api/records/:id

### Dashboard

* GET /api/dashboard/summary
* GET /api/dashboard/categories
* GET /api/dashboard/recent
* GET /api/dashboard/trends

---

## ⚙️ Setup Instructions

1. Clone repo
2. Install dependencies:

```
npm install
```

3. Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

4. Run server:

```
npm run dev
```

---

## 📌 Assumptions

* Each user accesses only their own records
* Role-based access enforced via middleware
* MongoDB used for persistence

---

## 🚀 Future Improvements

* Pagination
* Unit testing
* Rate limiting
* Refresh tokens

## 📮 Postman Collection

You can test all APIs using the Postman collection:

docs/postman_collection.json
The collection is configured with deployed API base URL:
https://finance-dashboard-backend.onrender.com

---

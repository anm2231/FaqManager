# FaqManager

A full-stack FAQ Management System with role-based access, bookmarking, and admin dashboard. Built during an internship to manage frequently asked questions effectively.

---

##  Tech Stack

- **Frontend**: React.js (Vite), Axios, React Router
- **Backend**: Spring Boot (Java), Spring Security, JWT Authentication
- **Database**: MySQL (SQL dump included)

---

##  Features

###  Public / User:
- View FAQs by category or tag
- Bookmark FAQs
- User registration and login (JWT)

###  Admin:
- Add, Edit, Delete FAQs
- View all users
- Admin-only dashboard access

---

##  Authentication

- Role-based: `USER` and `ADMIN`
- JWT used for secure API access
- Protected routes (frontend & backend)

---

##  Database

Use the provided `faqdb.sql` file to import the schema and sample data:
```bash
mysql -u youruser -p yourdb < faqdb.sql
```
---

##  Project Structure
```
 faq-management-app/
 ├── backend/                # Spring Boot App
 │   └── BackendApplication/
 ├── frontend/               # React App
 │   └── reactfaq/
 ├── faqdb.sql
```
---

##  Getting Started
```bash

cd backend/BackendApplication
./mvnw spring-boot:run

cd frontend/reactfaq
npm install
npm run dev
```

<img width="1920" height="882" alt="Screenshot (586)" src="https://github.com/user-attachments/assets/ac686e38-2e1e-4952-a1d7-a1b6474a0e16" />

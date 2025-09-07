# 📖 BookMyRoom

## 📝 Overview

**BookMyRoom** is a full-stack meeting room booking system built with **Spring Boot (backend)** and **Angular (frontend)**.
It provides a secure platform for users to book rooms, manage reservations, and for admins to manage rooms and oversee reservations.

---

## 🚀 Features

* 🔑 **Authentication & Authorization**

  * Secure login with JWT
  * Role-based access (`USER`, `ADMIN`)

* 🏢 **Room Management**

  * Admins can **create, update, delete** rooms
  * Users can **view and reserve** rooms

* 📅 **Reservation System**

  * Conflict detection (no double-booking)
  * Users can **cancel** reservations
  * Reservations split into **active** and **history**

* 📧 **Email notifications** *(future work)*

* 🔗 **Microsoft Teams API integration** *(future work)*

---

## ⚙️ Tech Stack

* **Backend**: Spring Boot, Spring Security, Spring Data JPA, PostgreSQL
* **Frontend**: Angular 17, Angular Material, CSS custom styling
* **Database**: PostgreSQL
* **Build Tools**: Maven, npm

---

## 🛠️ Setup Instructions

### Prerequisites

* Java 21+
* Node.js 18+ & npm
* PostgreSQL 14+
* Maven
* Angular 17

### Backend (Spring Boot)

```bash
# In project root
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on: **[http://localhost:8080](http://localhost:8080)**

### Frontend (Angular)

```bash
# In project root
cd frontend
npm install
ng serve
```

Frontend runs on: **[http://localhost:4200](http://localhost:4200)**

---

## 📡 Main API Endpoints

| Method | Endpoint                    | Description                | Auth          |
| ------ | --------------------------- | -------------------------- | ------------- |
| POST   | `/api/v1/auth/login`        | Login user                 | Public        |
| GET    | `/api/v1/rooms`             | List all rooms             | Authenticated |
| POST   | `/api/v1/rooms`             | Create room *(admin only)* | Admin         |
| PUT    | `/api/v1/rooms/{id}`        | Update room *(admin only)* | Admin         |
| DELETE | `/api/v1/rooms/{id}`        | Delete room *(admin only)* | Admin         |
| POST   | `/api/v1/reservations`      | Create reservation         | Authenticated |
| GET    | `/api/v1/reservations/mine` | List my reservations       | Authenticated |
| DELETE | `/api/v1/reservations/{id}` | Cancel reservation         | Authenticated |

---

## 🖼️ Screenshots 

* Login Page
* <img width="1903" height="923" alt="image" src="https://github.com/user-attachments/assets/1729b951-a4b5-42d3-b2d7-a6f89fe4861c" />

*Activity page (only admin)
<img width="1890" height="930" alt="image" src="https://github.com/user-attachments/assets/565ac94b-714e-4743-9418-e363c5a45fe8" />

* Rooms Page (Admin & User views)
* <img width="1890" height="926" alt="image" src="https://github.com/user-attachments/assets/a44c51c7-ee9a-4046-9bed-e0dcbc3f0fd9" />

* Reservation List (Active & History)
* <img width="1893" height="925" alt="image" src="https://github.com/user-attachments/assets/bb98759b-97d5-43ae-8da4-40149aa3e5f3" />

* *Reservation form
* <img width="1884" height="922" alt="image" src="https://github.com/user-attachments/assets/23977d73-aaf5-43c1-a0d1-312055c695ad" />


---

## 🔮 Future Work

* Reservation **restore** feature
* Integration with **Microsoft Teams API** (auto-create meeting links)
* Email notifications on booking/cancellation

---

## 📄 License

This project is for academic use.


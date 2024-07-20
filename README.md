### 🚀  Backend Task: ♟️ Chess Tournament Management System 

Welcome to **♟️ Chess Tournament Management system**! This guide will help you set up, run, and test the application.
This is a task made for the assessments: [More about the task here.](https://globalmove.notion.site/47c1d6a94a5843cb87c79251431c68f4?v=1158b9d6ed0d41a8ae0d3f119d857d0f)

_I use my own `uzdev` npm library to build the API. You can learn more about it here: [uzdev on npm](https://www.npmjs.com/package/uzdev)._

--- 

### 🌐 API URL

- Access the API at: [API URL](https://documenter.getpostman.com/view/36794346/2sA3kSnNbN)
- Download the PDF documentation: [PDF Link](/scripts/AssignmentGlobalMoveBackendChessTournamentManagementSystem.pdf)

_Credential for admin:_

- _username:_ `admin`
- _password:_ `hi!12345`

### 🌍 Global URL for Testing

Test the application globally at: ```https://api-chess.menda.page```
_Last commit will last 1 month._

### 🛠️ Installation Guide

#### 1. Clone Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/mensenvau/assignment_global_move
cd assignment_global_move
```
---

_You need to update the .env file. You can use the .env.example template as a reference._

#### 2. Run MySQL DB Script

Run the following script to set up your MySQL database (scripts/db-init.sql):

```sh
mysql -u root -p < scripts/db-init.sql
```

#### 3. Start Server

Navigate to the server directory and start it:

```sh
cd server
npm install
npm run start

npm test # for unit tests.
```

---

### 📁 Function Path for Basic Logic

Find the function to test the basic logic at:

```sh
cd server # (on server path)
node function/system-swiss-tournament.js
```

### ⚠️ Shortcomings

- I didn't have time to write the front-end.
- Since the Swiss function is recursive, it needs to be optimized for multi-player rounds.
- Registration and login was not protected by captcha or email/phone message was not sent.
- Not optimized for caching. 

---

### ❓ Questions

For any questions, feel free to reach out: ```balkibumen@gmail.com```

---

### 🎥 Installation Video

Watch the detailed installation guide: [Installation Video](https://example.com/installation-video)

---

## 📢 Join My Telegram Channel

Stay updated and join the conversation: [Telegram Channel](https://t.me/mensenvau)

---
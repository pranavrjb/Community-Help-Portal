# 👐 Community Help Portal (MERN Stack)

A web application where users can **request help for local community issues** or **volunteer to assist others**. The platform promotes micro-volunteering and community engagement.

---

## 📚 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
  
---

# 🌟 Features

- 🔐 User authentication (JWT-based)
- 🙋‍♂️ Users can create help requests
- 🤝 Other users can volunteer
- 👮 Admin panel to manage users and requests
- 📍 Location-based request filtering
- 🧾 Volunteer tracking and status update
- 💬 (Optional) Messaging between users

---

# 🧰 Tech Stack

 # 🔗 Full Stack:
- **Frontend:** React.js, Axios, React Router DOM
- **Backend:** Node.js, Express.js, JWT, bcrypt, morgan
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Vercel (frontend), Render/Railway (backend), MongoDB Community Edition (database)

# 🗂️ Project Structure

### 📁 Frontend (`/client`)
/client
|
- /public
- /src
- /components # Reusable UI components
- /pages # Route-level pages
-  /services # Axios API calls
- /context # Auth & global context
- App.js
- package.json

### 📁 Backend (`/server`)
/server
│
- /controllers # Business logic
─ /models # Mongoose schemas
─ /routes # Express routes
─ /middleware # Auth, role checks
─ /config # DB connection
─ server.js

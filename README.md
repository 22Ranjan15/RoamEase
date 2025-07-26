<div align="center">
  <h1>RoamEase</h1>
  <p><i>Your Gateway to Unique & Safe Stays Worldwide</i></p>
</div>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /></a>
</p>

---

## 🚀 Live Demo

> **[View Deployed App](https://roamease-6z62.onrender.com)** 

[GitHub Repository](https://github.com/22Ranjan15/RoamEase)

---

## 📚 Table of Contents
- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

---

## 📖 About The Project
RoamEase is a full-stack web application inspired by Airbnb, designed to help users discover, list, and review unique travel accommodations worldwide. Built with Node.js, Express, MongoDB, and Bootstrap, it offers a seamless experience for both guests and hosts. The project demonstrates expertise in authentication, RESTful API design, cloud image uploads, and interactive mapping.

**Motivation:**
> This project was completed as a capstone project for my course, allowing me to apply and demonstrate my skills in full-stack web development, authentication, RESTful APIs, and cloud integrations in a real-world scenario.

---

## ✨ Features
- **User Authentication:** Secure registration, login, and session management.
- **Listing Management:** Create, edit, and delete property listings with image uploads (Cloudinary).
- **Review System:** Add and delete reviews with star ratings and comments.
- **Search & Filtering:** Search listings by title, location, country, description, price, and category.
- **Map Integration:** Interactive Mapbox maps for each listing.
- **Responsive UI:** Modern design using Bootstrap 5 and custom CSS.
- **Flash Messages:** User feedback for actions and errors.
- **Database Seeding:** Populate the database with sample listings for development.

---

## 🛠️ Tech Stack

| Category        | Technology     | Version   | Purpose                                              |
|-----------------|---------------|-----------|------------------------------------------------------|
| Backend         | Node.js       | 22.15.0   | JavaScript runtime for the server                    |
| Backend         | Express.js    | 5.1.0     | Web application framework                            |
| Database        | MongoDB       | 6.x       | NoSQL database for storing data                      |
| ODM             | Mongoose      | 8.15.1    | Object Data Modeling for MongoDB                     |
| Frontend        | Bootstrap     | 5.x       | Responsive UI components and styling                 |
| Templating      | EJS           | 3.1.10    | Server-side rendering of dynamic pages               |
| Auth            | Passport.js   | 0.7.0     | User authentication and session management           |
| File Uploads    | Multer, Cloudinary | 2.0.1, 1.41.3 | Image upload and cloud storage                 |
| Maps            | @mapbox/mapbox-sdk | 0.16.1 | Interactive maps and geocoding                       |
| Validation      | Joi           | 17.13.3   | Data validation                                      |
| Dev Tools       | Nodemon       | 3.1.9       | Auto-restart server during development               |

---

## 📁 Folder Structure
```
RoamEase/
|-- app.js
|-- cloudConfig.js
|-- middleware.js
|-- package.json
|-- schema.js
|-- README.md
|-- LICENSE
|
|-- controllers/
|   |-- listings.js
|   |-- reviews.js
|   |-- users.js
|
|-- init/
|   |-- data.js
|   |-- index.js
|
|-- models/
|   |-- listing.js
|   |-- review.js
|   |-- user.js
|
|-- public/
|   |-- css/
|   |   |-- navbar.css
|   |   |-- rating.css
|   |   |-- style.css
|   |-- js/
|   |   |-- map.js
|   |   |-- navbar.js
|   |   |-- script.js
|
|-- routes/
|   |-- listing.js
|   |-- listings.js
|   |-- review.js
|   |-- user.js
|
|-- utils/
|   |-- ExpressError.js
|   |-- wrapAsync.js
|
|-- views/
|   |-- error.ejs
|   |-- includes/
|   |   |-- flash.ejs
|   |   |-- footer.ejs
|   |   |-- navbar.ejs
|   |-- layouts/
|   |   |-- boilerplate.ejs
|   |-- listings/
|   |   |-- edit.ejs
|   |   |-- index.ejs
|   |   |-- new.ejs
|   |   |-- search.ejs
|   |   |-- show.ejs
|   |-- users/
|       |-- login.ejs
|       |-- signup.ejs
```

---

## 📝 Workflow Structure
1. **User Authentication:** Passport.js for signup, login, and session management.
2. **Listing Management:** CRUD operations for listings, image uploads (Cloudinary), geocoding (Mapbox).
3. **Review System:** Add/delete reviews, validation with Joi.
4. **Search & Filtering:** Query and filter listings by multiple fields.
5. **Map Integration:** Mapbox for displaying listing locations.
6. **Frontend:** EJS templates, Bootstrap, and custom CSS/JS.
7. **Database Initialization:** Seed with sample data for development.

---

## Getting Started

### 📦 Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### 🔑 Environment Variables
Create a `.env` file in the root directory:
```
ATLASDB_URL=<your_mongodb_connection_string>
DB_SECRET=<your_session_secret>
CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUD_API_KEY=<your_cloudinary_api_key>
CLOUD_API_SECRET=<your_cloudinary_api_secret>
MAP_TOKEN=<your_mapbox_token>
NODE_ENV=development
```

### 🛠️ Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/22Ranjan15/RoamEase.git
   cd RoamEase
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your values.
4. **Run the development server:**
   ```sh
   node app.js
   ```
   The app will run at `http://localhost:8080`
5. **(Optional) Seed the database:**
   ```sh
   node init/index.js
   ```

---

## 🚦 Usage
- Visit `/signup` to create an account.
- Log in to create, edit, or delete listings.
- Browse, search, and filter listings.
- View listing details, add reviews, and see locations on the map.
- Edit or delete your own listings and reviews.

---

## 📡 API Endpoints
<details>
<summary>Click to expand</summary>

| Method | Endpoint                      | Description                                 |
|--------|-------------------------------|---------------------------------------------|
| GET    | /listings                     | Get all listings                            |
| POST   | /listings                     | Create a new listing                        |
| GET    | /listings/:id                 | Get a single listing                        |
| PUT    | /listings/:id                 | Update a listing                            |
| DELETE | /listings/:id                 | Delete a listing                            |
| POST   | /listings/:id/reviews         | Add a review to a listing                   |
| DELETE | /listings/:id/reviews/:rid    | Delete a review from a listing              |
| GET    | /users/login                  | Login page                                  |
| POST   | /users/login                  | Login action                                |
| GET    | /users/signup                 | Signup page                                 |
| POST   | /users/signup                 | Signup action                               |
| GET    | /users/logout                 | Logout action                               |

</details>

---

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License
Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 🙏 Acknowledgements
- [Apna College](https://www.apnacollege.in/)
- [Code Help](https://www.codehelp.in/)
- [Bootstrap](https://getbootstrap.com/)
- [Mapbox](https://www.mapbox.com/)
- [Cloudinary](https://cloudinary.com/)

---

## 📬 Contact
**Ranjan**  
[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourusername) | [Gmail](ranjandasbd22@gmail.com)

---

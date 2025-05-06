# SnowJobHub

**SnowJobHub** is a modern job platform web application that helps users explore jobs from various companies, apply online, and manage their profiles securely.

---

## 🌐 Live URL

[🔗 Visit SnowJobHub Live](https://snowjobhub.web.app/)

---

## 🎯 Purpose

The purpose of this project is to build a single-page job portal that:

- Helps users browse Companies and jobs.
- Lets users apply to jobs with clear requirements.
- Provides secure authentication and user profile management.
- Offers a responsive, user-friendly, and visually appealing design.

---

## 🔑 Key Features

- ✅ User Authentication via Email/Password & Google
- 🏢 View company & job listings (loaded from JSON)
- 🔍 Detailed job modal with full description & "Apply Now"
- 🔄 Forgot password functionality with Gmail redirection
- 👤 Update profile info (name & photo)
- 🔐 Protected routes with auth guard
- ❌ Custom 404 Not Found page
- ❄️ Beautiful snowfall animation background
- 💫 Framer Motion page transitions
- 🧠 Dynamic document titles for better UX

---

## 📦 NPM Packages Used

- **`react`** – Core library used to build the application
- **`vite`** – Development server and build tool for fast React setup
- **`react-router-dom`** – Enables routing and navigation between pages
- **`firebase`** – Provides authentication and backend services
- **`react-toastify`** – Displays stylish toast notifications
- **`framer-motion`** – Adds smooth and modern page animations
- **`tailwindcss`** – Utility-first CSS framework for styling
- **`daisyui`** – Tailwind CSS-based component library for UI components
- **`react-snowfall`** – Adds falling snowflake effects to the background
- **`lucide-react`** – Icon library with beautiful, consistent icons
- **`react-icons`** – Comprehensive set of icons from various libraries
- **`react-countup`** – Animated counter for displaying statistics
- **`react-fast-marquee`** – Creates smooth, customizable marquee effects
- **`react-helmet`** – Dynamically manages document head (title, meta tags, etc.)
- **`react-intersection-observer`** – Detects when elements enter/exit the viewport (great for triggering animations)
- **`react-loading-indicators`** – Prebuilt loading spinners and indicators

---

## 🧠 How It Works

- 🔑 **Authentication:** Firebase handles user login, registration, Google sign-in, and password recovery.
- 📄 **Job Listings:** Loaded from a local JSON data file and displayed company-wise.
- 🧑 **User Profile:** Authenticated users can update their display name and profile photo.
- ❗ **Error Handling:** Includes proper feedback, toasts, and a 404 fallback route.

---

## 📱 Responsiveness

- ✅ Mobile-first design
- ✅ Works on all major screen sizes
- ✅ Fast performance and smooth UI interactions

## 🚀 How to Use

Follow the steps below to get this project up and running locally:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/programming-hero-web-course1/b11a9-react-authentication-ChibgatullahMinhaz.git
cd (project folder)
```

### 2. Install Dependencies

Next, install the required dependencies using npm:
 ### 3. Set Up Firebase Configuration
Create a .env file in the root directory and add your Firebase configuration keys like this:
 
```bash
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id

```
### 4. Run the Development Server
Start the development server by running:
```bash
npm run dev

```



---

## 👨‍💻 Developed By

[Chibtaullah Minhaz] – Front-End Developer

---
```

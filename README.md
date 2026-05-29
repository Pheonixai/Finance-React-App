# HomeBudget 💰

A functional, client-side financial tracking application built to solve the real, everyday hassle of managing personal spending and budgets. No complex setups, no mandatory external cloud accounts—just straight-to-the-point expense tracking that works right in your browser.

**Live Project Link:** [Insert your Vercel deployment URL here]

---

## 🛠️ Features & Project Requirements Met

This application is built entirely with **React** and **React Router**, checking off all the operational boxes required by the project specifications:

### 1. State Management & Data Persistence (`localStorage`)
* **Zero-friction onboarding:** Uses data persistence via `localStorage` to read and write user profiles, budgets, and expenses seamlessly. 
* **State synchronization:** Budget updates, custom expense additions, and user deletions immediately reflect across the entire UI layout without requiring clunky page reloads.

### 2. Robust React Architecture & Routing
* **Unified UI Shell:** Leverages React Router layouts (`Main.jsx`) alongside `<Outlet />` patterns to maintain a persistent navigation framework across the application.
* **Data-Driven Routing:** Implements standard data architecture using React Router `loaders` and `actions` for handling high-performance asynchronous data updates, clean form submissions, and redirects.
* **Semantic Components:** Built using clean, isolated components (`Nav.jsx`, `Dashboard.jsx`) to keep state manipulation clear and modular.

### 3. Edge Case Handling
* **Empty States:** Displays tailored feedback and onboarding flows if a user profile or active budget doesn't exist yet in storage.
* **Error States:** Features a dedicated, isolated global `<Error />` boundary component to catch broken operations or faulty navigation paths without crashing the entire browser session.
* **Inline Form Feedback:** Captures and validates user submissions gracefully using semantic `<Form>` tags to protect data entry integrity.

---

## 🏗️ Technical Stack

* **Framework:** React 18+ (Vite SPA architecture)
* **Routing & Actions:** React Router v6
* **Icons:** Heroicons 
* **Styles:** Semantic CSS modules for modern grid/flex layouts

---

## 🚀 Local Setup Instructions

To spin up this project locally on your machine for review:

1. Clone the repository to your local directory.
2. Ensure you are in the project folder containing the `package.json` file:
   ```bash
   cd react-router-budget-app
Install the clean project dependencies:

Bash
npm install
Boot up the local development server:

Bash
npm run dev
Open your browser and navigate to http://localhost:5173.

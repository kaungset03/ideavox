# **Idea Vox**

Welcome to **Idea Vox** – a platform where creativity meets innovation. Share your app ideas, showcase your creations, and explore inspiration from a vibrant community of app enthusiasts.

---

## **Features**

### 🚀 **Share App Ideas**

Submit your creative app concepts and organize them for the world to explore.

### 🌍 **Explore Ideas**

Dive into a diverse collection of app ideas shared by the vibrant Idea Vox community.

### 🎨 **Showcase Apps**

Display your developed apps and highlight their features, purpose, and impact.

### 💡 **Get Inspired**

Browse innovative ideas and connect with like-minded developers to spark new collaborations.

---

## **Roadmap**

### 🛠️ **Upcoming Features**

- **Voting System**: Enable users to vote on their favorite app ideas and projects.
- **Commenting System**: Allow discussions and feedback on shared ideas or showcased apps.
- **Pagination**: Seamless navigation through large collections of ideas and projects.

---

## **Getting Started**

### 🧰 **Prerequisites**

Before you begin, ensure you have:

- Node.js (v14 or later) installed
- Appwrite server setup for backend services

### 🏗️ **Setup Instructions**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kaungset03/ideavox.git
   cd ideavox
   ```

2. **Install Dependencies**:
    ```bash
    npm install  
    ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables to the `.env` file:

    ```env
    NEXT_APPWRITE_KEY=
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT=
    NEXT_PUBLIC_APPWRITE_DATABASE_ID=
    NEXT_PUBLIC_APPWRITE_IDEAS_COLLECTION_ID=
    NEXT_PUBLIC_APPWRITE_APPS_COLLECTION_ID=
    NEXT_PUBLIC_APP_URL=
    ```
    <br />

4. **Run the Application**:
    ```bash
    npm run dev  
    ```
    Open your browser and navigate to `http://localhost:3000` to start using Idea Vox.


---

### **How to Use**
1. **Sign Up/Log In:** Create an account to start sharing and exploring.
2. **Share Ideas:** Use the "Submit Your Idea" form to share your app concepts.
3. **Showcase Apps:** Upload details of your completed apps to inspire others.
4. **Browse & Explore:** Discover app ideas and projects submitted by the community.

---

## **Technologies Used**
- **Frontend:** React/Next.js
- **Backend:** Appwrite for database and authentication
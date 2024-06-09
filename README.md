# PlayGreen Project Documentation

## Overview

PlayGreen is a React application built using Vite and TypeScript. The application allows users to log in, sign up, and view images of various sports and either like or dislike them. Users can also view their history of likes and dislikes in the historic component. The project includes user authentication via Firebase, data storage in Firestore, and utilizes various libraries including Redux Toolkit, Styled Components, Material-UI (MUI), Axios, and Progressive Web App (PWA) functionality.

## Features

- User Authentication with Firebase
- Firestore Integration for Data Storage
- User sign up
- Like/Dislike Functionality with History Tracking
- Light and Dark Theme Support
- Progressive Web App (PWA) basic setup
- Redux Toolkit for State Management
- Styled Components for Styling
- Material-UI (MUI) for UI Components
- Axios for API Requests

## Prerequisites

Before running the application, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) - LTS version recommended.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/camilolc/play-green-exercise.git
    cd play-green-exercise
    ```

## Firebase Authentication

1. log in default user:

    ```bash
    email: playgreen@test.com
    password: 123123
    ```

## Project Structure

1. Modular structure:

    ```
    ├── public
    │   ├── manifest.json
    │   └── ...
    ├── src
    │   ├── assets
    │   │   ├── light.png
    │   │   └── dark.png
    │   ├── auth
    │   │   └── authSlice.ts
    │   ├── firebase
    │   │   └── firebase.ts
    │   ├── helpers
    │   ├── hooks
    │   ├── interfaces
    │   ├── router
    │   ├── services
    │   │   └── api.ts
    │   ├── sports
    │   │   ├── History.tsx
    │   │   └── ImageCard.tsx
    │   ├── store
    │   │   ├── index.ts
    │   │   ├── imagesSlice.ts
    │   │   ├── likesSlice.ts
    │   │   └── themeSlice.ts
    │   ├── styles
    │   │   ├── App.css
    │   │   └── index.css
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── .env
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
    ```

  ## Execution
  To run the complete application, run the following command:

  1. Run the app:

      ```bash
      npm run dev
      ```

  ## Endpoints
  - **GET dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front**: Retrieves all sports.

  ## Optional Firebase configuration

   1. If you want to use your own Firebase credentials for Firestore and Authentication, you can add your own in the .env file.

      ```
      VITE_FIREBASE_API_KEY=your-api-key
      VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
      VITE_FIREBASE_PROJECT_ID=your-project-id
      VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
      VITE_FIREBASE_APP_ID=your-app-id
      ```



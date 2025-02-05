# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Reminder App

Welcome to the **Reminder App**! This application allows users to:

- **Log in** to see their personal reminders.  
- View a **weather forecast** (today & tomorrow) at the top of the dashboard.  
- See a list of **reminders**, sorted by due date.  
- **Add** a new reminder (with name, description, due date, and priority).  
- **Mark** a reminder as completed or edit existing reminders.  

> **Note:** In this demo, we do not have full production-grade security for MongoDB. For a production environment, set up proper credentials, environment variables, and secure connections.

## Features

1. **User Authentication**  
   - Passwords stored using `sha256` hashing.  
   - Basic session or token-based authentication.  

2. **Reminders**  
   - Title (string)  
   - Description (string)  
   - Due Date (date)  
   - Priority (enum/string: `Low`, `Medium`, `High`)  
   - Completed (boolean)  

3. **Weather Forecast**  
   - Displays today and tomorrow’s forecast (temperature, conditions).  
   - Uses a third-party weather API. You can configure an API key via an environment variable (`WEATHER_API_KEY`).

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed.
- [Docker Compose](https://docs.docker.com/compose/) installed (often bundled with Docker Desktop).

## Quick Start

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-org/nextjs-reminder-app.git
   cd nextjs-reminder-app
   ````

2. **Build and Run the Application**:

    ```bash
    docker-compose up --build
    ```

   - This command will:
     1. Build the Docker image for the Next.js (or Nuxt/Nest) app from your local files.
     2. Start containers on a shared Docker network.

4. **Access the App**:
    - Open your browser and navigate to http://localhost:3000.
    - You should see the login or signup screen.

5. **Create an Account & Log In**:
    - Click Sign Up or Register (depending on how you’ve structured the front end).
    - After successful registration, log in with the same credentials.
    - Explore the dashboard!

### Stopping the Containers
   - In the same terminal where docker-compose up is running, press Ctrl + C.
   - Or run:
     ```bash
     docker-compose down
     ```

### Project Architecture
```vbnet
[ MongoDB v7 Container ]
           ↑
           | Docker network
           ↓
[ Next.js / Nuxt.js / Nest.js+Angular Container ]
    (Application logic, hashing of passwords,
       calls to weather API, front-end UI)
```

### Contributing
1. Fork the repository and clone it locally.
2. Create your feature branch: git checkout -b feature/my-awesome-feature.
3. Commit your changes: git commit -m 'Add some new feature'.
4. Push the branch: git push origin feature/my-awesome-feature.
5. Open a pull request on GitHub and describe your changes.

### License
   - MIT License
   - Copyright (c) 2024 Personify Health, Inc.
   - https://github.com/dwoolworth/angular-reminder-app/blob/main/LICENSE

### Contact
   - Maintainer: **Activate** (Derrick Woolworth)
   - Issues/Bugs: Please create a new GitHub Issue in this repository.

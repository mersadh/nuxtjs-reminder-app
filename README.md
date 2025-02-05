# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Reminder App

Welcome to the **Reminder App**! This application allows users to:

- **Create an account** with username/password (hashed via `sha256` in MongoDB).  
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

2. **(Optional) Create .env File**:

    If you have secrets like WEATHER_API_KEY, create a file named .env in the root directory:

    ```bash
    WEATHER_API_KEY=YOUR_API_KEY_HERE
    MONGO_URI=mongodb://mongo:27017/reminderdb
    ````
    Make sure your docker-compose.yml or application code references these environment variables.

3. **Build and Run the Application**:

    ```bash
    docker-compose up --build
    ```

   - This command will:
     1. Pull the mongo:7 image for the database.
     2. Build the Docker image for the Next.js (or Nuxt/Nest) app from your local files.
     3. Start both containers on a shared Docker network.

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

### Notes on Configuration
   - MongoDB:
       - By default, it stores data in a Docker volume named mongo-data.
       - On subsequent runs, data will persist unless you remove that volume explicitly:
          ```bash
          docker-compose down -v
          ````

### Weather API:
  - Replace `YOUR_API_KEY_HERE` with a valid API key from a weather service (e.g., OpenWeatherMap).
  - In code, the environment variable `process.env.WEATHER_API_KEY` (Node/Next.js), `import.meta.env.WEATHER_API_KEY` (Nuxt/Vue), or `process.env.WEATHER_API_KEY` (Nest.js) should be used to make the API request.

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

1. **MongoDB** handles data persistence (users, reminders, etc.).
2. **Application Container** (Next/Nuxt/Nest+Angular):
    - Responsible for server-side logic (authentication, CRUD) and front-end rendering.
    - Communicates with MongoDB through mongodb://mongo:27017/reminderdb.
    - Displays data, handles user interactions, and calls the weather API.

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

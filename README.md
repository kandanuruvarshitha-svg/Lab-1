
# Lab 1: Node.js and Express Server

**Live Deployment:** PENDING

## Student Details
- Name: K. Varshitha
- Registration Number: 252U1R8038
- Section: 113 S-14 CSE-QE-2A

## Objective
Create a Node.js HTTP server and an Express server with multiple routes.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- npm

## Installation
Run these commands from the lab-01 directory:

```bash
npm install
```

## How to Run
Start the Express server:

```bash
npm start
```

Open http://localhost:3000 in your browser.

To run the plain Node.js server instead, stop the Express server with Ctrl+C, then run:

```bash
node plain-server.js
```

## API Endpoints

| Method | Path | Description | Status |
|---|---|---|---|
| GET | / | Welcome message | 200 |
| GET | /about | Student name and section in JSON | 200 |
| GET | /time | Current date and time in JSON | 200 |
| GET | /unknown | Unknown-route error | 404 |

## Screenshots

### Home
![Home endpoint](screenshots/home.png)

### About
![About endpoint](screenshots/about.png)

### Time
![Time endpoint](screenshots/time.png)

### 404 Error
![Unknown route](screenshots/not-found.png)

## Notes
- Created a server using Node.js HTTP.
- Created routes using Express.
- Used JSON responses and HTTP status codes.
- Problems faced and solutions: Add your actual experience here.

# ProjectODC

## Overview
ProjectODC is a web application built on the MEAN stack (MongoDB, Express.js, Angular, Node.js) aimed at providing a user-friendly platform for managing products and user interactions.

## Project Structure
The project consists of three main components:
1. **Backend**
2. **Frontend**
   - **Dashboard**
   - **User Website**

## Getting Started

### Backend Setup
To set up the backend, follow these steps:

1. **Clone the Project**  
   Clone the repository to your local machine.

2. **Initialize npm**  
   Navigate to the backend directory and run:
   ```bash
   npm init
### Configure Environment Variables
1. **Create a `.env` File**  
   In the root directory of your project, create a `.env` file and add your environment variables. For example:
   ```plaintext
   MONGO_URI=mongodb://your_mongo_db_uri
   PORT=3000
   JWT_SECRET=your_jwt_secret


### Run the server : 
```bash
nodemon index.js
```

   


### Frontend Setup
To set up the backend, follow these steps:

1. **Clone the Project**  
   Clone the repository to your local machine.

2. **Initialize npm**  
   Navigate to the Frontend Dashboard , commerce directory and run:
   ```bash
   npm init
   ```
3. run the Dashboard : 
```bash
ng serve
```
run commerce :
```plaintext
accept 'Y' to change port as port 4200 in use of Dashboard
```
```bash 
ng serve
```
### Note :
```plaintext
You need to update the cors in index.js with new ports to be able
to recieve requests from new ports 
```








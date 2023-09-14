# Cricbuzz-API
#Create your own .env
Example of .env:

DB_HOST=  //Your host eg. localhost
USER_NAME= //Your username
PASSWORD= //Your password

----------------------------------
Todo:
Using JWT
Authentication
Authorization

-----------------------------------
To run:
Run npm init and:
install dependencies:
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "nodemon": "^3.0.1",
    "pg": "^8.11.3",
    "sequelize": "^6.33.0"
  }

set scripts:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  }

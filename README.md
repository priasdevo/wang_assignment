# wang_assignment
  I will open a PR to empty branch for easy code review
  This code consist of 2 part
  - Front end in /apps/web
  - Back end in /apps/api
  Both part is build on Node v10.19.0
  You can run npm run dev in root folder to deploy both front end / back end
  You cab also run individually in each folder 
  - Front end using 'yarn start'
  - Back end using 'npm run dev'
  Before running back end please create 'config.env' file in apps/api/config and include following code
  
PORT = 5000
NODE_ENV = development
MONGO_URI= 'mongodb://localhost:27017/mydatabase' (connection string for your database)


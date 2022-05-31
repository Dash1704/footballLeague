# footballLeague

Use this project to post, edit and delete Football Leagues from all over the world

## Set up your project

1. Fork this repository
2. Clone your forked repository to your local machine
3. Install ```Node.js```: please visit ```nodejs.org``` for the latest version
4. Navigate to server directory and run:
```
npm install
```
5. Navigate to client directory and run:
```
npm install
``` 
6. Connect to a new PostgreSQL database. 
   In the server directory, in db.js, and change the user on line 4 to your local user
   Create a new database by:
   - Open a the server directory in a terminal
   - Type ```psql``` in the terminal to open PostreSQL
   - Copy line 1 in the database.sql and paste into the terminal
   - Change into that database by typing ```\c football```
   - Create the leagues table by copying lines 3-6 in database.sql and pasting in the terminal

7. Navigate to the server directory and run:
```
npm start
```
8. At the same time in a seperate terminal navigate to the client directory and run:
```
npm start
``` 

![Screen Shot 2022-05-31 at 18 04 40](https://user-images.githubusercontent.com/93666673/171232538-c5175d16-7f04-4e87-a667-a9eefb3f2fcf.png)


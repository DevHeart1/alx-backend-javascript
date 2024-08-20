# NodeJS Basics

This project contains tasks for learning to the basics of NodeJS.

## Tasks To Complete

+ [x] 0. **Executing basic javascript with Node JS**<br/>[0-console.js](0-console.js) contains a module that exports a function named `displayMessage` that prints in `STDOUT` the string argument.

+ [x] 1. **Using Process stdin**<br/>[1-stdin.js](1-stdin.js) contains a script that will be executed through the command line with the following requirements:
  + It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line).
  + The user should be able to input their name on a new line.
  + The program should display `Your name is: INPUT`.
  + When the user ends the program, it should display `This important software is now closing` (followed by a new line).

+ [x] 2. **Reading a file synchronously with Node JS**<br/>[2-read_file.js](2-read_file.js) contains a module that exports a function `countStudents` with the following requirements:
  + Create a function named `countStudents`. It should accept a path in argument.
  + The script should attempt to read the database file synchronously.
  + The database file has the same format as [database.csv](database.csv).
  + If the database is not available, it should throw an error with the text `Cannot load the database`.
  + If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
  + It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.

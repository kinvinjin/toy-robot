# toy-robot

## Description
The solution implements a simulation of a toy robot. It meets the key requirements below:
* The dimensions of a square table is 5 units x 5 units.
* The valid commands are PLACE, MOVE, LEFT, RIGHT and REPORT.
* The first effective command must be a valid PLACE.
* Ignore any commands which will make the robot out of the table and fail from the table.
* Ignore any invalid or incorrect commands.

The solution also allows user to do:
* By default, the application uses a local file ./commands.txt as input. But users can choose a different local file or console (stdin) to input commands.
To use a local file, specify the `path` in the ./config.json  before the application is started. To use console, leave that field to empty.
Note: it will throw exception and terminate if it is specified to use a local file but the file path is incorrect.
* Both uppercase and lowercase input commands are valid. For example, REPORT and report are both acceptable commands.
 
## Design and Implementation
The classes and modules below are used to implement the solution.
* Robot
This class contains all the methods to operate a robot. It calls methods of Table class to move.
* Table
This class can store the current position information of a robot on the table. It also provide methods to set and get the position information. If the new position will be out of the table, it refuses to update the position.
* Input
It is responsible for getting input commands from a local file or console.
* Controller
It calls Input to get data, and then it parses, validates and executes input commands (each line) by calling methods in Robot class. If it is REPORT command, it returns the position information to console. It also deals with any exceptions and discard any invalid commands.
* App
This is the entry to run and demonstrate the application. It reads the path from config file and use the API provided by Controller.

## Setup
The application is developed in `Node.js (version v10.15.1)`. So, to execute the application, `Node.js` and `NPM` should be installed beforehand.

To install required npm modules for the application, run
> npm install 

## Execution
To execute the app, run
> npm start

or
> node app

## Example
The test file contains input commands as following: 
> PLACE 1,2,EAST

> MOVE

> MOVE

> LEFT

> MOVE

> REPORT

Run the application:

> npm start

> Please input commands to operate Robot. Valid commands include PLACE, MOVE, LEFT, RIGHT and REPORT.

> current robot is at: 3, 3, NORTH

## Test
To execute test cases, run
> npm test

To see coverage, run
> npm coverage


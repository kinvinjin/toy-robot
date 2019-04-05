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
 
## Setup
The application is developed in `Node.js (version v10.15.1)`. So, to execute the application, `Node.js` and `NPM` should be installed beforehand.

To install required npm modules for the application, run
>
npm install 

## Execution
To execute the app, run
>
npm start

or
>
node app

## Test
To execute test cases, run
>
npm test

To see coverage, run
>
npm coverage


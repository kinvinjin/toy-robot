/**
 * Robot class
 * All the specific functions to operate the robot
 */
const table = require('./table');
const { directions, errors } = require('./constants');

class Robot {
    validate() {
        // check if the robot has been on the table
        if (!table.isPlaced()) {
            throw new Error(errors.NOT_PLACED);
        }
    }

    go(x, y, f) {
        // it fails to move if the robot is moving out of the table
        if (!table.setPos({x, y, f})) {
            throw new Error(errors.OUT_OF_TABLE);
        }
        
        return table.getPos();
    }
    
    place(x, y, f) {
        return this.go(x, y, f);
    }
    
    move() {
        this.validate();
        let {x, y, f} = table.getPos();
        x += directions[f].x;
        y += directions[f].y;
        
        return this.go(x, y, f);
    }
    
    left() {
        this.validate();
        let {x, y, f} = table.getPos();
        f = directions[f].left;
        
        return this.go(x, y, f);
    }
    
    right() {
        this.validate();
        let {x, y, f} = table.getPos();
        f = directions[f].right;
        
        return this.go(x, y, f);
    }
    
    report() {
        this.validate();
        return table.getPos();
    }
};

module.exports = new Robot();
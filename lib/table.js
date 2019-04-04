/**
 * Provide the information of the table
 * It can be used to check if the robot is out of the table
 */
const width = require('./constants').table.WIDTH;
let pos = {};

class Table {
    constructor() {
        this.reset();
    }
    
    isPlaced() {
        if (pos && pos.f) {
            return true;
        }
        return false;
    }
    
    setPos(newPos) {
        // check if the new position will be out of the table
        if (newPos.x > width ||
                newPos.x < 0 ||
                newPos.y > width ||
                newPos.y < 0) {
            return false;
        }
        pos.x = newPos.x;
        pos.y = newPos.y;
        pos.f = newPos.f;
        
        return true;
    }
    
    getPos() {
        return pos;
    }
    
    reset() {
        pos = {};
    }
}

module.exports = new Table();

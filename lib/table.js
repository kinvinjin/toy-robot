/**
 * Provide capabilities to access the position info on the table
 * If new position is out of the table, it refuses to update the position.
 * 
 */
const WIDTH = require('./constants').table.WIDTH;
let pos = {};

class Table {
    constructor() {
        this.reset();
    }
    /**
     * Check if the position info is intialised
     * 
     * @return {Boolean} if true, the position is initialised.
     */
    isPlaced() {
        if (pos && pos.f) {
            return true;
        }
        return false;
    }
    /**
     * Update the position 
     * 
     * @param {Object} newPos
     * @return {Boolean} if true, the new position is set.
     */
    setPos(newPos) {
        // if the new position will be out of the table
        if (newPos.x > WIDTH || newPos.x < 0 ||
                newPos.y > WIDTH || newPos.y < 0) {
            return false;
        }
        // update
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

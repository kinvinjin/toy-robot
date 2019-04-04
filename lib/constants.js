module.exports = {
    table: {
        WIDTH: 5
    },
    directions: {
        NORTH: { x: 0, y: 1},
        SOUTH: { x: 0, y: -1},
        EAST: { x: 1, y: 0},
        WEST: { x: -1, y: 0}
    },
    commands: {
        PLACE: { name: 'PLACE', params: 3 },
        MOVE: { name: 'MOVE', params: 0 },
        LEFT: { name: 'LEFT', params: 0 },
        RIGHT: { name: 'RIGHT', params: 0 },
        REPORT: { name: 'REPORT', params: 0 }
    },
    errors: {
        NO_FILE: 'cannot find input file',
        NOT_PLACED: "the robot has not been placed on the table",
        OUT_OF_TABLE: "the robot will be out of the table",
        INVALID_PARAMS: 'the command is with incorrect params',
        INVALID_COMMAND: 'the command is invalid or unsupported'  
    }
}
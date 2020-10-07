const robot = require('robotjs');
const iohook = require('iohook');
const config = require('./config.json');


// sleep function to delay between mouse clicks
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let RUNNING = false;
iohook.start();

iohook.on('keydown', async event => {
    if(event.keycode === config.START_STOP_PROGRAM_KEY) {
        process.exit();

    } else if (event.keycode === config.START_STOP_CLICKING_KEY) {
        if (RUNNING === false) {
            RUNNING = true;
        } else {
            RUNNING = false;
        }
        
        while (RUNNING) {
            robot.mouseClick();
            await sleep(config.delay);
        }
    }
    
});

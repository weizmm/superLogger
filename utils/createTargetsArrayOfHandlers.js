import {
    CONSOLE_TARGET,
    FILE_TARGET,
} from '../config/constants.js';

import {
    consoleHandler,
    fileHandler,
} from '../targetsHandlers/index.js';

/**
 * @param {[String]} targets
 * @param {String} filePath 
 * @param {String} formattedMessage
 * @returns array of target's handlers as promises
 */
export const createTargetsArrayOfHandlers = (targets, filePath, formattedMessage) => {
    if (!targets || targets === []) {
        throw new Error("Must to send Targets array as argument to createTargetsArrayOfHandlers function");
    }
    try {
        let targetsArray = [];
        targets.forEach(target => {
            switch (target) {
                case CONSOLE_TARGET:
                    targetsArray.push({
                        handler: consoleHandler,
                        argsArray: [formattedMessage],
                    });
                    break;
                case FILE_TARGET:
                    targetsArray.push({
                        handler: fileHandler,
                        argsArray: [formattedMessage, filePath]
                    });
                    break;
                default:
                    throw new Error('Unrecognized target');
            }
        });
        return targetsArray;
    } catch (error) {
        throw (error);
    }
};
import {
    CONSOLE_TARGET,
    ERROR_SEVERITY,
    INFO_SEVERITY,
    DEBUG_SEVERITY,
    WARNING_SEVERITY,
    LOG_DEFAULT_PATH,
} from './config/constants.js';
import { createTargetsArrayOfHandlers } from './utils/createTargetsArrayOfHandlers.js';

export default class Logger {
    constructor(options) {
        this.targets = options?.targets || [CONSOLE_TARGET]; // array of targets as strings
        this.format = options?.format || basicFormat; //the format of the string message
        this.filePath = options?.filePath || LOG_DEFAULT_PATH; //the path withe the name of the log file
        this.hermetic = options?.hermetic || false; // optionally, warning when some of the targets not working
    }

    async log(severity, message) {
        const formattedMessage = this.format(severity, message);
        const targetsArrayOfHandlers = createTargetsArrayOfHandlers(this.targets, this.filePath, formattedMessage);

        const results = await Promise.allSettled(targetsArrayOfHandlers);
        if (this.hermetic) {
            const rejected = results.filter(result => result.status === 'rejected').map(result => result.reason);
            console.log(`MY_LOGGER: ${rejected}`);
        }
    }

    error(message) {
        this.log(ERROR_SEVERITY, message);
    }

    warning(message) {
        this.log(WARNING_SEVERITY, message);
    }

    info(message) {
        this.log(INFO_SEVERITY, message);
    }

    debug(message) {
        this.log(DEBUG_SEVERITY, message);
    }
};


const basicFormat = (severity, message) => {
    if (!severity || !message) {
        throw new Error('the severity and message arguments must to passed to basic format');
    }
    return `${severity}: ${message} ${new Date(Date.now())}`;
};
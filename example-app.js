import Logger from './Logger.js';

const specialFormat = (severity, message) => {
    if (!severity || !message) {
        throw new Error('It is mandatory to pass the message and severity arguments to the format of the log');
    }
    return `${severity}: ${message}`;
};

const optionsToLoggerToFileAndConsole = {
    targets: ['console', 'file'],
    filePath: './bla/fileAndConsole.log',
    hermetic: true, // change the filePath to valid one for writing also to file
};

const optionsToLoggerToFile = {
    targets: ['file'],
    filePath: './onlyToFile.log',
};


const optionsToLoggerToConsole = {
    targets: ['console'],
    format: specialFormat,
};


const loggerToFileAndConsole = new Logger(optionsToLoggerToFileAndConsole);
const loggerToFile = new Logger(optionsToLoggerToFile);
const loggerToConsole = new Logger(optionsToLoggerToConsole);

loggerToFile.log('info', 'i am info message only to file');
loggerToConsole.info('i am info message only to console and i have another format');
loggerToFileAndConsole.error('i am error message');
loggerToFileAndConsole.warning('i am warning message');
loggerToFileAndConsole.debug('i am debug message');

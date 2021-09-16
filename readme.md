# Super Logger

## Introduction

Super Logger is a package that allows easy writing of logs.

The capabilities that the package includes are:
* Customize the log structure
* Can create multiple intensities
* Allows writing to multiple destinations at once
* Allows you to get an indication when there is a writing error for one of the destinations
* Allows to accept severity as a variable

## Code Samples

There are 4 types of options for configuring the logger:
```javascript
targets = options.targets || [CONSOLE_TARGET];     // array of targets as strings
format = options.format || basicFormat;     //the format of the string message
filePath = options.filePath || LOG_DEFAULT_PATH;     //the path withe the name of the log file
hermetic = options.hermetic || false;     // optionally, warning when some of the targets not working
```
and there are 4 types of severity:
```javascript
logger.log('info', 'i am info message'); // dynamic shape, the first argument is the severity of the log
logger.info('i am info message);
logger.error('i am error message');
logger.warning('i am warning message');
logger.debug('i am debug message');
```
There are two types of targets:
* console
* file

Full example:
```javascript
import Logger from './Logger.js';

const specialFormat = (severity, message) => {
    if (!severity || !message) {
        throw new Error('the severity and message arguments must to passed to basic format');
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
```

## Installation

> The installation instructions are low priority in the readme and should come at the bottom. The first part answers all their objections and now that they want to use it, show them how.
/**
 * write the message to the console
 * @param {String} formattedMessage 
 */
export const consoleHandler = (formattedMessage) => {
    try {
        if (!formattedMessage) {
            throw new Error('must to pass message');
        }
        console.log(formattedMessage);
    } catch (error) {
        throw new Error(`An error occurred while trying to log to console: ${error.message}`);

    }
};
/**
 * write the message to the console
 * @param {String} formattedMessage 
 */
export const consoleHandler = async (formattedMessage) => {
    try {
        if (!formattedMessage || !filePath) {
            throw new Error('must to pass message');
        }
        console.log(formattedMessage);
    } catch (error) {
        throw new Error(`An error occurred while trying to log to console: ${error.message}`);

    }
};
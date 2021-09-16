import fs from 'fs';

/**
 * write the message to file and create it if the file not exist
 * @param {String} formattedMessage 
 * @param {String} filePath 
 */
export const fileHandler = async (formattedMessage, filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            await fs.appendFileSync(filePath, `${formattedMessage}\r\n`);
        } else {
            await fs.writeFileSync(filePath, `${formattedMessage}\r\n`)
        }

    } catch (error) {
        throw new Error(`An error occurred while trying to log to file, ${error}`);
    }
};
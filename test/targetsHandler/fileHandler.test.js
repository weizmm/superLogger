import { fileHandler } from "../../targetsHandlers/fileHandler";
import fs from 'fs';

describe('file-target handler', () => {
  let filePath = './logForTest';
  let message = 'i am message';
  
  beforeEach(() => {
    if (fs.existsSync(`${filePath}`)) {
      fs.unlinkSync(filePath);
    }
  })
  afterEach(() => {
    if (fs.existsSync(`${filePath}`)) {
      fs.unlinkSync(filePath);
    }
  })

  it('enforce passing message and filePath arguments', async () => {
    expect.assertions(1);
    await expect(fileHandler()).rejects.toMatchObject(
      new Error('An error occurred while trying to log to file: must to pass filePath and message')
    );
  });
  it('create file in filePath and write the message in the log', async () => {
    expect.assertions(2)
    try {
      await fileHandler(message, filePath);
      expect(fs.existsSync(`${filePath}`)).toBe(true);
      let messageFromLogFile = fs.readFileSync(filePath, 'utf-8');
      expect(messageFromLogFile === `${message}\r\n`).toBe(true);
    } catch (error) {
      throw ('fileHandler failed to create log file');
    }
  })
});



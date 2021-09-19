import { consoleHandler } from "../../targetsHandlers";

describe('console-target handler', () => {
  
    it('enforce passing message argument', async () => {
      expect.assertions(1);
      await expect(consoleHandler()).rejects.toMatchObject(
        new Error('An error occurred while trying to log to console: must to pass message')
      );
    });
  });
  
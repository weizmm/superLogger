import { consoleHandler } from "../../targetsHandlers";

describe.only('console-target handler', () => {

  it('enforce passing message argument', async () => {
    expect.assertions(1);
    try {
      await consoleHandler();
    } catch (error) {
      expect(error.message).toEqual('An error occurred while trying to log to console: must to pass message');
    }
  });
});

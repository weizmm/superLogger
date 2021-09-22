import { createTargetsArrayOfHandlers } from "../../utils/createTargetsArrayOfHandlers";
import { CONSOLE_TARGET } from '../../config/constants.js';
import { consoleHandler } from '../../targetsHandlers/index.js';

describe('createTargetsArrayOfHandlers', () => {

    it('enforce passing targets array as argument', async () => {
        expect.assertions(1);
        try {
            createTargetsArrayOfHandlers();
        } catch (error) {
            expect(error).toEqual(new Error('Must to send Targets array as argument to createTargetsArrayOfHandlers function'));
        }
    });

    it('throw error when accept unrecognized target name', () => {
        let targets = ['i am not recognized target'];
        expect.assertions(1);
        try {
            createTargetsArrayOfHandlers(targets);
        } catch (error) {
            expect(error).toEqual(new Error('Unrecognized target'));
        }
    });

    it('return array of targetsHandlers', () => {
        let targets = [CONSOLE_TARGET];
        const results = createTargetsArrayOfHandlers(targets, null, 'message');
        expect(results instanceof Array).toBe(true);
        expect(results[0]).toHaveProperty('handler', consoleHandler);
        expect(results.length === 1).toBe(true);
    });
});
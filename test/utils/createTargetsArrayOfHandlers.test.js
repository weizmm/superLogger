import createTargetsArrayOfHandlers from "../../utils/createTargetsArrayOfHandlers";
import { CONSOLE_TARGET } from '../../config/constants.js';

describe('createTargetsArrayOfHandlers', () => {

    it('enforce passing targets array as argument', async () => {
        expect.assertions(1);
        try {
            createTargetsArrayOfHandlers();
        } catch (error) {
            expect(error).toEqual(new Error('Must to send Targets array as argument to createTargetsArrayAsPromises function'));
        }
    });

    it('return array of promises', () => {
        let targets = [CONSOLE_TARGET];
        const results = createTargetsArrayOfHandlers(targets);
        expect(
            results instanceof Array &&
            results[0] instanceof Promise &&
            results.length === 1
        ).toBe(true);
    });

    it('throw error when accept unrecognized target name', () => {
        let targets = ['i am not recognized target'];
        try {
            const results = createTargetsArrayOfHandlers(targets);
        } catch (error) {
            expect(error).toEqual(new Error('Unrecognized target'));
        }
    })
});
import Logger from '../Logger.js';
import { CONSOLE_TARGET, FILE_TARGET } from '../config/constants.js';


describe("Logger", () => {
    describe('write to different severities in default initialization', () => {
        const logger = new Logger();
        const log = console.log;
        jest.spyOn(Date, 'now').mockImplementation(() => 1632142612063);
        beforeEach(() => {
            console.log = jest.fn();
        });
        afterEach(() => {
            console.log = log;
        });
        it('write info logs', async () => {
            logger.info('i am log');
            expect(console.log).toHaveBeenCalledWith(`info: i am log ${new Date(Date.now())}`);
        });
        it('write debug logs', async () => {
            logger.debug('i am log');
            expect(console.log).toHaveBeenCalledWith(`debug: i am log ${new Date(Date.now())}`);
        });
        it('write warning logs', async () => {
            logger.warning('i am log');
            expect(console.log).toHaveBeenCalledWith(`warning: i am log ${new Date(Date.now())}`);
        });
        it('write error logs', async () => {
            logger.error('i am log');
            expect(console.log).toHaveBeenCalledWith(`error: i am log ${new Date(Date.now())}`);
        });
    });
    // TBD
    it('accept other format', () => {
        const specialFormat = (severity, message) => {
            return `${severity}: ${message}`;
        };
        const options = {
            targets: [CONSOLE_TARGET],
            format: specialFormat,
        };
        const logger = new Logger(options);
        console.log = jest.fn();
        logger.info('i am log in special format');
        expect(console.log).toBeCalledWith('info: i am log in special format');
    })

    it('write warning in hermetic state', async() => {
        const log = console.log;
        console.log = jest.fn((a)=>log(a));
        const filePath = './bla/fileAndConsole.log' //must to be not exist
        const options = {
            targets: [FILE_TARGET],
            filePath: filePath,
            hermetic: true,
        };
        const logger = new Logger(options);
        await logger.info('i am hermetic');
        expect(console.log).toBeCalledWith(`MY_LOGGER: Error: An error occurred while trying to log to file: ENOENT: no such file or directory, open '${filePath}'`);
    })
});
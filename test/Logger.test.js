import Logger from '../Logger.js';


describe("Logger", () => {
    describe('write to different severities in default initialization', () => {
        const logger = new Logger();
        const log = console.log;
        const dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1632142612063);
        beforeEach(() => {
            console.log = jest.fn();
        });
        afterEach(() => {
            console.log = log;
        });
        it('write info logs', async () => {
            logger.info('i am log');
            expect(console.log).toHaveBeenCalledWith(`info: i am log ${new Date(dateNowSpy())}`);
        });
        it('write debug logs', async () => {
            logger.debug('i am log');
            expect(console.log).toHaveBeenCalledWith(`debug: i am log ${new Date(dateNowSpy())}`);
        });
        it('write warning logs', async () => {
            logger.warning('i am log');
            expect(console.log).toHaveBeenCalledWith(`warning: i am log ${new Date(dateNowSpy())}`);
        });
        it('write error logs', async () => {
            logger.error('i am log');
            expect(console.log).toHaveBeenCalledWith(`error: i am log ${new Date(dateNowSpy())}`);
        });
    });
    // TBD
    describe('accept other format',()=>{

    })

    // TBD
    describe('write warning in hermetic state',()=>{

    })
});
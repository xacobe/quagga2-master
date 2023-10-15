import { describe, it } from 'mocha';
import { expect } from 'chai';
import { enumerateDevices, getUserMedia } from '../../mediaDevices';

describe('mediaDevices (node)', () => {
    it('enumerateDevices rejects', async () => {
        try {
            const x = await enumerateDevices();
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions,no-unused-expressions
            expect(x).to.not.exist;
        } catch (err: any) { // TODO: TS 4.4.4 gives us the welcome 'unknown' default for catches, but doesn't allow us to specify anything other than 'any'!! ?????
            // expect(err.message).to.equal('enumerateDevices is not defined');
            expect(err.code).to.equal(-1);
        }
    });
    it('getUserMedia rejects', async () => {
        try {
            const x = await getUserMedia({});
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions,no-unused-expressions
            expect(x).to.not.exist;
        } catch (err: any) { // TODO: TS 4.4.4+ improvement?
            // expect(err.message).to.equal('getUserMedia is not defined');
            expect(err.code).to.equal(-1);
        }
    });
});

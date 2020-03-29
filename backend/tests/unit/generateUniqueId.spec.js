const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    const id = generateUniqueId();

    it('should generate an unique ID', () => {
        expect(id).toHaveLength(8);
    });
});
const axios = require('axios');
const requestMultipleUrls = require('../index');

jest.mock('axios');

beforeEach(() => {
    axios.get.mockReset();
    axios.get.mockResolvedValue(null);
})

it.each([[0],[1],[2],[3],[4],[5]])('Called with an array of %i url', async (numberOfUrls) => {
    const urls = [];
    for(let i=0; i<numberOfUrls; i++) {
        urls.push('http://localhost');
    }

    await requestMultipleUrls(urls);

    expect(axios.get).toHaveBeenCalledTimes(numberOfUrls);
});

it('Called with invalid argument', async () => {
    const invalidArgument = 'http://localhost';

    expect(() => requestMultipleUrls(invalidArgument)).toThrow();
});

it('Called with no argument', async () => {
    expect(() => requestMultipleUrls()).toThrow();
});
const axios = require("axios")

const requestOneUrl = (url) => {
    return axios.get(url).then(response =>  response.data);
};

module.exports = (urls) => {
    if(!Array.isArray(urls)) {
        throw new Error('First argument should be an array of urls')
    }
    return Promise.allSettled(urls.map(requestOneUrl));
}
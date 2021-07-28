var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

module.exports = LocalServiceRegistry.createService('http.catapi', {
    createRequest: function (svc, type, count) {
        svc.setURL(svc.getURL() + "images/search");
        svc.addHeader("x-api-key", svc.getConfiguration().getCredential().getPassword());
        svc.addParam('limit', count);
        svc.addParam('mime_types', type.join(','));
        svc.setRequestMethod('GET');

        svc.setCachingTTL(10);
    },

    parseResponse: function (svc, client) {
        if (client.statusCode === 200) {
            return JSON.parse(client.getText());
        }

        return [];
    }
});

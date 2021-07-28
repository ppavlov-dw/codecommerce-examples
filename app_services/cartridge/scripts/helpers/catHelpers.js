var getImagesService = require('*/cartridge/scripts/services/cats/getCatsApiImages');

function getImages(type, count) {
    var response = getImagesService.call(type, count);

    if (response.isOk()) {
        return response.getObject();
    }

    return [];
}

module.exports = {
    getImages: getImages
};

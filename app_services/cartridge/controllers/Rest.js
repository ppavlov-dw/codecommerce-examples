function cats() {
    var ISML = require("dw/template/ISML");
    var catHelpers = require('*/cartridge/scripts/helpers/catHelpers');

    var images = catHelpers.getImages(['gif'], 3);

    ISML.renderTemplate("cats", {
      images: images
    });
}

cats.public = true;

module.exports.Cats = cats;

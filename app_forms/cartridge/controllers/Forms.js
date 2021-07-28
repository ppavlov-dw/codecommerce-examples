function getBirthYears() {
    var currentYear = new Date().getFullYear() - 18;
    var birthYears = [];

    for (var j = 0; j < 10; j++) {
        var year = currentYear + j;

        birthYears.push({
            year: year,
            value: year.toFixed(),
            label: 'year ' + year
        });
    }

    return birthYears;
}

function populateBirthYears(field) {
    var ArrayList = require('dw/util/ArrayList');

    var years = getBirthYears();
    field.setOptions(new ArrayList(years).iterator());
}

function renderSampleForm() {
    var ISML = require('dw/template/ISML');
    var HashMap = require('dw/util/HashMap');
    var URLUtils = require('dw/web/URLUtils');

    var params = new HashMap();
    var sampleForm = session.getForms().sample;

    populateBirthYears(sampleForm.personalDetails.birthYear);

    params.sampleForm = sampleForm;
    params.submitUrl = URLUtils.url("Forms-SubmitSampleForm");
    params.success = session.custom.sampleFormSuccess;

    ISML.renderTemplate('sampleForm', params);

    session.custom.sampleFormSuccess = false;
}

function submitSampleForm() {
    var URLUtils = require('dw/web/URLUtils');

    var form = session.getForms().sample;

    if (form.valid) {
        session.custom.sampleFormSuccess = true;
    }

    response.redirect(URLUtils.url('Forms-RenderSampleForm'));
}

renderSampleForm.public = true;
submitSampleForm.public = true;

module.exports.RenderSampleForm = renderSampleForm;
module.exports.SubmitSampleForm = submitSampleForm;

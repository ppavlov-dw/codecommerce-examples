module.exports.validateName = function (form) {
    var FormElementValidationResult = require('dw/web/FormElementValidationResult');

    if (formField.value === 'invalid') {
        return FormElementValidationResult(false, 'custom validation');
    }

    return true;
}

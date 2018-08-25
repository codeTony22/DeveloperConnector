const Validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateExperienceInput(data) {
    let errors = {};

    data.title = !isEmpty( data.email ) ? data.email : '';
    data.company = !isEmpty( data.company ) ? data.company : '';
    data.from = !isEmpty( data.from ) ? data.from : '';

    if( Validator.isEmpty(data.title)) {
        errrors.title = 'Job title firld is required';
    }
    if( Validator.isEmpty(data.company)) {
        errors.company = 'Company field is required';
    }
    if( Validator.isEmpty(data.from)) {
        errors.from = 'From date field is required';
    }

    

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
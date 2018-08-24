const Validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateRegisterInput( data ) {
    let errors = {};

    // Check if data.name is a string, if false set as an empty string
    data.name = !isEmpty( data.name ) ? data.name : '';
    data.email = !isEmpty( data.email ) ? data.email : '';
    data.password = !isEmpty( data.password ) ? data.password : '';
    data.password2 = !isEmpty( data.password2 ) ? data.password2 : '';


    // Check if the name is in the min and max range
    if( !Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }
    // Check if the name field is empty
    if(Validator.isEmpty( data.name )) {
        errors.name = 'Name field is required';
    }
    // Check if the email field is empty
    if(Validator.isEmpty( data.email )) {
        errors.email = 'Email field is required';
    }
    // Check if the email is a valid email
    if(!Validator.isEmail( data.email )) {
        errors.email = 'Email is invalid';
    }
    // Check if the password field is empty
    if(Validator.isEmpty( data.password )) {
        errors.password = 'Password field is required';
    }
    // Validate the password field
    if(!Validator.isLength( data.password, {min: 6 , max: 30 } )) {
        errors.password = 'Password must be at least 6 characters';
    }
    // Check if the password2 field is empty
    if(Validator.isEmpty( data.password2 )) {
        errors.password = 'Confirm Password field is required';
    }
    // Check if password and password2 match
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};
import { isValidPhoneNumber } from 'react-phone-number-input';

const regexEmail = /.+@.+\..+/;
const passLength = 8;
const messageLength = 8;

const messages = {
  email: {
    required: 'Email is required',
    inValid: 'Invalid email address'
  },
  password: {
    required: 'Password is required',
    length: `Password must be at least ${passLength} characters`,
    confirmPassword: 'Passwords must match'
  },
  message: {
    required: 'Message is required',
    length: `Message must be at least ${messageLength} characters`
  },
  required: 'This field is required',
  agreement: {
    required: 'You must agree to the Terms and Conditions'
  },
  phone: {
    invalid: 'Invalid phone number'
  }
};

export function email(value) {

  if ( !value ) {
    return messages.email.required;
  }

  if ( !regexEmail.test(value) ) {
    return messages.email.inValid;
  }

  return true;
}

export function password(value) {

  if ( !value ) {
    return messages.password.required;
  }

  if ( value.length < passLength ) {
    return messages.password.length;
  }

  return true;
}

export function message(value) {

  if (!value) {
    return messages.message.required;
  }

  if ( value.length < messageLength) {
    return messages.message.length;
  }

  return true;
}

export function comparePasswords(firstValue, confirmValue) {

  if (firstValue === '' && confirmValue === '') {
    return messages.required;
  }

  if (confirmValue !== firstValue) {
    return messages.password.confirmPassword;
  }

  return true;
}

export function required(value) {

  if (!value) {
    return messages.required;
  }

  return true;
}

export function checkAgreement(value) {

  if (!value) {
    return messages.agreement.required;
  }

  return true;
}

export function phone(value) {

  if ( value !== '' && !isValidPhoneNumber(value) ) {
    return messages.phone.invalid;
  }

  return true;
}

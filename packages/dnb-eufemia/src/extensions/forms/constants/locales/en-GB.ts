export default {
  'en-GB': {
    /**
     * General
     */
    SubmitButton: {
      text: 'Send',
      sendText: 'Send',
    },
    Step: {
      next: 'Next',
      previous: 'Back',
      edit: 'Edit',
      summaryTitle: 'Summary',
    },
    Form: {
      errorSummaryTitle: 'Please correct the following errors',
    },
    Iterate: {
      remove: 'Remove',
      done: 'Done',
      cancel: 'Cancel',
      edit: 'Edit',
    },

    /**
     * Base fields
     */
    Field: {
      stateSummary: 'Summary:',
      errorSummary: 'Please correct the following errors:',
      errorRequired: 'This field is required.',
      errorPattern: 'The value is invalid.',
    },
    StringField: {
      errorMinLength:
        'The value cannot be shorter than {minLength} characters.',
      errorMaxLength:
        'The value cannot be longer than {maxLength} characters.',
    },
    NumberField: {
      errorMinimum: 'The value must be at least {minimum}.',
      errorMaximum: 'The value must be a maximum of {maximum}.',
      errorExclusiveMinimum:
        'The value must be greater than {exclusiveMinimum}.',
      errorExclusiveMaximum:
        'The value must be less than {exclusiveMaximum}.',
      errorMultipleOf: 'The value must be a multiple of {multipleOf}.',
    },
    BooleanField: {
      yes: 'Yes',
      no: 'No',
    },

    /**
     * Feature fields
     */
    Date: {
      label: 'Date',
      errorRequired: 'You must provide a valid date.',
    },
    Expiry: {
      label: 'Expiry date',
    },
    Email: {
      label: 'Email address',
      errorRequired: 'You must enter a Email address.',
      errorPattern: 'Invalid Email address. Enter a valid Email address.',
    },
    FirstName: {
      label: 'Given name',
      errorRequired: 'You must enter a given name (first name).',
      errorPattern:
        'Enter a given name (first name) using only letters and characters such as hyphens and spaces.',
    },
    LastName: {
      label: 'Surname',
      errorRequired: 'You must enter a surname (last name).',
      errorPattern:
        'Enter a surname (last name) using only letters and characters such as hyphens and spaces.',
    },
    CompanyName: {
      label: 'Company name',
      errorRequired: 'You must enter a company name.',
    },
    NationalIdentityNumber: {
      label: 'National identity number (11 digits)',
      errorRequired:
        'Invalid national identity number. Enter a valid 11-digit number.',
    },
    OrganizationNumber: {
      label: 'Organisation number',
      errorRequired: 'You must enter an organisation number.',
      errorPattern: 'This is not a valid organisation number.',
    },
    BankAccountNumber: {
      label: 'Bank account',
      errorRequired:
        'Enter a valid account number. Account number is mandatory to fill out.',
      errorPattern: 'This is not a valid bank account number.',
    },
    PhoneNumber: {
      label: 'Mobile number',
      countryCodeLabel: 'Country code',
      errorRequired:
        'Mobile number must be filled in. If you don’t have a mobile number, you can enter another phone number.',
      warningRequired:
        'You have not entered a mobile number. You can still use this number if it is correct.',
    },
    PostalCodeAndCity: {
      label: 'Postcode and city',
    },
    PostalCode: {
      label: 'Postc.',
      errorRequired: 'You must enter a postcode.',
      errorPattern: 'This is not a valid postcode (four-digits).',
    },
    City: {
      label: 'City',
      errorRequired: 'You must enter a city name.',
      errorPattern:
        'City names can only contain letters and valid characters such as hyphens and spaces.',
    },
    SelectCountry: {
      label: 'Country',
      placeholder: 'Select country',
      errorRequired: 'You must select a country from the list.',
    },
    Password: {
      label: 'Password',
      ariaLabelShow: 'Show password',
      ariaLabelHide: 'Hide password',
    },
  },
}

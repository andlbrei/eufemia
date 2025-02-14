export default {
  'nb-NO': {
    /**
     * General
     */
    SubmitButton: {
      text: 'Send',
      sendText: 'Send inn',
    },
    Step: {
      next: 'Neste',
      previous: 'Tilbake',
      edit: 'Endre',
      summaryTitle: 'Oppsummering',
    },
    Form: {
      errorSummaryTitle: 'Feil som må rettes',
    },
    Iterate: {
      remove: 'Fjern',
      done: 'Ferdig',
      cancel: 'Avbryt',
      edit: 'Endre',
    },

    /**
     * Base fields
     */
    Field: {
      stateSummary: 'Oppsummering:',
      errorSummary: 'Feil som må rettes:',
      errorRequired: 'Dette feltet må fylles ut.',
      errorPattern: 'Verdien er ugyldig.',
    },
    StringField: {
      errorMinLength:
        'Verdien kan ikke være kortere enn {minLength} tegn.',
      errorMaxLength: 'Verdien kan ikke være lengre enn {maxLength} tegn.',
    },
    NumberField: {
      errorMinimum: 'Verdien må være minst {minimum}.',
      errorMaximum: 'Verdien må være maksimalt {maximum}.',
      errorExclusiveMinimum:
        'Verdien må være større enn {exclusiveMinimum}.',
      errorExclusiveMaximum:
        'Verdien må være mindre enn {exclusiveMaximum}.',
      errorMultipleOf: 'Verdien må være et multiplum av {multipleOf}.',
    },
    BooleanField: {
      yes: 'Ja',
      no: 'Nei',
    },

    /**
     * Feature fields
     */
    Date: {
      label: 'Dato',
      errorRequired: 'Du må angi en gyldig dato.',
    },
    Expiry: {
      label: 'Utløpsdato',
    },
    Email: {
      label: 'E-postadresse',
      errorRequired: 'Du må fylle inn en e-postadresse.',
      errorPattern: 'Ugyldig e-postadresse. Skriv inn en e-postadresse.',
    },
    FirstName: {
      label: 'Fornavn',
      errorRequired: 'Du må fylle inn fornavn.',
      errorPattern:
        'Kun bokstaver og tegn som bindestrek og mellomrom er tillatt.',
    },
    LastName: {
      label: 'Etternavn',
      errorRequired: 'Du må fylle inn etternavn.',
      errorPattern:
        'Kun bokstaver og tegn som bindestrek og mellomrom er tillatt.',
    },
    CompanyName: {
      label: 'Firmanavn',
      errorRequired: 'Du må fylle inn firmanavn.',
    },
    NationalIdentityNumber: {
      label: 'Fødselsnummer (11 siffer)',
      errorRequired:
        'Ugyldig fødselsnummer. Skriv inn et gyldig fødselsnummer med 11 siffer.',
    },
    OrganizationNumber: {
      label: 'Organisasjonsnummer',
      errorRequired: 'Du må fylle inn et organisasjonsnummer.',
      errorPattern: 'Dette er ikke et gyldig organisasjonsnummer.',
    },
    BankAccountNumber: {
      label: 'Bankkonto',
      errorRequired:
        'Skriv inn et gyldig kontonummer. Kontonummeret må fylles ut.',
      errorPattern: 'Dette er ikke et gyldig kontonummer.',
    },
    PhoneNumber: {
      label: 'Mobilnummer',
      countryCodeLabel: 'Landskode',
      errorRequired:
        'Mobilnummer må fylles ut. Hvis du ikke har et mobilnummer, kan du oppgi et annet telefonnummer.',
      warningRequired:
        'Du har ikke skrevet inn et mobilnummer. Du kan likevel bruke dette nummeret hvis det er riktig.',
    },
    PostalCodeAndCity: {
      label: 'Postnummer og sted',
    },
    PostalCode: {
      label: 'Postnr.',
      errorRequired: 'Du må fylle inn et postnummer.',
      errorPattern: 'Dette er ikke et gyldig postnummer (fire siffer).',
    },
    City: {
      label: 'Sted',
      errorRequired: 'Du må fylle inn et stedsnavn.',
      errorPattern:
        'Stedsnavn kan kun inneholde bokstaver og gyldige tegn som bindestrek og mellomrom.',
    },
    SelectCountry: {
      label: 'Land',
      placeholder: 'Velg et land',
      errorRequired: 'Du må velge et land fra listen.',
    },
    Password: {
      label: 'Passord',
      ariaLabelShow: 'Vis passord',
      ariaLabelHide: 'Skjul passord',
    },
  },
}

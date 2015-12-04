Realize.i18n.registerLocale({
  true: 'Yes',
  false: 'No',
  loading: 'Loading...',
  select: 'Select',
  actions: {
    new: 'New',
    send: 'Send',
    filter: 'Filter',
    clear: 'Clear',
    add: 'Add',
    update: 'Update',
    cancel: 'Cancel'
  },

  table: {
    emptyResult: 'No results found.',
    selection: {
      clear: 'clear selection',
      selectAll: 'select all :count items',
      select: {
        singular: '1 item selected',
        plural: ':count items selected'
      }
    }
  },

  masks: {
    date: 'mm/dd/yyyy',
    datetime: {
      mask: 'm/d/y h:s',
      placeholder: 'mm/dd/yyyy, hh:ss'
    },
    cpf: '999.999.999-99',
    cnpj: '99.999.999/9999-99',
    phone: '(99) 9999[9]-9999',
    decimal: {
      mask: '999.999.999,99',
      numericInput: true,
      rightAlign: true
    },
    currency: {
      mask: '$ 999.999.999,99',
      numericInput: true,
      rightAlign: true
    }
  },

  inputs: {
    autocomplete: {
      emptyResult: 'No items found.',
      clear: 'Clear selected items'
    }
  },

  date: {
    formats: {
      default: 'MM/DD/YYYY HH:mm',
      date: 'MM/DD/YYYY'
    }
  },




}, 'en');
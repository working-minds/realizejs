Realize.i18n.registerLocale({
  true: 'Sim',
  false: 'Não',
  ok: 'Ok',
  loading: 'Carregando...',
  select: 'Selecione',
  actions: {
    new: 'Novo',
    send: 'Enviar',
    filter: 'Filtrar',
    clear: 'Limpar',
    add: 'Adicionar',
    update: 'Atualizar',
    cancel: 'Cancelar'
  },

  table: {
    emptyResult: 'Nenhum resultado foi encontrado.',
    destroyConfirm: 'Tem certeza que deseja remover este item?',
    selection: {
      clear: 'limpar seleção',
      selectAll: 'selecionar todos os :count itens',
      select: {
        singular: '1 item selecionado',
        plural: ':count itens selecionados'
      }
    }
  },

  masks: {
    date: {
      alias: 'dd/mm/yyyy'
    },
    datetime: {
      mask: 'd/m/y h:s',
      placeholder: 'dd/mm/yyyy, hh:ss'
    },
    cpf: '999.999.999-99',
    cnpj: '99.999.999/9999-99',
    phone: '(99) 9999[9]-9999',
    integer: {
      alias: "integer"
    },
    decimal: {
      alias: "decimal",
      groupSeparator: ".",
      radixPoint: ",",
      removeMaskOnSubmit: true
    },
    currency: {
      alias: "currency",
      prefix: "R$ ",
      groupSeparator: ".",
      radixPoint: ",",
      placeholder: "0",
      removeMaskOnSubmit: true
    }
  },

  inputs: {
    autocomplete: {
      emptyResult: 'Nenhum item foi encontrado.',
      clear: 'Limpar itens selecionados'
    },

    datefilter: {
      from: 'De',
      to: 'Até'
    },

    file: {
      buttonName: 'Arquivo'
    }
  },

  date: {
    formats: {
      default: 'DD/MM/YYYY HH:mm',
      date: 'DD/MM/YYYY'
    }
  },

  errors: {
    invalidAction: "Ação inválida",
    inputSelect: {
      invalidOption: "Formato inválido de opção de select (Formato esperado: {name:\"\", value:\"\"})"
    }
  }

}, 'pt-BR');
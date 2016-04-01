Realize.themes.registerTheme({
  grid: {
    cssClass: 'grid row',

    filter: {
      wrapper: {
        cssClass: 'grid__filter col s12'
      }
    },

    table: {
      cssClass: 'grid__table col s12'
    },

    pagination: {
      cssClass: 'grid__pagination col s12'
    }
  },

  table: {
    cssClass: 'table striped',

    wrapper: {
      cssClass: 'table-wrapper'
    },

    actions: {
      cssClass: 'table__actions'
    },

    selectionIndicator: {
      cssClass: 'table__selection-indicator'
    },

    header: {
      cssClass: 'table-header',

      label: {
        cssClass: 'table-header__name'
      }
    },

    select: {
      cssClass: 'table-select'
    },

    row: {
      cssClass: 'table-row',

      actions: {
        cssClass: 'table-row__actions'
      }
    },

    cell: {
      cssClass: 'table-cell'
    }
  },

  form: {
    cssClass: 'form row',

    buttonGroup: {
      cssClass: 'form__button-group col s12 m12 l12 right-align'
    },

    inputGroup: {
      cssClass: 'form__input-group',

      section: {
        cssClass: 'input-group__section'
      },

      divider: {
        cssClass: 'input-group__divider'
      }
    }
  },

  gridForm: {
    cssClass: 'grid-form'
  },

  input: {
    cssClass: 'form__input input-field',

    grid: {
      default: {
        cssClass: 'col l6 m6 s12'
      },

      filter: {
        cssClass: 'col l3 m4 s12'
      },

      oneLine: {
        cssClass: 'col s12'
      }
    },

    error: {
      cssClass: 'invalid',

      hint: {
        cssClass: 'form__input-error'
      }
    },

    text: {
      cssClass: ''
    },

    autocomplete: {
      cssClass: 'input-autocomplete',

      result: {
        cssClass: 'input-autocomplete__result z-depth-1'
      },

      list: {
        cssClass: 'input-autocomplete__list'
      },

      option: {
        cssClass: 'input-autocomplete__option',
        active: {
          cssClass: 'active'
        }
      },

      select: {
        cssClass: 'select-wrapper initialized'
      },

      actionButton: {
        cssClass: 'button btn waves-effect waves-light black-text grey lighten-2'
      }
    },

    checkbox: {
      cssClass: ''
    },

    switch: {
      cssClass: 'input-switch switch'
    },

    datefilter: {
      cssClass: 'input-datefilter',

      select: {
        cssClass: 'input-datefilter__select select-wrapper initialized'
      },

      body: {
        cssClass: 'input-datefilter__body z-depth-1'
      }
    },

    datepicker: {
      cssClass: 'datepicker'
    },

    select: {
      cssClass: ''
    },

    textarea: {
      cssClass: 'materialize-textarea'
    },

    file: {
      cssClass: 'file-path',

      wrapper: {
        cssClass: 'file-field'
      },

      filePathWrapper: {
        cssClass: 'file-path-wrapper'
      },

      button: {
        cssClass: 'button btn'
      }

    },

    colorpicker: {
      cssClass: 'colorpicker__input',

      wrapper: {
        cssClass: 'colorpicker__wrapper'
      },

      display: {
        cssClass: 'colorpicker__display'
      }
    },

    gridform: {
      cssClass: 'input-gridForm',

      label: {
        cssClass: 'input-gridForm__label'
      }
    }
  },

  label: {
    cssClass: 'label',

    active: {
      cssClass: 'active'
    }
  },

  button: {
    cssClass: 'button btn waves-effect waves-light',

    group: {
      cssClass: 'button-group'
    },

    floating: {
      cssClass: 'button button--floating btn-floating btn-large waves-effect waves-light'
    },

    flat: {
      cssClass: 'button button--flat btn-flat waves-effect waves-grey'
    },

    iconOnly: {
      cssClass: 'button--icon'
    },

    cancel: {
      cssClass: 'button-cancel black-text grey lighten-4'
    },

    danger: {
      cssClass: 'button-danger red lighten-1'
    }
  },

  pagination: {
    cssClass: 'pagination',

    item: {
      cssClass: 'waves-effect',

      disabled: {
        cssClass: 'disabled'
      },

      active: {
        cssClass: 'active'
      }
    }
  },

  flash: {
    cssClass: 'flash card z-depth-0',

    content: {
      cssClass: 'flash__content card-content'
    },

    dismiss: {
      cssClass: 'flash__dismiss card-action'
    },

    info: {
      cssClass: 'flash--info blue lighten-4',

      content: {
        cssClass: 'blue-text darken-4'
      }
    },

    warning: {
      cssClass: 'flash--warning amber lighten-4',

      content: {
        cssClass: 'orange-text darken-4'
      }
    },

    error: {
      cssClass: 'flash--error red lighten-4',

      content: {
        cssClass: 'red-text darken-4'
      }
    },

    success: {
      cssClass: 'flash--success green lighten-4',

      content: {
        cssClass: 'green-text darken-4'
      }
    }
  },

  tabs: {
    cssClass: 'tabs-container',

    tabButton: {
      cssClass: 'tab',

      error: {
        cssClass: 'tab--error red lighten-4'
      }
    }

  },

  header: {
    cssClass: 'blue-grey darken-2'
  },

  sidenav: {

    button: {
      cssClass: 'sidenav__button'
    }
  },

  modal: {
    cssClass: 'card realize-modal',

    header: {
      cssClass: 'card-content modal-header',
      withTitle: {
        cssClass: 'with-title'
      }
    },

    content: {
      cssClass: 'card-content modal-content'
    },

    footer: {
      cssClass: 'card-content modal-footer',
      withSeparator: {
        cssClass: 'with-separator'
      }
    }
  },


  icon: {
    cssClass: 'material-icons',

    left: 'chevron_left',
    right: 'chevron_right',
    search: 'search',
    calendar: 'today',
    close: 'clear',
    send: 'send',
    add: 'add',
    edit: 'mode_edit',
    destroy: 'delete'
  }
}, 'materialize');
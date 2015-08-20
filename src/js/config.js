var WRF = {};

WRF.config = {
  theme: 'materialize',
  restUrls: {
    index: ':url.json',
    show: ':url/:id',
    add: ':url/new',
    create: ':url',
    edit: ':url/:id/edit',
    update: ':url/:id',
    destroy: ':url/:id'
  },

  restMethods: {
    index: 'GET',
    show: 'GET',
    add: 'GET',
    create: 'POST',
    edit: 'GET',
    update: 'PUT',
    destroy: 'DELETE'
  }
};

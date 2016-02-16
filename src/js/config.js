var Realize = {};

Realize.config = {
  theme: 'materialize',
  locale: 'en',
  restUrls: {
    index: ':url',
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
  },

  grid: {
    pagination: {
      param: 'p',
      perPageParam: 'per_page',
      perPage: 20,
      window: 4
    },
    sort: {
      param: 's',
      directionParam: 's_dir',
      fieldValueFormat: '%{field}'
    }
  }
};

Realize.setConfig = function(newConfig) {
  $.extend(true, Realize.config, newConfig);
};

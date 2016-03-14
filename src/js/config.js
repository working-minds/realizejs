module.exports = exports = {};

exports.config = {
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
      window: 4,
      type: 'default',
      perPageOptions: [
        { name: '10', value: 10 },
        { name: '20', value: 20 },
        { name: '50', value: 50 }
      ]
    },
    sort: {
      param: 's',
      directionParam: 's_dir',
      fieldValueFormat: '%{field}'
    }
  }
};

exports.setConfig = function(newConfig) {
  $.extend(true, exports.config, newConfig);
};

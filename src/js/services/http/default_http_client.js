import $ from 'jquery';

export default (url, options) => new Promise((resolve, reject) => {
  $.ajax({
    url,
    ...options,
    method: options.method || 'GET',
    success: resolve,
    error: reject,
  });
});
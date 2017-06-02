export default class HttpOptions {
  _url;
  _headers;
  _method;
  _data;
  _customOptions;

  constructor(url, headers = {}, method = {}, data = {}, customOptions = {}) {
    this._url = url;
    this._headers = headers;
    this._method = method;
    this._data = data;
    this._customOptions = customOptions;
  }

  get url() {
    return this._url;
  }

  get headers() {
    return this._headers;
  }

  get method() {
    return this._method;
  }

  get data() {
    return this._data;
  }

  get customOptions() {
    return this._customOptions;
  }
};

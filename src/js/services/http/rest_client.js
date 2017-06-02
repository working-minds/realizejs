import Realize from '../../realize';
import _ from 'lodash';
import { extractQueryString, removeQueryString } from '../../utils/url'

export default class RestClient {
  _options;
  _config;

  constructor(options) {
    this._options = options;
    this._config = Realize.config;
    this.configureActions(this.actionNames);
  }

  get options() {
    return this._options;
  }

  get config() {
    return this._config;
  }

  get actionNames() {
    return Object.keys(this.actionUrls);
  }

  get baseUrl() {
    return this.options.baseUrl;
  }

  get actionUrls() {
    return _.merge({}, this.config.restUrls, this.options.actionUrls);
  }

  get actionMethods() {
    return _.merge({}, this.config.restMethods, this.options.actionMethods);
  }

  request(url, method, data, options = {}) {
    return this.config.httpClient(url, this.mergeRequestParameters(method, data, options));
  }

  mergeRequestParameters(method, data, options = {}) {
    return _.merge({}, options, { method, data });
  }

  getRestActionUrl(action, id) {
    const actionUrl = this.actionUrls[action];
    const actionBaseUrl = removeQueryString(this.baseUrl);
    const actionQueryString = extractQueryString(this.baseUrl);

    const argsRegEx = id ? /:id/ : /:url/;
    const value = id || actionBaseUrl;

    const replacedActionUrl = actionUrl.replace(argsRegEx, value);
    return replacedActionUrl + actionQueryString;
  }

  getRestActionMethod(action) {
    return this.actionMethods[action];
  }

  configureActions(actionNames) {
    actionNames
      .forEach(action => this.configureAction(action));
  }

  configureAction(actionName) {
    Object.defineProperty(this, actionName, {
      value: (id, data, options) => {
        const requestId = !options ? null : id;
        const requestData = !options ? id : data;
        const requestOptions = !options ? data : options;

        const url = this.getRestActionUrl(actionName, requestId);
        const method = this.getRestActionMethod(actionName);

        return this.request(url, method, requestData, requestOptions);
      },
      configurable: true,
      enumerable: true,
      writable: false,
    });
  }
}

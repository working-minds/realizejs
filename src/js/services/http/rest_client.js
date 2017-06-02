// TODO: mudar jQuery.ajax para client rest
import Realize from '../../realize';
import { merge } from 'lodash';
import { extractQueryString, removeQueryString } from '../../utils/url'

export default class RestClient {
  constructor(options) {
    this.options = options;
    this.config = Realize.config;
    this.configureActions(this.actionNames);
  }

  get actionNames() {
    return Object.keys(this.actionUrls);
  }

  get baseUrl() {
    return this.options.baseUrl;
  }

  get actionUrls() {
    return merge({}, Realize.config.restUrls, this.options.actionUrls);
  }

  get actionMethods() {
    return merge({}, Realize.config.restMethods, this.options.actionMethods);
  }

  request(url, method, data, options = {}) {
    return Realize.config.httpClient(url, this.mergeRequestParameters(method, data, options));
  }

  mergeRequestParameters(method, data, options = {}){
    return merge({}, options, {method, data});
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

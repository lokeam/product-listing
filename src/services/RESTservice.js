import 'isomorphic-fetch';
import es6Promise from 'es6-promise';
import { TEST_HEADER, TEST_HEADER_VALUE } from '../constants';

es6Promise.polyfill();

class RESTService {
   constructor(endpoint, isAbsolute = false) {

    /** @type {String} fetch mode, default 'cors' */
     this._mode = 'cors';

    /** @type {String} https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials */
     this._credentials = 'omit';
     
     /** @type {Response} raw response from API request.*/
     this._rawResponse = null;
   } 

  set mode(value) {
    this._mode = (/(cors|same-origin|navigation)/.test(value)) ? value : 'cors';
  }

  _makeRequest(resource = '', data = null, method = 'GET', options) {
    const requestOptions = this._buildRequestOptions(data, method);
    const request = this._createRequestObj(resource, requestOptions);

    return fetch(request)
    .then((response) => {
      this._rawResponse = response;
      const json = response.json();
      
      if (!response.ok) {
        console.log('I am error, promise not ok');
        return Promise.reject(json);
      }
      console.log('returned json: ', json);
      return json;
    });
  }

  /**
   * Create new Request Object based upon supplied resource and options
   * @private
   * @param  {string} resource = extra resource to add to the Ajax request URI
   * @param  {object} options =  key-pair for request options
   * @return {Request} Fetch Request Object
   */
  _createRequestObj(resource = '', options) {
    return new Request(resource, options);
  }

  _buildHeaders() {
  let requestHeader = {};
  requestHeader[TEST_HEADER] = TEST_HEADER_VALUE;
  return requestHeader;
  }

  _buildRequestOptions(data, method) {
    let requestOptions = {
      method,
      headers: this._buildHeaders(),
      mode: this._mode
    };
    return requestOptions;
  }

  get(resource = '', data = {}) {
    console.log('get');
    /* could optionally create query string parameters here */
    return this._makeRequest(resource, null, 'GET');
  }

  post(resource = '', data = {}) {
    return this._makeRequest(resource, data, 'POST');
  }
}

export default RESTService;
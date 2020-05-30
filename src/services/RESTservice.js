import 'isomorphic-fetch';
import es6Promise from 'es6-promise';
import { isObject } from '../utils/helpers';
import { TEST_HEADER, TEST_HEADER_VALUE } from '../constants';

es6Promise.polyfill();

class RESTService {
   constructor(endpoint, isAbsolute = false) {
     this._mode = 'cors';
     this._credentials = 'omit';
   } 

   set mode(value) {
    this._mode = (/(cors|same-origin|navigation)/.test(value)) ? value : 'cors';
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

     console.log('REST class, _buildRequestOptions');
     console.log('data: ', data);
     console.log('method: ', method);
     console.log('mode: ', this._mode);
     return requestOptions;
   }
}

export default RESTService;
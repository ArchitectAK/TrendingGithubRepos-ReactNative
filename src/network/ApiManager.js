import axios from 'axios';

export const METHOD_GET = 'get';
export const CONTENT_TYPE_APP_JSON = 'application/json';
export const ACCEPT_APP_JSON = 'application/json';

export default function ApiManager(url, reqType) {
  console.log('Method type is', reqType);

  return new Promise(async (resolve, reject) => {
    prevResolve = resolve;
    prevReject = reject;
    let headers = {
      'Content-Type': CONTENT_TYPE_APP_JSON,
      Accept: ACCEPT_APP_JSON,
      charset: 'utf-8',
    };
    let config = {
      method: reqType,
      headers: headers,
    };

    //MAIN CALL
    axios
      .get(url)
      .then(response => {
        resolve(response);
      })
      .catch(async error => {
        console.log('ApiManager:error:', error.response);
        if (error.response) {
          // ERROR HANDLER goes here
        }
      });
  });
}

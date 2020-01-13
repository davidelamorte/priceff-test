import HttpRequest from 'helpers/rest-client/HttpRequest';
import ApiError from 'helpers/rest-client/ApiError';

export default class ApiManager {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;
  };

  /**
   * Basic Request
   * Method for a not authenticated request
   *
   * @param {String} method - the method (GET, POST, PUT, DELETE)
   * @param {String} path - specific path for the request
   * @param {object} payload - the eventual payload
   *
   */
  async basicReq(method, path, payload) {

    const completePath = this.baseUrl + path;
    const req = HttpRequest[method](completePath, payload);
    const res = await req;

    if (res.ok) return await res.json();

    throw new ApiError(res.code, res.message, res.info);
  };

  /**
   * Authenticated Request
   * Method for an authenticated request
   *
   * @param {String} method - the method (GET, POST, PUT, DELETE)
   * @param {String} path - specific path for the request
   * @param {object} payload - the eventual payload
   *
   */
  async authenticatedReq(method, path, payload) {

    if(!localStorage.getItem('userData')) throw new Error('USER NOT LOGGED');

    const AccessToken = JSON.parse(localStorage.getItem('userData'));
    const withAuthTokenPayload = {
      ...payload,
      headers: {
        ...payload.headers,
        'Authorization': `Bearer ${AccessToken}`
      }
    };

    const completePath = this.baseUrl + path;
    const req = HttpRequest[method](completePath, withAuthTokenPayload);
    const res = await req;

    if (res.ok) return await res.json();

    throw new ApiError(res.code, res.message, res.info);
  };
};
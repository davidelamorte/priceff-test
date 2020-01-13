import ApiManager from 'helpers/rest-client/ApiManager';

export default class ApiPopulation extends ApiManager {
  
  BASE_URL = '/populations';

  /**
   * generate a new population calling the serverless BE
   * 
   * @param populationName
   */
  generatePopulation = (populationName) => {
    return this.basicReq(
      'POST',
      `${this.BASE_URL}`,
      {
        body: JSON.stringify({name: populationName})
      },
    )
  };

  /**
   * retrieve a population from the DB
   * 
   * @param populationId
   */
  getPopulation = (populationId) => {
    return this.basicReq(
      'GET',
      `${this.BASE_URL}/${populationId}`,
      {},
    )
  };
};
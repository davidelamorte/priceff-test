const axios = require('axios');
import { failure } from '../libs/response-lib';

export const generatePopulation = async() => {

  let generatedPopulation;
  try {
    generatedPopulation = await axios.get('https://randomuser.me/api/?results=500');
  } catch (e) {
    return failure({ status: e });
  }

  let cleanData = {
    averageAge: 0,
    oldestAge: {
      name: '',
      age: -Infinity
    },
    youngestAge: {
      name: '',
      age: Infinity
    },
    northernPerson: {
      name: '',
      locationName: '',
      latitude: -Infinity
    },
    southernPerson: {
      name: '',
      locationName: '',
      latitude: Infinity
    }
  };

  const data = generatedPopulation.data.results;

  data.forEach((el, index) => {
    // Average age
    cleanData.averageAge += el.dob.age;
    if (index === data.length - 1) cleanData.averageAge = cleanData.averageAge / (data.length);
    // Oldest Age
    if (cleanData.oldestAge.age < el.dob.age) cleanData.oldestAge = {name: el.name, age: el.dob.age};
    // Youngest Age
    if (cleanData.youngestAge.age > el.dob.age) cleanData.youngestAge = {name: el.name, age: el.dob.age};
    // NP
    if (cleanData.northernPerson.latitude < el.location.coordinates.latitude) {
      cleanData.northernPerson = {name: el.name, locationName: el.location.city, latitude: el.location.coordinates.latitude};
    };
    // SP
    if (cleanData.southernPerson.latitude > el.location.coordinates.latitude) {
      cleanData.southernPerson = {name: el.name, locationName: el.location.city, latitude: el.location.coordinates.latitude};
    };
  });

  return cleanData;
};
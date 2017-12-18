import {
  POST_ADRESS,
  POST_ADRESS_LOADED,
  POST_ADRESS_ERROR,
  SET_ADRESS,
  SET_ADRESS_EQUAL,
  SET_COUNTRY_ADRESS
} from 'actions/constants'

export function postAdress(typeOfAdress) {
  return {
    type: POST_ADRESS,
    typeOfAdress
  }
}

export function postAdressLoaded(typeOfAdress, adress) {
  return {
    type: POST_ADRESS_LOADED,
    payload: {
      typeOfAdress,
      adress
    }
  }
}

export function postAdressError(error) {
  return {
    type: POST_ADRESS_ERROR,
    error
  }
}

export function setAdress(typeOfAdress, adress) {
  return {
    type: SET_ADRESS,
    payload: {
      typeOfAdress,
      adress
    }
  }
}

export function setCountryAdress(country) {
  return {
    type: SET_COUNTRY_ADRESS,
    payload: {
      country
    }
  }
}

export function setAdressEqual() {
  return {
    type: SET_ADRESS_EQUAL
  }
}

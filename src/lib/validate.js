import {email, mobile, idCard, length, equal, min, max, between, required, passwd} from './validator/common.js'

let validators = {
  email, mobile, idCard, length, equal, min, max, between, required, passwd
}

let validate = function (validator, value, params, ignoreEmoty) {
  if (typeof validators[validator] !== 'function') {
    return false
  }
  if (ignoreEmoty) {
    if (value === null || value === undefined) {
      return true
    }
    if (typeof value === 'string' && value.length<1) {
      return true
    }
    return Object.keys(value).length > 0
  }
  return validators[validator].apply({}, [value, params])
}

validate.register = function (name, func) {
  validators[name] = func
}

export default validate

let checkVal = function(val, min, max) {
  if (val === null || val === undefined) {
    return false
  }
  if (typeof min === 'undefined') {
    min = 0
  }
  if (typeof max === 'undefined') {
    return val >= min
  } else {
    return (val >= min && val <= max)
  }
}

let email = function (val, params) {
  if (!val) {
    return false
  }
  return /^([a-zA-Z0-9]+[_|\_|\.-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/.test(val)
}

let mobile = function (val, params) {
  if (!val) {
    return false
  }
  return /^1[3|4|5|7|8][0-9]\d{8}$/.test(val)
}

let idCard = function (val, params) {
  if (!val) {
    return false
  }
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)
}

let length = function (val, params) {
  let min, max
  if (params && params.length > 0) {
    min = params[0]
  }
  if (params && params.length > 1) {
    max = params[1]
  }
  return checkVal(val, min, max)
}

let equal = function (val, params) {
  if (!params || params.length < 1) {
    return false
  }
  return checkVal(val, params[0], params[0])
}

let min = function(val, params) {
  if (!params || params.length < 1) {
    return false 
  }
  return checkVal(val, params[0])
}
let max = function(val, params) {
  if (!params || params.length < 1) {
    return false 
  }
  return checkVal(val, undefined, params[0])
}

let between = function (val, params) {
  if (!params || params.length != 2) {
    return false 
  }
  return checkVal(val, params[0], params[1])
}

let required = function(val, params) {
  if (val === null || val === undefined) {
    return false
  }
  if (typeof val !== 'object') {
    return checkVal((''+val).length, 1)
  } else {
    return Object.keys(val).length > 0
  }
}

let passwd = function(val, params) {
  val = (val+'').trim()
  let minLen = 8, maxLen = 20
  if (params) {
    if (params.length > 0) {
      minLen = params[0] - 0
    }
    if (params.length > 1) {
      maxLen = params[1] - 0
    }
  }
  if (minLen < 1) {
    minLen = 1
  }
  let len = val.length
  if (len < minLen || len > maxLen) {
    return false
  }
  let lowercase = val.toLowerCase()
  if (lowercase == val) {
    // 须包含大小写字母
    return false
  }
  if (val.match(/\d/)) {
    // 须包含数字
    return true
  }
  return false
}

export {
  email,
  mobile,
  idCard,
  length,
  equal,
  min,
  max,
  between,
  required,
  passwd
}

let _clone = function (parent, obj, exclude) {
  let isArray = false
  if (Array.isArray(parent)) {
    isArray = true
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if ((Array.isArray(exclude) && exclude.indexOf(k) >= 0) ||
        (typeof exclude === 'string' && k.indexOf(exclude) === 0)) {
        continue
      }
      if (typeof obj[k] !== 'object' || obj[k] === null || obj[k] === undefined) {
        if (isArray) {
          parent.push(obj[k])
        } else {
          parent[k] = obj[k]
        }
      } else {
        if (Array.isArray(obj[k])) {
          if (isArray) {
            parent.push([])
          } else {
            parent[k] = []
          }
        } else {
          if (isArray) {
            parent.push({})
          } else {
            parent[k] = {}
          }
        }
        if (isArray) {
          _clone(parent[parent.length-1], obj[k])
        } else {
          _clone(parent[k], obj[k])
        }
      }
    } 
  } 
} 

let clone = function (obj, exclude) {
  if (typeof obj !== 'object' || obj === null || obj === undefined) {
    return obj
  } 
  let parent
  if (Array.isArray(obj)) {
    parent = []
  } else {
    parent = {}
  }
  _clone(parent, obj, exclude)
  return parent
}

let filterEmpty = function (obj, ignoreEmptyStr) {
  let data = {}
  Object.keys(obj).forEach(function (key) {
    let val = obj[key]
    if ((val !== null && val !== undefined) && (ignoreEmptyStr || String(val).length > 0)) {
      data[key] = val
    }
  })
  return data
}

export default {
  filterEmpty,
  clone
}

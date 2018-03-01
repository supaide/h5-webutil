import URLHelper from './url'

let config = {}
let requestQueue = {}

let checkStatus = function (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

let processBlob = function (type, filename, res, success, error) {
  res.blob().then((blob) => {
    let url = window.URL.createObjectURL(blob)
    if (type === 'download') {
      let a = document.createElement('a');
      filename = filename || res.headers.get('Content-Disposition');
      a.href = url;
      a.download = filename;
      a.click();
    }
    success && success(url)
    window.URL.revokeObjectURL(url);
  }).catch(function (msg) {
    error && error(-1, msg)
  })
}

let http = function (url, params, success, error, options) {
  if (typeof params === 'function') {
    options = error
    error = success
    success = params
    params = null
  }
  if (typeof success === 'object') {
    options = success
    success = null
    error = null
  }
  if (typeof error === 'object') {
    options = error
    error = null
  }
  options = options || {}
  if (config.urlPrefix && url.indexOf('http') !== 0) {
    url = config.urlPrefix + url
  }
  let url0 = url
  if (!options.ignoreBlock) {
    if (requestQueue[url0]) {
      return
    }
    requestQueue[url0] = 1
  }
  let method = options.method ? options.method.toUpperCase() : 'POST'
  let credentials = options.credentials ? options.credentials : 'include'
  let dataType = options.dataType ? options.dataType : 'json'
  let preProcess = options.preProcess !== undefined ? options.preProcess : config.preProcess
  let blob = options.blob ? options.blob : false
  let filename = options.filename ? options.filename : null

  params = params || {}
  if (!options.ignoreDefaultParams && config.defaultParams) {
    let defaultData = config.defaultParams() || {}
    for (let k in defaultData) {
      params[k] = defaultData[k]
    }
  }

  let data = new FormData()
  for (let k in params) {
    if (Array.isArray(params[k])) {
      let pairs = params[k]
      for (let i = 0; i < pairs.length; i++) {
        data.append(k, pairs[i])
      }
    } else {
      data.append(k, params[k])
    }
  }
  let option0 = {
    method: method
  }
  if (method !== 'POST' && method !== 'PUT') {
    let data0 = []
    for (var pair of data.entries()) {
      data0.push(pair[0] + '=' + pair[1])
    }
    if (url.indexOf('?') > -1) {
      url += '&' + data0.join('&')
    } else {
      url += '?' + data0.join('&')
    }
  } else {
    if (method === 'POST') {
      option0.body = data
    } else {
      option0.body = JSON.stringify(params)
      option0.headers = {
        'Content-Type': 'application/json'
      }
    }
    option0.credentials = credentials
  }

  let p = fetch(url, option0).then(checkStatus)
  if (blob) {
    p = p.then((response) => {
      delete requestQueue[url0]
      processBlob(blob, filename, response, success, error)
    })
  } else {
    if (dataType === 'text') {
      p = p.then((response) => {
        return response.text()
      })
    } else if (dataType === 'json') {
      p = p.then((response) => {
        return response.json()
      })
    }
    p = p.then(function (data) {
      delete requestQueue[url0]
      if (typeof preProcess === 'function') {
        let ret = preProcess(data, dataType, success, error)
        if (ret === null) {
          return
        }
        data = ret
      }
      success && success.apply({}, [].concat(data))
    })
  }
  p.catch(function (msg) {
    delete requestQueue[url0]
    error && error(-1, msg)
  })
}


http.config = function (options) {
  config.preProcess = options.preProcess ? options.preProcess : null
  config.defaultParams = options.defaultParams ? options.defaultParams : null
  config.urlPrefix = options.urlPrefix ? options.urlPrefix : null
}

let setMethod = function (args0, type) {
  let args = []
  if (args0.length > 0) {
    for (let i=0; i<args0.length; i++) {
      args.push(args0[i])
    }
  }
  let lastArg = args.slice(-1)[0]
  if (typeof lastArg === 'object') {
    lastArg.method = type
  } else {
    args.push({method: type})
  }
  return args
}

http.get = function () {
  http.apply(this, setMethod(arguments, 'get'))
}
http.post = function () {
  http.apply(this, setMethod(arguments, 'post'))
}
http.put = function () {
  http.apply(this, setMethod(arguments, 'put'))
}
http.delete = function () {
  http.apply(this, setMethod(arguments, 'delete'))
}

export default http

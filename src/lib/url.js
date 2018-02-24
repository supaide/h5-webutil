let encodeQuery = function (pairs) {
  if (!pairs) {
    return ''
  }
  let pairs0 = []
  for(let k in pairs) {
    pairs0.push(k+'='+encodeURIComponent(pairs[k]))
  }
  return pairs0.join('&')
}

let decodeQuery = function(query) {
  let pairs = {}
  let paths = []
  if(!query) {
    return [paths, pairs]
  }
  let hashPos = query.indexOf('#')
  if(hashPos > -1) {
    query = query.substr(0, hashPos)
  }
  let pathEndPos = query.indexOf('?')
  paths = query
  if (pathEndPos > -1) {
    paths = query.substr(0, pathEndPos)
    query = query.substr(pathEndPos+1)
  } else {
    query = ''
  }
  paths = paths.split('/').filter(path => path.length > 0)

  let pairs0 = query.split("&");
  for(let i=0; i<pairs0.length; i++) {
    let pair = pairs0[i].split('=')
    if(pair.length == 2) {
      pairs[pair[0]] = decodeURIComponent(pair[1])
    }
  }
  return [paths, pairs]
}

export default {
  encodeQuery,
  decodeQuery
}

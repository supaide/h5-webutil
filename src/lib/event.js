let listener = {}
const doEmit = function (type, data) {
  if (!listener[type]) {
    return
  }
  for (let i=0; i<listener[type].length; i++) {
    listener[type][i].apply({}, data)
  }
}
export default {
  on (type, callback, target) {
    if (!listener[type]) {
      listener[type] = []
    }
    if (target) {
      listener[type].push(function (...data) {
        callback.apply(target, data)
      })
    } else {
      listener[type].push(callback)
    }
  },

  off (type, callback) {
    if (!listener[type]) {
      return
    }
    if (callback) {
      for (let i=0; i<listener[type].length; i++) {
        if (listener[type][i] === callback) {
          listener[type].splice(i, 1)
          return
        }
      }
    } else {
      delete listener[type]
    }
  },

  emit (type, ...data) {
    doEmit(type, data)
  },

  asyncEmit (type, ...data) {
    setTimeout(function () {
      doEmit(type, data)
    }, 0)
  }
}

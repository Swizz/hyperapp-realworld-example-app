const API = "https://conduit.productionready.io/api"

function withQuery(props) {
  return Object.keys(props || {}).
    map(k => encodeURIComponent(k) + '=' + encodeURIComponent(props[k])).
    join('&')
}

function createStore(name, props) {
  return {
    [name]: [],
    ...props
  }
}

function createAdapter(name, actions) {
  return {
    merge: newState => newState,
    fetch(options) {
      return (state, actions) => {
        fetch(`${API}/${name}?${withQuery(options)}`).
          then(res => res.json()).
          then(data => actions.merge({ ...options, ...data })).
          catch(console.warn)
      }
    },
    ...actions
  }
}

export { createStore, createAdapter }
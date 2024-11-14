const PROTOCOL = 'https'
const HOST = 'dummyjson.com'
const SERVER_URL = PROTOCOL + '://' + HOST

export default {
  install: function (app) {

    app.config.globalProperties.$fetchData = (url, queryParams) => {

      let query = ''
      if (queryParams) {
        query = '?'

        if (queryParams && (queryParams !== undefined || queryParams !== null)) {
          query = query.concat(`&limit=${queryParams.limit}`)
        }

        if (queryParams.skip) {
          query = query.concat(`&skip=${queryParams.skip}`)
        }
      }


      return fetch(`${SERVER_URL}/${url}${query}`)
        .then(response => response.json())
    }


  }
}
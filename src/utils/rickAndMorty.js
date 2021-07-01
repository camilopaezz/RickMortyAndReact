const baseUrl = 'https://rickandmortyapi.com/api/'

async function get (endpointUrl) {
  const url = `${baseUrl}${endpointUrl}`
  return window.fetch(url, {
    mode: 'cors'
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

const validate = qry => {
  if ((typeof qry === 'number' && Number.isInteger(qry)) || Array.isArray(qry)) {
    return `/${qry}`
  }

  if (typeof qry === 'object') {
    return `/?${Object.keys(qry)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(qry[key])}`)
      .join('&')}`
  }

  throw new Error('As argument use an object, an array, an integer or leave it blank')
}

const getEndpoint = async (endpoint = '', opt = {}) => {
  const query = validate(opt)

  try {
    const data = await get(endpoint + query)
    return data
  } catch (e) {
    return {
      error: e.error
    }
  }
}

export const getCharacter = (opt = {}) => getEndpoint('character', opt)
export const getLocation = (opt = {}) => getEndpoint('location', opt)
export const getEpisode = (opt = {}) => getEndpoint('episode', opt)

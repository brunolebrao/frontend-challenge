import { getToken, api } from 'utils'

export async function getArtists(path, artist) {
  const token = getToken()
  try {
    const response = await api.get(path, {
      params: {
        type: 'artist',
        limit: 10,
        q: artist,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response
  } catch (error) {
    return error.response
  }
}
export async function getArtist(path) {
  const token = getToken()
  try {
    const response = await api.get(path, {
      params: {
        limit: 10,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response
  } catch (error) {
    return error
  }
}

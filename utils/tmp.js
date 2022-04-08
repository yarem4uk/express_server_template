import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1';


const userData = { user: 'user', password: 'user' }

const postRequest = async () => {
  const { data } = await axios.post('/login', userData)
  const { token } = data
}

postRequest()

const getRequest = async () => {
  await axios.get('/data', {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.dXNlcg.uBnH5zcQU027jsJIG0yhKuxFkbU7-p2wX6dZ2lDwgcU',
    },
  })
}

getRequest()

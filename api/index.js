import axios from 'axios'

export const loginApi = (body, success, error) => {
  const url = 'money/backEnd/login'
  axios({
    method: 'post',
    url: url,
    data: body
  })
    .then(success)
    .catch(error)
}

export const getBalance = (params, query, success, error) => {
  const balanceUrl = `${params.nid}/balance`
  axios({
    method: 'get',
    url: balanceUrl,
    params: query
  })
    .then(success)
    .catch(error)
}

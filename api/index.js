import axios from 'axios'

export const loginApi = (body, success, error) => {
  const url = 'backEnd/login'
  axios({
    method: 'post',
    url: url,
    data: body
  })
    .then(success)
    .catch(error)
}

export const membersApi = (params, body, success, error) => {
  const url = `backEnd/${params.user}/users`
  axios({
    method: 'post',
    url: url,
    data: body
  })
    .then(success)
    .catch(error)
}

export const getConfig = (success, error) => {
  const url = `backEnd/config`
  axios({
    method: 'get',
    url: url
  })
    .then(success)
    .catch(error)
}
export const getReviews = (params, success, error) => {
  const url = `backEnd/${params.user}/transactions`
  axios({
    method: 'get',
    url: url
  })
    .then(success)
    .catch(error)
}

export const sendReview = (body, params, success, error) => {
  const url = `backEnd/${params.user}/transfer`
  axios({
    method: 'post',
    url: url,
    data: body
  })
    .then(success)
    .catch(error)
}

export const topUsersApi = (params, success, error) => {
  const url = `backEnd/${params.user}/topUsers`
  axios({
    method: 'get',
    url: url
  })
    .then(success)
    .catch(error)
}

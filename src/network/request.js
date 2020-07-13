import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  return instance(config)
}

export function request1(config) {
  const instance1 = axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3',
    timeout:5000
  })
  return instance1(config)
}
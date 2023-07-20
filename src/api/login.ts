import request from "./axiaosConfig"

const login = (username: string, password: string) => {
  return request({
    url: '/login',
    method: 'post',
    data: { username, password }
  });
}

const regist = (username: string, password: string) => {
  return request({
    url: '/users',
    method: 'post',
    data: { username, password }
  });
}

export { login, regist };
import request from '@/utils/request'

export function login(phone, password) {
    return request({
        url: 'questions-member/ums/umsMember/p/login',
        method: 'post',
        data: {
            phone,
            password
        }
    })
}

export function getInfo() {
    return request({
        url: 'questions-member/ums/umsMember/v/loadCurrentUserByTokenAsJson',
        method: 'get',
    })
}

export function logout() {
    return request({
        url: '/admin/logout',
        method: 'post'
    })
}
import request from '@/utils/request'

export function selectSignIn(params) {
    return request({
        url: 'questions-member/ums/sign/selectSignIn',
        method: 'get',
        params: params
    })
}
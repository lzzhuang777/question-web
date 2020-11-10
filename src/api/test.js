import request from '@/utils/request'

export function smsMemberTest(id,params) {
    return request({
        url: 'questions-study/sms/smsMemberTest/getTestQuesList/' + id,
        method: 'post',
        params: params
    })
}
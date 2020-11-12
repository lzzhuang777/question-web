import request from '@/utils/request'

export function smsMemberTest(id,params) {
    return request({
        url: 'questions-study/sms/smsMemberTest/getTestQuesList/' + id,
        method: 'post',
        params: params
    })
}

export function isCollection(params) {
    return request({
        url: 'questions-member/ums/umsMember/v/isCollection',
        method: 'get',
        params:params
    })
}

export function collectionQuestion(data) {
    return request({
        url: 'questions-member/ums/umsMember/v/collectionQuestion',
        method: 'Post',
        data:data
    })
}

export function delCollection(params) {
    return request({
        url: 'questions-member/ums/umsMember/v/delCollection',
        method: 'get',
        params:params
    })
}

export function submitQuesAnswer(data) {
    return request({
        url: 'questions-study/sms/smsMemberTest/submitQuesAnswer',
        method: 'Post',
        data:data
    })
}

export function submitTest(id) {
    return request({
        url: 'questions-study/sms/smsMemberTest/submitTest'+id,
        method: 'Post',
    })
}








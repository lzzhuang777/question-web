import request from '@/utils/request'

export function bannerList() {
    return request({
        url: 'questions-content/cms/banner/p/list',
        method: 'get',

    })
}

export function typeList() {
    return request({
        url: 'questions-question/qms/qmsType/p/listAll',
        method: 'get',
    })
}

export function makeTest(params) {
    return request({
        url: 'questions-study/sms/smsMemberTest/makeMemberTest',
        method: 'Post',
        params:params
    })
}



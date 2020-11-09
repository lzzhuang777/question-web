import request from '@/utils/request'

export function bannerList() {
    return request({
        url: 'questions-content/cms/banner/p/list',
        method: 'get',

    })
}

export function testList() {
    return request({
        url: 'questions-question/qms/qmsTest/p/listAll',
        method: 'get',
    })
}

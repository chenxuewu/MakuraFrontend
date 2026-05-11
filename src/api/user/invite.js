import request from '@/utils/request'

// 生成邀請碼
export function getInviteCode() {
    return request({
        url: '/user/invite/generate',
        method: 'get'
    })
}

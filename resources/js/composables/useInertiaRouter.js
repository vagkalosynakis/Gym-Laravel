import { router } from '@inertiajs/vue3'

export function useInertiaRouter(method, url, data = {}, options = {}) {
    switch (method) {
        case 'get':
            return router.get(url,data, options)
        case 'post':
            return router.post(url,data, options)
        case 'put':
            return router.put(url,data, options)
        case 'patch':
            return router.patch(url,data, options)
        case 'delete':
            return router.delete(url, options)
        case 'reload':
            return router.delete(options)
    
        default:
            return new Error('Method not found')
    }
}
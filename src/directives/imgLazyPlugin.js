import { useIntersectionObserver } from '@vueuse/core'

export const imgLazyPlugin = {
    install(app) {
        app.directive('img-lazy',{
            mounted (el, binding) {
                const {stop} = useIntersectionObserver(
                    el, ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        el.src = binding.value
                        stop()
                    }
                })
            }
        })
    }
}; // 封装为自定义vue插件

export default imgLazyPlugin
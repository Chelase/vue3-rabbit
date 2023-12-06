import { useIntersectionObserver } from '@vueuse/core'

export const imgLacyPlugin = {
    install(app) {
        app.directive('img-lazy',{
            mounted (el, binding) {
                const {stop} = useIntersectionObserver(
                    el, ([{ isIntersecting }]) => {
                    console.log('directives/index 8', isIntersecting);
                    if (isIntersecting) {
                        el.src = binding.value
                        stop()
                    }
                })
            }
        })
    }
}; // 封装为自定义vue插件

export default imgLacyPlugin
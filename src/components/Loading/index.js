import Loading from './Loading.vue'
import Vue from 'vue'
import './loading.scss'


let instance = null
const dom = document.createElement('div');
const createLoading = options => {
    const LoadingConstructor = Vue.extend(Loading);
    instance = new LoadingConstructor({
        el: dom
    });

    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.visible = true;
    });
}
const destoryLoading = options => {
    document.body.removeChild(instance.$el)
    instance.$destroy()
    instance = null
}



export default {
    install(Vue) {
        Vue.directive('loading', {
            update(el, binding, vnod) {
                console.log(instance, 'xxx')
                if (binding.value && !instance) {
                    createLoading()
                } else if (instance) {
                    destoryLoading()
                }
            },
            unbind(el, binding, vnode) {
                if (instance) {
                    destoryLoading()
                }
            }
        })

        Vue.prototype.$loading = {
            show() {
                if (!instance) {
                    createLoading()
                }
            },
            hide() {
                if (instance) {
                    destoryLoading()
                }
            },
            isLoaded: !instance
        }
    }
}
// 创建 Profile 实例，并挂载到一个元素上。


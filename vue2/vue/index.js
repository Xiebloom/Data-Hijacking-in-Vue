// console.log('Vue');
// 实例化用的既然是 new, 那显然 Vue 是一个构造函数了
// -- 有了这个构造函数就不会报错了
import {initState} from './init.js'

function Vue (options) {
    this._init(options)
}

// 初始化变量, 绑定视图
Vue.prototype._init = function (options) {
    var vm = this;  // 保存实例, 同时增加代码可读性, 不要全是 this 分不清哪个是哪个了
    vm.$options = options;  // 将用户写好的 options 挂载到 vm 实例上, 以后要用的时候直接到实例上去取就好了

    initState(vm);
}

export default Vue;
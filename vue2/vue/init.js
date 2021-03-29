
import proxyData from './proxy.js'
import observe from './observe.js'
// 一大堆初始化的方法 


// 1 首先要做数据劫持
// - 原因: 单纯的数据操作是不够的, 相应的视图必须要根据数据变化的同时发生变化
// - 目标: 原始的数据操作完成的基础上, 新增其他的功能(如变更视图)
function initState(vm) {
    console.log('进行初始化,获得用户输入', vm);
    var options = vm.$options;  // 取出来, 以后就方便了

    if(options.data){   // 2 有可能这个实例没有 data
        initData(vm);   
    }
    // 还有 options.computed, options.methods 之类的, 都要有响应的劫持方法

}

function initData(vm) {
    var data = vm.$options.data;    // 3 取出data
    // console.log(data);
    console.log('已将用户输入挂载到实例上', data());
    // console.log(data.call(vm));  // 其实和上面一行没有差别

    vm._data = data.call(vm);   // 4 注意! data 是个函数, 执行一下拿出来, 挂载到实例上
    data = vm._data;            // ex 方便一下

    for (var key in data) {     // 5 这个时候, 若要访问 title 必须要通过 vm._data.title, 不方便, 因此需要代理
        proxyData(vm, '_data', key) // 进行代理, 对 vm.title 的操作 会被理解为 vm._data.title 的操作
    }

    observe(vm._data)   // 6 以上只是为了跳过._data, 但并没有观察这个data是否被访问了(其实还是有吧?)
                        // - 使用观察者模式, 可以发现 vm._data 被取得或是发生变化
}

export {
    initState
}
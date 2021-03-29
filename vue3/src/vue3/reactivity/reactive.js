import { isObject } from '../shared/utilis'
import { mutableHandler } from './mutableHandler'

function reactive (target) {
    return createReactiveObject(target, mutableHandler)
}


function createReactiveObject(target, baseHandler) {
    // 如果不是 object, 不进行包装
    if (!isObject(target)) return target;

    const observer = new Proxy(target, baseHandler);
    return observer;
}

// const proxy = new Proxy(target, {
//     get (target, key, receiver) {

//     },
//     set (target, key, value, receiver) {
//         const res = Reflect.set(target, key, value, receiver);
//         // 效果等于 target[key] = value
//         // - 1 Reflect 的方法和 handlers 的方法一一对应, 一方有 set 另一方也必有 set
//         // - 2 Reflect 和 Math 类似, 是一个静态对象, 不可 new
//         // - 3 Reflect 会返回一个结果, 显示 成功 / 失败
//         // --- 但是 target[key] = value, 是不会显示的.
//         return res;
//     }
// })

// vue2 的方法
// Object.defineProperty(data, key, {
//     get () {    },
//     set () {    }
// })
// 这种方法有个缺点, 既然是语言层面的方法(比如get), 那就应该像 Math 那样, 有个静态的管理者
// 而不是像 Object, 本身是个构造函数

export {
    reactive
}
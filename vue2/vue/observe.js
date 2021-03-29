import Observer from './observer.js'

function observe (data) {   // data = vm._data 这个实例的属性, 是一个含有各种数据的对象
    // 观察的是对象, 如果 data 不是对象, 那就不观察了 直接return
    if( typeof data !== 'object' || data === null) return;
    return new Observer(data);
}
export default observe;
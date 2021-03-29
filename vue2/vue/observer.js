import defineData from './defineData.js'

function Observer (data) {
    // 1 组的数据劫持, 需要自己写方法
    if( Array.isArray(data)){
        // 1.1 重写数组的方法, 在完成原功能的基础上, 新增新的功能
    }
    // 2 对象的数据劫持, 可以使用 defineProperty
    else {
        this.walk(data);    // 源码也这样命名
    }
}

Observer.prototype.walk = function (data) {
    // 2.1 把对象的 属性 / 方法 重新定义, 加上 get / set
    let keys = Object.keys(data)
    // console.log(keys);
    for ( let i = 0; i < keys.length; i++){
        let key = keys[i],
            value = data[key];

        defineData(data, key, value);
    }
}

export default Observer;
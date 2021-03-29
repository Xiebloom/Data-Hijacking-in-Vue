function defineData(data, key, value) {
    Object.defineProperty(data, key, {
        get () {
            console.log('响应式数据 获取' + value);
            return value
        },
        set (newValue) {
            value = newValue;
        }
    })
}

export default defineData;
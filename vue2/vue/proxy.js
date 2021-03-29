function proxyData (vm,target,key) {
    Object.defineProperty (vm, key, {
        get () {
            // vm.title -> vm._data.title 即 target = _data
            console.log(`通过vm\.${key}, 访问到了vm\.${target}\.${key}`);
            return vm[target][key];
        },
        set (newValue) {
            vm[target][key] = newValue
        }
    })
}

export default proxyData;
import { reactive } from './vue3/reactivity'

const state = reactive({
    name: ' xkh',
    age: 23,
})

console.log(state.name);
state.name = 'kh'
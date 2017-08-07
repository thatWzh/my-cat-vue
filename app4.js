var Child = {
    template:'<div>A custom component!</div>'
}
Vue.component('my-component',{
    template:'<div>A custom component!</div>'
})
var app1 = new Vue({
    el:'#app-1',
    components:{
        'child-component':Child
    }
})

Vue.component('simple-counter',{
    template:'<button @click="counter += 1">{{counter}}</button>',
    data:function () {
        return{
            counter:0
        }
    }
})
var app2 = new Vue({
    el:'#app-2'
})
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

Vue.component('child',{
    props:['myMessage'],
    template:'<span>{{myMessage}}</span>'
})
Vue.component('comp',{
    props:['someProp'],
    template:'<span>{{someProp}}</span>'
})
var app3 = new Vue({
    el:'#app-3',
    data:{
        parentMsg:'Message from parent'
    }
})

Vue.component('child1',{
    props:['myMessage'],
    data:function () {
        return {
            msg:this.myMessage
        }
    },
    computed:{
        reverse:function () {
            // return this['myMessage'].split('').reverse().join('')
            return this.myMessage.split('').reverse().join('')
        }
    },
    template:'<div><span>{{reverse}}</span><br><span>{{msg}}</span></div>'
})
var app4 = new Vue({
    el:'#app-4',
    data:{
        parentMsg:'Message from parent'
    }
})

Vue.component('button-counter',{
    template:'<button v-on:click="incrementCounter">{{counter}}</button>',
    data:function () {
        return {
            counter:0
        }
    },
    methods:{
        incrementCounter:function () {
            this.counter += 1;
            this.$emit('increment')
        }
    }
})
new Vue({
    el:'#app-5',
    data:{
        total:0
    },
    methods:{
        incrementTotal:function () {
            this.total += 1
        },
        doThing:function () {
            alert('hello!')
        }
    }
})

Vue.component('currency-input',{
    template:'\
    <span>\
    $\
    <input\
    ref="input"\
    v-bind:value="value" \
    v-on:input="updateValue($event.target.value)" \
    >\
    </span>\
    ',
    props:['value'],
    methods:{
        updateValue:function (value) {
            var formattedValue = value.trim().slice(0,value.indexOf('.') === -1 ? value.length : value.indexOf('.') +3)
            if(formattedValue !== value){
                this.$refs.input.value = formattedValue;
            }
            this.$emit('input',Number(formattedValue))
        }
    }
})

new Vue({
    el:'#app-6'
})
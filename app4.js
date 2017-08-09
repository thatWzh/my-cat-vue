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
Vue.component('my-checkbox',{
    model:{
        prop:'checked',
        event:'change'
    },
    props:{
        checked:Boolean,
        value:String
    },
    template:'<input type="checkbox" :checked="checked" :value="value">'
})
var app6 = new Vue({
    el:'#app-6',
    data:{
        price:0.00,
        foo:true
    }
})

Vue.component('child-component',{
     template:'\
     <div>\
        <h1>我是子组件的标题</h1>\
        <slot>只有在没有分发的内容时才会显示</slot>\
     </div>\
     '
})
Vue.component('app-layout',{
    template:'\
    <div class="container">\
        <header>\
            <slot name="header"></slot>\
        </header>\
        <main>\
            <slot></slot>\
        </main>\
        <footer>\
            <slot name="footer"></slot>\
        </footer>\
    </div>'
})

var app7 = new Vue({
    el:'#app-7'
})

Vue.component('child1',{
    template:'\
    <div>\
        <slot text="hello from child"></slot>\
    </div>'
})
Vue.component('my-awesome-list',{
    template:'\
    <ul>\
        <slot \
            v-for="item in items"\
            v-bind:text="item.text"\
        ></slot>\
    </ul>',
    data:function () {
        return{
            items:[
                {text:'li-1'},
                {text:'li-2'},
                {text:'li-3'},
                {text:'li-4'}
            ]
        }
    }
})
var app8 = new Vue({
    el:'#app-8',
    data:{
        items:[]
    }
})

var app9 = new Vue({
    el:'#app-9',
    data:{
        currentView:'home'
    },
    components:{
        home:{template:'<div><p>home</p><input type="text"></div>'},
        posts:{template:'<p>posts</p>'},
        archive:{template:'<p>aechive</p>'}
    }
})
var Home = {
    template:'<div><p>home</p><input type="text"></div>'
}
var Posts = {
    template:'<p>posts</p>'
}
var Archive = {
    template:'<p>archive</p>'
}

var app10 = new Vue({
    el:'#app-10',
    data:{
        currentView:Home
    }
})
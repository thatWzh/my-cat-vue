var app1 = new Vue({
    el:'#app-1',
    data:{
        ok:true,
        type:'A',
        loginType:'username',
        isShow:true
    },
    methods:{
        toggle:function () {
            this.loginType = this.loginType === 'username' ? 'email' : 'username';
        }
    }
})
var app2 = new Vue({
    el:'#app-2',
    data:{
        parentMessage:'Parent',
        items:[
            {message:'Foo'},
            {message:'Bar'}
        ],
        object:{
            firstName:'John',
            lastName:'Doe',
            age:30
        },
        todos:[
            {isComplete:true},
            {isComplete:false},
            {isComplete:true}
        ]
    }
})
var app3 = new Vue({
    el:'#app-3',
    data:{
        counter:0,
        name:'vue.js'
    },
    methods:{
        greet:function (event) {
            alert('Hello' + this.name + '!');
            if(event){
                alert(event.target.tagName);
            }
        },
        say:function (message) {
            alert(message)
        },
        warn:function (message,event) {
            if (event) event.preventDefault();
            alert(message);
        }
    }
})
var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!'
    }
})
var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于' + new Date()
    }
})
var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})
var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'学习js'},
            {text:'学习vue'},
            {text:'整个牛项目'}
        ]
    }
})
var app5 = new Vue({
    el:"#app-5",
    data:{
        message:'Hello Vue!'
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue!'
    }
})
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>    '
})
var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0,text:'蔬菜'},
            {id:1,text:'水果'},
            {id:2,text:'肉'},
        ]
    }
})
var app8 = new Vue({
    el:'#app-8',
    data:{
        isButtonDisabled:false,
        number:10,
        ok:true,
        message:'abcdef',
        id:3
    },
    filters:{
        capitalize:function (value,isFirst) {
            if(!value)return '';
            value = value.toString();
            if(isFirst){
                return value.charAt(0).toUpperCase()+value.slice(1)
            }else if(!isFirst){
                return value.slice(0).toUpperCase()
            }
        },
        reverseMessage:function (value) {
            value = value.toString();
            return value.split('').reverse().join('');

        }
    }
})
var app9 = new Vue({
    el:'#app-9',
    data:{
        message:'Hello'
    },
    computed:{
        reversedMessage:function () {
            return this.message.split('').reverse().join('')
        }
    }
})
var app10 = new Vue({
    el:'#app-10',
    data:{
        firstName:'Wang',
        lastName:'Zihao'
    },
    computed:{
        fullName:{
            get:function () {
                return this.firstName+''+this.lastName;
            },
            set:function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    }
})
var app11 = new Vue({
    el:'#app-11',
    data:{
        question:'',
        answer:'I cannot give you an answer until you ask a question!'
    },
    watch:{
        question:function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.getAnswer();
        }
    },
    methods:{
        getAnswer:_.debounce(
            function () {
                if(this.question.indexOf('?') === -1){
                    this.answer = 'Questions usually contain a question mark, ;-)';
                    return;
                }
                this.answer = 'Thinking...'
                var vm = this;
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer);
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API.' + error
                    })
            }
            ,500
        )
    }
})
var app12 = new Vue({
    el:'#app-12',
    data:{
        isActive:true,
        hasError:true,
        error:null,
        classObject1:{
            active:true,
            'text-danger':false
        },
        activeClass:'active',
        errorClass:'text-danger'
    },
    computed:{
        classObject2:function () {
            return {
                active:this.isActive && !this.error,
                'text-danger':this.error && this.error.type === 'fatal',
            }
        }
    }
})
var app13 = new Vue({
    el:'#app-13',
    data:{
        activeColor:'#ff0000',
        fontSize:30,
        styleObject:{
            color:'red',
            fontSize:'15px'
        },
        baseStyles:{
            color:'yellow',
            fontSize:'12px'
        },
        overridingStyles:{
            fontSize:'20px'
        }
    }
})
var app1 = new Vue({
    el:'#app-1',
    data:{
        message:"",
        checked:false,
        checkedNames:[],
        picked:'',
        selected:'',
        multiSelected:[],
        forSelected:'A',
        options:[
            {text:'One',value:'A'},
            {text:'Two',value:'B'},
            {text:'Three',value:'C'}
        ]
    }
})

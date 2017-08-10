Vue.component('example',{
    template:'<span @click="updateMessage">{{message}}</span>',
    data:function () {
        return{
            message:'没有更新'
        }
    },
    methods:{
        updateMessage:function () {
            this.message = '更新完成';
            console.log(this.$el.textContent);
            // this.$nextTick(function () {
            //     console.log(this.$el.textContent)
            // })
        }
    }
})
var app1 = new Vue({
    el: '#app-1'
});


const todoApp = {

    data(){
        return {
            todos: [],
            newTodo: { 
                done: false
            }
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = { done: false };
                localStorage.setItem("todos", JSON.stringify(this.todos));
            }else{
                alert("preencha o campo")
            }
        },
        storeTodos(){
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },
    created() {
        if(localStorage.getItem("todos")){
            this.todos = JSON.parse(localStorage.getItem("todos"));
        }
    }
};

Vue.createApp(todoApp).mount('#app');
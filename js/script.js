const { createApp } = Vue;

createApp({

    data() {
        return {
            title: "Hello World!",
            apiUrl: 'server.php',
            todoList: [],
            newTask: ''
        };
    },
    methods: {
        readList() {
            axios
                .get(this.apiUrl)
                .then((response) => {
                    this.todoList = response.data;
                    console.log(this.todoList)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(function () {
                    //end
                })

        },

    },
    mounted() {
        this.readList();
    },
}).mount("#app");

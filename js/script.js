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

                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(function () {
                    //end
                })

        },
        addTask() {
            console.log(this.newTask);
            if (this.newTask == "") {
                return;
            }
            const data = new FormData();
            data.append("task", this.newTask);

            axios
                .post(this.apiUrl, data)
                .then((response) => {
                    this.todoList = response.data;
                    console.log(response.data);
                })
            this.newTask = "";

        }

    },
    mounted() {
        this.readList();
    },
}).mount("#app");

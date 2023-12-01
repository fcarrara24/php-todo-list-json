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
            // const data ={
            //   task: this.newTask,
            // }

            // come parametro della chiamata axios headers: {"Content-Type": "multipart/form-data"}
            // per passare le cose correttamente posso fare direttamente 
            const data = new FormData();
            data.append("task", this.newTask);

            axios
                .post(this.apiUrl, data)
                .then(function (response) {
                    console.log(response)
                })
            location.reload();
        }
    },
    mounted() {
        this.readList();
    },
}).mount("#app");

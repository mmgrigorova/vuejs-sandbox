<template>
    <div id="app">
        <div class="container">
            <h2>HTTP</h2>
            <hr>
            <div class="row">
                <div class="form-group">
                    <label for="username">Username
                        <input type="text" class="form-control " name="username" id="username"
                               v-model="user.username"></label>
                    <br>
                    <label for="email">Mail
                        <input type="email" class="form-control " name="email" id="email"
                               v-model="user.email"></label>
                    <hr>
                    <button class="btn btn-primary" @click="submit">Submit</button>
                    <hr>
                    <input type="text" v-model="node" class="form-control">
                    <button class="btn btn-primary" @click="fetchData">Get Data</button>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(u, index) in users" :key="index">{{u.username}} -
                            {{u.email}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        /* eslint-disable */
        name: 'app',
        data() {
            return {
                users: [],
                resource: {},
                node: 'data',
                user: {
                    username: '',
                    email: ''
                }
            }
        },
        methods: {
            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => {
                //         return response.json();
                //     })
                //     .then(data => {
                //         const resultArray = [];
                //         for (let key in data) {
                //             resultArray.push(data[key]);
                //         }
                //         this.users = resultArray;
                //     });
                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            },
            submit: function () {
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //         console.log('response');
                //         console.log(response);
                //     }, error => {
                //         console.log('error');
                //         console.log(error);
                //     });
                // this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            }
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>

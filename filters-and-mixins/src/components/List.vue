<template>
    <div id="">
        <h2>Filters and Mixins - List</h2>
        <input v-model="filterText"/>
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixin} from "../fruitMixin";

    export default {
        mixins: [fruitMixin],
        created: function(){
            // overrides changed from mixin. Component always adds last
            console.log('inside list - overrides mixin');
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

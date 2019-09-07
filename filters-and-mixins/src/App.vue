<template>
    <div id="app">
        <h2>Filters and Mixins - App</h2>
        <p>{{text | to-lowercase | toUppercase }}</p>
        <hr>
        <button @click="fruits.push('berries')">Add new item</button>
        <input v-model="filterText"/>
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <list></list>
        <hr>
        <p>Reversed text: {{ text | reverseText }}</p>
        <p>Global filter: {{ text | countLength }}</p>
        <p>Computed: {{reverseComputed}}</p>
        <p>Computed: {{countedLenght}}</p>
    </div>
</template>

<script>
    import List from "./components/List";
    import {fruitMixin} from "./fruitMixin";
    import {textMixin} from "./textMixin";

    export default {
        name: 'app',
        components: {
            List
        },
        mixins: [fruitMixin, textMixin],
        data() {
            return {
                text: "Hello there!"
            }
        },
        filters: {
            // reruns on each DOM change. Not optimal for performance
            toUppercase(value) {
                return value.toUpperCase();
            },
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        reverseComputed() {
            return this.text.split("").reverse().join("");
        },
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

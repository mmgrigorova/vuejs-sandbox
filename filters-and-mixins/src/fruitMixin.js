export const fruitMixin = {
    data() {
        return {
            fruits: ['apple', 'banana', 'mango', 'melon'],
            filterText: ""
        }
    },
    computed: {
        // only recalculates if some of the dependency changes. Better for performance
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created: function(){
        // eslint-disable-next-line no-console
        console.log('created');
    }
}
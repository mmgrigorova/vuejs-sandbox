export const textMixin = {
    computed: {
        countedLenght() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}
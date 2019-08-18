<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name : {{ switchName() }}</p>
    <p>User Age : {{ userAge }}</p>
    <button @click="resetName()">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    // props - set by outside and we can use it in a template
    props: {
      myName: {
        type: String,
        // this component can only be used if this property is passed
        required: true,
        default: "Max"
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        this.myName = 'Maria';
        //Emit custom event
        this.$emit('nameWasReset', this.myName);
      }
    },
    created() {
        eventBus.$on('ageWasReset', (age) => {
          this.userAge = age;
        });
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>

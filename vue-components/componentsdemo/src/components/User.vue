<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>Name is {{myName}}</p>
    <p>Age is {{age}}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="myName"
                         @nameWasReset="myName = $event"
                         :resetFn="resetName"
                         :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age"
                       @ageWasReset="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function () {
      return {
        myName: "Maria",
        age: "27"
      };
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    },
    methods: {
      changeName() {
        this.myName = "Ana"
      },
      resetName() {
        this.myName = "Maria";
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>

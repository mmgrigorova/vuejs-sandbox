<template>
  <div class="form-group">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="fname">First Name</label>
        <input type="text" class="form-control" id="fname" placeholder="First Name"
               :value="firstName"
               @input="nameChanged(true, $event)">
      </div>
      <div class="form-group col-md-6">
        <label for="lname">Last Name</label>
        <input type="text" class="form-control" id="lname" placeholder="Last Name"
               :value="lastName"
               @input="nameChanged(false, $event)">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            nameChanged(isFirst, event) {
                let name = '';
                if (isFirst) {
                    name = event.target.value + ' ' + this.lastName;
                } else {
                    name = this.lastName + ' ' + event.target.value;
                }
                this.value = name;
                this.$emit('input', this.value);
            }
        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];

            }
        }
    }
</script>

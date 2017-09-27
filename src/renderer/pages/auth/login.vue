<style>

</style>
<template>
  <div>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password">
      </div>

      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      login() {
        this.$router.push('/');
      },
    },
  };
</script>
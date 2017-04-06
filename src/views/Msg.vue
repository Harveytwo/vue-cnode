<template>
  <div class="msg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'msg',
  data () {
    return {
      msg: 'Welcome to the msg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

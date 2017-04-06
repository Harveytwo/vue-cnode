<template>
  <div class="others">
    <person class="panel"></person>
    <no-answer class="panel"></no-answer>
    <top100 class="panel"></top100>
    <community class="panel"></community>
    <client-side class="panel"></client-side>
  </div>
</template>

<script>
import ClientSide from './ClientSide.vue'
import Community from './Community.vue'
import NoAnswer from './NoAnswer.vue'
import Person from './Person.vue'
import Top100 from './Top100.vue'

export default {
  name: 'others',
  data () {
    return {
      msg: 'Welcome to the others'
    }
  },
  components: {
  	ClientSide: ClientSide,
  	Community: Community,
  	NoAnswer: NoAnswer,
  	Person: Person,
  	Top100: Top100
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

<template>
  <div class="others">
    <person class="panel"></person>
    <author-topics v-if="authorTopics" class="panel"></author-topics>
    <no-answer class="panel"></no-answer>
    <top100 v-if="!authorTopics" class="panel"></top100>
    <community v-if="!authorTopics" class="panel"></community>
    <client-side v-if="!authorTopics" class="panel"></client-side>
  </div>
</template>

<script>
import ClientSide from './ClientSide.vue'
import Community from './Community.vue'
import NoAnswer from './NoAnswer.vue'
import Person from './Person.vue'
import Top100 from './Top100.vue'
import AuthorTopics from './Author-topics.vue'

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
  	Top100: Top100,
    AuthorTopics
  },
  created: function () {
    // console.log(this.$route.params.topicId)
  },
  computed: {
		person: function () {
			return false;
		},
    authorTopics: function () {
      if(this.$route.name == 'Topic') {
        return true;
      } else {
        return false;
      }
    }
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

<template>
  <div class="share">
    <div class="topicLists">

      <div v-for="item in topics" class="item">
        <a href="" class="author">
          <img :src="item.author.avatar_url">
        </a>

        <span class="replyCount">
          <span class="countReplies">{{ item.reply_count }}</span>
          /
          <span class="countVisits">{{ item.visit_count }}</span>
        </span>
        
        <a href="" class="latestReply">
          <img :src="item.author.avatar_url">
          <span class="replyTime">{{ item.last_reply_at }}</span>
        </a>

        <div class="titleWrap">
          <span v-if="item.top" class="putTop">置顶</span>
          <span v-if=" !item.top && item.good " class="putTop">精华</span>
          
          <router-link :to="{ path: '/topic/'+ item.id }"
                       class="topicTitle text-ellipsis">
            {{ item.title }}
          </router-link>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
import store from '../../vuex/index.js'

export default {
  name: 'share',
  data () {
    return {
      msg: 'Welcome to Your share',
    }
  },
  methods: {
    aa: function () {
      // console.log(this.$route)
    }
  },
  computed: {
    topics: function () {
      return store.state.all
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

<template>
  <div class="authorTopic">
   <div class="titleHeader">
    		<p>作者其它话题</p>
	</div>
    	<div class="innerContent">
    		<ul>
    			<li v-for="item in topics" class="topicTitle text-ellipsis">
    				<a href="">{{ item.title }}</a>
    			</li>
    		</ul>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'authorTopic',
  data () {
    return {
      msg: 'Welcome to the authorTopic',
      topics: [
      	{ title: '拉拉阿阿萨斯大所大所 撒旦按时大叔大婶大所大三大四的阿萨德阿斯达所大所撒是爱的拉', to: '/' },
      	{ title: 'node 7.9更新', to: '/' },
      	{ title: 'node 7.9更新', to: '/' },
      	{ title: 'node 7.9更新', to: '/' },
      	{ title: 'node 7.9更新', to: '' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.topicTitle {
		padding: .01rem;
		max-width: 270px;
		font-size: 14px;
		line-height: .22rem;
	}
</style>

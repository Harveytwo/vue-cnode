<template>
  <div class="community">
    <div class="titleHeader">
    		<p>友情社区</p>
	</div>
    	<div class="innerContent">
    	<ul>
    		<li v-for="item in community" class="communityLists">
    			<a href="">
    				<img :src="item.src">
    			</a>
    		</li>
    	</ul>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'community',
  data () {
    return {
      msg: 'Welcome to the community',
      community: [
      	{ src: '../../../static/img/ruby-china-20150529.png' },
      	{ src: '../../../static/img/ruby-china-20150529.png' },
      	{ src: '../../../static/img/ruby-china-20150529.png' },
      	{ src: '../../../static/img/ruby-china-20150529.png' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.communityLists img {
		width: 150px;
	}
</style>

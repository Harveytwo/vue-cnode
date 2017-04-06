<template>
  <div class="top100">
    <div class="titleHeader">
    		<p>积分榜   <a href="">TOP 100 >></a></p>
	</div>
    	<div class="innerContent">
    		<ol class="topPoints">
    			<li v-for="item in persons">
    				<span class="points">{{ item.points }}</span>
    				<span class="name">
    					<a href="">{{ item.name }}</a>
    				</span>
    			</li>
    		</ol>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'top100',
  data () {
    return {
      msg: 'Welcome to the top100',
      persons: [
      	{ name: '阿斯达斯', points: '11555' },
      	{ name: '阿斯达斯', points: '11555' },
      	{ name: '阿斯达斯', points: '11555' },
      	{ name: '阿斯达斯', points: '11555' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.topPoints {
		font-size: 13px;
		line-height: .22rem;
		color: gray;
	}
	.topPoints .points {
		padding: .02rem;
    		margin-right: .1rem;
	}
	.topPoints a:hover {
		text-decoration: underline;
	}
</style>

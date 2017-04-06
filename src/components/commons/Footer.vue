<template>
  <div class="footer">
    <div class="innerContent">
    	<h1>{{ msg }}</h1>
    	<p>本着练习的态度</p>
    	<p>使用 cnode 社区的 api 练习 vue 2.0</p>
    	<p>感谢 cnode 社区</p>
    	<p>cnode 社区真的很棒，说实话我只有 cnode 社区的账号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to the footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer {
		background: #fff;
	}
	.footer .innerContent {
		width: 90%;
		margin: 0 auto;
	}
</style>

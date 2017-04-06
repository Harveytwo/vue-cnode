<template>
  <div class="clientSIde">
    <div class="titleHeader">
    		<p>客户端二维码</p>
	</div>
    	<div class="innerContent">
    		<img src="../../assets/img/code.png">
    		<br />
    		<a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'clientSIde',
  data () {
    return {
      msg: 'Welcome to the clientSIde'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.innerContent {
		text-align: center;
	}
	.innerContent img {
		width: 2rem;
	}
	.innerContent a {
		color: #778087;
		font-size: 13px;
	}
	.innerContent a:hover {
		text-decoration: underline;
	}
</style>

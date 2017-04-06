<template>
  <div class="person">
    	<div class="titleHeader">
    		<p>个人信息</p>
	</div>
    	<div class="innerContent">
    		<div class="userCard">
    			<a href="#" class="avatar">
    				<img src="../../assets/logo.png" />
    				<span class="userName">Harveytwo</span>
    			</a>

    			
    			<div class="points">
    				<p>积分： 80</p>
    			</div>

    			<div class="signature">
    				<p>“半路进入程序员队伍的 harvey ”</p>
    			</div>
    		</div>
    	</div>

    	<div class="postArticle">
    		<a href="">
    			<span>发布话题</span>
    		</a>
    	</div>
    
  </div>
</template>

<script>
export default {
  name: 'person',
  data () {
    return {
      msg: 'Welcome to the person'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.userCard {
		font-size: 13px;
	}
	.avatar {
    		margin-right: .5em;
	}
	.avatar img {
		width: .48rem;
		height: .48rem;
	}
	.userName {
		color: #778087;
		font-size: 16px;
	}
	.points {
		font-size: 14px;
		margin: .1rem 0;
	}

	.postArticle {
		margin-top: .13rem;
		background: #fff;
		border-radius: 3px;
		padding: .11rem;
	}
	.postArticle span {
	    	border-radius: 3px;
    		background-color: #80bd01;
  		padding: .08rem .1rem;
  		font-size: 14px;
  		color: #fff;
	}
	.postArticle span:hover {
    		background-color: #6ba44e;
	}
</style>

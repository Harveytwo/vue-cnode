<template>
  <div class="header">
    <div class="navContainer clearfix">
    	<a href="#" class="logo"><img src="../../../static/img/cnodejs_light.svg"></a>
    	
    	<form class="search">
    		<input  type="text" />
    	</form>

	<ul class="nav">
		<li v-for="item in navs">
			<router-link :to="{ path: item.to}">
				{{ item.name }}
			</router-link>
		</li>
	</ul>

    </div>
  </div>
</template>

<script>
import store from '../../vuex/index.js'

export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to the header',
      navs: [
      	{ name: '首页', to:'/' },
      	{ name: '未读信息', to:'/msg' },
      	{ name: '新手入门', to:'/getstart' },
      	{ name: 'API', to:'/api' },
      	{ name: '关于', to:'/about' },
      	{ name: '设置', to:'/setting' },
      ]
    }
  },
  watch: {
  	$route: function (to, from) {
  	 	if(to.path == '/home') {
  	 		store.commit('chooseTab', 'all')
  	 		window.localStorage.setItem('homeTab', 'all')
                  store.commit('changePage', '1')
                  // 页码回到第一页
                  let pages = [
                    { page: '1'},
                          { page: '2'},
                          { page: '3'},
                          { page: '4'},
                          { page: '5'},
                  ]
                  store.commit('hasFront', false)
                  store.commit('hasBack', true)
                  store.commit('toPage1', pages)
  	 	}
  	 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
		background: #444;
   		font-size: 13px;
   		color: #ccc;
   		width: 100%;
	}
      .navContainer {
        width: 90%;
        margin: 0 auto;
      }
	.logo {
		float: left;
		display: inline-block;
		width: 1rem;
	      padding: .06rem .2rem .03rem 0;
	      height: .28rem;
            line-height: .28rem;
	}
	.search {
		float: left;
		margin-top: .1rem;
		margin-bottom: 0;
	}
      .search input {
            border-radius: 30px;
            min-width: 1.8rem;
            background: url(../../../static/img/search.png) 4px 4px no-repeat #888;
            padding: .05rem .05rem .05rem .22rem;
            color: #666;
            border: 0;
            margin-top: .02rem;
            transition: all .5s;
            font-size: 13px;
            font-weight: 400;
            line-height: 1;
      }
      .search input:hover,
      .search input:focus {
        background-color: #fff;
      }
	.nav {
		float: right;
	}
	.nav li {
		float: left;
		line-height: .25rem;
		padding: .1rem .15rem;
	}
	.nav a:hover {
		color: #fff;
	}
</style>

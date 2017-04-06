<template>
  <div class="home">
    <div class="homeWrap">

    	<div class="sidebar">
    		<others></others>
    	</div>

    	<div class="content">
    			<div class="panel">
    				<div class="titleHeader">
    					<ul>
    						<li v-for="item in headers" @click="toPage1">
    							<router-link :to="{ name: item.to, query:{ page: '1' } }" :class="{ choose : item.to == current }">
								{{ item.name }}
    							</router-link>

    						</li>
    					</ul>
    				</div>

    				<div class="innerContent">
    					<router-view></router-view>
					<pages></pages>
    				</div>
    				
    			</div>
    	</div>

    </div>
  </div>
</template>

<script>
import store from '../vuex/index.js'
import Others from '../components/others/Others.vue'
import Pages from '../components/commons/Pages.vue'

import homeTab from '../get-data/home-tab.js'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      headers: [
      	{ name: '全部', to:'all' },
      	{ name: '精华', to:'good' },
      	{ name: '分享', to:'share' },
      	{ name: '问答', to:'ask' },
      	{ name: '招聘', to:'job' },
      ]
    }
  },
  components: {
  	Others: Others,
  	Pages: Pages,
  },
  watch: {
  	 $route: function (to, from) {
 		if(from.name !== to.name) {
 			window.localStorage.setItem('homeTab', to.name)

 			store.commit('changePage', '1')
	 		store.commit('chooseTab', to.name)
	  	 	// console.log(to)
	  	 	// 数据的切换
	      	let routerName = to.name
	      	homeTab(routerName)
  	 }
 		}
  },
  computed: {
  	current: function () {
  		return store.state.homeTab
  	}
  },
  mounte: function () {
  	// $router.push({ path: '/all' })
  },
  methods: {
  	toPage1: function () {
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home {
		width: 100%;
	}
	.homeWrap {
		width: 90%;
	     max-width: 14rem;
	     /*min-width: 9.6rem;*/
	     margin: .15rem auto;
	     min-height: 4rem;
	     
	}
	.sidebar {
		width: 2.8rem;
	      font-size: .14rem;
	      float: right;
	      margin-bottom: .2rem;
	      /*background: #fff;*/
	}
	.content {
		/*background: #fff;*/
		padding: 0;
    		margin-right: 3.05rem;
    		
	}
	.home .innerContent {
		padding: 0;
		/*height: 11rem;*/
	}

	/* panel*/
	.titleHeader li {
		display: inline-block;
	}
	.titleHeader  a {
	      color: #80bd01;
	      padding: .03rem .09rem;
	      border-radius: 3px;
	}
	.titleHeader  a.choose {
		background-color: #80bd01;
		color: #fff;
	}
	.titleHeader a:hover {
		color: #005580;
	}
	
</style>

<style type="text/css">
	.panel {
		margin-bottom: .13rem;

	}
	.titleHeader {
		color: #444;
		font-size: 13px;
		padding: .1rem;
	      background-color: #f6f6f6;
	      border-radius: 3px 3px 0 0;
	}
	
	.innerContent {
		background: #fff;
		padding: .1rem;
		border-radius: 0 0 3px 3px;
	}

	@media screen and (max-width: 978px) {
		.home .content {
			margin: 0;
		}
	      .others {
	          display: none;      
	      }
	      .footer {
	      	display: none;
	      }
	      a.topicTitle {
			max-width: 50% !important;
		}
  	}
  	@media screen and (max-width: 1124px) {
		a.topicTitle {
			max-width: 36% !important;
		}
  	}
  	@media screen and (min-width: 1126px && max-width: 1296px) {
		a.topicTitle {
			max-width: 50% !important;
		}
  	}
</style>

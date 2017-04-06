<template>
  <div class="pages">
    	<ul>
            <li class="toFirst">
                  <router-link :to="{ path: $route.path + '?page=1' }">«</router-link>
            </li>
            <li v-if="hasFront">
                  <a>...</a>
            </li>
            <li v-for="item in pages">
                  <router-link :to="{ name: item.to, query:{ page: item.page } }" :class="{ choosePage: item.page == page }">
                      {{ item.page }}
                  </router-link>
                  <!-- <a href="javascript:void(0)" @click="toPage(item.page)" :class="{ choosePage: item.page == page }">{{ item.page }}</a> -->
            </li>
            <li v-if="hasBack">
                  <a>...</a>
            </li>
            <li class="toLast">
                <router-link :to="{ path: $route.path + '?page=555' }">»</router-link>
            </li>
      </ul>
  </div>
</template>

<script>
import store from '../../vuex/index.js'

// import { homeAll } from '../../get-data/home-all.js'
import homeTab from '../../get-data/home-tab.js'

let pageInit = function (page) {
  page = new Number(page)
  if(page >= 4) {
      let newPages = [
        { page: page -2 },
        { page: page-1 },
        { page: page },
        { page: page+1 },
        { page: page +2 },
      ] 
      store.commit('hasFront', true)
      store.commit('toPage1', newPages)
    } else {
      store.commit('hasFront', false)
      let pages = [
        { page: '1'},
        { page: '2'},
        { page: '3'},
        { page: '4'},
        { page: '5'},
      ]
      store.commit('toPage1', pages)
    }
}

export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to the footer',
      
      // page: window.localStorage.getItem('page') || '1',
    }
  },
  mounted: function () {
    let page = window.localStorage.getItem('page')
    let routerName = this.$route.name
    pageInit(page)
    homeTab(routerName, page)
  },
  watch: {
    $route: function (to, from) {
      // console.log(to)
      if(from.name === to.name) {
         let page = to.query.page
          // 页码的切换
          this.page = page
          store.commit('changePage', page)
          pageInit(page)
          // 数据的切换
          let routerName = this.$route.name

          homeTab(routerName, page)
          window.scrollTo(0, 0)
      }
    }
  },
  methods: {
    toPage: function (page) {

    }
  },
  computed: {
      page: function () {
        return store.state.page
      },
      pages: function () {
        return store.state.pages
      },
      hasFront: function () {
        return store.state.hasFront
      },
      hasBack: function () {
        return store.state.hasBack
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

      .pages ul  a.choosePage {
        color: #80bd01 !important;
      }

      .pages {
            height: .4rem;
            margin: .1rem 0 0 .1rem
      }
      .pages ul {
            display: inline-block;
            margin-left: 0;
            /*height: .26rem;*/
      }
      .pages ul li {
        float: left;
        display: inline;
        background-color: #fff;
            border: 1px solid #ddd;
            border-left-width: 0;
      }
      .pages ul a {
           padding: .06rem .12rem;
           line-height: .26rem;
           text-decoration: none;
           color: #999;
      }
      .pages ul li a:hover {
        background: #f5f5f5;
      }
      .pages ul li:nth-child(1) {
        border-left-width: 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
</style>

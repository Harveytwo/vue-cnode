import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 首页 tab 切换
    homeTab: window.localStorage.getItem('homeTab') || 'all',
    // 首页 tab all 数据 
    all: [],
    // pages 组件页数
    page: window.localStorage.getItem('page') || '1',
    hasFront: false,
    hasBack: true,
    pages: [
    	{ page: '1'},
      { page: '2'},
      { page: '3'},
      { page: '4'},
      { page: '5'},
    ]
  },
  mutations: {
    chooseTab (state, type) {
      state.homeTab = type
    },
    getAll (state, pageData) {
    	state.all = pageData
    },
    changePage (state, page) {
      window.localStorage.setItem('page', page)
      state.page = page
    },
    hasFront (state, type) {
    	state.hasFront = type
    },
    hasBack (state, type) {
    	state.hasBack = type
    },
    toPage1 (state, page1) {
    	state.pages = page1
    }
  }
})

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store
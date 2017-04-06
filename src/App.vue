<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>

    <transition name="fade">
      <div id="backtotop" v-if="backtotop" @click='top'>回到顶部</div>
    </transition>

    <my-footer></my-footer>
  </div>
</template>

<script>

import myHeader from './components/commons/Header.vue'
import myFooter from './components/commons/Footer.vue'

export default {
  name: 'app',
  data: function () {
    return {
      msg: 'cnode 社区',
      backtotop: false
    }
  },
  components: {
    myHeader: myHeader,
    myFooter: myFooter,
  },
  mounted: function () {
    let _this = this
    let t
    let backtotop = document.getElementById('backtotop')
    window.addEventListener('scroll', function(e) {
      clearInterval(t);
        t = setTimeout(function(){
            if(e.path[1].scrollY > 150) {
              _this.backtotop = true
            } else {
              _this.backtotop = false
            }
        },200)
    })
  },
  methods: {
    top: function () {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background-color: #e1e1e1;
  /*margin-top: 60px;*/
}
#backtotop {
  width: 24px;
  color: gray;
  padding: .12rem 0 .12rem .05rem;
  position: fixed;
  cursor: pointer;
  text-align: center;
  z-index: 20;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
  right: 0;
  bottom: 1.4rem;
  transition: opacity .5s;
}
.fade-enter-active,
.fade-leave {
  opacity: 1
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

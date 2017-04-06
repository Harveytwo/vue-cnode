import store from '../vuex/index.js'
import { homeAll, homeGood, homeShare, homeAsk, homeJob } from '../get-data/home-all.js'

let TabData = function (routerName, page) {
	let _page = page || 1
	switch (routerName) {
	      case 'all': {
	      	console.log('all')
	        homeAll(_page).then(response => response.json())
	          .then(data => {
	            store.commit('getAll', data.data)
	            // console.log(_this.topics)
	          })
	          .catch(e => console.log("Oops, error", e))
	        break;
	      };
	      case 'good': {
	      	console.log('good')
	        homeGood(_page).then(response => response.json())
	          .then(data => {
	            store.commit('getAll', data.data)
	          })
	          .catch(e => console.log("Oops, error", e))
	        break;
	      };
	      case 'share': {
	      	console.log('share')
	        homeShare(_page).then(response => response.json())
	          .then(data => {
	            store.commit('getAll', data.data)
	          })
	          .catch(e => console.log("Oops, error", e))
	        break;
	      };
	      case 'ask': {
	      	console.log('ask')
	        homeAsk(_page).then(response => response.json())
	          .then(data => {
	            store.commit('getAll', data.data)
	          })
	          .catch(e => console.log("Oops, error", e))
	        break;
	      };
	      case 'job': {
	      	console.log('job')
	        homeJob(_page).then(response => response.json())
	          .then(data => {
	            store.commit('getAll', data.data)
	          })
	          .catch(e => console.log("Oops, error", e))
	        break;
	      };
	      default : {
	        // console.log(666)
	      }
	}
}

export default TabData

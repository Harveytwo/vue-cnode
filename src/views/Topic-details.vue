<template>
	<div class="topicDetails">
	
		<div class="contentWrap">
			<div class="sidebar">
				<others></others>
			</div>
	
			<!--<div class="content" v-html="topicContent">-->
			<div class="content">
				<div class="topicTitle">
					<p class="fullTitle">
						<span v-if="top"
						      class="putTop">置顶</span>
						<span v-if=" !top && good "
						      class="putTop">精华</span> {{title}}
					</p>
	
					<div class="publishTime">
						<span>
										发布于 {{create_at}}
									</span>
						<span v-html="' 作者 <a href=>' + author + '</a>'">
										
									</span>
						<span>
										{{visit_count}} 次浏览
									</span>
						<span>
										来自 {{from}}
									</span>
						<input class="collect"
						       type="submit"
						       :value="collect.collectText"
						       :class="{hasCollected: collect.collect}" />
					</div>
				</div>
	
				<div class="topicContent"
				     v-html="topicContent">
	
				</div>
				<div class="replies"
				     v-if="replies">
					<div class="titleHeader">
						<p>{{topicDetails.reply_count}} 回复</p>
					</div>
					<div class="innerContent">
						<ul>
							<li v-for="reply in replies">
								<div class="authorInfo">
									<a href="">
										<img :src="reply.author.avatar_url"
										     :title="reply.author.loginname" />
									</a>
									<div class="userInfo">
										<a href=""
										   class="replyAuthor">{{reply.author.loginname}}</a>
										<a href=""
										   class="replyTime">{{reply.create_at}}</a>
										<span v-if="reply.author.loginname == author"
										      class="putTop">作者</span>
									</div>
									<div class="userAction">
										<span>
											<i class="like" title="喜欢"></i>
										</span>
										<span>
											<i class="userAt" title="回复"></i>
										</span>
									</div>
								</div>
								<div class="replyContent"
								     v-html="reply.content">
										
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="postReply">
					<div class="titleHeader">
						<p>添加回复</p>
					</div>
					<div class="innerContent">
						<input type="submit" value="回复" />
					</div>
				</div>
			</div>
	
		</div>
	</div>
</template>

<script>
import store from '../vuex/index.js'
import Others from '../components/others/Others.vue'

import homeTab from '../get-data/home-tab.js'

// 获取话题详情数据
import { topicsDetails } from '../get-data/topic-details.js'

export default {
	name: 'topicDetails',
	data() {
		return {
			msg: 'Welcome to Your topic details',
		}
	},
	created: function () {
		var topicId = this.$route.params.topicId;
		var _this = this;
		topicsDetails(topicId).then(response => response.json())
			.then(data => {
				// console.log(data)
				store.commit('getTopicDetails', data.data)
			})
			.catch(e => console.log("Oops, error", e))

	},
	components: {
		Others: Others,
	},
	computed: {
		title: function () {
			return store.state.topicDetails.title
		},
		author: function () {
			return store.state.topicDetails.author.loginname
			// return 'aa'
		},
		create_at: function () {
			return store.state.topicDetails.create_at
		},
		visit_count: function () {
			return store.state.topicDetails.visit_count
		},
		from: function () {
			let _text;
			switch (store.state.topicDetails.tab) {
				case 'share':
					_text = '分享';
					break;
				case 'ask':
					_text = '问答';
					break;
				case 'job':
					_text = '招聘';
					break;
			}
			return _text
		},
		collect: function () {
			let value = store.state.topicDetails.is_collect ? '取消收藏' : '收藏';
			var obj = {
				collect: store.state.topicDetails.is_collect,
				collectText: value
			}
			return obj;
		},
		topicContent: function () {
			return store.state.topicDetails.content
		},
		top: function () {
			return store.state.topicDetails.top
		},
		good: function () {
			return store.state.topicDetails.good
		},
		replies: function () {
			if (store.state.topicDetails.replies.length == 0) {
				return false
			}
			return store.state.topicDetails.replies
		},

		topicDetails: function () {
			return store.state.topicDetails
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topicContent {
	background: #fff;
	/*height: 200px;*/
	margin-bottom: 15px;
	padding: .1rem;
}

.topicTitle {
	background: #fff;
	border-bottom: 1px solid #eee;
	padding: .1rem;
}

.topicTitle p {
	font-size: 22px;
	font-weight: 700;
	margin: 8px 0;
	display: inline-block;
	vertical-align: bottom;
	width: 75%;
	line-height: 130%;
}

.publishTime {
	font-size: 12px;
	color: #838383;
}

.publishTime span {
	margin-left: .05rem;
}

.publishTime span::before {
	content: "•";
	margin-right: .01rem;
	font-size: 16px;
	vertical-align: middle;
}

.collect {
	border: none;
	float: right;
	width: auto;
	padding: .05rem .1rem;
	margin: 0;
	font-size: 14px;
	transition: all .2s ease-in-out;
	letter-spacing: .02rem;
	box-shadow: none;
	vertical-align: middle;
	color: #fff;
	cursor: pointer;
	border-radius: 3px;
	background-color: #80bd01;
}




/*回复*/
.replies {
	padding: 0;
}

.replies .innerContent li {
	padding-right: .1rem;
	font-size: 14px;
	background: #fff;
	border-top: 1px solid #f0f0f0;
	position: relative;
	padding: .1rem 0 .1rem .1rem;
	font-size: 14px;
}

.replies li a {
	float: left;
}

.replies li img {
	width: .3rem;
	height: .3rem;
	border-radius: 3px;
}

.userInfo {
	margin-left: .1rem;
	display: inline-block;
}

.replyTime {
	margin: 0 .05rem;
}

.replyContent {
	padding-left: 50px;
	color: #333;
}


/*添加回复*/
.postReply {
	margin-top: .1rem;
}

</style>

<style>
/*markdown 的样式*/

.markdown-text h1,
.markdown-text h2,
.markdown-text h3,
.markdown-text h4,
.markdown-text h5,
.markdown-text h6 {
	font-weight: 700;
	line-height: .2rem;
}

.markdown-text h1,
.markdown-text h2,
.markdown-text h3 {
	line-height: .4rem;
}

.markdown-text h1,
.markdown-text h2,
.markdown-text h3 {
	margin: .1rem 0 .15rem;
	border-bottom: 1px solid #eee;
}

.markdown-text h1 {
	font-size: 32.5px;
	margin: .02rem 0;
	display: inline-block;
	vertical-align: bottom;
	width: 75%;
	line-height: 130%;
}

.markdown-text h2 {
	font-size: 26px;
}

.markdown-text h3 {
	font-size: 24.5px;
}

.markdown-text p {
	margin: .1rem 0;
	font-size: 15px;
}

.markdown-text ul {
	margin: 0 0 .1rem .25rem;
}

.markdown-text ul li {
	font-size: 14px;
	list-style-type: disc;
	line-height: .2rem;
}

.markdown-text img {
	height: auto;
	max-width: 100%;
	vertical-align: middle;
	border: 0;
}

.markdown-text table {
	max-width: 100%;
	background-color: transparent;
	padding: 0;
	border-collapse: collapse;
	border-spacing: 0;
	font: inherit;
}

.markdown-text table tr {
	border-top: 1px solid #ccc;
	background-color: #fff;
	margin: 0;
	padding: 0;
}

.markdown-text table tr:nth-child(2n) {
	background-color: #f8f8f8;
}

.markdown-text table tr th {
	font-weight: 700;
}

.markdown-text table tr th,
.markdown-text table tr td {
	border: 1px solid #ccc;
	text-align: left;
	margin: 0;
	padding: 6px 13px;
}

blockquote {
	padding: 0 0 0 .15rem;
	margin: 0 0 .2rem;
	border-left: 5px solid #eee;
}

.markdown-text a {
	color: #08c;
}

.markdown-text pre.prettyprint {
	font-size: 14px;
	line-height: 22px;
	border-radius: 0;
	padding: 0 .15rem;
	border: none;
	margin: .2rem 0;
	border-width: 1px 0;
	background: #f7f7f7;
	-o-tab-size: 4;
	-moz-tab-size: 4;
	tab-size: 4;
}

pre code {
	color: inherit;
	white-space: pre-wrap;
	background-color: transparent;
}
</style>

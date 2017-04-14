
let topicsDetails = topicId => fetch("https://cnodejs.org/api/v1/topic/" + topicId)

export { 
	topicsDetails,
}
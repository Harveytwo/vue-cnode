
let homeAll = page => fetch("https://cnodejs.org/api/v1/topics?mdrender=false&&tab=all" + (page ? '&&page='+page : ''))
let homeGood= page => fetch("https://cnodejs.org/api/v1/topics?mdrender=false&&tab=good" + (page ? '&&page='+page : ''))
let homeShare= page => fetch("https://cnodejs.org/api/v1/topics?mdrender=false&&tab=share" + (page ? '&&page='+page : ''))
let homeAsk= page => fetch("https://cnodejs.org/api/v1/topics?mdrender=false&&tab=ask" + (page ? '&&page='+page : ''))
let homeJob= page => fetch("https://cnodejs.org/api/v1/topics?mdrender=false&&tab=job" + (page ? '&&page='+page : ''))


export { 
	homeAll,
	homeGood,
	homeShare,
	homeAsk,
	homeJob
}
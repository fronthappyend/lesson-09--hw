/**
*class Post
*/
function Post() {

	let mainDiv = document.createElement("div")
	mainDiv.classList.add("content")
	mainDiv.innerText = 'Lorem ipsum dolor'

	let dateDiv = document.createElement("div")
	dateDiv.classList.add("date")
	dateDiv.innerText = `${new Date}`

	let likeDiv = document.createElement("div")
	likeDiv.classList.add("like")
	likeDiv.innerText = 0 + ' People like it'

	mainDiv.appendChild(dateDiv)
	mainDiv.appendChild(likeDiv)
	
	this.mainDiv = mainDiv
	this.likeDiv = likeDiv
}
Post.prototype.add = function () {
    document.body.appendChild(this.mainDiv)
}

/**
*class Timer
*/
function Timer(ms) {
    this.ms = ms
    this.interval = null
}
Timer.prototype.start = function (callback) {
    this.interval = setInterval(callback, this.ms)
    return this
}
Timer.prototype.stop = function () {
    clearInterval(this.interval)
    return this
}
Timer.prototype.stopAfter = function (ms, callback) {
    setTimeout(callback, ms)
    return this
}


function addPosts(number) {
	for ( let i = 1; i <= number; ++i) {
		let post = new Post(0, i)
		post.add(document.getElementsByClassName("card-content"))
	}
}

function addLikes () {
	let likes = 0;
	let elements = document.getElementsByClassName("like")
	let element = elements[Math.floor(Math.random()*elements.length)]
	likes = parseInt(element.textContent) + Math.floor(Math.random()*100);
	element.innerText = likes + ' People like it'
}


addPosts(5)
let timer = new Timer(1000)
timer
		.start(function() {addLikes()})
		.stopAfter(15000, timer.stop.bind(timer))
		












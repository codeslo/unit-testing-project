$(document).ready(function () {
	
	loadVideo();

	// enable next button
	$('#next').click(function () {
		if (counter < videoArray.length - 1) {
			counter++;
		} else {
			return;
		}
		return displayVideo();
	});

	// enable last button
	$('#last').click(function () {
		if (counter > 0) {
			counter--;
		} else {
			return;
		}
		return displayVideo();
	});

	
});

// set initial values
let videoArray = [];
let counter = 0;
const screenWidth = $(".screen").width();
const screenHeight = $(".screen").height();

// function to load videos
function loadVideo() {
	const d = new Date();
	const lastYear = d.getFullYear() - 1;
	const month = d.getMonth() +1;
	const day = d.getDate();
	const myKey = "AIzaSyAr0fnc8B-t96isVPUByudWNPFDKJIugoc";
	const request = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvC4D8onUfXzvjTOM-dBfEA&maxResults=10&order=viewCount&publishedAfter='+lastYear+'-'+month+'-'+day+'T00%3A00%3A00Z&q=&movie&trailer&type=video&videoCaption=any&relevanceLanguage=en&videoCategoryId=24&videoEmbeddable=true&key=' + myKey;
	$.ajax({
		url: request,
		success: function (data) {
			var id = data.items[0].id.videoId;
			data.items.forEach(buildArray);
			return displayVideo();
		}
	});
}

// builds objects for videoArray
function buildArray(element) {
	let videoObj = {};
	videoObj.title = element.snippet.title;
	videoObj.id = element.id.videoId;
	return videoArray.push(videoObj);

}

// embeds video to screen div
function displayVideo() {
	let currentVideo = videoArray[counter];
	return $('#screen').html('<iframe width="' + screenWidth + '"height="' + screenHeight + '" src="https://www.youtube.com/embed/' + currentVideo.id + '?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
}




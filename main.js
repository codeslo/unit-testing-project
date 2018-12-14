let settings = {
    videoArray: [],
    counter: 0,
};
// buildAjaxRequest returns a URL used to request data from the YouTube API
function buildAjaxRequest() {
    // set date information
    const d = new Date();
    const lastYear = d.getFullYear() - 1;
    const month = d.getMonth() + 1;
    const day = d.getDate();

    // set Google API Key
    const myKey = "AIzaSyAr0fnc8B-t96isVPUByudWNPFDKJIugoc";

    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvC4D8onUfXzvjTOM-dBfEA&maxResults=10&order=viewCount&publishedAfter=' + lastYear + '-' + month + '-' + day + 'T00%3A00%3A00Z&q=&movie&trailer&type=video&videoCaption=any&relevanceLanguage=en&videoCategoryId=24&videoEmbeddable=true&key=' + myKey;
}

// loadData calls the YouTube API and returns the result
function loadData() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            settings.videoArray = buildVideoArray(xhttp.responseText);
            setTimeout(displayVideo(), 2000);
        }
    };
    xhttp.open("GET", buildAjaxRequest(), true);
    xhttp.send();
}

// build video array takes JSON from Youtube and converts it to an array of video data for our app
function buildVideoArray(data) {
    let videoArray = [];
    let d = JSON.parse(data).items;
    d.forEach(e => {
        let videoObj = {};
        videoObj.title = e.snippet.title;
        videoObj.id = e.id.videoId;
        videoArray.push(videoObj);
    });
    console.log(videoArray);
    return videoArray;

}

// displayVideo handles the DOM manipulation necessary to get videos embedded in the UI.
function displayVideo() {
    let currentVideo = settings.videoArray[settings.counter];
    let screen = document.getElementById('screen');
    return screen.innerHTML = '<iframe width="' + screen.offsetWidth + '"height="' + screen.offsetHeight + '" src="https://www.youtube.com/embed/' + currentVideo.id + '?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
}

// next button onclick
function nextVideo() {
    if (settings.counter < settings.videoArray.length - 1) {
        settings.counter++;
        displayVideo();
    }
}

// last button onclick
function lastVideo() {
    if (settings.counter > 0) {
        settings.counter--;
        displayVideo();
    }
}
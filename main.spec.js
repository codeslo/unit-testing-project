// buildAjaxRequest test
describe('buildAjaxRequest test', function () {
    it('returns a string', function () {
        expect(typeof buildAjaxRequest()).toBe('string');
    });
    it('returns a string that includes today\'s date', function () {
        const d = new Date();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        expect(buildAjaxRequest()).toContain(month);
        expect(buildAjaxRequest()).toContain(day);
    });
});

// loadData test
describe('loadData test',function(){
    it('calls buildAjaxRequest for URL',function(){
        spyOn(window,'buildAjaxRequest');
        loadData();
        expect(window.buildAjaxRequest).toHaveBeenCalled();
    });

    it('makes an xhttp request',function(){
        spyOn(XMLHttpRequest.prototype,'send');
        loadData();
        expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
    });

    // ajax calls can be mocked using the jasmine-ajax library available from GitHub. Can you test to see what happens on a successful call?
});

// buildVideoArray test
describe('buildVieoArray test',function(){
    it('returns an array when handed JSON data',function(){
        let jsonData = JSON.stringify({"items": [
            {
             "kind": "youtube#searchResult",
             "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/3xrOhYgz3JU3egirMk_KqqV-_FM\"",
             "id": {
              "kind": "youtube#video",
              "videoId": "QwievZ1Tx-8"
             },
             "snippet": {
              "publishedAt": "2018-03-16T13:02:41.000Z",
              "channelId": "UCvC4D8onUfXzvjTOM-dBfEA",
              "title": "Marvel Studios' Avengers: Infinity War - Official Trailer",
              "description": "In theaters April 27. Get your tickets now: http://www.fandango.com/infinitywar Find out more on Marvel.com - http://bit.ly/2Iv6ouB Follow Marvel on Twitter: ...",
              "thumbnails": {
               "default": {
                "url": "https://i.ytimg.com/vi/QwievZ1Tx-8/default.jpg",
                "width": 120,
                "height": 90
               },
               "medium": {
                "url": "https://i.ytimg.com/vi/QwievZ1Tx-8/mqdefault.jpg",
                "width": 320,
                "height": 180
               },
               "high": {
                "url": "https://i.ytimg.com/vi/QwievZ1Tx-8/hqdefault.jpg",
                "width": 480,
                "height": 360
               }
              },
              "channelTitle": "Marvel Entertainment",
              "liveBroadcastContent": "none"
             }
            }]});
        let result = buildVideoArray(jsonData);
        expect(Array.isArray(result)).toBe(true);
    });
});

// displayVideo test



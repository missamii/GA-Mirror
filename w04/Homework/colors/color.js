window.onload = function() {
  console.log('color.js is loaded');
  var colorButton = document.querySelectorAll('#colorbutton')
  colorButton[0].addEventListener('click', function(event){
    $.ajax({
      url: 'http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=callback',
      dataType: 'JSONP',
      jsonpCallback: 'callback'
    }).done( function(data) {
      if ((typeof callback !== "undefined")) {
	callback([{"id":2513354,"title":"faciikan CLAD","userName":"syork","numViews":71,"numVotes":15,"numComments":1,"numHearts":0,"rank":0,"dateCreated":"2012-11-05 09:38:19","colors":["1CC8BA","ECEF64","F2D22F","FD7402","F6367F"],"description":"<div style=\"width:400px; max-width: 95% ; margin: 0 auto; padding: 7px; text-align: center; color: #fff;background-color: #000; border:5px solid #ccc; font-size:115%;\"><a style=\"border:none\" href=\"http:\/\/www.colourlovers.com\/group\/CLAD\/conversations\/17807\/November_5th_-_faciikan#comment-167994\" target=\"_blank\"><img style=\"width:70%;max-width:300px\" src=\"http:\/\/static.colourlovers.com\/images\/groups\/3\/3344f.jpg\" \/><img style=\"width: 80px; max-width: 18%; vertical-align: top; margin: 10px 0 0 5px\" class=\"photo-border\" src=\"http:\/\/static.colourlovers.com\/images\/lovers\/2257\/2257094t.jpg?1352025483\" \/><\/a><div><\/div>Monday 5th November 2012 <div style=\"font-size:110%;color: #fff;\"><b><a style=\"color: #fff;\" href=\"\/lover\/faciikan\" target=\"_blank\">faciikan<\/a> is our CL artist of the day! <\/b><\/div><div style=\"font-size:110%; color: #fff;\"><a style=\"color: #fff; border:none;\" title=\"Teleport To Artist Of The day's most loved palettes!\" href=\"\/lover\/faciikan\/palettes\/most-loved\/all-time\/grid\" target=\"_blank\">Visit her fabulous palettes: <img style=\"vertical-align: middle;\" src=\"http:\/\/static.colourlovers.com\/images\/colors\/3475\/3475570i.jpg\" \/><\/a><\/div>If any of them inspires you to make a pattern, or the colours to make a palette: <a style=\"color: #fff;\" href=\"http:\/\/i.imgur.com\/DuFXC.png\" target=\"_blank\">tag it CLAD<\/a> and post your creations <a style=\"color: #fff;\" href=\"http:\/\/www.colourlovers.com\/group\/CLAD\/conversations\/17807\/November_5th_-_faciikan#comment-167994\" target=\"_blank\">here<\/a><\/div>","url":"http:\/\/www.colourlovers.com\/palette\/2513354\/faciikan_CLAD","imageUrl":"http:\/\/www.colourlovers.com\/paletteImg\/1CC8BA\/ECEF64\/F2D22F\/FD7402\/F6367F\/faciikan_CLAD.png","badgeUrl":"http:\/\/www.colourlovers.com\/images\/badges\/pw\/2513\/2513354_faciikan_CLAD.png","apiUrl":"http:\/\/www.colourlovers.com\/api\/palette\/2513354"}]);
}
      console.log('im data',data);
      console.log(data[0].colors);

    });
    var colors = data[0].colors;
      for (var i = 0; i < colors.length; i++) {
        colors[i]
      }
  })
}

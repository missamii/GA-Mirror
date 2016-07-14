console.log("main.js is loaded");

$(document).ready(function() {
  console.log('doc ready');
  $.get("http://localhost:3000", function(data) {
    data = JSON.parse(data);
    console.log(data);
  });

  var newPost = {
    author: "Liza",
    title: "I have cool headphones",
    content: "I really like my headphones!"
  };

  // newPost = JSON.stringify(newPost);

  $.post('http://localhost:3000', newPost, function(data) {
    console.log(data);
  });
});

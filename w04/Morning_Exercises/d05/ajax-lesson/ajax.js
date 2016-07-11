document.addEventListener("DOMContentLoaded", function(event){
    //request

    var button = document.getElementById("button");
    button.addEventListener("click", function(e){
      console.log(e);
      //now my ajax go here
      var url = "https://data.cityofnewyork.us/resource/xx67-kt59.json?zipcode=10010";
      $.get(url)
      .done(function(res){
          // response goes here.
          // display stuff
          //console.log(res);
          for(var restaurant of res){
            // console.log(restaurant);

            for(var key in restaurant){
              if(key === "violation_description"){
                //console.log("value: "+ restaurant["grade"]);
                // console.log(restaurant["violation_description"].includes("mice"));
                var el = document.createElement('div');
                var content = document.createTextNode("");
                el.appendChild(content);
                // el.innerHTML = "";
                document.body.appendChild(el);
                  console.log();
              }
            }

          }
      });
    });
});

function validate(){
  var searchbox = document.getElementById("searchbox");
	var searchvalue = searchbox.value;

	if(searchvalue != ""){
				return true;
			} else {
				alert("please type a search query!");
				return false;
			}
}

function yes(){
  var searchString = document.location.search;
  searchString = searchString.substring(1);
  var nvPairs = searchString.split("&");

	for (i = 0; i < nvPairs.length; i++) {
	   var nvPair = nvPairs[i].split("=");
	   var name = nvPair[0];
	   var value = nvPair[1];
  }

  var string = value.split("+");
  value = "";
  for(i = 0; i < string.length; i++){
    value += string[i] + " ";
  }
  console.log(value);
  getResultsFromTMDB(value);
  return false;
}

function getResultsFromTMDB(value){
  var url = "https://api.themoviedb.org/3/search/multi?api_key=95e3a26ca455cd0b5d455ae9fa52acad&language=en-US&page=1&include_adult=false&query="+value;
  $.getJSON(url, function(jsondata){
    addResultTitles(jsondata);
  });
}


function addResultTitles(jsondata){
  var htmlstring = "";
  //console.log(jsondata);
  var counter = 0;
  for(var i = 0; counter < 10; i++){
    var poster = "http://image.tmdb.org/t/p/w92" + jsondata.results[i].poster_path;
    console.log(poster);
    var title = jsondata.results[i].title;
    var year = jsondata.results[i].release_date;
    var img = "<img src="+poster+" alt=poster>";
    if(title == null){

    } else {
      var imgString =  "<div class = oneMovie> <div class = image>" +  img + "</div>";
      var titleString = "<div class = title> Title:" + title + "  </div>";
      var yearString = "<div class = year>Release Year:" + year + "</div></div>";
      htmlstring = imgString + titleString + yearString;
      console.log(htmlstring);
      //htmlstring = "<div class = oneMovie> <div class = image>" +  img + "</div> <div class = title> Title:" + title + "  </div> <div class = year>Release Year:" + year + "</div></div>";
      $("#searchResults").append(htmlstring);
      counter++;
    }
  }
}

function motd(){
  var motdArray = [" I did not hit her, it's not true! It's bullshit! I did not hit her! [throws water bottle]","Oh hi Mark!","Hi doggie!","You betrayed me! You're not good. You, you're just a chicken. Chip-chip-chip-chip-cheep-cheep."];

  document.getElementById("Title").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
  //document.getElementById("subheader").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
}

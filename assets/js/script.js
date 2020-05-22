$("#bands").on("click", () => {
    $(".form-inline").show(300);
    $(".form-inline2").hide();
})
function bandArtist(artist){
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp"
    $.ajax({
        url: bandURL,
        method: "GET"
    }).then(function(res){
        console.log(res);
        // var bandName = $("<h1>").text(res.name); 
        // var bandURL = $("<a>").attr("href", res.url).append(bandName);

        var result = `
                        <div class="card w-50 m-auto">
                        <img class="card-img" src="${res.image_url}" alt="Card image">
                        <div class="card-img-overlay">
                            <h1 class="card-title text-center">${res.name}</h1>
                            <!-- <p class="card-text"></p> -->
                        </div>
                    </div>
                    <h3 class="text-center"><a href="${res.url}">See Tour Dates</a></h3>`

        $("#band-div").empty();
        $("#band-div").append(result)
    })
}

$("#submit-band").on("click", function(event){
    event.preventDefault();
    var bandSearch = $(".band-submit").val().trim();
    // console.log(bandSearch);
    bandArtist(bandSearch);
})


$("#movies").on("click", () => {
    $(".form-inline2").show(300);
    $(".form-inline").hide();
})
function movieSearch(title){

    var movieURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";
    $.ajax({
        url: movieURL,
        method: "GET"
    }).then(function(res){
        console.log(res);
        var movieDiv = $("<div id='movie-div'</div>");
        var rating = response.Rated;
        var pOne = $("<p>").text("Rating: " + rating);
        movieDiv.append(pOne);
        var released = response.Released;
        var pTwo = $("<p>").text("Released: " + released);
        movieDiv.append(pTwo);
        var plot = response.Plot;
        var pThree = $("<p>").text("Plot: " + plot);
        movieDiv.append(pThree);
        var imgURL = response.Poster;
        var image = $("<img>").attr("src", imgURL);
        movieDiv.append(image);
        $("#movie-div").prepend(movieDiv);
      });

$("#submit-movie").on("click", function(event){
    event.preventDefault();
    var movieSubmit = $(".movie-submit").val().trim();
    console.log(movieSubmit);
    movieSearch(movieSubmit);
    })
}
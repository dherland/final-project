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
    console.log("clicked");
    var bandSearch = $(".band-submit").val().trim();
    // console.log(bandSearch);
    bandArtist(bandSearch);
})


$("#movies").on("click", () => {
    $(".form-inline2").show(300);
    $(".form-inline").hide();
})
function movieSearch(){
    var title = $(".movie-submit").val();
    var movieURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";
    $.ajax({
        url: movieURL,
        method: "GET"
    }).then(function(res2){
        console.log(res2);
        
        var result2 = `
        <div class="card">
        <div class="card-body">
          <p class="card-text">${res.name}</p>
        </div>
        <img src="${res.poster}" alt="Card image">
        <div class="card-body">
          <p class="card-text">${res.ratings}</p>
        </div>
      </div>`

        $("#movie-div").empty();    
        $("#movie-div").append(result2)
         
        console.log(result2);
      });

$("#submit-movie").on("click", function(event){
    event.preventDefault();
    console.log("clicked");
    var movieSubmit = $(".movie-submit").val().trim();
    console.log(movieSubmit);
    movieSearch(movieSubmit);
    })
}
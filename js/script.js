$(document).ready(function() {
    $('#movie-list').html('')
    $.ajax({
        url: ' http://www.omdbapi.com/?',
        type: 'get',
        dataType: 'json',
        data: {
            'apiKey': '41243417',
            'i': 'tt3896198'
        }, 
        success: function(result){
            console.log(result);
            if(result.Response == "True"){
                console.log(result.Response)
                let movies = result.Search;
                $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card mb-3" style="width: 20rem; height:35rem">
                                <img src="`+result.Poster+`" class="card-img-top" alt="..." height="400px">
                                <div class="card-body">
                                    <h5 class="card-title">`+result.Title+`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+result.Year+`</h6>
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+result.imdbID+`">See Detail</a>
                                </div>
                            </div>
                        </div>
                    `)
                $('#search-input').val('')
    
            }else{
                $('#movie-list').html(
                    `<h4 class="text-center">`+result.Error+`</h4>`
                )
            }
        }
    
    });
  });
function homes(){
    $(document).ready(function() {
        $('#movie-list').html('')
        $.ajax({
            url: ' http://www.omdbapi.com/?',
            type: 'get',
            dataType: 'json',
            data: {
                'apiKey': '41243417',
                'i': 'tt3896198'
            }, 
            success: function(result){
                console.log(result);
                if(result.Response == "True"){
                    console.log(result.Response)
                    let movies = result.Search;
                    $('#movie-list').append(`
                            <div class="col-md-4">
                                <div class="card mb-3" style="width: 20rem; height:35rem">
                                    <img src="`+result.Poster+`" class="card-img-top" alt="..." height="400px">
                                    <div class="card-body">
                                        <h5 class="card-title">`+result.Title+`</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">`+result.Year+`</h6>
                                        <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+result.imdbID+`">See Detail</a>
                                    </div>
                                </div>
                            </div>
                        `)
        
                    $('#search-input').val('')
        
                }else{
                    $('#movie-list').html(
                        `<h4 class="text-center">`+result.Error+`</h4>`
                    )
                }
            }
        
        });
    });
}

function searchMovie(){
    $('#movie-list').html('')    
    
    $.ajax({
        url: 'http://www.omdbapi.com/?',
        type: 'get',
        dataType: 'json',
        data: {
            'apiKey': '41243417',
            's': $('#search-input').val()
        },  
        success: function(result){
            // console.log(result);
            if(result.Response == "True"){
                let movies = result.Search;
                let data = movies[4].imdbID;
                // console.log(data);
    
                $.each(movies, function(i,data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card mb-3" style="width: 20rem; height:35rem">
                                <img src="`+data.Poster+`" class="card-img-top" alt="..." height="400px">
                                <div class="card-body">
                                    <h5 class="card-title">`+data.Title+`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+data.Year+`</h6>
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+data.imdbID+`">See Detail</a>
                                </div>
                            </div>
                        </div>
                    `)
                })
    
                $('#search-input').val('')
    
            }else{
                $('#movie-list').html(
                    `<h4 class="text-center">`+result.Error+`</h4>`
                )
            }
        }
    
    });

}

$('#search-btn').on('click',function () {
    searchMovie();
});

$('#search-input').on('keyup',function (e) {
    if (e.keyCode === 13){
        searchMovie();
    }
});

$('#movie-list').on('click','.see-detail',function(){
    console.log($(this).data('id'))

    $.ajax({
        url: 'http://www.omdbapi.com/?',
        dataType: 'json',
        type: 'get',
        data: {
            'apiKey': '41243417',
            'i': $(this).data('id')
        },  
        success: function(movie){
            console.log(movie)
            if(movie.Response === "True"){
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="`+movie.Poster+`" class="img-fluid"alt="">
                        </div>
                        <div class="col-md-8">
                            <h5 class="card-title">`+movie.Title+`</h5>
                            <h6 class="card-subtitle mb-2 text-muted">`+movie.Year+` - `+movie.Genre+`</h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><b>Writer</b><p>`+movie.Writer+`</p></li>
                                <li class="list-group-item"><b>Director</b><p>`+movie.Director+`</p></li>
                                <li class="list-group-item"><b>Times</b><p>`+movie.Runtime+`</p></li>
                                <li class="list-group-item"><b>Actors</b><p>`+movie.Actors+`</p></li>
                                <li class="list-group-item"><b>Plot</b><p>`+movie.Plot+`</p></li>
                            </ul> 
                            

                            
                        </div>

                    </div>
                </div>
                `)
            }
        }
    })
})
$('#yodra').on('click',function () {
    // $('.nav-item').removeClass("active")
    // $('#home').addClass("active")
    $('.search').show()
    // $('#movie-list').html('')
    homes()
})
$('#home').on('click',function () {
    // $('.nav-item').removeClass("active")
    // $('#home').addClass("active")
    $('.search').show()
    // $('#movie-list').html('')
    homes()
})

$('#login').on('click',function () {
    $('.nav-item').removeClass("active")
    $('#login').addClass("active")
    $('.search').hide()
    $('#movie-list').html('')
    $('#movie-list').append(`
    <div class="card " style="width: 30rem;" id="card">
        <div class="card-body">
            <h5 class="card-title text-center">Login</h5>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email...">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Password...">
                </div>
                <div class="form-group">
                    <a href="#">Lupa Password ?</a>
                </div> 
                <div class="form-group">
                    <input id="submit-btn" class="btn btn-dark" type="submit" name="submit" value="LOGIN" />
                </div>
                <div class="form-group"></div>
                    <small id="emailHelp" class="form-text text-muted text-center">Belum punya akun? <a href="#">Daftar</a></small>
                </div>
            </form>
        </div>
    </div>
    `)
});


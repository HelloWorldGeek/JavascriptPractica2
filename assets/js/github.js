var searchComponent = document.getElementById('search');
searchComponent.onkeypress = listenKeyOnPress;

function listenKeyOnPress(e) {
    var keycode = e.keycode || e.which;
    if(keycode == '13'){ // ENTER
        //getUserFromGithubApi( searchComponent.value);
        getUserWithJquery( searchComponent.value);
        return false;
    }
}

function getUserFromGithubApi(username){
    fetch( `https://api.github.com/users/${username}`)
        .then(function(response) {
            response.json().then(function(json){
                buildTemplate(json);
            });
        })
        .catch(function (error) {
            console.log( "SALIO ALGO MAL");
        })
}

function getUserWithJquery(username){
    $.ajax( `https://api.github.com/users/${username}`)
        .done(function(json){
           buildTemplate(json); 
        })
        .fail(function(){
            console.log("error");
        });
}

function buildTemplate(object) {
    var source = document.getElementById('entry-template').innerHTML;
    var template = Handlebars.compile(source);
    var html = template(object);
    document.getElementById('userContent').innerHTML = html;
}
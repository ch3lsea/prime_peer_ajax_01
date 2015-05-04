function display(results){
    $('.gitLink').attr("href", results.html_url);
    $('.profile').text(results.login);
    $('.gitAvatar').attr("src", results.avatar_url);
    $('.gitDescription').text("This user has " + results.public_repos + " repos:");
    secondSearch(results.repos_url);
}
function display2(repoResults) {
    for(var i = 0; i < repoResults.length; i++) {
        $('.repoList').append('<a href="'+ repoResults[i].html_url +'" target="_blank"><h5>'+ repoResults[i].name +'</h5></a>');
    }
}
function search(value){
    $.ajax ({
        type: 'GET',
        url: 'http://api.github.com/users/' + encodeURI(value) + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
        crossDomain: true,
        dataType: 'json',
        success: function(response) {
            display(response);
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status + '\nThis user may not exist or the name could\'ve been spelled wrong. Try again!');
        }
    });
}
function secondSearch(url){
    $.ajax ({
        type: 'GET',
        url: url + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
        crossDomain: true,
        dataType: 'json',
        success: function(response) {
            display2(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status + '\nThis user may not exist or the name could\'ve been spelled wrong. Try again!');
        }
    });
}

$(document).ready(function() {
    $('#submit').on('click', function(e) {
        $('.gitLink').attr("href", "#");
        $('.profile').text("");
        $('.gitDescription').text("");
        $('.gitAvatar').attr("src", "");
        $('repoList').attr("href", "#");
        e.preventDefault();
        var value = $('#searchVal').val();
        search(value);
    });
});








































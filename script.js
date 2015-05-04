function display(results){
    console.log("before " + results.html_url);
    $('.gitLink').attr("href", results.html_url);
    $('.profile').text(results.html_url);
    $('.gitAvatar').attr("src", results.avatar_url);
    $('.gitDescription').text("This user has " + results.public_repos + " repos.");
    $('repoList').attr("src", results.repos_url);
    console.log(results.html_url);
}
function search(value){
    $.ajax ({
        type: 'GET',
        url: 'http://api.github.com/users/' + encodeURI(value) + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
        crossDomain: true,
        dataType: 'json',
        success: function(response) {
            console.log(response);
            display(response);
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
        $('repoList').attr("src", "#");
        e.preventDefault();
        var value = $('#searchVal').val();
        search(value);
    });
});








































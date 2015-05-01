$(document).ready(function(){
    $('#submit').on('click', function() {
        $('.appendRow').empty();
        var value = $('#searchVal').val();
        search(value);
    });
    $('.gitLink').attr("href", response.html_url);
    $('.profile').text(response.html_url);
    $('.gitDescription').text(response.public_repos);
    $('.gitAvatar').attr("src", response.imgSrc);

    function search(value){
        $.ajax ({
            type: 'GET',
            url: 'http://api.github.com/users/' + value,
            crossDomain: true,
            dataType: 'json',
            success: function(response) {
                console.log(response);
            },
            error: function (xhr, status) {
                alert('Error: ' + status);
            }
        });
    }
});








































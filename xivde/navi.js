$(document).ready(function() {

    
    var request = $.ajax(
        {
            url: "http://www.finalfantasy-14.de/navi/jsonp/6", 
            cache: true, 
            async: false,
            dataType: 'jsonp',
            jsonpCallback: 'handleResponse',
            crossDomain: true,
        }).done(function(data) {
        $("#navcontainer").html(data.html);
    });
    
});

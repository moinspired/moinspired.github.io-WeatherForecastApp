$(document).ready(function() {
    $('#submit').click(function(){
        var cityName= $('input').val();
        var completeURL = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName + ',uk&&appid=fd8b153dcbe62b5f4127ba352df4e5f3'

        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', completeURL);
        ourRequest.onload = function(){
            var ourData = JSON.parse(ourRequest.responseText);
            var text = "";
            $('#platform').append(ourData.name + " : " +
                ourData.weather[0].main+'<br/>' +
                'Temprature: ' + ourData.main.temp +'<br/>' + 'Coord: ' + ourData.coord.lon + " , "  + ourData.coord.lat );
            }

        ourRequest.send();

    })
})

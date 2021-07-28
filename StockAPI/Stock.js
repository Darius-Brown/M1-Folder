$(document).ready(function() {
    const key = "E1HKPP98GQPXLYGB";

    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + key;

    $.ajax({
        url,
        dataType: "json",
        success: function (data) {
            console.log(data);

        },
        type: "GET"
    });
});
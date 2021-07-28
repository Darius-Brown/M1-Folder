$(document).ready(function() {
    function stockSearch(){
    const key = "E1HKPP98GQPXLYGB";
    let userInput = $('#search').val();


    //main url for AlphaVantage
    let mainUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + key;

    //Search url for Alpha
    let url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' +userInput+'&apikey='+key;

    $.ajax({
        url,
        dataType: "json",
        success: function (data) {
            console.log(data);

            let match = data.bestMatches[0];
            let name = match.name;
            console.log(match);
            console.log(name);
            $('#result').append(name);
        },
        type: "GET"
    });
};

$('#submit').on('click',function(e) {
    stockSearch();
});

});

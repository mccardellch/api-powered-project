// function searchButtonClicked(){
//    console.log("searchButtonClicked() called");
//
//    //reset value of offset when this button is clicked
//    offset = 0;
//
//    //1
//    const GIPHY_URL = "https://api.giphy.com/v1/stickers/search?";
//
//    //2
//    //public API key from here: https://developers.giphy.com/docs/
//    //if this one no longer works, get your own (it's free!)
//
//    //https://developers.giphy.com/dashboard/
//    const GIPHY_KEY = "Hh1SdH1lNOEqx0GqRrCGtdt2dXIf4Z3P"
//
//    //3 - build up our URL string
//    let apiUrl = GIPHY_URL;
//    apiUrl += "api_key=" + GIPHY_KEY;
//
//    //4 - parse the user entered term we wish to search
//    let term = document.querySelector("#searchLogo").value;
//    displayTerm = term;
//
//    //5 - get rid of any leading and trailing spaces from the form field
//    term = term.trim();
//
//    //6 - encode spaces and special characters
//    term = encodeURIComponent(term);
//
//    // 7 - if there's no term to search then bail out of the function (return does this)
//    if (term.length < 1) return;
//
//    // 8 - add the search term to the url - the parameter name is 'q'
//    apiUrl += "&q=" + term;
//
//    // 9 - grab the user chosen search limit from the <select>
/// /        limit = document.querySelector("#limit").value;
//    apiUrl += "&limit=" + 5;
//
//    // 10 - update the UI
//    document.querySelector("#gif").innerHTML = "<b>Searching for " + displayTerm + "</b>";
//
//    // 11 - what the url looks like
//    console.log(apiUrl);
//
//    //12 Request data
//    getData(apiUrl);
// }
//
// function getData(apiUrl){
//    let xhr = new XMLHttpRequest();
//    xhr.onload = dataLoaded;
//    xhr.onerror = dataError;
//    xhr.open("GET", apiUrl);
//    xhr.send();
// }
//
// function dataLoaded(e){
//    let xhr = e.target;
//
//    let obj = JSON.parse(xhr.responseText);
//
//    if(!obj.data || obj.data.length == 0){
//        document.querySelector('#status').innerHTML =
// "<b>No results found for '" + displayTerm + "'</b>";
//        return;
//    }
//
//    let results = obj.data;
//    let rate = obj.rating;
//
//    let bigString = "<p><i>Here are " + results.length + " results for '" + displayTerm + "'</i> -
// start=" + offset + ", end=" + (offset + Number(limit)) + ")</p>";
//
//    // 17 - start looping
//    for (let i = 0; i < results.length; i++){
//        let result = results[i];
//
//        // 18 - get the URL to the GIF
//        let smallURL = result.images.fixed_width_small.url;
//        if(!smallURL) smallURL = "images/no-image-found.png";
//
//        // 19 - get the URL to the Giphy web page
//        let url = result.url;
//
//        // 20 - build a <div> to hold each result
//        // ES6 String Templating
//        let line=`<div class='result'><img src='${smallURL}' title='${result.id}' />`;
//        line += `<span> </span></div>`
//
//        bigString += line;
//    }
//
//    document.querySelector('#gif').innerHTML = bigString;
//    document.querySelector('#status').innerHTML = "<b>Success!</b>";
// }
//
// function dataError(e){
//    console.log('An error occurred: ' + e.error);
// }
//
// module.exports = {
//    searchButtonClicked,
//    getData,
//    dataLoaded,
//    dataError,
// };

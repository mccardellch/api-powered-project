/// / configuring the Giphy API
// window.onload = (e) => { document.querySelector('#search').onclick = getData; };
//
// let displayTerm = '';
//
// function getData() {
//  const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?';
//  const GIPHY_KEY = 'Hh1SdH1lNOEqx0GqRrCGtdt2dXIf4Z3P';
//
//  // build up URL string
//  let url = GIPHY_URL;
//  url += `api_key=${GIPHY_KEY}`;
//
//  // parse the user entered term we wish to search
//  let term = document.querySelector('#searchterm').value;
//  displayTerm = term;
//  term = term.trim();
//
//  // encode spaces and special characters
//  term = encodeURIComponent(term);
//
//  // if there's no term to search then bail out of the function (return does this)
//  if (term.length < 1) return;
//
//  // add the search term to the url - the parameter name is 'q'
//  url += `&q=${term}`;
//
//  // grab the user chosen search limit from the <select>
//  const limit = document.querySelector('#limit').value;
//  url += `&limit=${limit}`;
//
//  // update the UI
//  document.querySelector('#content').innerHTML = `<b>Searching for ${displayTerm}</b>`;
//
//  // what the url looks like
//  console.log(url);
//  console.log(jQuery);
//  console.log($); // $ is an alias to the jQuery object
//
//  // tell jQuery to download the data
//  $.ajax({
//    dataType: 'json',
//    url,
//    data: null,
//    success: jsonLoaded, // callback function is called when data arrives
//  });
//
//  $('#content').fadeOut(100);
//
//  console.log('getData() called');
// }
//
// function jsonLoaded(obj) {
//  console.log(`obj = ${obj}`);
//  console.log(`obj stringified = ${JSON.stringify(obj)}`);
//
//  // if there are no results, print a message and return
//  if (!obj.data || obj.data.length == 0) {
//    document.querySelector('#content').innerHTML =
// `<p><i>No results found for '${displayTerm}'</i></p>`;
//    $('#content').fadeIn(500);
//    return; // Bail out
//  }
//  console.log('test');
//  console.log(obj.data);
//  console.log('');
//
//  // If there is an array of results, loop through them
//  const results = obj.data;
//  console.log(`results.Length = ${results.length}`);
//  let bigString = `<p><i>Here are ${results.length} results for '${displayTerm}'</i></p>`;
//
//  // start looping (could also have used for...of loop)
//  for (let i = 0; i < results.length; i++) {
//    const result = results[i];
//
//    // get the URL to the GIF
//    let smallURL = result.images.fixed_width_small.url;
//    if (!smallURL) smallURL = 'images/no-image-found.png';
//
//    // get the URL to the Giphy web page
//    const { url } = result;
//
//    // build a <div> to hold each result
//    // ES6 String Templating
//    let line = `<div class='result'><img src='${smallURL}' title='${result.id}' />`;
//    line += `<span><a target='_blank' href = '${url}'>View on Giphy </a>\n </span></div>`;
//
//    // Concatenate the line to our big chunk of HTML
//    bigString += line;
//  }
//
//  // throw it into the #content div
//  document.querySelector('#content').innerHTML = bigString;
//
//  // fade it in
//  $('#content').fadeIn(500);
// }

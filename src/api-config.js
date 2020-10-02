// window.onload = (e) => {
//  document.querySelector('#search').onclick = searchButtonClicked;
//  document.querySelector('#more').onclick = moreBtnClicked;
// };
//
// let displayTerm = '';
// let offset = 0;
// let limit;
// let url;
//
// function moreBtnClicked() {
//  console.log('moreBtnClicked() called');
//
//  // increment offset when button is clicked
//  offset += Number(document.querySelector('#limit').value);
//  // add the search term to the url - the parameter name is 'offset'
//  url += `&offset=${offset}`;
//
//  console.log(url);
//  getData(url);
// }
//
// function searchButtonClicked() {
//  console.log('searchButtonClicked() called');
//
//  // reset value of offset when this button is clicked
//  offset = 0;
//
//  // 1
//  const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?';
//
//  // 2
//  // public API key from here: https://developers.giphy.com/docs/
//  // if this one no longer works, get your own (it's free!)
//
//  // https://developers.giphy.com/dashboard/
//  const GIPHY_KEY = 'exd995Z9NG9J8IJdaeV9mSR9tX1TBVKb';
//
//  // 3 - build up our URL string
//  url = GIPHY_URL;
//  url += `api_key=${GIPHY_KEY}`;
//
//  // 4 - parse the user entered term we wish to search
//  let term = document.querySelector('#searchterm').value;
//  displayTerm = term;
//
//  // 5 - get rid of any leading and trailing spaces from the form field
//  term = term.trim();
//
//  // 6 - encode spaces and special characters
//  term = encodeURIComponent(term);
//
//  // 7 - if there's no term to search then bail out of the function (return does this)
//  if (term.length < 1) return;
//
//  // 8 - add the search term to the url - the parameter name is 'q'
//  url += `&q=${term}`;
//
//  // 9 - grab the user chosen search limit from the <select>
//  limit = document.querySelector('#limit').value;
//  url += `&limit=${limit}`;
//
//  // 10 - update the UI
//  document.querySelector('#content').innerHTML = `<b>Searching for ${displayTerm}</b>`;
//
//  // 11 - what the url looks like
//  console.log(url);
//
//  // 12 Request data
//  getData(url);
// }
//
// function getData(url) {
//  const xhr = new XMLHttpRequest();
//  xhr.onload = dataLoaded;
//  xhr.onerror = dataError;
//  xhr.open('GET', url);
//  xhr.send();
// }
//
// function dataLoaded(e) {
//  const xhr = e.target;
//
//  const obj = JSON.parse(xhr.responseText);
//
//  if (!obj.data || obj.data.length == 0) {
//    document.querySelector('#status').innerHTML = `<b>No results found for '${displayTerm}'</b>`;
//    return;
//  }
//
//  const results = obj.data;
//  const rate = obj.rating;
//
//  let bigString = `<p><i>Here are ${results.length} results for '${displayTerm}'</i>
// - (start=${offset}, end=${offset + Number(limit)})</p>`;
//
//  // 17 - start looping
//  for (let i = 0; i < results.length; i++) {
//    const result = results[i];
//
//    // 18 - get the URL to the GIF
//    let smallURL = result.images.fixed_width_small.url;
//    if (!smallURL) smallURL = 'images/no-image-found.png';
//
//    // 19 - get the URL to the Giphy web page
//    const { url } = result;
//
//    // 20 - build a <div> to hold each result
//    // ES6 String Templating
//    let line = `<div class='result'><img src='${smallURL}' title='${result.id}' />`;
//    line += `<span><a target='_blank' href = '${url}'>View on Giphy </a></span></div>`;
//
//    bigString += line;
//  }
//
//  document.querySelector('#content').innerHTML = bigString;
//  document.querySelector('#status').innerHTML = '<b>Success!</b>';
// }
//
// function dataError(e) {
//  console.log('An error occurred');
// }

var searchBoxDom = document.getElementById('search-box');

function makeAPICall() {
    // This represents a very heavy metho which takes a lot of time to execute
}

// Add "input" event listener on the text box or search bar
searchBoxDom.addEventListener('input', function () {
    var showApiCallCountDom = document.getElementById('show-api-call-count');
    var apiCallCount = showApiCallCountDom.innerHTML || 0;

    // A very heavy method which takes a lot of time to execute
    makeAPICall()

    apiCallCount = parseInt(apiCallCount) + 1;
    // Updates the number of times makeAPICall method is called
    showApiCallCountDom.innerHTML = apiCallCount;
})
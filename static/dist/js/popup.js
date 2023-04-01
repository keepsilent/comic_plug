$(document).ready(function() {
    console.log('popup.load');
    chrome.runtime.onMessage.addListener(function(m, n, k) {
       console.log('runtime',m,n,k);
       $('#ddl-test').html('test');
    });
});





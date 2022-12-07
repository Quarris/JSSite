const routes = {}

window.addEventListener('hashchange', function(e) {
    const hashIndex = e.newURL.lastIndexOf('#');
    const pageId = e.newURL.substring(hashIndex+1);
    loadPage(pageId)
});

window.addEventListener('load', function() {
    const hashIndex = window.location.href.lastIndexOf('#');
    const pageId = hashIndex === -1 ? 'home' : window.location.href.substring(hashIndex+1);
    loadPage(pageId)
});

function loadPage(pageId) {
    const page = routes[pageId] || routes['error']
    document.getElementById("msg").innerHTML = page;
}
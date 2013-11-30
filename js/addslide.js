

var getSlides = function() {
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "slides", false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var addSlide = function(filename) {
    var slide = document.createElement('section');
    slide.setAttribute('data-separator', '^\n\n\n');
    slide.setAttribute('data-vertical', '^\n\n');
    slide.setAttribute('data-notes', '^Notes:');
    slide.setAttribute('data-markdown', 'slides/' + filename);
    document.getElementById('content').appendChild(slide);
}
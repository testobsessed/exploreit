
var insertSlides = function() {
    // console.log("Inserting slides");
    var slides = [];
    // console.log("Getting root list...");
    var rootlist = JSON.parse(getSlideList("slides"));
    rootlist.map( function(filename) {
        // console.log("Processing " + filename);
        if (filename.split('.').length == 1) {
            // console.log("Detected that " + filename + " is a directory");
            var dirname = filename;
            // console.log("Getting subdir list...");
            var sectionlist = JSON.parse(getSlideList("slides" + "/" + dirname));
            sectionlist.map( function(sectionfile) {
                addSlide(dirname + "/" + sectionfile);
            });
        } else {
            addSlide(filename);
        }
    });
}

var getSlideList = function(directory) {
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", directory, false );
    xmlHttp.send( null );
    // console.log("In getSlideList. Got:" + xmlHttp.responseText);
    return xmlHttp.responseText;
}

var addSlide = function(filename) {
    // console.log("Adding slide " + filename);
    var slide = document.createElement('section');
    slide_id = filename.split("/").pop().slice(0,2);
    slide.setAttribute('data-separator', '^\n\n\n');
    slide.setAttribute('data-vertical', '^\n\n');
    slide.setAttribute('data-notes', '^Notes:');
    slide.setAttribute('data-markdown', 'slides/' + filename);
    if (slide_id == "00") {
        slide.setAttribute('data-state', 'title-slide');
    }
    document.getElementById('content').appendChild(slide);
}
var Quickdownload = {
    init: function() {
        alert("Init");
    },

    downloadFile: function() {
        alert("Download file");
    },
    
    downloadImage: function() {
        alert("Download image");
    },
    
    downloadBackgroundImage: function() {
        alert("Download background Image");
    }
};

// Ensure that the initialization code is called when the window has been loaded
window.addEventListener("load", function(event) { Quickdownload.init(); }, false);

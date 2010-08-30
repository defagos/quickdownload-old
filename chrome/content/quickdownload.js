var Quickdownload = {
    onLoad: function() {
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

window.addEventListener("load", function(e) { Quickdownload.onLoad(e); }, false);

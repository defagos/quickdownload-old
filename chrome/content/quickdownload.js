// TODO: - Even faster shortcuts (just put cursor on a link and use shortcut, no need for a right-click even if the menu
//         items will still be available)
//       - Drag an area and download all links within it (quickdownload file, image, all). Can also imagine having several
//         options after having dragged the aread, e.g. an option for checking / unchecking files before downloading, or for
//         using filters (only .pdf, only .doc, only .mp3, only .jpg, etc.)
//       - Notify that a download starts using a small rectangle appearing briefly next to the mouse cursor

var Quickdownload = {
    downloadLink: function(link, saveDir) {
        alert(link + " " + saveDir);
    }
};

var QuickdownloadContextMenu = {
    init: function() {
        // Listen to pop-up events for the right-click menu
        var menu = document.getElementById("contentAreaContextMenu");
        menu.addEventListener("popupshowing", QuickdownloadContextMenu.onPopupShowing, false);
    },

    downloadFile: function() {
        var link = gContextMenu.linkURL;
        Quickdownload.downloadLink(link, "filedir");
    },
    
    downloadImage: function() {
        var link = gContextMenu.imageURL;
        Quickdownload.downloadLink(link, "imgdir");
    },
    
    downloadBackgroundImage: function() {
        var link = gContextMenu.bgImageURL;
        Quickdownload.downloadLink(link, "bgimgdir");
    },
    
    onPopupShowing: function() {
        // Show menu items depending on the link target
        gContextMenu.showItem("quickdownloadFileMenuItem", gContextMenu.onSaveableLink);
        gContextMenu.showItem("quickdownloadImageMenuItem", gContextMenu.onImage);
        gContextMenu.showItem("quickdownloadBackgroundImageMenuItem", gContextMenu.hasBGImage);
    }
};

// Call initialization (implicit) function callback when the overlay is loaded
window.addEventListener("load", function(event) { QuickdownloadContextMenu.init(); }, false);

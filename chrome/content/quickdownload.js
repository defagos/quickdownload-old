// TODO: - Even faster shortcuts (just put cursor on a link and use shortcut, no need for a right-click even if the menu
//         items will still be available)
//       - Drag an area and download all links within it (quickdownload file, image, all). Can also imagine having several
//         options after having dragged the aread, e.g. an option for checking / unchecking files before downloading, or for
//         using filters (only .pdf, only .doc, only .mp3, only .jpg, etc.)
//       - Notify that a download starts using a small rectangle appearing briefly next to the mouse cursor

// TODO: Install preferences monitor Object (https://developer.mozilla.org/en/adding_preferences_to_an_extension),
//       calling refreshSettings method which cache the paths to the various directories. This method is also called
//       on initialization, This way, we only check prefs when starting or when they are changed. Each time a download
//       is started, the cached values are used.

// Singleton class created via JSON, collecting download functionality
var Quickdownload = {
    fileDir: "fileDirValue",
    imageDir: "imageDirValue",
    bgImageDir: "bgImageDirValue",
    
    downloadFile: function(url) {
        Quickdownload.downloadURL(url, Quickdownload.fileDir);
    },
    
    downloadImage: function(url) {
        Quickdownload.downloadURL(url, Quickdownload.imageDir);
    },
    
    downloadBgImage: function(url) {
        Quickdownload.downloadURL(url, Quickdownload.bgImageDir);
    },
    
    downloadURL: function(url, saveDir) {
        alert(url + " " + saveDir);
    }
};

// Singleton class created via JSON, collecting context menu functionality
var QuickdownloadContextMenu = {
    init: function() {
        // Listen to pop-up events for the right-click menu
        var menu = document.getElementById("contentAreaContextMenu");
        menu.addEventListener("popupshowing", QuickdownloadContextMenu.onPopupShowing, false);
    },

    downloadFile: function() {
        var url = gContextMenu.linkURL;
        Quickdownload.downloadFile(url);
    },
    
    downloadImage: function() {
        var url = gContextMenu.imageURL;
        Quickdownload.downloadImage(url);
    },
    
    downloadBackgroundImage: function() {
        var url = gContextMenu.bgImageURL;
        Quickdownload.downloadBgImage(url);
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

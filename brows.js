$(document).ready(function () {
    CreateVideo();
    $('#go-video').click(LoadOtherVideo);
    $('#go-youtube').click(LoadYoutubeVideo);
    $('#delete').click(DeleteWindow);
});
function LoadOtherVideo() {
    DeleteVideo();
    CreateVideoIFrame();
    changeVideoSrc();
}
function CreateVideo() {
    if ($('#video-window').length == 1) {
        DeleteWindow();
    }
    else {
        $('body').append('<style>.videoDiv{position: fixed;bottom: 0px;background-color: #00000033; resize: both;overflow: auto; transform:scaleY(-1);max-height:80%;z-index:99999; } .videoToolbar{ display: inherit;transform: scaleY(-1);width: 100%; } .videoIFrame{ transform:scaleY(-1); } </style>')
    }

    $('body').append('<div id="video-window" class="videoDiv"><span class="videoToolbar"><input id="url" type="text"><button id="go-video">Video</button><button id="delete">Disable</button><button id="go-youtube">Youtube</button></span></div>');
    
    //add sytle tag
    //tafsel el append
    //azed local storage
}
function CreateVideoIFrame() {
    $('#video-window').append('<iframe id="video" class="videoIFrame" width="99%" height="92%" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
}

function ParseLink(link) {
    var newLink = link.slice(link.lastIndexOf('?v=') + 3, link.length);
    return newLink;
}
function changeVideoYoutube(link) {

    $("#video").attr("src", "https://www.youtube.com/embed/" + link+"?autoplay=1");

}
function DeleteWindow() {
    $('#video-window').remove();

}
function IsList(link) {
    if (link.lastIndexOf("list")==-1) {
        return false;
    }
    else return true;
}
function changeList(link) {
    $("#video").attr("src", "https://www.youtube.com/embed/videoseries?" + link + "&autoplay=1");
}
function changeVideoSrc() {
    $("#video").attr("src", $('#url').val());
}
function YoutubeVideoLoad() {
    var link = $("#url").val();
    var Islist = IsList(link)
    link = ParseLink(link);
    if (Islist) {
        changeList(link);
    }
    else {

        changeVideoYoutube(link);
    }
}
function LoadYoutubeVideo() {
    DeleteVideo();
    CreateVideoIFrame();
    YoutubeVideoLoad();
}
function DeleteVideo() {
    $('#video').remove();
}
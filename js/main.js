var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "300",
    width: "440",
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  player.loadVideoById({
    videoId: "VXXEkquxfos",
    startSeconds: 18,
    endSeconds: 62,
    suggestedQuality: "small",
    controls: 1,
  });
  event.target.playVideo();
}

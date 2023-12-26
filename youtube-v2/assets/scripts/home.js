//Suggested Topics Loaded here
const suggestedList = [
  "All",
  "Live",
  "Music",
  "Sports",
  "Live",
  "Movies",
  "Education",
  "Cricket",
  "Football",
  "Tennis",
  "Sports",
  "Live",
  "Movies",
  "Tennis",
  "Movies",
  "Live",
  "Sports",
  "Angular",
];

let topicNames = suggestedList
  .map((e) => {
    return `<li><a href="./index.html">${e}</a></li>`;
  })
  .join("");
let result = `<ul>${topicNames}</ul>`;
let suggestedTopics = document.getElementById("suggestedTopics");
suggestedTopics.innerHTML = result;

// Videos loaded here
const videoList = [
  {
    title:
      "Amazon Wildlife In 4K - Animals That Call The Jungle Home | Amazon Rainforest",
    videoThumbnailUrl: "./assets/videos/meta-video.mp4",
    channelLogo: "./assets/images/apple-logo.png",
    channelName: "Channel S",
    views: "1M views",
    published: "2 Weeks ago",
  },
  {
    title:
      "Learn React JS with Project in 2 Hours | React Tutorial for Beginners | React Project Crash Course",
    videoThumbnailUrl: "./assets/videos/learning-video.mp4",
    channelLogo: "./assets/images/spotify-logo.png",
    channelName: "Channel S",
    views: "2M views",
    published: "4 Weeks ago",
  },
  {
    title:
      "Horizon View in Nature Morning - Breathtaking Nature bath with Relaxing Music - 4k Video HD Ultra",
    videoThumbnailUrl: "./assets/videos/nature-video.mp4",
    channelLogo: "./assets/images/starbucks-logo.png",
    channelName: "Channel V",
    views: "5M views",
    published: "3 Weeks ago",
  },
  {
    title:
      "Best Compilation of Sunsets and Time Lapse of Sky Views - Sleep and Relax Music Screensaver",
    videoThumbnailUrl: "./assets/videos/home-video.mp4",
    channelLogo: "./assets/images/netflix-logo.png",
    channelName: "Channel N",
    views: "6M views",
    published: "1 Weeks ago",
  },
  {
    title:
      "Learn React JS with Project in 2 Hours | React Tutorial for Beginners | React Project Crash Course",
    videoThumbnailUrl: "./assets/videos/learning-video.mp4",
    channelLogo: "./assets/images/spotify-logo.png",
    channelName: "Channel S",
    views: "2M views",
    published: "4 Weeks ago",
  },
  {
    title:
      "Amazon Wildlife In 4K - Animals That Call The Jungle Home | Amazon Rainforest",
    videoThumbnailUrl: "./assets/videos/meta-video.mp4",
    channelLogo: "./assets/images/apple-logo.png",
    channelName: "Channel S",
    views: "1M views",
    published: "2 Weeks ago",
  },
  {
    title:
      "Horizon View in Nature Morning - Breathtaking Nature bath with Relaxing Music - 4k Video HD Ultra",
    videoThumbnailUrl: "./assets/videos/nature-video.mp4",
    channelLogo: "./assets/images/starbucks-logo.png",
    channelName: "Channel V",
    views: "5M views",
    published: "3 Weeks ago",
  },
  {
    title:
      "Best Compilation of Sunsets and Time Lapse of Sky Views - Sleep and Relax Music Screensaver",
    videoThumbnailUrl: "./assets/videos/home-video.mp4",
    channelLogo: "./assets/images/netflix-logo.png",
    channelName: "Channel N",
    views: "6M views",
    published: "1 Weeks ago",
  },
  {
    title:
      "Learn React JS with Project in 2 Hours | React Tutorial for Beginners | React Project Crash Course",
    videoThumbnailUrl: "./assets/videos/learning-video.mp4",
    channelLogo: "./assets/images/spotify-logo.png",
    channelName: "Channel S",
    views: "2M views",
    published: "4 Weeks ago",
  },
  {
    title:
      "Amazon Wildlife In 4K - Animals That Call The Jungle Home | Amazon Rainforest",
    videoThumbnailUrl: "./assets/videos/meta-video.mp4",
    channelLogo: "./assets/images/apple-logo.png",
    channelName: "Channel S",
    views: "1M views",
    published: "2 Weeks ago",
  },
];

let gridVideos = videoList
  .map((e) => {
    return `<div>
    <a href="./video.html">
      <video class="video-meta">
        <source src="${e.videoThumbnailUrl}" type="video/mp4">
      </video>
    </a>
    <div>
      <a href="./video.html">
        <abbr title="Channel C">
          <img class="channel-logo" src="${e.channelLogo}" alt="Channel C"></abbr>
      </a>
      <div class="yt-meta">
        <a href="./video.html">
          <h2>${e.title}
          </h2>
        </a>
        <p>
          <a href="#">${e.channelName} <i class="fa-solid fa-circle-check"></i></a>
          <span>${e.views}</span>
          <span>${e.published}</span>
        </p>
      </div>
    </div>
  </div>`;
  })
  .join("");

let gridWrapper = document.querySelector(".grid-wrapper");
gridWrapper.innerHTML = gridVideos;

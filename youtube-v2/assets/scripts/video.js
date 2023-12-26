let asideVideoList = [
  {
    title:
      "Amazon Wildlife Animals That Call The Jungle Home | Amazon Rainforest",
    videoThumbnailUrl: "./assets/videos/meta-video.mp4",
    channelName: "Channel S",
    views: "1M views",
    published: "2 Weeks ago",
  },
  {
    title: "Horizon View in Nature Morning | 4k Video HD Ultra",
    videoThumbnailUrl: "./assets/videos/nature-video.mp4",
    channelName: "Channel N",
    views: "2M views",
    published: "4 Weeks ago",
  },
  {
    title: "Best Compilation of Sunsets and Time Lapse of Sky Views",
    videoThumbnailUrl: "./assets/videos/home-video.mp4",
    channelName: "Channel Z",
    views: "6M views",
    published: "2 Weeks ago",
  },
  {
    title:
      "Learn React JS with Project in 2 Hours | React Tutorial for Beginners",
    videoThumbnailUrl: "./assets/videos/learning-video.mp4",
    channelName: "Channel L",
    views: "3M views",
    published: "8 Weeks ago",
  },
  {
    title:
      "Amazon Wildlife Animals That Call The Jungle Home | Amazon Rainforest",
    videoThumbnailUrl: "./assets/videos/meta-video.mp4",
    channelName: "Channel S",
    views: "1M views",
    published: "2 Weeks ago",
  },
  {
    title: "Horizon View in Nature Morning | 4k Video HD Ultra",
    videoThumbnailUrl: "./assets/videos/nature-video.mp4",
    channelName: "Channel N",
    views: "2M views",
    published: "4 Weeks ago",
  },
  {
    title: "Best Compilation of Sunsets and Time Lapse of Sky Views",
    videoThumbnailUrl: "./assets/videos/home-video.mp4",
    channelName: "Channel Z",
    views: "6M views",
    published: "2 Weeks ago",
  },
  {
    title:
      "Learn React JS with Project in 2 Hours | React Tutorial for Beginners",
    videoThumbnailUrl: "./assets/videos/learning-video.mp4",
    channelName: "Channel L",
    views: "3M views",
    published: "8 Weeks ago",
  },
  {
    title:
      "Amazon Wildlife Animals That Call The Jungle Home | Amazon Rainforest",
    videoThumbnailUrl: "./assets/videos/meta-video.mp4",
    channelName: "Channel S",
    views: "1M views",
    published: "2 Weeks ago",
  },
  {
    title: "Horizon View in Nature Morning | 4k Video HD Ultra",
    videoThumbnailUrl: "./assets/videos/nature-video.mp4",
    channelName: "Channel N",
    views: "2M views",
    published: "4 Weeks ago",
  },
  {
    title: "Best Compilation of Sunsets and Time Lapse of Sky Views",
    videoThumbnailUrl: "./assets/videos/home-video.mp4",
    channelName: "Channel Z",
    views: "6M views",
    published: "2 Weeks ago",
  },
];

let aside = asideVideoList
  .map((e) => {
    return `
    <div class="aside-videos">
            <div class="sidebar-videos">
              <div class="sidebar-video">
                <a href="#">
                  <video class="side-video">
                    <source src="${e.videoThumbnailUrl}" type="video/mp4">
                  </video>
                </a>
              </div>

              <div class="sidebar-info">
                <h2 class="sidebar-title">${e.title} </h2>
                <div class="views-details">
                  <p>
                    <a href="#">${e.channelName} <i class="fa-solid fa-circle-check"></i></a>
                  </p>
                  <p>
                    <span>${e.views}</span>
                    <span>.${e.published}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
    `;
  })
  .join("");

let videos = document.querySelector(".aside-video");
videos.innerHTML = aside;

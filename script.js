document.getElementById("download-btn").addEventListener("click", function () {
  const youtubeUrl = document.getElementById("youtube-url").value;
  let videoId = youtubeUrl.split("v=")[1];

  if (videoId) {
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    const resolutions = [
      {
        name: "Default",
        url: `https://i.ytimg.com/vi/${videoId}/default.jpg`,
        size: "120 x 90 pixels",
      },
      {
        name: "Medium",
        url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
        size: "320 x 180 pixels",
      },
      {
        name: "High",
        url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        size: "480 x 360 pixels",
      },
      {
        name: "Standard",
        url: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
        size: "640 x 480 pixels",
      },
      {
        name: "Maximum",
        url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        size: "Maximum resolution available",
      },
    ];

    const thumbnailContainer = document.getElementById("thumbnail-container");
    thumbnailContainer.innerHTML = "";

    resolutions.forEach((resolution) => {
      const thumbnailDiv = document.createElement("div");
      thumbnailDiv.classList.add("thumbnail");
      thumbnailDiv.innerHTML = `
                <img src="${resolution.url}" alt="${resolution.name} Thumbnail">
                <p>${resolution.name} (${resolution.size})</p>
                <a href="${
                  resolution.url
                }" download="thumbnail-${resolution.name.toLowerCase()}.jpg">
                    <button>Download</button>
                </a>
            `;
      thumbnailContainer.appendChild(thumbnailDiv);
    });
    thumbnailContainer.classList.remove("d-none");
    thumbnailContainer.classList.add("d-block");
  } else {
    alert("Please enter a valid YouTube video URL");
  }
});

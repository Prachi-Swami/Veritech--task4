// Sample data
const videos = [
  {
      id: 'video1',
      title: 'Madmax',
      url: 'assets/Video1.mp4',
      thumbnail: 'assets/action1.jpg',
      category: 'Action'
  },
  
  {
      id: 'video2',
      title: 'Thhe Hangover',
      url: 'assets/video2.mp4',
      thumbnail: 'assets/comedy.jpg',
      category: 'Comedy'
  },
  {
      id: 'video3',
      title: 'Broken Mirror',
      url: 'assets/video3.mp4',
      thumbnail: 'assets/drama.jpg',
      category: 'Drama'
  }
];

// Load featured video
const loadFeaturedVideo = () => {
  const container = document.getElementById('featured-video-container');
  const video = videos[0];
  const videoElement = document.createElement('div');
  videoElement.classList.add('video-item');
  videoElement.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <p>${video.title}</p>
  `;
  videoElement.addEventListener('click', () => playVideo(video.url));
  container.appendChild(videoElement);
};

// Load categories
const loadCategories = () => {
  const container = document.getElementById('categories-container');
  const categories = [...new Set(videos.map(video => video.category))];

  categories.forEach(category => {
      const section = document.createElement('section');
      section.innerHTML = `<h3>${category}</h3>`;
      const videoContainer = document.createElement('div');
      videoContainer.style.display = 'flex';
      videoContainer.style.gap = '10px';

      const categoryVideos = videos.filter(video => video.category === category);
      categoryVideos.forEach(video => {
          const videoElement = document.createElement('div');
          videoElement.classList.add('video-item');
          videoElement.innerHTML = `
              <img src="${video.thumbnail}" alt="${video.title}">
              <p>${video.title}</p>
          `;
          videoElement.addEventListener('click', () => playVideo(video.url));
          videoContainer.appendChild(videoElement);
      });

      section.appendChild(videoContainer);
      container.appendChild(section);
  });
};

// Play video
const playVideo = (url) => {
  const videoPlayer = document.getElementById('player');
  const videoPlayerContainer = document.getElementById('video-player');
  videoPlayer.src = url;
  videoPlayer.load();
  videoPlayerContainer.style.display = 'block';
};

// Initialize the application
const initApp = () => {
  loadFeaturedVideo();
  loadCategories();
};

document.addEventListener('DOMContentLoaded', initApp);

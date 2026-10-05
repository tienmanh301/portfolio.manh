/**
 * ===================================================================
 * FLOATING CHILL BACKGROUND MUSIC PLAYER
 * Author: Nguyen Tien Manh Portfolio
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Free royalty-free Lofi Chill Study Beat (Hosted on high-speed CDN)
  const audioSource = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3';
  
  const audio = new Audio(audioSource);
  audio.loop = true;
  audio.volume = 0.45; // Comfortable default volume

  // DOM Elements
  const playPauseBtn = document.getElementById('musicPlayPauseBtn');
  const vinylDisc = document.getElementById('musicVinylDisc');
  const soundwaveBars = document.getElementById('musicSoundwave');
  const trackTitle = document.getElementById('musicTrackTitle');
  const volumeToggleBtn = document.getElementById('musicVolumeToggle');

  let isPlaying = false;
  let isMuted = false;

  // Toggle Play / Pause
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        updatePlayerUI(false);
      } else {
        audio.play().then(() => {
          isPlaying = true;
          updatePlayerUI(true);
        }).catch((err) => {
          console.warn('Audio autoplay blocked or failed:', err);
        });
      }
    });
  }

  // Toggle Mute / Unmute
  if (volumeToggleBtn) {
    volumeToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isMuted = !isMuted;
      audio.muted = isMuted;
      
      const volumeIcon = volumeToggleBtn.querySelector('i');
      if (volumeIcon) {
        volumeIcon.className = isMuted ? 'fa-solid fa-volume-xmark text-slate-500' : 'fa-solid fa-volume-high text-blue-400';
      }
    });
  }

  // Update UI Elements based on Play State
  function updatePlayerUI(playing) {
    if (playing) {
      if (vinylDisc) vinylDisc.classList.add('playing');
      if (soundwaveBars) soundwaveBars.classList.add('soundwave-active');
      if (playPauseBtn) {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        playPauseBtn.setAttribute('title', 'Tạm dừng nhạc');
      }
      if (trackTitle) {
        trackTitle.textContent = 'Đang phát: Lofi Chill Beats';
        trackTitle.classList.add('text-blue-400');
      }
    } else {
      if (vinylDisc) vinylDisc.classList.remove('playing');
      if (soundwaveBars) soundwaveBars.classList.remove('soundwave-active');
      if (playPauseBtn) {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play text-xs pl-0.5"></i>';
        playPauseBtn.setAttribute('title', 'Phát nhạc Lofi Chill');
      }
      if (trackTitle) {
        trackTitle.textContent = 'Nhạc nền: Lofi Chill Study';
        trackTitle.classList.remove('text-blue-400');
      }
    }
  }

  // Keyboard shortcut: Press 'M' to toggle music
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'm' || e.key === 'M') && !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) {
      if (playPauseBtn) playPauseBtn.click();
    }
  });
});

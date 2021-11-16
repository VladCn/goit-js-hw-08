  import { save, load } from './storage';
  import Player from '@vimeo/player';
  import throttle from 'lodash.throttle';

  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);
  const timeupdateData = load("videoplayer-current-time")

  if(timeupdateData){
    player.setCurrentTime(timeupdateData)
  }

  player.on('timeupdate', throttle(function(data) {
console.log(data.seconds)
    save("videoplayer-current-time", JSON.stringify(data.seconds));


}, 1000));


// video.currentTime="seconds"
  player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});




  import { save, load } from './storage';
  import throttle from 'lodash.throttle'
  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);

  // const getValue = localStorage.getItem("videoplayer-current-time")
  // console.log(getValue);
  // const parseValue = JSON.parse(getValue)

  const timeupdateData = load("videoplayer-current-time")

  if(timeupdateData){
    player.setCurrentTime(JSON.parse(timeupdateData).seconds)
  }

  // player.setCurrentTime(parseValue.seconds)

  player.on('timeupdate', function(data) {
console.log(data)
    // localStorage.setItem("videoplayer-current-time", JSON.stringify(data))

    throttle(() => {
      save("videoplayer-current-time",  JSON.stringify(data));
      console.log("Scroll handler call every 300ms");
    }, 100)

});


// video.currentTime="seconds"
  player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});



// </script

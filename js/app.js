
//https://www.linkedin.com/learning/creating-web-media/trigger-content-from-a-video

const videos = document.getElementsByTagName('video')[0];
const spans = document.getElementsByTagName('span');

////Highlighting  o text
//create an event listener that will trigger as the
//video time updates, and attach it to the video element.

videos.ontimeupdate = () => {

//Inside the event listener, loop over each span element.
//loop then span element
  for (let i = 0; i <= spans.length; i ++) {
//Inside the loop, use a conditional to see if the video’s current time is
    const datas = videos.currentTime;
// If the conditions are met, set the span’s color property to the highlighted
// color of your choice, and if not, set the span’s color back to its initial color.
    if (datas > spans[i].getAttribute("data-start")
    && datas < spans[i].getAttribute("data-end")) {
      spans[i].style.color = "#FFA500";
   
    }
    else {
      spans[i].style.color = "black";
     
    }
  }
};

// walk around the video
const spanProperty = document.querySelectorAll("p span");
for(let i = 0; i < spanProperty.length; i += 1) {
  spanProperty[i].addEventListener("click", function(event) {
    videos.currentTime = event.target.getAttribute("data-start");
    videos.play();
  })
}
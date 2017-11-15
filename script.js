// A $( document ).ready() block.
$(document).ready(function() {
  var image = document.getElementById('rainyday-image');

  var img = new Image();
  img.addEventListener('load', startRain, false);
  img.src = 'images/London.jpg';
  image.src = img.src;

  function startRain() {
    var engine = new RainyDay({
      image: image, // Image element
      // This value is required
      blur: 10, // Defines blur due to rain effect
      // Assuming 10 if not provided
      // Use 0 value to disable the blur
      opacity: 1 // Opacity of rain drops
      // Assuming 1 if not provided
    });
    engine.rain(
      [
        [1, 0, 20], // add 20 drops of size 1...
        [3, 3, 1] // ... and 1 drop of size from 3 - 6 ...
      ],
      100
    ); // ... every 100ms
  };

});
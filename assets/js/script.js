$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'gplv3-license',
        navigation: true,
        navigationTooltips: ['Solana', 'Yua', "Shiba", 'Sen', 'Xarina', 'Pie']
    });
  
    // typewriterjs
    var typewriterElements = document.querySelectorAll('.typewriter-effect')
    for (var i = 0; i < typewriterElements.length; i++) {
      var currentEl = typewriterElements[i]
      var innerText = currentEl.innerText
      new Typewriter(currentEl, {
        loop: true,
      })
        .typeString(innerText)
        .pauseFor(1000)
        .start()
    }
  
    // power glitch
    PowerGlitch.glitch('.glitch', {
      "playMode": "always",
      "createContainers": true,
      "hideOverflow": false,
      "timing": {
        "duration": 2000
      },
      "glitchTimeSpan": {
        "start": 0.5,
        "end": 0.7
      },
      "shake": {
        "velocity": 15,
        "amplitudeX": 0.2,
        "amplitudeY": 0.2
      },
      "slice": {
        "count": 6,
        "velocity": 15,
        "minHeight": 0.02,
        "maxHeight": 0.15,
        "hueRotate": true
      },
      "pulse": false
    })
  });
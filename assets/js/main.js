var EXPERIENCE_PAGE, PROJECTS_PAGE, SKILLS_PAGE

$(document).ready(function() {
  var current = 0
  var captionLength = 0
  var captionList = [
    'Lead by example',
    'Continuous improvement',
    'Positivity',
    'Dedication',
    'Creativity',
    'Teamwork'
  ]
  // var captionList = [ 'npm i -S Positivity', 'npm i -S Relentless-Drive', 'npm i -S Dedication' ];
  function startTyping() {
    caption = captionList[current]
    current = (current + 1) % captionList.length
    type()
  }
  function type() {
    $('#dynamic-desc').text('> ' + caption.substr(0, captionLength++))
    if (captionLength < caption.length + 1) {
      return setTimeout(type, 50)
    } else {
      return setTimeout(erase, 2000)
    }
  }
  function erase() {
    $('#dynamic-desc').text('> ' + caption.substr(0, captionLength--))
    if (captionLength >= 0) {
      return setTimeout(erase, 50)
    } else {
      return setTimeout(startTyping, 250)
    }
  }
  function cursorBlink() {
    $('#cursor')
      .animate(
        {
          opacity: 0
        },
        'fast',
        'swing'
      )
      .animate(
        {
          opacity: 1
        },
        'fast',
        'swing'
      )
  }
  setInterval(cursorBlink, 600)
  startTyping()

  // THEME
  ;(function() {
    var theme = localStorage.getItem('theme')
    updateTheme(theme || 'dark')
    $('#theme__button').on('click', function() {
      var theme = localStorage.getItem('theme')
      var newTheme = theme === 'light' ? 'dark' : 'light'
      updateTheme(newTheme || 'dark')
    })
    function updateTheme(theme) {
      localStorage.setItem('theme', theme)
      $('body')[0].className = theme
    }
  })()

  // Navigated with hash
  ;(function() {
    var hash = window.location.hash
    if (!hash) return
    $(hash).modal('toggle')
  })()
})

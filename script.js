const startDate = new Date('July 7, 2023 00:00:00 GMT+0000');

    function updateTimer() {
        const now = new Date();
        const timeDifference = now - startDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30);
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const timerElement = document.getElementById('timer');
        timerElement.innerHTML = `
            
            <p>${months} months</p>
            <p>${days} days</p>
            <p>${hours} hours</p>
            <p>${minutes} minutes</p>
            <p>${seconds} seconds</p>
        `;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();


    function toggleimageset1() {
      var div = document.getElementById("first-image-set");
      if (div.style.display === "flex") {
        div.style.opacity = "0";
        setTimeout(function() {
          div.style.display = "none";
        }, 500); // Set timeout to match the transition duration
      } else {
        div.style.display = "flex";
        setTimeout(function() {
          div.style.opacity = "1";
        }, 0); // Set timeout to start the transition after display is set to flex
      }
      div.scrollIntoView({
        behavior: 'smooth'
      });
    }

      function toggleimageset2() {
        var div = document.getElementById("second-image-set");
        if (div.style.display === "flex") {
          div.style.opacity = "0";
          setTimeout(function() {
            div.style.display = "none";
          }, 500); // Set timeout to match the transition duration
        } else {
          div.style.display = "flex";
          setTimeout(function() {
            div.style.opacity = "1";
          }, 0); // Set timeout to start the transition after display is set to flex
        }
        div.scrollIntoView({
          behavior: 'smooth'
        });
  
    }
    function toggleheartcontainer2() {
        var div = document.getElementById("heart-container2");
        if (div.style.display === "flex") {
          div.style.opacity = "0";
          setTimeout(function() {
            div.style.display = "none";
          }, 500); // Set timeout to match the transition duration
        } else {
          div.style.display = "flex";
          setTimeout(function() {
            div.style.opacity = "1";
          }, 0); // Set timeout to start the transition after display is set to flex
        }
        div.scrollIntoView({
          behavior: 'smooth'
        });
  
    }

    function toggleheartcontainer3() {
      var div = document.getElementById("heart-container3");
      if (div.style.display === "flex") {
        div.style.opacity = "0";
        setTimeout(function() {
          div.style.display = "none";
        }, 500); // Set timeout to match the transition duration
      } else {
        div.style.display = "flex";
        setTimeout(function() {
          div.style.opacity = "1";
        }, 0); // Set timeout to start the transition after display is set to flex
      }
      div.scrollIntoView({
        behavior: 'smooth'
      });

  }

  function toggleimageset3() {
    var div = document.getElementById("third-image-set");
    if (div.style.display === "flex") {
      div.style.opacity = "0";
      setTimeout(function() {
        div.style.display = "none";
      }, 500); // Set timeout to match the transition duration
    } else {
      div.style.display = "flex";
      setTimeout(function() {
        div.style.opacity = "1";
      }, 0); // Set timeout to start the transition after display is set to flex
    }
    div.scrollIntoView({
      behavior: 'smooth'
    });
  }

  function toggleheartcontainer4() {
    var div = document.getElementById("heart-container4");
    if (div.style.display === "flex") {
      div.style.opacity = "0";
      setTimeout(function() {
        div.style.display = "none";
      }, 500); // Set timeout to match the transition duration
    } else {
      div.style.display = "flex";
      setTimeout(function() {
        div.style.opacity = "1";
      }, 0); // Set timeout to start the transition after display is set to flex
    }
    div.scrollIntoView({
      behavior: 'smooth'
    });

}

function toggleimageset4() {
  var div = document.getElementById("fourth-image-set");
  if (div.style.display === "flex") {
    div.style.opacity = "0";
    setTimeout(function() {
      div.style.display = "none";
    }, 500); // Set timeout to match the transition duration
  } else {
    div.style.display = "flex";
    setTimeout(function() {
      div.style.opacity = "1";
    }, 0); // Set timeout to start the transition after display is set to flex
  }
  div.scrollIntoView({
    behavior: 'smooth'
  });
}


function toggleheartcontainer5() {
  var div = document.getElementById("heart-container5");
  if (div.style.display === "flex") {
    div.style.opacity = "0";
    setTimeout(function() {
      div.style.display = "none";
    }, 500); // Set timeout to match the transition duration
  } else {
    div.style.display = "flex";
    setTimeout(function() {
      div.style.opacity = "1";
    }, 0); // Set timeout to start the transition after display is set to flex
  }
  div.scrollIntoView({
    behavior: 'smooth'
  });

}



function toggleimageset5() {
  var div = document.getElementById("fifth-image-set");
  if (div.style.display === "flex") {
    div.style.opacity = "0";
    setTimeout(function() {
      div.style.display = "none";
    }, 500); // Set timeout to match the transition duration
  } else {
    div.style.display = "flex";
    setTimeout(function() {
      div.style.opacity = "1";
    }, 0); // Set timeout to start the transition after display is set to flex
  }
  div.scrollIntoView({
    behavior: 'smooth'
  });
}















    function toggletextoff() {
      var div = document.getElementById("text-entry");
      if (div.style.display === "none") {
        div.style.opacity = "1";
        setTimeout(function() {
          div.style.display = "flex";
        }, 500); // Set timeout to match the transition duration
      } else {
        div.style.display = "none";
        setTimeout(function() {
          div.style.opacity = "0";
        }, 0); // Set timeout to start the transition after display is set to flex
      }
    }

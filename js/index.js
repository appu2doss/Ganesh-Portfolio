
(function() {
    $(function() {
        var n, e, t;
        return n = function() {
            return $("h1").append("<span>"), $("h1 span").css({
                display: "block",
                width: "0px",
                height: "26px",
                background: "#fff",
                "margin-top": "21px"
            }).animate({
                width: t + "px"
            }, 800), setTimeout(function() {
                return $("body").removeClass("loading")
            }, 1e3)
        }, -1 !== navigator.appVersion.indexOf("Windows") && $("body").addClass("pcuser"), e = $("html").attr("lang"), "fr" === e ? (t = 397, "en" === navigator.language.substring(0, 2) && (window.location.href = "http://vincentgarreau.com/en")) : t = 365, $(".companies_top li, .works li > a:first-of-type").on("mouseenter mouseleave", function(n) {
            return "mouseenter" === n.type ? $("body").addClass("hover") : $("body").removeClass("hover")
        }), $(window).on("load", function() {
            return window.innerWidth > 620 ? n() : $("body").removeClass("loading")
        })
    }), $(window).resize(function() {
        return $(window).width() <= 620 ? ($("h2").hide(), $("h1 span").hide(), $(".works li:first-child, .companies, #anim").hide()) : ($("h2").show(), $("h1 span").show(), $(".works li:first-child, .companies, #anim").show()), $(".companies_top").find("li").on("mouseenter", function(n) {
            var e;
            e = $(this).find("a").text(), dataLayer.push({
                event: "navigation",
                eventCategory: "Company",
                eventAction: "Hover",
                eventLabel: e
            })
        }), $("a").on("click", function() {
            var n, e, t;
            t = $(this), e = t.text(), n = t.attr("href"), dataLayer.push({
                event: "navigation",
                eventCategory: "Links",
                eventAction: "Click",
                eventLabel: e,
                eventValue: n
            })
        })
    })
}).call(this);
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
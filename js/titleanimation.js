gsap.registerPlugin(TextPlugin);

var word1letter1 = document.getElementById('word1letter1');
var word1letter2 = document.getElementById('word1letter2');
var word1letter3 = document.getElementById('word1letter3');
var word1letter4 = document.getElementById('word1letter4');
var word1letter5 = document.getElementById('word1letter5');
var word1letter6 = document.getElementById('word1letter6');
var word1letter7 = document.getElementById('word1letter7');
var word1letter8 = document.getElementById('word1letter8');
var word2letter1 = document.getElementById('word2letter1');
var word2letter2 = document.getElementById('word2letter2');
var word2letter3 = document.getElementById('word2letter3');
var word2letter4 = document.getElementById('word2letter4');
var word2letter5 = document.getElementById('word2letter5');
var word2letter6 = document.getElementById('word2letter6');
var word2letter7 = document.getElementById('word2letter7');
var word2letter8 = document.getElementById('word2letter8');
var thirdline = document.getElementById('thirdline');

gsap.set(thirdline, {
  scaleY: 0
});
setTimeout(function(){
  gsap.to(word1letter1, {
    duration: 0.7,
    scale: 1.2,
    ease: "elastic",
    yoyo: true
  });
  setTimeout(function(){
    gsap.to(word1letter1, {
      duration: 0.3,
      scale: 1.1,
      rotate: 360,
      text: "3",
      ease: "none"
  })}, 700);
  gsap.to(word1letter2, {
    duration: 1.2,
    text: "d",
    ease: "none"
  });
  gsap.to(word1letter3, {
    duration: 1.4,
    text: "v",
    ease: "none"
  });
  gsap.to(word1letter4, {
    duration: 1.6,
    text: "f",
    ease: "none"
  });
  gsap.to(word1letter5, {
    duration: 1.8,
    text: "x",
    ease: "none"
  });
  setTimeout(function(){
    gsap.to(word1letter6, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
    gsap.to(word1letter7, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
    gsap.to(word1letter8, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
  }, 300);
  gsap.to(word1letter6, {
    duration: 2,
    text: "",
    ease: "power1"
  });
  gsap.to(word1letter7, {
    duration: 2,
    text: "",
    ease: "power1"
  });
  gsap.to(word1letter8, {
    duration: 2,
    text: "",
    ease: "power1"
  });
  setTimeout(function(){
    gsap.to(word1letter3, {
      duration: 1,
      x: 50,
      ease: "elastic"
    });
    gsap.to(word1letter4, {
      duration: 1,
      x: 50,
      ease: "elastic"
    });
    gsap.to(word1letter5, {
      duration: 1,
      x: 50,
      ease: "elastic"
    });
  }, 800);
  gsap.to(word2letter1, {
    duration: 1,
    text: "",
    ease: "none"
  });
  gsap.to(word2letter2, {
    duration: 1.2,
    text: "",
    ease: "none"
  });
  gsap.to(word2letter3, {
    duration: 1.4,
    text: "a",
    ease: "none"
  });
  gsap.to(word2letter4, {
    duration: 1.6,
    text: "r",
    ease: "none"
  });
  gsap.to(word2letter5, {
    duration: 1.8,
    text: "t",
    ease: "none"
  });
  gsap.to(word2letter6, {
    duration: 2,
    text: "i",
    ease: "none"
  });
  gsap.to(word2letter7, {
    duration: 2.2,
    text: "s",
    ease: "none"
  });
  gsap.to(word2letter8, {
    duration: 2.4,
    text: "t",
    ease: "none"
  });
}, 500);

setTimeout(function(){
  gsap.to(word1letter1, {
    duration: 0.7,
    scale: 1,
    ease: "elastic",
    yoyo: true
  });
  setTimeout(function(){
    gsap.to(word1letter1, {
      duration: 0.3,
      scale: 1,
      rotate: 360,
      text: "j",
      ease: "none"
  })}, 700);
  gsap.to(word1letter2, {
    duration: 1.2,
    text: "a",
    ease: "none"
  });
  gsap.to(word1letter3, {
    duration: 1.4,
    text: "c",
    ease: "none"
  });
  gsap.to(word1letter4, {
    duration: 1.6,
    text: "k",
    ease: "none"
  });
  gsap.to(word1letter5, {
    duration: 1.8,
    text: "l",
    ease: "none"
  });
  gsap.to(word1letter6, {
    duration: 0.2,
    scaleY: 1,
    ease: "power1"
  });
  gsap.to(word1letter7, {
    duration: 0.2,
    scaleY: 1,
    ease: "power1"
  });
  gsap.to(word1letter8, {
    duration: 0.2,
    scaleY: 1,
    ease: "power1"
  });
  gsap.to(word1letter6, {
    duration: 2,
    text: "y",
    ease: "none"
  });
  gsap.to(word1letter7, {
    duration: 2.2,
    text: "n",
    ease: "none"
  });
  gsap.to(word1letter8, {
    duration: 2.4,
    text: "n",
    ease: "none"
  });
  setTimeout(function(){
    gsap.to(word1letter3, {
      duration: 1,
      x: 0,
      ease: "elastic"
    });
    gsap.to(word1letter4, {
      duration: 1,
      x: 0,
      ease: "elastic"
    });
    gsap.to(word1letter5, {
      duration: 1,
      x: 0,
      ease: "elastic"
    });
  }, 800);
  setTimeout(function(){
    gsap.to(word2letter1, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
    gsap.to(word2letter2, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
    gsap.to(word2letter3, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
    gsap.to(word2letter4, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
    gsap.to(word2letter5, {
      duration: 0.2,
      scaleY: 0,
      ease: "power1"
    });
  }, 500);
  gsap.to(word2letter1, {
    duration: 2.4,
    text: "",
    ease: "none"
  });
  gsap.to(word2letter2, {
    duration: 2.2,
    text: "",
    ease: "none"
  });
  gsap.to(word2letter3, {
    duration: 2.0,
    text: "",
    ease: "none"
  });
  gsap.to(word2letter4, {
    duration: 1.8,
    text: "",
    ease: "none"
  });
  gsap.to(word2letter5, {
    duration: 1.6,
    text: "",
    ease: "none"
  });
  gsap.to(word2letter6, {
    duration: 1.4,
    text: "y",
    ease: "none"
  });
  gsap.to(word2letter7, {
    duration: 1.2,
    text: "a",
    ease: "none"
  });
  gsap.to(word2letter8, {
    duration: 1,
    text: "n",
    ease: "none"
  });
}, 2000);
setTimeout(function(){
  gsap.fromTo(thirdline, {
    scaleY: 0
  }, {
    duration: 0.5,
    scaleY: 1,
    ease: "power3"
  })
}, 3000);
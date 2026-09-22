const navEl = document.getElementsByTagName('nav')[0];
const footerEl = document.getElementsByTagName('footer')[0];
const navButton = document.getElementById('nav-button');

navEl.innerHTML = 
`<ul>
      <li><a href="/">Home</a></li>
      <li><a href="/vfx.html" title="VFX Showcase">VFX Work</a></li>
      <li><a href="/film.html" title="Film Projects">Film Work</a></li>
      <li><a href="/websites.html" title="Website Creation">Web Dev</a></li>
      <li><a href="/resume.html" title="Resume">Resume</a></li>
      <li><a href="/contact.html" title="Contact Info">Contact</a></li>
    </ul>`;

footerEl.innerHTML = 
`<div class="footer-image centered">
        <a href="/"><img class="micro-bar" src="/img/jacklynn-micro-bar-animated.gif" alt="jacklynn 88x31 badge"></a>
      </div>
      <div>
        <p><b>Portfolio</b></p>
        <p><a href="/vfx.html" title="VFX Showcase">VFX Work</a></p>
        <p><a href="/film.html" title="Film Projects">Film Work</a></p>
        <p><a href="/websites.html" title="Website Creation">Web Dev</a></p>
      </div>
      <div>
        <p><b>Work</b></p>
        <p><a href="/resume.html" title="License Agreement">Resume</a></p>
        <p><a href="https://chiapassproductions.com" title="Chia Pass Productions Webiste">Chia Pass Productions</a></p>
        <p><a href="/contact.html" title="More Info">Contact</a></p>
      </div>
      <div>
        <p><b>Fun</b></p>
        <p><a href="https://www.sillyserver.win">sillyserver.win</a></p>
        <p><a href="https://noaiuse.org">noaiuse.org</a></p>
        <p><a href="/blog.html">Blog</a></p>
        <p><a href="/about.html">About</a></p>
      </div>`;

window.onscroll = function() {
  if (window.innerHeight > window.innerWidth) {
    navEl.style.display = 'none';
  } else {
    navEl.style.display = 'flex';
  }
}

navButton.onclick = function() {
  if (navEl.style.display == 'flex') {
    navEl.style.display = 'none';
  } else {
    navEl.style.display = 'flex';
  }
}
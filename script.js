
function toggleClassBasedOnURL() {
    var currentURL = window.location.hash.substring(1);

    console.log(currentURL)

    // Remove 'highlighted' class from all links
    var links = document.querySelectorAll('.nav-link-container');
    links.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'highlighted' class to the link corresponding to the current URL
    var activeLink = document.querySelector(`.nav-${currentURL}`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Call the function on initial load and whenever the hash changes
  window.addEventListener('load', toggleClassBasedOnURL);
  window.addEventListener('hashchange', toggleClassBasedOnURL);


  window.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.style.background = '#303030'; // Change the header color on scroll
    } else {
      header.style.background = 'none'; // Reset the header color to initial color
    }
  });


  document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.nav-right').classList.toggle('hidden')
  })


    
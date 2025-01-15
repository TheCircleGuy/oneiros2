  // Detect when articles enter the viewport
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Grid anim started");
      const articles = document.querySelectorAll('.grid > article');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate'); // Add the 'animate' class when visible
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the article is visible
      );
    
      articles.forEach((article) => {
        observer.observe(article); // Observe each article
      });
    });
    
    var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }


  mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZXJhbGV4aXMiLCJhIjoiY2p6eTl5bXp4MHMyazNtcGF2M3h2eGI1NSJ9.L3s-fvwkr0UEtK6rF0K85Q';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [106.67531561623876, 10.775472569395086], // starting position, coordinates
    zoom: 10 // starting zoom
  });

  // Set style to dark theme
  map.setStyle('mapbox://styles/mapbox/dark-v10');

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

  // Add markers at the specified coordinates
  const coordinates = [
    [106.67531561623876, 10.775472569395086],
    [106.61815238040532, 10.785253213388641],
    [106.71582769929188, 10.74494817299405],
    [106.68473027442037, 10.773278518443314]
  ];

  coordinates.forEach(coord => {
    new mapboxgl.Marker()
      .setLngLat(coord)
      .addTo(map);
  });
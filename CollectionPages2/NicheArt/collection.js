console.log('Collection.js Started');

document.addEventListener("DOMContentLoaded", () => {
    // Fetch JSON data
    fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
            const collectionData = data.collection;
            const mainWrapper = document.querySelector('.main-wrapper');

            if (!collectionData) {
                console.error('Collection data not found');
                return;
            }

            // Video Section
            const videoSection = `
                <section class="video-section">
                    <picture class="fallback-image">
                      <img src="Collection_img/bg.jpg" alt="Fallback Image">
                    </picture>
                    <video autoplay muted loop class="background-video" onerror="this.style.display='none';">
                      <source src="Collection_img/${collectionData.videoSource}" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                    <div class="grain-overlay"></div>
                    <div class="content-overlay">
                      <h1 class="main-title">${collectionData.mainTitle}</h1>
                      <p class="subtitle">${collectionData.subtitle}</p>
                    </div>
                </section>
            `;

            // Collection Container Section
            const collectionContainer = `
                <section class="collection-container">
                    <h2 class="collection-title">${collectionData.collectionTitle}</h2>
                    <div class="black-box">
                        <p class="collection-description">
                            ${collectionData.collectionDescription}
                        </p>
                    </div>
                </section>
            `;

            // Grid Section
            let gridArticles = '';
            collectionData.gridArticles.forEach((article) => {
                gridArticles += `
                    <article>
                        <a href="product.html?product=${article.productId}" class="grid-link">
                            <img src="Collection_img/${article.imgSource}" alt="${article.title}">
                            <div class="title">${article.title}</div>
                        </a>
                    </article>
                `;
            });

            const gridSection = `
                <div class="container">
                    <main class="grid">
                        ${gridArticles}
                    </main>
                </div>
            `;

            // Combine all sections into the main wrapper
            mainWrapper.innerHTML = videoSection + collectionContainer + gridSection;

            // Initialize any additional animations or hover effects (if needed)
            initializeGridHoverEffects();
        })
        .catch((error) => console.error('Error fetching collection data:', error));
});

// Initialize hover effects for grid items
function initializeGridHoverEffects() {
    const articles = document.querySelectorAll('.grid article');
    articles.forEach((article) => {
        article.addEventListener('mouseover', () => {
            article.classList.add('hover');
        });
        article.addEventListener('mouseout', () => {
            article.classList.remove('hover');
        });
    });
}

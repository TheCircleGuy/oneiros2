console.log('Product.js Started');

document.addEventListener("DOMContentLoaded", () => {
    // Parse the query parameter to get the product ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    if (!productId) {
        console.error('No product ID found in the URL.');
        return;
    }

    // Fetch the JSON data
    fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
            const productData = data.products.find((product) => product.id === productId);

            if (!productData) {
                console.error('Product not found in data.json.');
                return;
            }

            // Populate the product video section
            const videoSection = `
                <section class="product-video-box-section">
                    <div class="product-video-container">
                        <video autoplay muted loop class="product-background-video" onerror="handleVideoError()">
                            <source src="Products_img/${productData.videoSource}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <img id="product-fallback-img" src="Products_img/${productData.productFallbackImage}" alt="Fallback Image" class="product-fallback-image">
                        <div class="product-video-overlay">
                            <h1 class="product-video-title">${productData.productVideoTitle}</h1>
                            <p class="product-video-subtitle">${productData.productVideoSubtitle}</p>
                        </div>
                    </div>
                </section>
            `;

            // Populate the testimonials section
            const testimonialsSection = `
                <section class="section_home_testimonials">
                    <div class="padding-global">
                        <div class="w-layout-blockcontainer container-large w-container">
                            <div class="home_testimonials_component">
                                <div class="home_testimonials_slide-content">
                                    <div class="home_testimonials_client-image-wrapper noise">
                                        <img loading="lazy" src="Products_img/${productData.InspireImage}" alt="" class="home_testimonials_client-image" />
                                    </div>
                                    <div class="home_testimonials_content-right">
                                        <h1 class="Product-title">Inspiration</h1>
                                        <p class="testimonials_paragraph">${productData.testimonialsParagraph}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

            // Populate the product stats section
            const productStatsSection = `
                <section class="productStats-section">
                    <div class="productStats-image">
                        <img class="productStats-imagee" src="Products_img/${productData.productStatsImage}" alt="Product Image">
                    </div>
                    <div class="productStats-details">
                        <h1 class="productStats-title">${productData.productStatsTitle}</h1>
                        <p class="productStats-category">${productData.productStatsCategory}</p>
                        <div class="productStats-line"></div>
                        <p class="productStats-description">${productData.productStatsDescription}</p>
                        <div class="productStats-line"></div>
                        <div class="productStats-info">
                            <p><strong>Size:</strong> ${productData.productStatsInfo.size}</p>
                            <p><strong>Composition:</strong> ${productData.productStatsInfo.composition}</p>
                        </div>
                        <div class="productStats-line"></div>
                        <div class="productStats-action">
                            <a href="${productData.collectionLink}" class="productStats-try-link" style="font-weight: 400;">Try out in Stores ➔</a>
                            <button class="productStats-button">More Info for bulk orders</button>
                        </div>
                    </div>
                </section>

                  <div class="backToCollection">
                <a href="collectionPage.html" class="backToCollection-link">Back to Collection</a>
              </div>
            `;

            // Combine all sections into the main content
            const mainContent = document.querySelector('.main-wrapper');
            mainContent.innerHTML = videoSection + testimonialsSection + productStatsSection;
        })
        .catch((error) => console.error('Error fetching product data:', error));
});

// Handle video error by hiding the video and showing the fallback image
function handleVideoError() {
    console.error('Video failed to load. Fallback image is displayed.');
    const fallbackImage = document.getElementById('product-fallback-img');
    fallbackImage.style.display = 'block';
}

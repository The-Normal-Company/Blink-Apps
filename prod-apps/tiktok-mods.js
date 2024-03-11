function ensureElementsNeverShown(selectors) {
    console.log("testing")
    // Function to force hide elements matching the selectors
    const hideElements = () => {
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.display = 'none';
            });
        });
    };

    // Create a MutationObserver to observe the DOM for changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                hideElements(); // Apply the CSS rule to new elements
            }
        });
    });

    // Configuration object for the observer
    const config = {
        childList: true,
        subtree: true
    };

    // Start observing the body for DOM changes
    observer.observe(document.body, config);

    // Initially hide any existing elements
    hideElements();
}

// Execute the function with an array of selectors
ensureElementsNeverShown(['#app', '.css-hsy0fo-DivContainer', '.css-1g4oh9d-DivOpenTikTokButtonWrapper', 'css-1g4oh9d-DivOpenTikTokButtonWrapper', 'css-py8jux-DivModalContainer']);
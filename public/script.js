(function () {
  // Wait for DOM to be ready
  function addMuhammadAhsanLink() {
    // Create the container div
    const container = document.createElement("div");
    container.id = "muhammad-ahsan-signature";

    // Add styles
    container.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 12px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 999999;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
        `;

    // Create the link
    const link = document.createElement("a");
    link.href = "https://muhammad-ahsan.com";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.style.cssText = `
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 6px;
        `;

    // Add text content
    link.innerHTML = `
            <span>⚡</span>
            <span>Muhammad Ahsan Website</span>
        `;

    // Add hover effect
    container.addEventListener("mouseenter", function () {
      container.style.transform = "translateY(-2px)";
      container.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
    });

    container.addEventListener("mouseleave", function () {
      container.style.transform = "translateY(0)";
      container.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    });

    // Append link to container
    container.appendChild(link);

    // Append to body
    document.body.appendChild(container);

    // Make it dismissible (optional)
    container.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      container.style.display = "none";
    });
  }

  // Check if DOM is already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addMuhammadAhsanLink);
  } else {
    addMuhammadAhsanLink();
  }
})();

    const text = document.getElementById("text-container");

    // Change color on button click
    document.getElementById("colorchange").addEventListener("click", () => {
      const color = document.getElementById("colorbox").value;
      text.style.color = color;
    });

    // Font size change via range slider
    document.getElementById("fontsize").addEventListener("input", (e) => {
      text.style.fontSize = `${e.target.value}px`;
    });

    // Toggle underline
    document.getElementById("underline").addEventListener("click", () => {
      text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
    });

    // Toggle italic
    document.getElementById("italic").addEventListener("click", () => {
      text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
    });

    // Toggle bold
    document.getElementById("bold").addEventListener("click", () => {
      text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
    });

    // Change font family
    document.getElementById("list").addEventListener("change", (e) => {
      text.style.fontFamily = e.target.value;
    });

    // Get computed style and display as CSS
    document.getElementById("getstyle").addEventListener("click", () => {
      const styles = window.getComputedStyle(text);
      const cssOutput = `
        color: ${styles.color}; 
        font-size: ${styles.fontSize}; 
        font-family: ${styles.fontFamily}; 
        font-weight: ${styles.fontWeight}; 
        font-style: ${styles.fontStyle}; 
        text-decoration: ${styles.textDecorationLine};
      `.trim().replace(/\s+/g, ' '); // Clean formatting

      document.getElementById("css-props").textContent = cssOutput;
    });
 
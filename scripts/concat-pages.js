

document.addEventListener("DOMContentLoaded", function () {
  const contactPageUrl = `./pages/PC-Home.html`;
  const concatenatedContentDiv = document.getElementById(
    "concatenated-content-PC"
  );

  fetch(contactPageUrl)
    .then((response) => response.text())
    .then((data) => {
      console.log("Fetched data:", data); // Log the fetched HTML

      // Extract the content you want from the contact page
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");

      // Check if the element exists before accessing innerHTML
      const contactElement = doc.getElementById("contact-content");
      if (contactElement) {
        const contactContent = contactElement.innerHTML;
        concatenatedContentDiv.innerHTML = contactContent;

        // Extract and load the contact page JavaScript
        /**
         * to send a script 
         */
          const script = document.createElement("script");
          script.src = "./scripts/ContactMe.js";
          document.body.appendChild(script);
        
      } else {
        console.error("contact-content element not found");
      }
    })
    .catch((error) => console.error("Error fetching the contact page:", error));
});





// JavaScript to toggle FAQ items
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating up to the document
    const faqItem = button.parentElement;

    // Close all FAQ items first
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("open"); // Close the other items
      }
    });

    // Toggle the current FAQ item
    faqItem.classList.toggle("open");
  });
});

// Close FAQ when clicking outside of the FAQ section
document.addEventListener("click", (event) => {
  const faqSection = document.querySelector(".faq");
  const faqItem = document.querySelector(".faq-item.open");

  // Check if the click is outside the FAQ section and close the open FAQ item
  if (faqItem && !faqSection.contains(event.target)) {
    faqItem.classList.remove("open");
  }
});

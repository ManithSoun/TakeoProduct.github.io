function showCategory(categoryId) {
  // Update active button
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
  
  // Show selected category
  document.querySelectorAll('section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(categoryId).classList.add('active');
}

function filterProducts() {
  const searchTerm = document.querySelector('.search-input').value.toLowerCase();
  const activeSection = document.querySelector('section.active');
  
  if (!activeSection) return;
  
  const products = activeSection.querySelectorAll('.product');
  
  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    const description = product.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      product.style.display = 'flex';
    } else {
      product.style.display = 'none';
    }
  });
}
// Get the dropdown button and options container
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownOptions = document.querySelector('.dropdown-options');

// Add a click event listener to the dropdown button
dropdownBtn.addEventListener('click', () => {
  dropdownOptions.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn')) {
    if (dropdownOptions.classList.contains('show')) {
      dropdownOptions.classList.remove('show');
    }
  }
});
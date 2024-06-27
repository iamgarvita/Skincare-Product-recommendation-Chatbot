document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling effect for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const offsetTop = targetSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  // Dynamic product card creation
  const products = [
    { name: 'Garnier Micellar Hylaraunic Water', price: 'Price: 25.41 MYR ', image: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13027915-1065086945616739.jpg" },
    { name: 'CeraVe Daily Moisturising Lotion', price: 'Price: 15.23 MYR', image: "https://i5.walmartimages.com/seo/CeraVe-Daily-Moisturizing-Face-Body-Lotion-with-Hyaluronic-Acid-for-Normal-to-Dry-Skin-12-oz_fa050fd7-4c62-4694-ac27-d28748a393f8_1.5f6dff2fcb1a5ec2f9b1437aea5dbd6f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { name: 'Olay Micro Sculpting Cream', price: 'Price: 42.28 MYR', image: 'https://cdn11.bigcommerce.com/s-gud7r2x2lu/images/stencil/original/image-manager/msc-aging-desk.jpg?t=1699533092' },
    { name: 'Cetaphil Gentle Skin Cleaner ', price: 'Price: 15.79 MYR', image: 'https://images-static.nykaa.com/media/catalog/product/b/b/bb34c99NYCETA0000010_2401241.jpg?tr=w-344,h-344,cm-pad_resize' }
  ];

  const productGrid = document.querySelector('.product-grid');

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src=" ${product.image}" alt="${product.name}" width=300px height=300px>
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });

  // Form submission handling for contact form
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formDataSerialized = Object.fromEntries(formData.entries());
    // Here you can send the form data to a server or handle it in any other way
    console.log('Form data:', formDataSerialized);
    // For demonstration purposes, logging the form data to console
    alert('Thank you for your message!');
    this.reset();
  });
  

});

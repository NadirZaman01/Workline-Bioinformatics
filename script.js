// Scroll animation using Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(section => observer.observe(section));

// 2. Enhanced Testimonial Slider Logic (Auto-slide + Hover Pause)
const slider = document.getElementById('testimonialSlider');
const testimonials = document.querySelectorAll('.testimonial-card');
const nextBtn = document.getElementById('nextTestimonial');
const prevBtn = document.getElementById('prevTestimonial');
const wrapper = document.querySelector('.testimonial-wrapper');

let index = 0;
let slideInterval;

// Function to move the slider
function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Function for next slide
function nextSlide() {
  index = (index + 1) % testimonials.length;
  updateSlider();
}

// Function for previous slide
function prevSlide() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateSlider();
}

// Start automatic sliding every 4 seconds
function startAutoSlide() {
  stopAutoSlide(); // Clear any existing intervals first
  slideInterval = setInterval(nextSlide, 4000); 
}

// Stop automatic sliding
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// --- Event Listeners ---

// Manual navigation via buttons
nextBtn.onclick = () => {
  nextSlide();
  startAutoSlide(); // Reset timer after manual click
};

prevBtn.onclick = () => {
  prevSlide();
  startAutoSlide(); // Reset timer after manual click
};

// Pause slider when mouse enters, resume when it leaves
wrapper.addEventListener('mouseenter', stopAutoSlide);
wrapper.addEventListener('mouseleave', startAutoSlide);

// Initialize the auto-slider on page load
startAutoSlide();

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

// Testimonial slider logic
const slider = document.getElementById('testimonialSlider');
const testimonials = document.querySelectorAll('.testimonial-card');
let index = 0;

document.getElementById('prevTestimonial').onclick = () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById('nextTestimonial').onclick = () => {
  index = (index + 1) % testimonials.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
};

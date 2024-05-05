import React from 'react';

const Navigation = () => {
  const scrollTo = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => scrollTo('about')}>About</button>
        </li>
        <li>
          <button onClick={() => scrollTo('features')}>Services</button>
        </li>
        <li>
          <button onClick={() => scrollTo('portfolio')}>Portfolio</button>
        </li>
        <li>
          <button onClick={() => scrollTo('blog')}>Blog</button>
        </li>
        <li>
          <button onClick={() => scrollTo('pricing')}>Pricing</button>
        </li>
        <li>
          <button onClick={() => scrollTo('testimonials')}>Testimonials</button>
        </li>
        <li>
          <button onClick={() => scrollTo('faqs')}>FAQs</button>
        </li>
        <li>
          <button onClick={() => scrollTo('contact-info')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

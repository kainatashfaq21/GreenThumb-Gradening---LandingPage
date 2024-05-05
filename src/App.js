import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Navigation';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add further logic here to handle form submission, such as sending data to a server

    // For now, let's log the form data to the console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(current => (current + 1) % 3); // Adjust the number based on the number of slides
    }, 4000); // Change the interval duration as needed

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []); // Run only once on component mount

  return (
    <div className="App">
      
      <Navigation />

      <header className="App-header">
  <div className="header-content">
    <h1>Welcome to GreenThumb Gardening</h1>
    <p>Transform your outdoor space with our expert gardening services. Let us help you create the garden of your dreams!</p>
  </div>
</header>


<section className="about">
  <div className="about-content">
    <h2>About Us</h2>
    <p>Welcome to GreenThumb Gardening, where we specialize in creating stunning outdoor spaces that enhance the beauty and functionality of your home. Our team of experienced professionals is dedicated to exceeding your expectations and bringing your garden dreams to life.</p>
  </div>
</section>

<section className="features">
  <h2>Our Services</h2>
  <div className="feature-div">
    <div className="feature">
      <img src="https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg?t=st=1714905163~exp=1714908763~hmac=f19f368c888cd33dd2bccf4816856f2f91d56f33c55a110cbf356ce5e0dcbb3c&w=740" alt="Garden Design" />
      <div className="feature-content">
        <h3>Garden Design</h3>
        <p>Our team of expert garden designers will work with you to create a beautiful and functional garden that meets your needs and budget.</p>
      </div>
    </div>
    <div className="feature">
      <img src="https://img.freepik.com/free-photo/close-up-picture-hand-watering-sapling-plant_1150-28357.jpg?t=st=1714905207~exp=1714908807~hmac=4db7787da301014e097aceb913a78489b64dc87aa4fd9ea7b1599d6364aa3670&w=740" alt="Planting" />
      <div className="feature-content">
        <h3>Planting</h3>
        <p>We offer a wide range of planting services, from small-scale planting projects to large-scale planting schemes.</p>
      </div>
    </div>
    <div className="feature">
      <img src="https://img.freepik.com/premium-photo/farmer-gardener_168370-5.jpg?w=740" alt="Maintenance" />
      <div className="feature-content">
        <h3>Maintenance</h3>
        <p>Our maintenance services include lawn care, pruning, weeding, and more. We'll keep your garden looking its best all year round.</p>
      </div>
    </div>
  </div>
</section>


<section className="portfolio">
  <h2>Portfolio Showcase </h2>
  <div className="portfolio-items">
    <div className="portfolio-item">
      <img src="https://img.freepik.com/premium-photo/tomatoes-different-shapes-colors-wicker-baskets-background-greenhouse-outdoors_87555-3633.jpg?w=826" alt="GreenThumb Gardening Project 1" />
      <h3>Organic Vegetable Garden</h3>
      <p>Create a thriving organic vegetable garden in your backyard with our step-by-step guide. Learn about companion planting, soil health, and natural pest control methods.</p>
    </div>
    <div className="portfolio-item">
      <img src="https://img.freepik.com/premium-photo/calendula-officinalis-salvia-nemorosa-composition-picked-by-handmade-oldfashioned-wooden-rake-garden_810094-828.jpg?w=740" alt="GreenThumb Gardening Project 2" />
      <h3>Native Plant Landscaping</h3>
      <p>Transform your outdoor space into a haven for local wildlife by incorporating native plants. Discover the beauty and benefits of landscaping with native species.</p>
    </div>
    <div className="portfolio-item">
      <img src="https://img.freepik.com/free-photo/radish-microgreens-with-seeds-roots-germination-seeds-home_169016-33558.jpg?t=st=1714840448~exp=1714844048~hmac=9f834715c7196feb6789b672f6ebf95cb20c00d72008a6982c3bcb4731bd8a75&w=740" alt="GreenThumb Gardening Project 3" />
      <h3>Herb Garden for Beginners</h3>
      <p>Start your own herb garden and enjoy fresh flavors right from your kitchen. Learn which herbs to grow, how to care for them, and creative ways to use them in your cooking.</p>
    </div>
    <div className="portfolio-item">
      <img src="https://img.freepik.com/premium-photo/man-watering-plants-his-garden-urban-gardening-watering-fresh-vegetables-nature-plants-care_1715-13962.jpg?w=740" alt="GreenThumb Gardening Project 4" />
      <h3>Sustainable Watering Solutions</h3>
      <p>Explore eco-friendly watering methods to conserve water and promote plant health. From drip irrigation systems to rainwater harvesting, discover sustainable solutions for your garden.</p>
    </div>
    <div className="portfolio-item">
      <img src="https://img.freepik.com/premium-photo/young-female-workwear-looking-blooming-strawberry-seedlings-vertical-farm_274679-21084.jpg?w=740" alt="GreenThumb Gardening Project 5" />
      <h3>Vertical Gardening Ideas</h3>
      <p>Maximize your gardening space with vertical gardening techniques. From vertical planters to trellises, learn how to grow more in less space and add visual interest to your garden.</p>
    </div>
    <div className="portfolio-item">
      <img src="https://img.freepik.com/free-photo/grandparents-little-boy-working-garden_23-2148980628.jpg?t=st=1714840590~exp=1714844190~hmac=9028620c26b2ea48bbe70727b7e96cfda0a89dd182fe7fb954a208b824e000cc&w=740" alt="GreenThumb Gardening Project 6" />
      <h3>Community Garden Initiatives</h3>
      <p>Get involved in community gardening projects and make a positive impact on your neighborhood. Join forces with fellow gardeners to create shared green spaces for everyone to enjoy.</p>
    </div>
  </div>
</section>

<section className="blog">
  <h2>Latest Blog Posts</h2>
  <div className="blog-post">
    <img src="https://img.freepik.com/free-photo/top-view-person-taking-care-plants_23-2148509868.jpg?t=st=1714841170~exp=1714844770~hmac=372301a74185a28b73351beaa6861e552b9e45e6608aaf96bb5bfdaa0cf67a25&w=740" alt="GreenThumb Gardening" />
    <div className="blog-content">
      <h3>Unlocking the Secrets of GreenThumb Gardening</h3>
      <p>Embark on a journey of discovery as we delve into the world of GreenThumb Gardening. Whether you're a seasoned gardener or just starting out, there's something for everyone in this comprehensive guide to cultivating your green space.</p>
      <p>From selecting the perfect plants for your climate to mastering the art of composting, we'll cover everything you need to know to transform your backyard into a lush oasis of greenery and tranquility.</p>
      <p>Join us as we explore topics such as:</p>
      <ul>
        <li>Choosing the right plants for your garden</li>
        <li>Creating a sustainable watering system</li>
        <li>Implementing eco-friendly gardening practices</li>
        <li>Attracting beneficial insects and wildlife</li>
        <li>And much more!</li>
      </ul>
    </div>
  </div>
  
  <div className="blog-post">
    <img src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-basket_23-2149128128.jpg?t=st=1714841199~exp=1714844799~hmac=b8b0db842bf4be3816b939b433947b8d8ab66808ef0a35c22e74b38fd6d8fd0c&w=740" alt="Organic Gardening" />
    <div className="blog-content">
      <h3>The Benefits of Organic Gardening</h3>
      <p>Discover the numerous benefits of organic gardening in this informative blog post. From reducing chemical exposure to promoting soil health, organic gardening offers a sustainable and eco-friendly approach to cultivating your garden.</p>
      <p>Learn about the principles of organic gardening, including natural pest control methods, soil enrichment techniques, and the importance of biodiversity. Whether you're growing vegetables, fruits, or flowers, organic gardening can help you create a thriving and resilient garden ecosystem.</p>
    </div>
  </div>
  
  <div className="blog-post">
    <img src="https://img.freepik.com/free-photo/full-shot-young-woman-surrounded-by-plants_23-2150522450.jpg?t=st=1714841283~exp=1714844883~hmac=633fdd6984bd0597fc1c7f735439cc6b7b36990524482c6bbac0096cfff8b16c&w=740" alt="Urban Gardening" />
    <div className="blog-content">
      <h3>The Rise of Urban Gardening</h3>
      <p>Explore the growing trend of urban gardening in this captivating blog post. As more people move into cities, urban gardening offers a creative solution to limited green space and food insecurity.</p>
      <p>Discover how urban gardeners are transforming rooftops, balconies, and vacant lots into vibrant gardens and community spaces. From vertical gardens to container gardening, urban gardening techniques are making it possible for city dwellers to reconnect with nature and grow their own fresh produce.</p>
    </div>
  </div>
</section>

<section className="pricing">
  <h2>Our Services & Pricing</h2>
  <div className="pricing-table">
    <div className="pricing-card">
      <h3>Full Garden Design Consultation</h3>
      <p className="price">$1000</p>
      <p>Includes detailed garden planning and consultation with our expert designers.</p>
    </div>
    <div className="pricing-card">
      <h3>Custom Landscape Planning</h3>
      <p className="price">$1500</p>
      <p>Get personalized landscape designs tailored to your preferences and needs.</p>
    </div>
    <div className="pricing-card">
      <h3>Planting Services</h3>
      <p className="price">$500</p>
      <p>Professional planting services for your garden beds.</p>
    </div>
    <div className="pricing-card">
      <h3>Seasonal Garden Maintenance</h3>
      <p className="price">$300/month</p>
      <p>Regular maintenance to keep your garden thriving throughout the year.</p>
    </div>
    <div className="pricing-card">
      <h3>Tree and Shrub Pruning</h3>
      <p className="price">$200/hour</p>
      <p>Expert pruning services to maintain the health and beauty of your trees and shrubs.</p>
    </div>
  </div>
</section>

<section className="testimonials">
  <h2>What Our Clients Say</h2>
  <div className="testimonial">
    <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1714905318~exp=1714908918~hmac=9fff9a9f1a8e849aa3df42310aaf5ad15399675b4ab5feadfb98b0378847167c&w=740" alt="Client" />
    <div className="testimonial-content">
      <p className='quotation-mark'>GreenThumb Gardening transformed my garden from a neglected space into a beautiful oasis. I couldn't be happier with the results.</p>
      <p>- Jane D.</p>
    </div>
  </div>
  <div className="testimonial">
    <img src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?t=st=1714905333~exp=1714908933~hmac=0ccc9beae1e1ab47c294f4aa058330f6e584bdd12ee1ccc34ccc5a0f0ad74d39&w=740" alt="Client" />
    <div className="testimonial-content">
      <p className='quotation-mark'>The team at GreenThumb Gardening are true professionals. They listened to my needs and delivered a garden that exceeded my expectations.</p>
      <p>- John S.</p>
    </div>
  </div>
  <div className="testimonial">
    <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1714905356~exp=1714908956~hmac=2c90d7a076870e9c170ac06252dfeb83ce20c6bab5c6ce7b749c3655e1a5c970&w=740" alt="Client" />
    <div className="testimonial-content">
      <p className='quotation-mark'>I highly recommend GreenThumb Gardening for all your gardening needs. They are reliable, professional, and deliver outstanding results.</p>
      <p>- Sarah L.</p>
    </div>
  </div>
  <div className="testimonial">
    <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=740" alt="Client" />
    <div className="testimonial-content">
      <p className='quotation-mark'>GreenThumb Gardening transformed my garden from a neglected space into a beautiful oasis. I couldn't be happier with the results.</p>
      <p>- Jane D.</p>
    </div>
  </div>
  <div className="testimonial">
    <img src="https://img.freepik.com/free-photo/young-african-american-girl-wearing-casual-clothes-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-8530.jpg?t=st=1714905446~exp=1714909046~hmac=d8efc541d3a933dc11a1625f0af8425f45c9070b02d3d2d28b72ce0bdfecf620&w=826" alt="Client" />
    <div className="testimonial-content">
      <p className='quotation-mark'>The team at GreenThumb Gardening are true professionals. They listened to my needs and delivered a garden that exceeded my expectations.</p>
      <p>- John S.</p>
    </div>
  </div>
  <div className="testimonial">
    <img src="https://img.freepik.com/free-photo/pretty-self-confident-female-model-with-afro-hair-keeps-hand-raised-smiles-gently-looks-directly-listens-attentively-interlocutor-wears-stylish-velvet-jacket_273609-46286.jpg?t=st=1714905497~exp=1714909097~hmac=c4c2395702dd67611b60d7765fefe575d0b3815339623ac2629ddbdffa1375f9&w=740" alt="Client" />
    <div className="testimonial-content">
      <p className='quotation-mark'>I highly recommend GreenThumb Gardening for all your gardening needs. They are reliable, professional, and deliver outstanding results.</p>
      <p>- Sarah L.</p>
    </div>
  </div>

</section>

<section className="faqs">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-item">
    <h3>How can I reset my password?</h3>
    <p>To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password via email.</p>
  </div>
  <div className="faq-item">
    <h3>What payment methods do you accept?</h3>
    <p>We accept various payment methods including credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can select your preferred payment method during checkout.</p>
  </div>
  <div className="faq-item">
    <h3>Do you offer refunds?</h3>
    <p>Yes, we offer refunds within 30 days of purchase for most products and services. Please review our refund policy for detailed information on eligibility and procedures.</p>
  </div>
  <div className="faq-item">
    <h3>How can I contact customer support?</h3>
    <p>You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567. Our support team is available 24/7 to assist you with any inquiries or issues.</p>
  </div>
  <div className="faq-item">
    <h3>Can I upgrade my subscription plan?</h3>
    <p>Yes, you can upgrade your subscription plan at any time. Simply log in to your account and navigate to the subscription settings. Select the desired plan and follow the prompts to complete the upgrade process.</p>
  </div>
</section>

<div className="cta-container">
  <section className="cta">
    <h2>Get Started Today</h2>
    <p>Transform your garden with GreenThumb Gardening. Contact us today for a free consultation.</p>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" value={message} placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} required></textarea>
      </div>
      <button type="submit" className="cta-button">Send</button>
    </form>
  </section>
</div>


<section className="contact-info">
  <h2>Contact Information</h2>
  <ul>
    <li><i className="fas fa-phone-alt"></i> Phone: <a href="tel:123-456-7890">123-456-7890</a></li>
    <li><i className="far fa-envelope"></i> Email: <a href="mailto:example@email.com">example@email.com</a></li>
    <li><i className="fas fa-map-marker-alt"></i> Address: 123 Garden St, City, State</li>
  </ul>
</section>

<footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 GreenThumb Gardening. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;


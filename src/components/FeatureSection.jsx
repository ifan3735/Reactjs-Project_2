// import React from 'react';
import './FeatureSection.css';
import featureImage from '../assets/images/illustration-editor-desktop.svg'; // image path 1
import featureImage2 from '../assets/images/illustration-phones.svg';
import featureImage3 from '../assets/images/illustration-laptop-desktop.svg'

function FeatureSection() {
  return (
  
    <section className="feature-section">
      <section className='main'>
      <div className="feature-content">
        <h2>Introducing an extensible editor</h2>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
        </p>
        <h2>Robust content management</h2>
        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you are in full control. </p>
      </div>
      <img src={featureImage} alt="Feature" className="feature-image" />
      </section>
      <section className='main dark'>
      <img src={featureImage2} alt="Feature" className="feature-image" />
      <div className="feature-content">
        <h2>State of the Art Infrastructure</h2>
        <p>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </div>
      </section>
      <section className='main'>
      <img src={featureImage3} alt="Feature" className="feature-image" />
      <div className="feature-content">
        <h2>Free, Open, Simple</h2>
        <p>
          Blogr is a free and open source application backed by a large community of helpful developers. It supports feature such as code syntax highlighting. RSS feeds, social media intergration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
        <h2>Powerful tooling</h2>
        <p>Batteries included. We built a simple and straightfoward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
      </div>
      </section>
    </section>
    

  );
}

export default FeatureSection;

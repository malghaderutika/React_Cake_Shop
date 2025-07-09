// src/Home.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS

function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = '#dee2e6';
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div style={{ backgroundColor: 'rgb(215, 250, 248)' }}>
          <center>
            <h1 style={{ fontSize: '40px', fontFamily: "'Dancing Script', cursive" }}>
              Theobroma Cakes
            </h1>
          </center>
          <ul style={{ listStyleType: 'none', paddingLeft: '1200px', display: 'flex' }}>
            <li style={{ marginRight: '10px' }}><a href="#Home">Home</a></li>
            <li style={{ marginRight: '10px' }}><a href="#OrderNow">Order now</a></li>
            <li style={{ marginRight: '10px' }}><a href="#ContactUs">ContactUS</a></li>
            <li style={{ marginRight: '10px' }}><a href="#Products">Products</a></li>
          </ul>
        </div>
      </nav>

      {/* Carousel Banner */}
      <div id="Home" align="center" style={{ padding: '20px' }}>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '1000px' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.uengage.io/uploads/7175/image-843385-1744378964.jpeg"
                className="d-block w-100"
                alt="Slide 1"
                style={{ height: '400px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://files.lbb.in/124725106_3717683568265293_9072252210515718415_n_1606889721678.jpg"
                className="d-block w-100"
                alt="Slide 2"
                style={{ height: '400px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/404/bf53f0210945273.Y3JvcCwxMDgwLDg0NCwwLDUwMg.jpg"
                className="d-block w-100"
                alt="Slide 3"
                style={{ height: '400px', objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h1 style={{ marginTop: '20px' }}>
          Bring home the joy and Happiness with the Slice of Heaven.
          Delight in every bite with cakes of Theobroma
        </h1>
      </div>

      {/* Cards */}
      <div className="order-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {[
          {
            img: "https://cdn.uengage.io/uploads/7175/image-387267-1744356442.jpeg",
            title: "Easter Special",
            desc: "Traditional easter filled with 2 mini choco eggs with biscoff and nutella filling"
          },
          {
            img: "https://cdn.uengage.io/uploads/7175/image-627966-1744012374.jpeg",
            title: "Mango Special",
            desc: "Layers of Mango diplomat cream, house-made mango and soft-vanilla"
          },
          {
            img: "https://cdn.uengage.io/uploads/7175/image-P6S262-1681384636.jpg",
            title: "Crosiant & Danishes",
            desc: "Chocolate folded between flaky Danish pastry dough."
          },
          {
            img: "https://cdn.uengage.io/uploads/7175/image-W8EU8R-1681839318.jpg",
            title: "Dutch Truffel",
            desc: "Dark chocolate ganache with chocolate sponge"
          },
          {
            img: "https://cdn.uengage.io/uploads/7175/image-K2MDDX-1687877410.jpg",
            title: "Red Velvet Cup Cake",
            desc: "Moist red velvet cupcake with lemon cream cheese frosting"
          },
          {
            img: "https://cdn.uengage.io/uploads/7175/image-8B0LAB-1681839332.jpg",
            title: "Dutch-Truffle",
            desc: "Dutch Truffel chocolate with sponge"
          },
          {
            img: "https://cdn.uengage.io/uploads/7175/image-F3YLC6-1681839308.jpg",
            title: "Cappuccino",
            desc: "Espresso-based coffee drink prepared with steamed milk"
          },
          {
            img: "https://cdn.uengage.io/uploads/7175/image-DEAFI3-1681839390.jpg",
            title: "Millionaire Brownie",
            desc: "Soft buttery caramel sandwich between chocolate chips and brownie"
          }
        ].map((item, i) => (
          <div key={i} className="cards" style={{
            backgroundColor: '#fefefe',
            width: '200px',
            fontSize: '14px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <img src={item.img} alt={item.title} width="149px" height="149px" style={{ paddingTop: '10px' }} />
            <h3 style={{ fontSize: '16px', marginTop: '10px' }}>{item.title}</h3>
            <p style={{ fontSize: '12px', color: '#555', marginBottom: '10px' }}>{item.desc}</p>
            <button style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '8px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'background-color 0.3s ease, transform 0.3s ease'
            }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7700b3'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
              Order-now
            </button>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <hr />
      <form id="ContactUs" style={{ padding: '20px' }}>
        <h3>Contact-us Form</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <br /><br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <br /><br />
        <label htmlFor="phone">Phone Number</label>
        <input type="number" id="phone" placeholder="Phone number" />
      </form>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <p>© Theobroma cake shop | Rutika | All rights reserved</p>
        <hr />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.056001874811!2d73.83998651028875!3d18.526371268925327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1ad300ecf13%3A0xbaf7f04ff053ace7!2sFullstack%20Guru!5e0!3m2!1sen!2sin!4v1744297037178!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""          
          title="Map"
        ></iframe>
      </footer>
    </div>
  );
}

export default Home;

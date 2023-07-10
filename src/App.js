// package photos
import trip1 from './assets/img/trip1.png'
import trip3 from './assets/img/trip3.png'
import trip4 from './assets/img/trip4.png'
import img1 from './assets/img/1.png'
// package photos

// destination photos
import dest1 from './assets/img/dest1.jpg'
import dest2 from './assets/img/dest2.jpg'
import dest3 from './assets/img/dest3.jpg'
// destination photos

// brand icon and logo 
// brand icon and logo 

import './app.css'

import React, { useEffect, useState } from 'react';

function App() {

    const [headerClass, setHeaderClass] = useState();
    const [menuIcon, setMenuIcon] = useState('bx bx-menu');
    const [navbar, setNavbar] = useState('navbar');

    const devName = '<Mirza./>'

    useEffect(() => {
        const handleScroll = () => {
            // Your scroll event logic here
            if (window.scrollY > 0) {
                setHeaderClass('stick');
                setMenuIcon('bx bx-menu');
                setNavbar('navbar');
                console.log('stick');
            } else {
                setHeaderClass('');
                console.log('non-stick');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuClick = () => {
        if (menuIcon === 'bx bx-menu' && navbar === 'navbar') {
            setMenuIcon('bx bx-x');
            setNavbar('navbar open');
        } else {
            setMenuIcon('bx bx-menu');
            setNavbar('navbar');
        }

    }

    return (
        <div>
            {/* Header Section */}
            <header className={headerClass}>
                <a href="" className="logo"> Company </a>
                <div className={menuIcon} onClick={menuClick} id='menu-icon'></div>

                <ul className={navbar}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#package">Packages</a></li>
                    <li><a href="#destination">Destination</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </header>
            {/* Home Section */}
            <section className="home" id="home">
                <div className="home-text">
                    <h1> Company <br /> Travel & Tours </h1>
                    <p id='para'>“The world is a book and those who do not travel <br /> read only one page.”</p>
                    <a href="" className="home-btn">Let's go now</a>
                </div>
            </section>
            {/* container */}
            <section className="container">
                <div className="text">
                    <h2>Start Your Vacation <br /> with Lots of Services!</h2>
                </div>
                <div className="row-items">
                    {/* box */}
                    <div className="container-box">
                        <div className="container-img">
                            <img src={trip1} alt="Air Trip" />
                        </div>
                        <h4>Air Trip</h4>
                        <p>150 places</p>
                    </div>
                    {/* box */}
                    <div className="container-box">
                        <div className="container-img">
                            <img src={trip3} alt="Air Trip" />
                        </div>
                        <h4>Summer Trip</h4>
                        <p>145 places</p>
                    </div>
                    {/* box */}
                    <div className="container-box">
                        <div className="container-img">
                            <img src={trip4} alt="Air Trip" />
                        </div>
                        <h4>Winter Trip</h4>
                        <p>125 places</p>
                    </div>
                </div>
            </section>
            {/* Packages Section*/}
            <section className="package" id="package">
                <div className="title">
                    <h2>Our Upcoming <br /> Tour Packages</h2>
                </div>
                <div className="package-content">
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                                <a ><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* box */}
                    <div className="box">
                        <div className="thum">
                            <img src={img1} alt="package to" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
                            <div className="stars">
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                                <a><i className="bx bxs-star"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Destination Section */}
            <section className="destination" id="destination">
                <div className="title">
                    <h2>Our Most Popular <br /> Destinations</h2>
                </div>
                <div className="destination-content">
                    {/* content */}
                    <div className="col-content">
                        <img src={dest1} alt="Destination" />
                        <h5>Place</h5>
                        <p>Country</p>
                    </div>
                    {/* content */}
                    <div className="col-content">
                        <img src={dest2} alt="Destination" />
                        <h5>Place</h5>
                        <p>Country</p>
                    </div>
                    {/* content */}
                    <div className="col-content">
                        <img src={dest3} alt="Destination" />
                        <h5>Place</h5>
                        <p>Country</p>
                    </div>
                    {/* content */}
                    <div className="col-content">
                        <img src={dest1} alt="Destination" />
                        <h5>Place</h5>
                        <p>Country</p>
                    </div>
                </div>
            </section>
            {/* Newsletter Section */}
            <section className="newsletter">
                <div className="news-text">
                    <h2>Newsletter</h2>
                    <p>Subscribe to recive upcoming packages <br /> and services </p>
                </div>
                <div className="send">
                    <form>
                        <input type="email" placeholder='Write your Email' required />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>
            {/* footer */}
            <section id="contact">
                <div className="footer">
                    <div className="main">
                        {/* list */}
                        <div className="list">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a>About Us</a></li>
                                <li><a>Terms & Conditions</a></li>
                                <li><a>Help</a></li>
                                <li><a>Tour</a></li>
                            </ul>
                        </div>
                        {/* list */}
                        <div className="list">
                            <h4>Support</h4>
                            <ul>
                                <li><a>About Us</a></li>
                                <li><a>Terms & Conditions</a></li>
                                <li><a>Help</a></li>
                                <li><a>Tour</a></li>
                            </ul>
                        </div>
                        {/* list */}
                        <div className="list">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><a>place</a></li>
                                <li><a>place</a></li>
                                <li><a>+91 1234567889</a></li>
                                <li><a>sample@gmail.com</a></li>
                            </ul>
                        </div>
                        {/* list */}
                        <div className="list">
                            <h4>Connect</h4>
                            <div className="social">
                                <a><i className="bx bxl-facebook"></i></a>
                                <a><i className="bx bxl-instagram-alt"></i></a>
                                <a><i className="bx bxl-twitter"></i></a>
                                <a><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end-text">
                    <p>Copyright @2022 All rights reserved | Made by {devName} </p>
                </div>
            </section>
        </div>
    );
}

export default App;

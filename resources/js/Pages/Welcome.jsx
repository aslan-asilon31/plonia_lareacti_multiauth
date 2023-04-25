import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
// import { Link, Head } from '@inertiajs/react';
import '@/assets/frontend/style.css';

import video from '@/assets/frontend/images/vid-1.mp4';
import bookimg from '@/assets/frontend/images/book-img.svg';
import img1 from '@/assets/frontend/images/p-1.jpg';
import img2 from '@/assets/frontend/images/p-2.jpg';
import img3 from '@/assets/frontend/images/p-3.jpg';
import img4 from '@/assets/frontend/images/p-4.jpg';
import img5 from '@/assets/frontend/images/p-5.jpg';
import img6 from '@/assets/frontend/images/p-6.jpg';

import imgg1 from '@/assets/frontend/images/g-1.jpg';
import imgg2 from '@/assets/frontend/images/g-2.jpg';
import imgg3 from '@/assets/frontend/images/g-3.jpg';
import imgg4 from '@/assets/frontend/images/g-4.jpg';
import imgg5 from '@/assets/frontend/images/g-5.jpg';
import imgg6 from '@/assets/frontend/images/g-6.jpg';
import imgg7 from '@/assets/frontend/images/g-7.jpg';
import imgg8 from '@/assets/frontend/images/g-8.jpg';
import imgg9 from '@/assets/frontend/images/g-9.jpg';

import imgn1 from '@/assets/frontend/images/1.jpg';
import imgn2 from '@/assets/frontend/images/2.jpg';
import imgn3 from '@/assets/frontend/images/3.jpg';
import imgn4 from '@/assets/frontend/images/4.jpg';
import imgn5 from '@/assets/frontend/images/5.jpg';
import imgn6 from '@/assets/frontend/images/6.jpg';

import imgp1 from '@/assets/frontend/images/pic1.jpg';
import imgp2 from '@/assets/frontend/images/pic2.jpg';
import imgp3 from '@/assets/frontend/images/pic3.jpg';
import imgp4 from '@/assets/frontend/images/pic4.jpg';

import imgcontact from '@/assets/frontend/images/contact-img.svg';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>

{/* <!-- header section starts  --> */}

<header>

    <div id="menu-bar" className="fas fa-bars"></div>

    <a href="#" className="logo"><span>P</span>lonia</a>

    <nav className="navbar">
        <a href="#home">home</a>
        <a href="#book">book</a>
        <a href="#packages">packages</a>
        <a href="#services">services</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="/login">login | register</a>
    </nav>

    <div className="icons">
        <i className="fas fa-search" id="search-btn"></i>
        <i className="fas fa-user" id="login-btn"></i>
    </div>

    <form action="" className="search-bar-container">
        <TextInput type="search" id="search-bar" placeholder="search here..." />
        <label for="search-bar" className="fas fa-search"></label>
    </form>

</header>

{/* <!-- header section ends --> */}

{/* <!-- login form container  --> */}

<div className="login-form-container">

    <i className="fas fa-times" id="form-close"></i>

    <form action="">
        <h3>login</h3>
        <TextInput type="email" className="box" placeholder="enter your email" />
        <TextInput type="password" className="box" placeholder="enter your password" />
        <TextInput type="submit" value="login now" className="btn" />
        <TextInput type="checkbox" id="remember" />
        <label for="remember">remember me</label>
        <p>forget password? <a href="#">click here</a></p>
        <p>don't have and account? <a href="#">register now</a></p>
    </form>

</div>


{/* <!-- home section starts  --> */}

<section className="home" id="home">

    <div className="content">
        <h3>adventure is worthwhile</h3>
        <p>dicover new places with us, adventure awaits</p>
        <a href="#" className="btn">discover more</a>
    </div>

    <div className="controls">
        <span className="vid-btn active" data-src="images/vid-1.mp4"></span>
        <span className="vid-btn" data-src="images/vid-2.mp4"></span>
        <span className="vid-btn" data-src="images/vid-3.mp4"></span>
        <span className="vid-btn" data-src="images/vid-4.mp4"></span>
        <span className="vid-btn" data-src="images/vid-5.mp4"></span>
    </div>

    <div className="video-container">
        <video src={video} id="video-slider" loop autoplay muted></video>
    </div>

</section>

{/* <!-- home section ends --> */}


{/* <!-- book section starts  --> */}

<section className="book" id="book">

    <h1 className="heading">
        <span>b</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
        <span className="space"></span>
        <span>n</span>
        <span>o</span>
        <span>w</span>
    </h1>

    <div className="row">

        <div className="image">
            <img src={ bookimg } alt=""/>
        </div>

        <form action="">
            <div className="inputBox">
                <h3>where to</h3>
                {/* <TextInput type="text" placeholder="place name"> */}
            </div>
            <div className="inputBox">
                <h3>how many</h3>
                <TextInput type="number" placeholder="number of guests" />
            </div>
            <div className="inputBox">
                <h3>arrivals</h3>
                <TextInput type="date" placeholder="number of guests" />
            </div>
            <div className="inputBox">
                <h3>leaving</h3>
                <TextInput type="date" placeholder="number of guests" />
            </div>
            <TextInput type="submit" className="btn" value="book now" />
        </form>

    </div>

</section>

{/* <!-- book section ends --> */}

{/* <!-- packages section starts  --> */}

<section className="packages" id="packages">

    <h1 className="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
    </h1>

    <div className="box-container">

        <div className="box">
            <img src={img1} alt=""/>
            <div className="content">
                <h3> <i className="fas fa-map-marker-alt"></i> mumbai </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" className="btn">book now</a>
            </div>
        </div>

        <div className="box">
            <img src={img2} alt=""/>
            <div className="content">
                <h3> <i className="fas fa-map-marker-alt"></i> hawaii </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" className="btn">book now</a>
            </div>
        </div>

        <div className="box">
            <img src={img3} alt=""/>
            <div className="content">
                <h3> <i className="fas fa-map-marker-alt"></i> sydney </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" className="btn">book now</a>
            </div>
        </div>

        <div className="box">
            <img src={img4} alt=""/>
            <div className="content">
                <h3> <i className="fas fa-map-marker-alt"></i> paris </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" className="btn">book now</a>
            </div>
        </div>

        <div className="box">
            <img src={img5} alt=""/>
            <div className="content">
                <h3> <i className="fas fa-map-marker-alt"></i> tokyo </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" className="btn">book now</a>
            </div>
        </div>

        <div className="box">
            <img src={img6} alt=""/>
            <div className="content">
                <h3> <i className="fas fa-map-marker-alt"></i> eypt </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" className="btn">book now</a>
            </div>
        </div>

    </div>

</section>

{/* <!-- packages section ends --> */}

{/* <!-- services section starts  --> */}

<section className="services" id="services">

    <h1 className="heading">
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
    </h1>

    <div className="box-container">

        <div className="box">
            <i className="fas fa-hotel"></i>
            <h3>affordable hotels</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div className="box">
            <i className="fas fa-utensils"></i>
            <h3>food and drinks</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div className="box">
            <i className="fas fa-bullhorn"></i>
            <h3>safty guide</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div className="box">
            <i className="fas fa-globe-asia"></i>
            <h3>around the world</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div className="box">
            <i className="fas fa-plane"></i>
            <h3>fastest travel</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div className="box">
            <i className="fas fa-hiking"></i>
            <h3>adventures</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>

    </div>

</section>

{/* <!-- services section ends --> */}

{/* <!-- gallery section starts  --> */}

<section className="gallery" id="gallery">

    <h1 className="heading">
        <span>g</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
    </h1>

    <div className="box-container">

        <div className="box">
            <img src={imgg1} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg2} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg3} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg4} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg5} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg6} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg7} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg8} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>
        <div className="box">
            <img src={imgg9} alt=""/>
            <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
            </div>
        </div>

    </div>

</section>

{/* <!-- gallery section ends --> */}

{/* <!-- review section starts  --> */}

<section className="review" id="review">

    <h1 className="heading">
        <span>r</span>
        <span>e</span>
        <span>v</span>
        <span>i</span>
        <span>e</span>
        <span>w</span>
    </h1>

    <div className="swiper-container review-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide">
                <div className="box">
                    <img src={imgp1} alt=""/>
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="box">
                    <img src={imgp2} alt=""/>
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="box">
                    <img src={imgp3} alt=""/>
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="box">
                    <img src={imgp4} alt=""/>
                    <h3>john deo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>

        </div>

    </div>

</section>

{/* <!-- review section ends --> */}

{/* <!-- contact section starts  --> */}

<section className="contact" id="contact">
    
    <h1 className="heading">
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
    </h1>

    <div className="row">

        <div className="image">
            <img src={imgcontact} alt="" />
        </div>

        <form action="">
            <div className="inputBox">
                <TextInput type="text" placeholder="name" />
                <TextInput type="email" placeholder="email" />
            </div>
            <div className="inputBox">
                <TextInput type="number" placeholder="number" />
                <TextInput type="text" placeholder="subject" />
            </div>
            <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
            <TextInput type="submit" className="btn" value="send message" />
        </form>

    </div>
    
</section>

{/* <!-- contact section ends --> */}

{/* <!-- brand section  --> */}
<section className="brand-container">

    <div className="swiper-container brand-slider">
        <div className="swiper-wrapper">
            <div className="swiper-slide"><img src={imgn1} alt="" /></div>
            <div className="swiper-slide"><img src={imgn2} alt="" /></div>
            <div className="swiper-slide"><img src={imgn3} alt="" /></div>
            <div className="swiper-slide"><img src={imgn4} alt="" /></div>
            <div className="swiper-slide"><img src={imgn5} alt="" /></div>
            <div className="swiper-slide"><img src={imgn6} alt="" /></div>
        </div>
    </div>

</section>

{/* <!-- footer section  --> */}

<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>about us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.</p>
        </div>
        <div className="box">
            <h3>branch locations</h3>
            <a href="#">india</a>
            <a href="#">USA</a>
            <a href="#">japan</a>
            <a href="#">france</a>
        </div>
        <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">book</a>
            <a href="#">packages</a>
            <a href="#">services</a>
            <a href="#">gallery</a>
            <a href="#">review</a>
            <a href="#">contact</a>
        </div>
        <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
            <a href="#">linkedin</a>
        </div>

    </div>

    <h1 className="credit"> created by <span> mr. web designer </span> | all rights reserved! </h1>

</section>







        


            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}

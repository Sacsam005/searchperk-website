import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <section className="contact" id="contact">

                <h1 className="heading"> <span>contact</span> us </h1>

                <div className="row">

                    <div className="box-container">

                        <div className="box">
                            <h3>contact Us</h3>
                            <p> <span className="fas fa-map"></span> Dallas, Texas - 12345 </p>
                            <p> <span className="fas fa-envelope"></span> abc@gmail.com </p>
                            <p> <span className="fas fa-phone"></span> +123-456-7890 </p>
                        </div>

                        <div className="box">
                            <h3>Business hours</h3>
                            <p> <span> monday : </span> 07:00am - 10:00pm </p>
                            <p> <span> tuesday : </span> 07:00am - 10:00pm </p>
                            <p> <span> wednesday : </span> 07:00am - 10:00pm </p>
                            <p> <span> thurday : </span> 07:00am - 10:00pm </p>
                            <p> <span> friday : </span> 07:00am - 10:00pm </p>
                            <p> <span> saturday : </span> 07:00am - 10:00pm </p>
                            <p> <span> sunday : </span> closed </p>
                        </div>

                    </div>

                    <form action="">
                        <h3>send us a message</h3>
                        <input type="text" placeholder="your name" className="input-box" />
                        <input type="email" placeholder="your email" className="input-box" />
                        <input type="number" placeholder="your number" className="input-box" />
                        <input type="text" placeholder="your subject" className="input-box" />
                        <textarea name="" placeholder="your message" className="input-box" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="send now" className="btn" />
                    </form>

                </div>

            </section>

            <section className="newsletter">

                <div className="content">
                    <h3>newsletter</h3>
                    <p>subscribe for weekly newsletters.</p>
                </div>

                <form action="">
                    <input type="email" name="" placeholder="enter your email" id="" className="email" />
                    <input type="submit" value="subscribe" className="btn" />
                </form>

            </section>

            <section className="credit">

                <p>© 2021 |<span>This page is maintained by Sacsam005</span>| all rights reserved!</p>

                <div className="share">
                    <a href="/" className="fab fa-facebook-f"></a>
                    <a href="/" className="fab fa-twitter"></a>
                    <a href="/" className="fab fa-instagram"></a>
                    <a href="/" className="fab fa-github"></a>
                </div>

            </section>
        </>
    )
}

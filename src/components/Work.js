import React from 'react'
import './Style.css'

export default function Work() {
    return (
        <>
            <section className="pricing" id="pricing">

                <h1 className="heading"> choose a <span>plan</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <h3>basic</h3>
                        <div className="price"> <span>$</span>150<span>/mo</span> </div>
                        <ul>
                            <li> <i className="fas fa-check"></i> Content quality check </li>
                            <li> <i className="fas fa-check"></i> Getting indexed </li>
                            <li> <i className="fas fa-times"></i> keywords</li>
                            <li> <i className="fas fa-times"></i> SEO analytics </li>
                            <li> <i className="fas fa-times"></i> maintainence </li>
                        </ul>
                        <a href="/" className="btn">choose plan</a>
                    </div>

                    <div className="box">
                        <h3>standard</h3>
                        <div className="price"> <span>$</span>250<span>/mo</span> </div>
                        <ul>
                            <li> <i className="fas fa-check"></i> Content quality check </li>
                            <li> <i className="fas fa-check"></i> Getting indexed </li>
                            <li> <i className="fas fa-check"></i> keywords</li>
                            <li> <i className="fas fa-times"></i> SEO analytics </li>
                            <li> <i className="fas fa-times"></i> maintainence </li>
                        </ul>
                        <a href="/" className="btn">choose plan</a>
                    </div>

                    <div className="box">
                        <h3>premium</h3>
                        <div className="price"> <span>$</span>650<span>/mo</span> </div>
                        <ul>
                            <li> <i className="fas fa-check"></i> Content quality check </li>
                            <li> <i className="fas fa-check"></i> Getting indexed </li>
                            <li> <i className="fas fa-check"></i> keywords</li>
                            <li> <i className="fas fa-check"></i> SEO analytics </li>
                            <li> <i className="fas fa-check"></i> maintainence </li>
                        </ul>
                        <a href="/" className="btn">choose plan</a>
                    </div>
                </div>
            </section>

            <section className="reviews" id="reviews">

                <h1 className="heading"> clients <span>reviews</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <div className="user">
                            <img src={require('./images/user1.jpg')} alt="" />
                            <div className="info">
                                <h3>Brook Linn</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit mollitia accusantium consequatur adipisci magni architecto quam tenetur rerum odio voluptas quia earum vero est error, illo beatae ut repudiandae!</p>
                    </div>

                    <div className="box">
                        <div className="user">
                            <img src={require('./images/user2.jpeg')} alt="" />
                            <div className="info">
                                <h3>Karli deo</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit mollitia accusantium consequatur adipisci magni architecto quam tenetur rerum odio voluptas quia earum vero est error, illo beatae ut repudiandae!</p>
                    </div>

                    <div className="box">
                        <div className="user">
                            <img src={require('./images/user3.jpg')} alt="" />
                            <div className="info">
                                <h3>Brian Lee</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit mollitia accusantium consequatur adipisci magni architecto quam tenetur rerum odio voluptas quia earum vero est error, illo beatae ut repudiandae!</p>
                    </div>
                </div>
            </section>


        </>
    )
}

import React from 'react'
import './Style.css'

export default function Header() {
    return (
        <>
            <section className="home" id="home">

                <div className="box">
                    <div className="image">
                        <img src={require('./images/s1.png')} alt="" />
                    </div>
                    <div className="content">
                        <h3>SEO tools for your business</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt id repellendus numquam. Maxime veritatis consequatur nobis architecto incidunt rem esse?</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="content">
                        <h3>Unique business solutions</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt id repellendus numquam. Maxime veritatis consequatur nobis architecto incidunt rem esse?</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                    <div className="image">
                        <img src={require('./images/s2.png')} alt="" />
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={require('./images/s3.png')} alt="" />
                    </div>
                    <div className="content">
                        <h3>everything you need is here!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt id repellendus numquam. Maxime veritatis consequatur nobis architecto incidunt rem esse?</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>
            </section>
        </>
    )
}

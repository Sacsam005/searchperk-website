import React from 'react'
import './Style.css'


export default function Hero() {
    return (
        <>
            <section className="services" id="services">

                <h1 className="heading"> our <span>services</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={require('./images/serv-1.png')} alt="" />
                        <h3>Result Guarantee</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus!</p>
                    </div>

                    <div className="box">
                        <img src={require('./images/serv-2.png')} alt="" />
                        <h3>Reasonable Price</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus!</p>
                    </div>

                    <div className="box">
                        <img src={require('./images/serv-3.png')} alt="" />
                        <h3>No Missing Deadlines</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus!</p>
                    </div>

                    <div className="box">
                        <img src={require('./images/serv-4.png')} alt="" />
                        <h3>Quick Feedback</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus!</p>
                    </div>

                    <div className="box">
                        <img src={require('./images/serv-5.png')} alt="" />
                        <h3>Individual Approach</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus!</p>
                    </div>

                    <div className="box">
                        <img src={require('./images/serv-6.png')} alt="" />
                        <h3>Dedicated Team</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus!</p>
                    </div>
                </div>
            </section>

        </>
    )
}

import React from 'react'
import './Style.css'

export default function Main() {
    return (
        <>
            <section className="work" id="work">

                <h1 className="heading"> our <span>work</span> </h1>

                <div className="box-container">
                    <img src={require('./images/work-9.jpg')} alt="work" />
                    <img src={require('./images/work-8.jpg')} alt="work" />
                    <img src={require('./images/work-7.jpg')} alt="work" />
                    <img src={require('./images/work-6.png')} alt="work" />
                    <img src={require('./images/work-5.png')} alt="work" />
                    <img src={require('./images/work-4.png')} alt="work" />
                    <img src={require('./images/work-3.png')} alt="work" />
                    <img src={require('./images/work-2.png')} alt="work" />
                    <img src={require('./images/work-1.png')} alt="work" />
                </div>
            </section>


        </>
    )
}

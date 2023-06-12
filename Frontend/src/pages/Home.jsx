import React from 'react'

import {Link} from 'react-router-dom'

import '../styles/Home.modules.css' //Specific for Home.jsx

// Home Component 
import ServicesCard from '../components/Home/ServicesCard'
import Testimonials from '../components/Home/Testimonials'
import RoadMapCard from '../components/Home/RoadMapCard'
import ContactUs from '../components/Home/ContactUs'

const Home = () => {
    return (
        <>
            {/* Hero-Section, here we tell about us, and show the img of our platform  */}
            <section className="container-fluid">
                <div className="d-flex align-items-center w-100">

                   
                    {/* Left side, here we introduce our selves  */}
                    <div className="w-50">
                        <div className="container-fluid">
                            <h2><span className="text-highlight">quickConnect</span> is a customer service platform,</h2> 
                            <p>where customers can hire or can do the contract work, according to their preferences. Everyone can filtering the bestfit worker, who matched their demands </p>
                            <p>Also we are always open to any query is occured and modifications like prices, workers length and if contract is cancel in any time. <a href={"#Contact"} >Can connect with us in any query</a> </p>
                            <button className="btn btn-primary my-2">Book Worker Now</button>
                        </div>
                    </div>

                    {/* Right side, showing the img of our platform  */}
                    <div className="w-50" data-aos="zoom-in" data-aos-duration="3000" >
                        <img src="/images/main-header-2.jfif" alt="main-header" style={{ width: "59%" }} />
                    </div>
                </div>
            </section>

            {/* Why we choose us, and what we providing  */}
            <section className="container">
                <div className="my-2 mx-2">
                    <div className="d-flex align-items-center w-100">
                        {/* Left Side, for our img  */}
                        <div className="w-50">
                            <img src="/images/why_choose_us3.png" alt="why_choose_us" className="w-100" />
                        </div>
                        {/* Right Side, for our content to choose us  */}
                        <div className="w-50">
                            <div className="d-flex flex-column">
                                <h2>Why should you <span className="text-highlight">choose</span> us?</h2>
                                <p>In the last years, we are providing the 10,000 works and that works, at present converting into permanent jobs*</p>
                                <p>What are we providing our workers and recruiters</p>
                                <ul>
                                    <li> Workers can decline or accept any kind of request, which send by the recruiters</li>
                                    <li> Recruiters can call them, and choose many of one to perfect for his/her work.</li>
                                    <li> We also provide best of best, according to inquiry of the Recruiters</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section, we are providing such services and we add on in future */}
            <section id="Services" className="container-fluid bg-primary">
              
                <div className='container my-3'>
                    <h2 className="text-highlight text-center">Our Services</h2>
                    <div className="container my-3 p-3">
                        <div className="d-flex align-items-center flex-wrap">
                            <ServicesCard img={"/images/services/service1.jpg"} service={"Kitching"} content={"More you can create"} />
                            <ServicesCard img={"/images/services/service2.jpg"} service={"Lighting"} content={"Glowing your Business and Home"} />
                            <ServicesCard img={"/images/services/service3.jpg"} service={"Machinary"} content={"Tight the work help of screw"} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Sections  */}
            <section id="Testiomials" className="container">
                <div className="my-3 mx-2 d-flex">
                    <Testimonials review={"Hello everyone, when i thinking about this paltform, first of all i amazed becuase this platform make my carrer, give me the jobs which i want and deserve"} name={"Chectan Prakash"} />
                    <Testimonials review={"I am house wife, but i am enthusias about art works, when i join this community, then its wonder for me, because here many clients buy my artworks, and i am convert this passion into my full time job"} name={"Susila Devi"} />
                    <Testimonials review={"I am builder and during the working of many small oppurtunites, I am using thousands of websites and portals, to hiring for the works, but these platform give me perfect matching workers opptunity."} name={"John Doe"} />
                </div>
            </section>

            {/* Workers how join us, Here the roadmap with the help they join us  */}
            <section id="Roadmap" className="container-fluid bg-primary" >
                <div className="container mx-auto w-75 d-flex align-items-center p-4 ">
                    <RoadMapCard img={"/images/roadmaps/roadmap1.png"} content={"1.Register account to begin applying"} />
                    <RoadMapCard img={"/images/roadmaps/roadmap2.png"} content={"2.Create portfolio to browse hundreds of jobs"} />
                    <RoadMapCard img={"/images/roadmaps/roadmap3.png"} content={"3.Apply for jobs in seconds"} />
                </div>
            </section>

            {/* Contact Us, here we defining a form, with the help of them anyone can contact with us  */}
            <section id="Contact" className="container my-2">
                <h2 className="text-highlight text-center">Contact Us</h2>
                <div className="my-2">
                    <ContactUs />
                </div>
            </section>
        </>

    )
}

export default Home

import React from 'react'

const ServicesCard = ({img,service,content}) => {
    return (
        <>
            <div className="card mx-2 "   data-aos="fade-right" style={{ width: "18rem" }}>
                <div className="d-flex align-items-center justify-content-around ">
                <div className='w-50'>
                <img src={img} className="card-img-top" alt={service} style={{maxWidth : "150px",maxHeight : "125px "}}/>
                </div>
                <h5 className="card-title text-capitalize text-highlight">{service}</h5>
                </div>
                <div className="card-body bg-secondary">
                   
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </>
    )
}

export default ServicesCard

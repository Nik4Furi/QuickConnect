import React from 'react'

const RoadMapCard = ({img,content}) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center mx-3  " data-aos="zoom-out-down">
        <div className=' roadmap-img my-2 border border-secondary rounded-pill border-2 p-2' style={{background : "#832D83"}}>
        <img src={img} alt="roadmap" className='img-fluid'/>
        </div>
        <h6 className='f1'>{content}</h6>
      </div>
    </>
  )
}

export default RoadMapCard

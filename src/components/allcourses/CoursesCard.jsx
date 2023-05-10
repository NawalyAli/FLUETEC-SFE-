import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
const handleButtonClick = () => {
  // window.open("https://www.youtube.com/embed/", "_blank");
  window.open("https://uk.portal.fastfieldforms.com/WebApp/WebForm?formId=22915", "_blank");
  <div>
        <iframe title="YouTube video player" width="560" height="315"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
}

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    {/* <img src={val.cover} alt='' />  */}
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              {/* <button className='outline-btn'>ENROLL NOW !</button> */}
              <button onClick={handleButtonClick}>Enroll now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard

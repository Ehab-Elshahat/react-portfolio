import React from 'react'

const Skill = ({img, alt, title, desc}) => {
  return (
    <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
      <div className="skill-box p-4 rounded text-center">
        <div className="skill-img text-center">
          <img src={img} alt={alt} className="img-fluid w-25" />
        </div>
        <div className="skill-title">
          <h3 className=" my-4 h2">{title}</h3>
        </div>
        <div className="skill-desc">
          <p className="lead ">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill

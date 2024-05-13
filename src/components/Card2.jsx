import React from 'react'

const Card2 = () => {
  return (
    <div className="cards2">
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Latest changes</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Yesterday</h6>
        <a href="#" className="card-link">Advanced filtering capabilities for the security overview dashboard</a><br></br>

        <h6 className="card-subtitle mb-2 text-body-secondary">2 days ago</h6>
        <a href="#" className="card-link">Actions:Jobs executing on self hosted runners will now timeout in 5 days</a><br></br>

        <h6 className="card-subtitle mb-2 text-body-secondary">2 days ago</h6>
        <a href="#" className="card-link">Secret scanning now detects secrets in GitHub wikis</a><br></br>

        <h6 className="card-subtitle mb-2 text-body-secondary">3 days ago</h6>
        <a href="#" className="card-link">GitHub Actions:Hardware accelerated Android virtualization now available</a><br></br>
      </div>
    </div>




    <div className="card mt-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Explore repositories</h5>
        <div className="btn-star">
          <a href="#" className="card-link">Is1intum/Artemis</a>
          <button><i class="fa-regular fa-star"></i></button>
        </div>
        <p className="card-text">Artemis - Interactive Learning with Automated Feedback</p>
        <div className="star">
          <i class="fa-regular fa-star"></i>
          <p>419</p>
        </div>
      </div>

      <div className="card-body">
        <div className="btn-star">
          <a href="#" className="card-link">cesanta/mongoose</a>
          <button><i class="fa-regular fa-star"></i></button>
        </div>
        <p className="card-text">Embedded Web Server</p>
        <div className="star">
          <i class="fa-regular fa-star"></i>
          <p>10,5k</p>
        </div>
      </div>

      <div className="card-body">
        <div className="btn-star">
          <a href="#" className="card-link">thingsboard/thingsboard</a>
          <button><i class="fa-regular fa-star"></i></button>
        </div>
        <p className="card-text">Open-source IoT Platform - Device management, data collection, processing and visualization.</p>
        <div className="star">
          <i class="fa-regular fa-star"></i>
          <p>15,5k</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Card2
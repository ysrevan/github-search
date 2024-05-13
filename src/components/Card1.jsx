import React from 'react'

const Card1 = () => {
  return (
   
      <div className="cards">
        <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <div className="new mb-3 mt-5">
            <h6>Top Repositories</h6>
            <button>New</button>
          </div>
          <input type="text" placeholder='Find a repository...' className='mb-3' /><br></br>
          <img src="https://avatars.githubusercontent.com/u/150139653?s=16&v=4" alt="" />
          <a href="#" className="card-link">ysrevan/My-car2</a><br></br>
          <img src="https://avatars.githubusercontent.com/u/150139653?s=16&v=4" alt="" />
          <a href="#" className="card-link">ysrevan/My-car</a><br></br>
          <img src="https://avatars.githubusercontent.com/u/52384595?v=4" alt="" />
          <a href="#" className="card-link">hasanbakhtiar/code-warriors</a><br></br>
          <img src="https://avatars.githubusercontent.com/u/150139653?s=16&v=4" alt="" />
          <a href="#" className="card-link">ysrevan/My-project</a><br></br>
          <h6 className='mt-4'>Recent activity</h6>
          <p>When you take actions across GitHub, we’ll provide links to that activity here.</p>
        </div>
      </div>
      </div>

  )
}

export default Card1
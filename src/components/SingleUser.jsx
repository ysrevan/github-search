import React from 'react'

const SingleUser = ({alldata}) => {
  return (
    <div className='col-12 col-sm-6 col-md-12'>
     <div className="card mt-3">
     <h5 class="card-header">{alldata.type}</h5>
        <img src={alldata.avatar_url} alt={alldata.login} className="userphoto"/>
  <div className="card-body">
    <h5 className="card-title">{alldata.login}</h5>
    <p className="card-text">{alldata.node_id}</p>
    <a href={alldata.html_url} className="btn btn-dark">Go profile</a>
  </div>
</div>

    </div>
  )
}

export default SingleUser
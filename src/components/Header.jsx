import React, { useState } from 'react'

const Header = ({comingKey}) => {
  const [keyword,setKeyword] = useState();
  const formSubmited=(e)=>{
      e.preventDefault();
      if(!keyword){
          alert("please enter username")
      }else{
          comingKey(keyword);
          setKeyword('');
      }
    }
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

  <i class="fa-brands fa-github"></i>
    <a className="navbar-brand" href="#">Dashboard</a>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <div className='d-flex align-itmes-center justify-content-center mt-4'>
        <div className="col-5">
        <form onSubmit={formSubmited} className="d-flex" role="search">
        <input value={keyword} onChange={e=>setKeyword(e.target.value)} className="form-control me-2" type="text" placeholder="Enter username"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
        </div>
    </div>

      <div className="navbar-nav me-auto mb-2 mb-lg-0">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-code-pull-request"></i>
        <i class="fa-solid fa-box-tissue"></i>
        <img src="https://avatars.githubusercontent.com/u/150139653?s=16&v=4" alt="" />
      </div>
    </div>
  </div>
</nav>

  )
}

export default Header
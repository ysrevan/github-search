import React, { useEffect, useState } from 'react'

import Header from './components/Header'

import Main from './components/Main'
import axios from 'axios'


const App = () => {
  const [user,setUser] = useState([]);
  const workApiWithSearch=(keyword)=>{
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUser(res.data.items))
  }
  return (
    <>
    <Header comingKey={workApiWithSearch} />
    <Main switchdata={user} />
    </>
  )
}

export default App
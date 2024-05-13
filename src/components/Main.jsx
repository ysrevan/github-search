import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import SingleUser from './SingleUser'


const Main = ({switchdata}) => {
  return (
   <>
   <div className="cardss">
   <Card1 />
   <div className="usercard">
   {switchdata.map(item=><SingleUser alldata={item}/>)}
   </div>
   <Card2 />
   </div>
   </>
  )
}

export default Main
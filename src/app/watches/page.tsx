
import React from 'react'


const Watches = () => {

  const watchData =[
    {id:1, name:'OLEVS', price:20000, description:'Luxury Watch For men', image:'./th(1).jpg'},
    {id:2, name:'Stevenmax Apex', price:18000, description:'Sporty design', image:'/th (2).jpeg'},
    {id:3, name:'Stevenmax Pulse', price:7000, description:'Affordable and reliable', image:'/th(3).jpeg'},
    {id:4, name:'Stevenmax Fusion', price:25000, description:'Bold and rugged', image:'/th (4).jpeg'},
    {id:5, name:'Stevenmax Horizon', price:9000, description:'Elegant timepiece', image:'/th(5).jpeg'},
    {id:6, name:'Stevenmax Catalyst', price:50000, description:'Luxury Watch', image:'/th (6).jpeg'},
    {id:7, name:'OUPINKE', price:25000, description:'Bold and rugged', image:'/th(7).jpg'},
    {id:8, name:'Bulova', price:9000, description:'Elegant timepiece', image:'/th(08).jpg'},
    {id:9, name:'Diesel', price:50000, description:'Luxury Watch', image:'/th(09).jpg'},


  ]
  
  return (
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='price'>${watch.price}</div>
            <button>Add to Card</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Watches

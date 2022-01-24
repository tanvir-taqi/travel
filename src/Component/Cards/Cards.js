import React from 'react'
import CardItem from './CardItem'
import"./Cards.css"
import Data from "../../Data.json"

const  Cards =()=>{

 
    
    let  items = Data.map((data)=>{
                return(
                    <CardItem
                    src={data.src}
                    text = {data.text}
                    label={data.label}
                    path={data.path}
                    />
                )
       })
       
    
    


    return (
        <div className="cards">
            <h1>Check out this epic destinations!!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                     {items}
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Cards


import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'


class CardItem extends Component{
render(){
    return (
        <div>
            <div className="cards__item">
                <Link className="cards__item__link" to={this.props.path}>
                    <figure className="cards__item__pic-wrap" data-category={this.props.label}>
                                    <img src={this.props.src} alt=""  className="cards__item__img"/>
                                    <div className="cards__item__info">
                                        <h4 className="cards__item__text">{this.props.text}</h4>
                                    </div>
                    </figure>
                </Link>

            </div>
        </div>
    )
}
}



export default CardItem

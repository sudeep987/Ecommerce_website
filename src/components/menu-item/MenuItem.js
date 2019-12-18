import React from 'react'
import './menu-item.styles.scss'
class MenuItem extends React.Component
{
  render()
  {
    return(
      <div 
      style={{
        backgroundImage:(`url(${this.props.image})`)
      }}
      className={`${this.props.size} menu-item`}>
      <div className="content">
        <h1 className="title">{this.props.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
      </div>
    )
  }
}

export default MenuItem;
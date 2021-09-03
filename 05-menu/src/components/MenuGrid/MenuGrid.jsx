import React from 'react'
import "./styles.css"

const Menu = ({ items }) => {
  return (
    // menu item grid
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem
        return (
          // single menu item
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            {/* item info */}
            <section className='item-info'>
              <header>
                <h2>{title}</h2>
                <h2 className='price'>${price}</h2>
              </header>
              <p className='item-text'>{desc}</p>
            </section>
          </article>
        )
      })}
    </div>
  )
}

export default Menu

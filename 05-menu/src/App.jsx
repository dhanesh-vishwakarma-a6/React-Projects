import React, { useState } from 'react'
import items from "./data"
import Title from "./components/Title/Title"
import Categories from './components/Categories/Categories'
import MenuGrid from "./components/MenuGrid/MenuGrid"

function App() {
  // * collects all uniques categories from menu items
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];

  // * app state
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // * get category items
  const filterItems = (category) => {
    // all category
    if (category === "all") {
      setMenuItems(items)
      return
    }

    // specific category
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <div className="menu section">
        <Title />
        <Categories categories={categories} filterItems={filterItems} />
        <MenuGrid items={menuItems} />
      </div>
    </main>
  )
}

export default App;

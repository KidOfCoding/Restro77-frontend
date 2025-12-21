import React, { useState } from 'react'
import style from './explore.module.css'
import { menu_list } from '../../assets/assets'

import { FaTh, FaList, FaArrowRight } from 'react-icons/fa'

const ExploreMenu = ({ category, setCategory }) => {
  const [isGridView, setIsGridView] = useState(false)

  const handleCategoryClick = (menuName) => {
    setCategory(prev => prev === menuName ? "All" : menuName);

    // Scroll to FoodDisplay section
    setTimeout(() => {
      const element = document.getElementById('fooddisplay');
      if (element) {
        // Scroll with a bit of offset for better visibility (optional, but good practice)
        const yOffset = -50;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }

  return (
    <div className={style.ExploreMenu} id='ExploreMenu'>
      <div className={style.headerControl}>
        <h1>Explore Our Menu</h1>
        <button
          className={style.viewToggle}
          onClick={() => setIsGridView(!isGridView)}
        >
          {isGridView ? <><FaList /> List View</> : <><FaTh /> View All</>}
        </button>
      </div>

      <div className={style.listContainer}>
        <div className={`${style.ExploreMenuList} ${isGridView ? style.mobileGrid : ''}`}>
          {menu_list.map((item, index) => {
            const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim();
            return (
              <div onClick={() => handleCategoryClick(item.menu_name)} key={index} className={style.MenuListItem}>
                <img className={category === item.menu_name ? style.active : ""} src={item.menu_image} alt="" />
                <p>{formatName(item.menu_name)}</p>
              </div>
            )
          })}
        </div>

        {/* Scroll Indicator Arrow - Only show on mobile, list mode */}
        {!isGridView && (
          <div className={`${style.scrollIndicator} mobile-only`}>
            <FaArrowRight />
          </div>
        )}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
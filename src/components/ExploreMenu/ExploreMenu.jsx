import React, { useRef, useState } from 'react'
import style from './explore.module.css'
import { menu_list } from '../../assets/assets'
import { FaArrowLeft, FaArrowRight, FaTh, FaList } from 'react-icons/fa'

const ExploreMenu = ({ category, setCategory }) => {
  const listRef = useRef(null);
  const [viewMode, setViewMode] = useState('scroll'); // 'scroll' or 'grid'

  const scroll = (direction) => {
    if (listRef.current) {
      const scrollAmount = 300;
      listRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={style.ExploreMenu} id='ExploreMenu'>
      <div className={style.menuHeader}>
        <h1>Explore Our Menu</h1>
        <div className={style.menuControls}>
          {/* Scroll Arrows - Only in Scroll Mode */}
          {viewMode === 'scroll' && (
            <>
              <button className={style.controlBtn} onClick={() => scroll('left')}>
                <FaArrowLeft />
              </button>
              <button className={style.controlBtn} onClick={() => scroll('right')}>
                <FaArrowRight />
              </button>
            </>
          )}

          {/* View Toggle */}
          <button
            className={style.controlBtn}
            onClick={() => setViewMode(prev => prev === 'scroll' ? 'grid' : 'scroll')}
            title={viewMode === 'scroll' ? "Switch to Grid View" : "Switch to Horizontal View"}
          >
            {viewMode === 'scroll' ? <FaTh /> : <FaList />}
          </button>
        </div>
      </div>

      <div
        ref={listRef}
        className={`${style.ExploreMenuList} ${viewMode === 'grid' ? style.gridMode : ''}`}
      >
        {menu_list.map((item, index) => {
          const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim();
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className={style.MenuListItem}>
              <img className={category === item.menu_name ? style.active : ""} src={item.menu_image} alt="" />
              <p>{formatName(item.menu_name)}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
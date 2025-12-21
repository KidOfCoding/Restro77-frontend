import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.slider}>

        {/* Original slides */}
        <div className={`${style.slide} ${style.bg1}`}>
          <h2>Order your favourite food here</h2>
          <p>Choose from a diverse menu featuring delicious dishes.</p>
          <a href="#ExploreMenu">View Menu</a>
        </div>

        <div className={`${style.slide} ${style.bg2}`}>
          <h2>Fast Delivery at Your Doorstep</h2>
          <p>Hot and fresh food delivered quickly.</p>
          <a href="#ExploreMenu">Order Now</a>
        </div>

        <div className={`${style.slide} ${style.bg3}`}>
          <h2>Delicious Meals Every Day</h2>
          <p>Discover new tastes and flavours.</p>
          <a href="#ExploreMenu">Explore</a>
        </div>

        {/* Duplicate slides for seamless loop */}
        <div className={`${style.slide} ${style.bg1}`}>
          <h2>Order your favourite food here</h2>
          <p>Choose from a diverse menu featuring delicious dishes.</p>
          <a href="#ExploreMenu">View Menu</a>
        </div>

        <div className={`${style.slide} ${style.bg2}`}>
          <h2>Fast Delivery at Your Doorstep</h2>
          <p>Hot and fresh food delivered quickly.</p>
          <a href="#ExploreMenu">Order Now</a>
        </div>

        <div className={`${style.slide} ${style.bg3}`}>
          <h2>Delicious Meals Every Day</h2>
          <p>Discover new tastes and flavours.</p>
          <a href="#ExploreMenu">Explore</a>
        </div>

      </div>
    </div>
  );
};

export default Header;

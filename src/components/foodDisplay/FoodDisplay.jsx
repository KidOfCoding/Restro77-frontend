import React, { useContext } from "react";
import style from "./fooddisplay.module.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import Menu from "../../Pages/Menu";
import "../../Pages/App1.css"
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log(food_list);
  
  return (
    <div className={style.FoodDisplay} id="fooddisplay">
      {/* <h2> Top dishes Near You</h2> */}
      <div className={style.FoodDisplayList}>
         {/* Noodles  */}
          <section>
            <h2 className="section-title">Noodles</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="noodles" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
            {/* Rice  */}
          <section>
            <h2 className="section-title">Rice</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="rice" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
            {/* Roll  */}
          <section>
            <h2 className="section-title">Rolls</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="rolls" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
           {/* Starter  */}
          <section>
            <h2 className="section-title">Starter</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="starter" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
             {/* MainCourse  */}
          <section>
            <h2 className="section-title">MainCourse</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="mainCourse" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
            {/* breads  */}
          <section>
            <h2 className="section-title">Breads</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="breads" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
           {/* Pasta  */}
          <section>
            <h2 className="section-title">Pasta</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="pasta" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
            {/* Combo  */}
          <section>
            <h2 className="section-title">Combo</h2>
            <div className="menu-grid">
                {
                  food_list.map((items,index)=>(
                     items.category=="combo" && <FoodItem key={items?.id} item={items} />
                  ))
                }
            </div>
          </section>
      </div>
    </div>
  );
};

export default FoodDisplay;

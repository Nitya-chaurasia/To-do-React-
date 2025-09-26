import React from "react";

function FilterButtons({ setFltr }) {
  return (
    <div className="fltr-btns">
      <button className="fltr-btn" onClick={() => setFltr("all")}>
        All
      </button>
      <button className="fltr-btn" onClick={() => setFltr("active")}>
        Active
      </button>
      <button className="fltr-btn" onClick={() => setFltr("completed")}>
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;

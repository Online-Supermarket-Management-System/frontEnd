import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="frame-parent1">
        <div className="frame-parent2">
          <div className="summer-sale-for-all-swim-suits-wrapper">
            <div className="summer-sale-for">
              Summer Sale For All Fresh Fruits And Free Express Delivery - OFF
              50%
            </div>
          </div>
          <div className="shopnow">ShopNow</div>
        </div>
        <div className="frame-parent3">
          <div className="english-wrapper">
            <div className="english">English</div>
          </div>
          <img className="dropdown-icon" alt="" src="/dropdown.svg" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

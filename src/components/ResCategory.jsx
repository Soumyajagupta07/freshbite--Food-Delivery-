import { useState } from "react";

const ResCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle accordion open/closed
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category">
      <h3 onClick={toggleAccordion} className="category-title" style={{ cursor: 'pointer' }}>
        {data?.title} {/* Title of the category */}
        <span>{isOpen ? "▲" : "▼"}</span> {/* Accordion arrow */}
      </h3>

      {/* Show items only when the accordion is open */}
      {isOpen && (
        <ul>
          {data?.itemCards?.map((item, index) => (
            <li key={index}>
              {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100 || 0}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResCategory;

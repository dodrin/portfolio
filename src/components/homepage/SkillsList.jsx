import { useState } from "react";
import { frontend } from "../../constants/frontend";
import { backend } from "../../constants/backend";
import { testing } from "../../constants/testing";
import { others } from "../../constants/others";

export default function SkillsList() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const categories = [
    { label: "Frontend", items: frontend },
    { label: "Backend", items: backend },
    { label: "Testing", items: testing },
    { label: "Others", items: others },
  ];

  const handleButtonClick = (index) => {
    setActiveTab(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredTab(index);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <section className="home__skills">
      <h2>Skills</h2>
      <p>
        I am always eager to learn more about my current stack and explore new
        technologies that could expand my skill set, enhance my problem-solving
        capabilities, and keep me at the forefront of industry trends.
      </p>

      <div>
        <div className="tab-buttons">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              tabIndex={0}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {categories.map((category, index) => (
            <div
              key={index}
              style={{ display: activeTab === index ? "flex" : "none" }}
              className="tab-container"
            >
              {/* Render icons for each item */}
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="icon-container">
                  {/* Render icon */}
                  {item.icon}

                  {/* Render item name */}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

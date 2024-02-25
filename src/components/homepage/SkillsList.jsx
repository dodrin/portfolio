import { useState } from "react";
import { frontend, backend, testing, others } from '../../constants/skillsData';

export default function SkillsList() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { label: 'Frontend', items: frontend },
    { label: 'Backend', items: backend },
    { label: 'Testing', items: testing },
    { label: 'Others', items: others },
  ];

  const handleButtonClick = (index) => {
    setActiveTab(index);
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
            <button key={index} onClick={() => handleButtonClick(index)}>
              {category.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {categories.map((category, index) => (
            <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
              {category.items.join(', ')}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

const ItemComponent = ({ title, description, isActive, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <h3>{title}</h3>
      {isActive && <p>{description}</p>}
    </div>
  );
};

const New = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { title: 'Item 1', description: 'Description of Item 1' },
    { title: 'Item 2', description: 'Description of Item 2' },
    { title: 'Item 3', description: 'Description of Item 3' }
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the description for clicked item
  };

  return (
    <div>
      {data.map((item, index) => (
        <ItemComponent
          key={index}
          title={item.title}
          description={item.description}
          isActive={index === activeIndex} // Check if the current item is active
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default New;


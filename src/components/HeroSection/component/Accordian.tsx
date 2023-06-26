import React, { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-b p-4 ${
            activeIndex === index ? 'bg-gray-100' : ''
          }`}
        >
          <div
            className="cursor-pointer flex justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-semibold">{item.title}</h3>
            {activeIndex === index ? (
              <RiSubtractLine className="text-xl" />
            ) : (
              <RiAddLine className="text-xl" />
            )}
          </div>
          {activeIndex === index && (
            <div className="mt-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h3>
        {question}
        <button onClick={toggleAnswer}>
          {isOpen ? '-' : '+'}
        </button>
      </h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}

function FAQList() {
  const faqs = [
    {
      question: 'Is this a good product?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      question: 'How much does it cost?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQList;

import React, { useState } from 'react';

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <div>
      <h1>Help Center</h1>
      <div>
        <button onClick={() => setActiveTab('faq')}>FAQ</button>
        <button onClick={() => setActiveTab('contact')}>Contact Us</button>
      </div>

      <div>
        {activeTab === 'faq' && (
          <div>
            <h2>Frequently Asked Questions</h2>
            <p>Here are some common questions and answers.</p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h2>Contact Us</h2>
            <p>You can reach us at contact@example.com.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;

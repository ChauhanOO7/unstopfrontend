import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApparelList = () => {
  const [apparel, setApparel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/apparel/all');
        setApparel(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Submitted Apparel</h2>
      <ul>
        {apparel.map((item, index) => (
          <li key={index}>
            {item.type} - {item.condition} - {item.action} - {item.user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApparelList;

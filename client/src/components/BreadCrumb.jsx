import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const pathname = location.pathname;
    const paths = pathname.split('/').filter(Boolean);

    setItems(
      paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        return { name: path, href };
      })
    );
  }, [location]);

  return ( 
    <nav className=" py-4 text-lg">
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          <a
            href={item.href}
            className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
          >
            {item.name}
          </a>
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

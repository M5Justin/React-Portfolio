import React from 'react';

function NavTabs({ currentPage, handlePageChange, pages }) {
  // Opportunity
  return (
    <ul className="nav nav-tabs">
      {pages.map(page => (
        <li key={page} className="nav-item">
          <a
            href={`#${page.toLowerCase()}`}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'nav-link active' : 'nav-link'}
          >
            {page}
          </a>
      </li>
      ))}
    </ul>
  );
}

export default NavTabs;

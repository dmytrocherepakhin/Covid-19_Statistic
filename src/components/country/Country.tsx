import React from 'react';

function Country(): JSX.Element {
  return (
    <div className="country">
      <div className="country__number list__columnHeadings_number">
        <span>1</span>
      </div>
      <div className="country__name list__columnHeadings_name">
        <span>USA</span>
      </div>
      <div className="country__total list__columnHeadings_total">
        <span>123</span>
      </div>
    </div>
  );
}

export default Country;
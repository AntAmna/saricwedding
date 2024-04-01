import React from 'react';

const Calendar = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="512"
    height="512"
    className={props.className}
    x="0"
    y="0"
    viewBox="0 0 218.91 218.91"
    xmlSpace="preserve"
  >
    <g>
      <path
        d="M211.41 17.713h-37.643V11.37a7.5 7.5 0 0 0-15 0v6.344h-41.813V11.37a7.5 7.5 0 0 0-15 0v6.344H60.141V11.37a7.5 7.5 0 0 0-15 0v6.344H7.5a7.5 7.5 0 0 0-7.5 7.5V207.54a7.5 7.5 0 0 0 7.5 7.5h203.91a7.5 7.5 0 0 0 7.5-7.5V25.213a7.5 7.5 0 0 0-7.5-7.5zm-7.5 182.327H15V32.713h30.141v11.808a7.5 7.5 0 0 0 15 0V32.713h41.814v11.808a7.5 7.5 0 0 0 15 0V32.713h41.813v11.808a7.5 7.5 0 0 0 15 0V32.713h30.143V200.04z"
        fill="currentColor"
        data-original="#000000"
      />
      <path
        d="M169.889 130.96a6 6 0 0 0 0-12h-16.877v-17.262a6 6 0 0 0-12 0v17.262h-25.556v-17.262a6 6 0 0 0-12 0v17.262H77.9v-17.262a6 6 0 0 0-12 0v17.262H49.02a6 6 0 0 0 0 12H65.9v18.721H49.02a6 6 0 0 0 0 12H65.9v17.262a6 6 0 0 0 12 0V161.68h25.556v17.262a6 6 0 0 0 12 0V161.68h25.556v17.262a6 6 0 0 0 12 0V161.68h16.877a6 6 0 0 0 0-12h-16.877v-18.72h16.877zM77.9 149.68v-18.72h25.556v18.721H77.9zm63.111 0h-25.556v-18.72h25.556v18.72zM58.322 82.12h102.265a6 6 0 1 0 0-12H58.322a6 6 0 1 0 0 12z"
        fill="currentColor"
        data-original="#000000"
      />
    </g>
  </svg>
);

Calendar.defaultProps = {
  className: '',
};

export default Calendar;

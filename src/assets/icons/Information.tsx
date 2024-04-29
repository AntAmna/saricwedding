import React from 'react';

const Information = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="512"
    height="512"
    className={props.className}
    x="0"
    y="0"
    viewBox="0 0 209.281 209.281"
    xmlSpace="preserve"
  >
    <g>
      <path
        d="M104.641 72.862c5.812 0 10.541-4.723 10.541-10.528 0-5.826-4.729-10.566-10.541-10.566S94.1 56.508 94.1 62.334c0 5.805 4.728 10.528 10.541 10.528zM123.349 142.412H112.14v-42.016a7.5 7.5 0 0 0-7.5-7.5H85.933a7.5 7.5 0 0 0 0 15h11.208v42.016a7.5 7.5 0 0 0 7.5 7.5h18.709a7.5 7.5 0 1 0-.001-15z"
        fill="currentColor"
        data-original="#000000"
      />
      <path
        d="M104.641.001C46.941.001 0 46.942 0 104.64s46.941 104.64 104.641 104.64c57.699 0 104.64-46.941 104.64-104.64S162.339.001 104.641.001zm0 194.279C55.212 194.28 15 154.068 15 104.64S55.212 15 104.641 15s89.64 40.212 89.64 89.64-40.212 89.64-89.64 89.64z"
        fill="currentColor"
        data-original="#000000"
      />
    </g>
  </svg>
);

Information.defaultProps = {
  className: '',
};

export default Information;

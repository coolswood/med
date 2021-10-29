import React from 'react';

export default ({isActive}: {isActive: boolean}) => {
  return (
    <svg fill="none" viewBox="0 0 12 9"><path d="M6.154 1.587l.36.345.346-.36C7.43.982 8.127.5 9.057.5c1.486 0 2.568 1.17 2.568 2.688 0 .71-.324 1.321-.864 1.84L6.5 8.889 2.233 5.024l-.01-.01-.01-.008c-.541-.439-.838-1.077-.838-1.819C1.375 1.67 2.457.5 3.943.5c.922 0 1.618.518 2.21 1.087z" fill={isActive ? '#FF3055' : 'none'} stroke={!isActive ? '#C9C8C8' : 'none'}/></svg>
  )
}
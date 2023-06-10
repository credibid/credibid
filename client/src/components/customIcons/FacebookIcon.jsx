import React from 'react';
import facebookSvg from '../../assets/facebook.svg';
function FacebookIcon({ size }) {
  return <img src={facebookSvg} alt='facebook' width={size || 20} />;
}

export default FacebookIcon;

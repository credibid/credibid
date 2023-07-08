import React from 'react';
import metaSvg from '../../assets/meta.svg';
function MetaIcon({ size }) {
  return <img src={metaSvg} alt='Meat' width={size || 20} />;
}

export default MetaIcon;

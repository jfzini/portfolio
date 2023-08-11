import React from 'react';

export default function Stack({ src, alt }) {
  return (
    <div className="stack__container">
      <img src={src} alt={alt} className="stack__img" />
      <div className="stack__title">{alt}</div>
    </div>
  );
}

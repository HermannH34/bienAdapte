import React, { useState } from 'react';
import Image from 'next/image';

const AsyncNextImage = ({ src, alt, width, height }) => {
 const [loading, setLoading] = useState(true);

 return (
  <div style={{ position: 'relative', width, height }}>
   {loading && (
    <div style={{
     position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 255, 255, 0.8)',
     zIndex: 1
    }}>
     <span className="loading loading-spinner text-primary"></span>
    </div>
   )}
   <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    onLoadingComplete={() => {
     // Simule un court délai avant de cacher le loader
     setTimeout(() => setLoading(false), 10); // 100 ms delay
    }}
    style={loading ? { visibility: 'hidden' } : { visibility: 'visible' }}
   />
  </div>
 );
};

export default AsyncNextImage;

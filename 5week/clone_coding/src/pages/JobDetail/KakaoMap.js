import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KakaoMap({ lat, lng }) {
  return (
    <Map
      center={{ lat: `${lat}`, lng: `${lng}` }}
      style={{ width: '700px', height: '254px' }}
    >
      <MapMarker position={{ lat: `${lat}`, lng: `${lng}` }}></MapMarker>
    </Map>
  );
}

export default KakaoMap;

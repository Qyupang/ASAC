import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KakaoMap() {
  return (
    <Map
      center={{ lat: 37.5505712, lng: 126.972577051 }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: 37.5505712, lng: 126.972577051 }}></MapMarker>
    </Map>
  );
}

export default KakaoMap;

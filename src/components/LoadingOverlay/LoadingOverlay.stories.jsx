// Generated with util/create-component.js
import React from 'react';
import LoadingOverlay from './LoadingOverlay';

export default {
  title: 'LoadingOverlay',
};

export const OverlayActive = () => (
  <div
    style={{
      position: 'relative',
      height: 200,
      width: 200,
      background: '#fff',
      padding: 20,
    }}
  >
    <LoadingOverlay loading fullSize />
    <p>Some content</p>
  </div>
);

export const OverlayInactive = () => (
  <div
    style={{
      position: 'relative',
      height: 200,
      width: 200,
      background: '#fff',
      padding: 20,
    }}
  >
    <LoadingOverlay loading={false} fullSize />
    <p>Some content</p>
  </div>
);

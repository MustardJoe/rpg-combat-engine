import React from 'react';
import LayoutComp from '../components/layout/LayoutComp';
import EngineWrapper from '../services/combatengine/EngineWrapper';

export default function App() {
  return (
    <>
      <h1>GriNd-O-TRoN</h1>
      <h3>A turn-based combat engine</h3>
      <EngineWrapper />
    </>
  );
}

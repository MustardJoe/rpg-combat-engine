import React from 'react';
import LayoutComp from '../components/layout/LayoutComp';
import EngineWrapper from '../services/combatengine/EngineWrapper';

export default function App() {
  return (
    <>
      <h1>GriNd-O-TRoN</h1>
      <h3>A turn-based combat engine</h3>
      <LayoutComp />
    </>
  );
}

// player chooses an action
// action is done and results are tallied
// message is displayed for 2 seconds
// player turn is over
// is game over?
// if not enemy turn begins
// enemy chooses an action
// action is done and results are tallied
// message is displayed for 2 seconds
// is game over?
// user is given another opportunity to take next move.
import React, { Component } from 'react';
import PlayerVoting from './pages/PlayerVoting'
import { REGIONS, playersMock } from './utils/playersMock';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerVoting 
          headline="Vote for players to represent your region's team"
          description="The top 3 vote earners in each region make up that region's team."
          emptyTitle="Select your region to browse players."
          players={playersMock}
          regions={REGIONS}
          votationClosed={false}
        />
      </div>
    );
  }
}

export default App;

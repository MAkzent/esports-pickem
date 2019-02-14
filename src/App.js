import React, { Component } from 'react';
import PlayerVoting from './pages/PlayerVoting'
import { REGIONS, playersMock } from './utils/playersMock';
import './App.scss';

class App extends Component {
  state = {
    isAdmin: false,
    isAuthenticated: false,
  }
  render() {
    const { isAdmin, isAuthenticated } = this.state;

    return (
      <div className="App">
        <PlayerVoting 
          headline="Vote for players to represent your region's team"
          headlineClosed="Results of voting for each region"
          description="The top 3 vote earners in each region make up that region's team."
          emptyTitle="Select your region to browse players."
          players={playersMock}
          regions={REGIONS}
          // Mocking Auth data
          isAdmin={isAdmin}
          isAuthenticated={isAuthenticated}
          onAdminLogin={() => this.setState({ isAdmin: true, isAuthenticated: true })}
          onLogin={() => this.setState({ isAuthenticated: true })}
        />
      </div>
    );
  }
}

export default App;

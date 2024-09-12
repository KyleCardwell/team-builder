import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import TeamForm from './Components/TeamForm';
import FullTeamList from './Components/FullTeamList';

function App() {

  const [teamList, setTeamList] = useState([])

  const addMember = (newMember) => {
    const newTeamList = [...teamList, newMember]
    setTeamList(newTeamList)

  }

  return (
    <div className="App">
      <h1>Team Form</h1>
      <TeamForm addMember={addMember}/>
      <FullTeamList teamList={teamList}/>
    </div>
  );
}

export default App;

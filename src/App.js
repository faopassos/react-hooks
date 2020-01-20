import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['NodeJS', 'Python']);
  const [newTech, setNewTech] = useState('');

  function addTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={addTech}>
        Add tech
      </button>
    </>
  );
}

export default App;

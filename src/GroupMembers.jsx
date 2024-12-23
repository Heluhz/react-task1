import React from 'react';
import './App.css';
const GroupMembers = () => {
  const members = [' wengelawit girma	', 'Alazar Shawel	', 'Maraky Ayalneh	', 'Helen Zelalem','yordanos belihu','Gemechis Sinishaw','ABDULBASIT HAMID MOHAMMED','Robel Roba Ditta','Kalkidan Amare','estifanos zinabu'];
	
  return (
    <div className='container'>
      <h2>Group Members</h2>
      <ol>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ol>
    </div>
  );
};

export default GroupMembers;
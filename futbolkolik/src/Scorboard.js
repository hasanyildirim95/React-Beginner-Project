import React from 'react';
import { Table } from 'reactstrap';

const Scorboard = ({ teams }) => {
  return (
    <div>
      <h2 className='text-center'>Puan Tablosu</h2>
      <Table bordered dark hover>
        <thead>
          <tr>
            <th>Takımlar</th>
            <th>O</th>
            <th>P</th>
            <th>Av</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{team.matches}</td>
              <td>{team.points}</td>
              <td>{team.avarage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Scorboard;

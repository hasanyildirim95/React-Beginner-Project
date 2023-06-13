import React from 'react';
import { Table } from 'reactstrap';

const Fixtures = ({ matches }) => {
  return (
    <div>
      <h2 className='text-center'>Haftanın Maçları</h2>
      <Table bordered dark hover>
        <thead>
          <tr>
            <th>Evsahibi</th>
            <th>vs</th>
            <th>Deplasman</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.home}</td>
              <td>{match.versus}</td>
              <td>{match.away}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Fixtures;
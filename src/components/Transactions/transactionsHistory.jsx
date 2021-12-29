import React from "react";
import propTypes from 'prop-types';
import { Table, Title } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Title>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Title>
      <tbody>
        {items.map(({id, type, amount, currency}) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>  
            )
        )}
    </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: propTypes.array,
};
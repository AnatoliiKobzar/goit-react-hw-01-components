import PropTypes from 'prop-types';
import { Transaction } from './Transaction.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Transaction>
      <thead>
        <tr>
          <th>{'Type'}</th>
          <th>{'Amount'}</th>
          <th>{'Currency'}</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

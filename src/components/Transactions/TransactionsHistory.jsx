import PropTypes from 'prop-types'
import { TransactionsHistoryItem } from './TransactionsHistoryItem'

export const TransactionsHistory = ({ items }) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            {items.map(({ id, amount, currency, type }) => (
                < TransactionsHistoryItem
                key = { id }
                amount = { amount }
                currency = { currency }
                type = { type }
                /> ))}
            </table>
    )
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
        })
    )
}
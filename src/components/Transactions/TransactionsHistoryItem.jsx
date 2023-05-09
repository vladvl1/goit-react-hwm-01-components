import PropTypes from 'prop-types'

export const TransactionsHistoryItem = ({ type,amount,currency }) => {
    return (
        <tbody>
    <tr>
                <td>{ type}</td>
                <td>{ amount}</td>
                <td>{ currency}</td>
    </tr>
  </tbody>
    )
}

TransactionsHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
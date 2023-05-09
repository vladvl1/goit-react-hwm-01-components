import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { StatisticsItem } from './StatisticsItem'
import { StatisticsTitle } from './StatisticsTitle'

export const Statistics = ({ datas, title }) => {
    return (
        <section className={css.statistics}>
            {title && <StatisticsTitle title={title} />}
    <ul className={css.stat_list}>
                {datas.map(({ id, label, percentage }) => (
                    <StatisticsItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        })
    ),
}
import PropTypes from 'prop-types';


const Table = ({ netIncomes }) => {
    return (
        


        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso Neto</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((item, index) => (
                    <tr key={index}>
                        <td>{item.brand}</td>
                        <td>{item.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    netIncomes: PropTypes.arrayOf(
        PropTypes.shape({
            brand: PropTypes.string.isRequired,
            income: PropTypes.number.isRequired
        })
    ).isRequired
};


export default Table;
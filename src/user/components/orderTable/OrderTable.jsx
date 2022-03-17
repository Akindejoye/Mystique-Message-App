import Choice from './orderTable.module.css'

const OrderTable = () => {
    return ( 
        <table className={Choice.tableOrder}>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}>Payment Amount</td>
                <td className={Choice.tdOrder}>2,000</td>
            </tr>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}>Bank Name</td>
                <td className={Choice.tdOrder}>GTBank PLC</td>
            </tr>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}>Account Amount</td>
                <td className={Choice.tdOrder}>Mystique SMS Nigeria</td>
            </tr>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}>Account Number</td>
                <td className={Choice.tdOrder}>2123123231</td>
            </tr>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}></td>
                <td className={Choice.tdOrder}></td>
            </tr>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}>Payment for</td>
                <td className={Choice.tdOrder}>SMS Credit</td>
            </tr>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}>Quantity</td>
                <td className={Choice.tdOrder}>800 Units</td>
            </tr>
            <tr className={Choice.trOrder}>
                <td className={Choice.tdOrder}>Rates</td>
                <td className={Choice.tdOrder}>2.50 NGN / Unit</td>
            </tr>
        </table>
     );
}
 
export default OrderTable;
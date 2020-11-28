import PaymentDropDown from '../../atoms/paymentDropDown';

const DataTransactions = ({datatransactions}) => {
    const {id, user, paymentEvidence, activeDay, statusUser, statusPayment} = datatransactions;
    return (
        <>
        <tr>
            <td>{id}</td>
            <td>{user}</td>
            <td>{paymentEvidence}</td>
            <td>{activeDay} / Hari</td>
            <td className={statusUser}>{statusUser}</td>
            <td className={statusPayment}>{statusPayment}</td>
            <td><PaymentDropDown/></td>
        </tr>
        </>
    )
}

export default DataTransactions

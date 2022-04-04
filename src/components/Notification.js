const Notification = ({ message, isError }) =>
    isError ? (
        <div className="errorMessage">{message}</div>
    ) : (
        <div className="normalMessage">{message}</div>
    );

export default Notification;

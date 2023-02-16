const ChangeNotification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="change">
        {message}
      </div>
    )
  }

 export default ChangeNotification  
const Notification = ({message}) => {
    if (message === null){
        return null
    }
    return(
        <div className='newMessage'>
            {message}
        </div>
    )
}

export default Notification
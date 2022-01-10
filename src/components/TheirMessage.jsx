
const TheirMessage = (lastMessage, message) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName;

    return (
        <div className="message-row">
            {
                isFirstMessageByUser && (
                    <div className="message-avater"
                        style={{ backgroundImage: message.sender && `url(${message.sender.avater})` }}
                    />
                )
            }
            {message.attachments && message.attachments.length > 0}
            ?(
            <img
                src={message.attachment[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />
            )
            :( <div className="message"
                style={{ float: 'left', marginLeft: isFirstMessageByUser ? '4px' : '48px', background: '#CABCDC' }}>
                {message.text}
            </div>
            )
        </div>
    )
}

export default TheirMessage;
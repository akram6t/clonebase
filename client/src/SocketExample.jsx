import { useEffect } from 'react';
import { io } from 'socket.io-client';

const SocketExample = () => {
    const socket = io("http://localhost:5000/");

    useEffect(() => {

        socket.on('message_receive', data => {
            console.log(data);
        })

    },[])

    return(
        <div>
            <h1>THis is a socketio connection</h1>
        </div>
    )
}

export default SocketExample;
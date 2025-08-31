import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [room, setRoom] = useState(null);
    const navigate = useNavigate();
    const joinRoom = () => {
        navigate(`/room/${room}`);
    }
    return (
        <div className = "app">
            <input type="text"
                placeholder='Enter Room Id'
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
        </div>
    )
}

export default HomePage

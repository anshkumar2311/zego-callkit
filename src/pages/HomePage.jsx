import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import '../App.css'

const HomePage = () => {
    const [room, setRoom] = useState("");
    const navigate = useNavigate();

    const joinRoom = () => {
        if (room.trim()) {
            navigate(`/room/${room}`);
        }
    };

    return (
        <div className="app">
            <SignedIn>
                <div className="form-container">
                    <input
                        type="text"
                        placeholder="Enter Room ID"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                    />
                    <button onClick={joinRoom}>Join Room</button>
                </div>
            </SignedIn>

            <SignedOut>
                <div className="form-container">
                    <p className="info-text">You must be logged in to join a room</p>
                    <SignInButton>
                        <button className="login-btn">Login</button>
                    </SignInButton>
                </div>
            </SignedOut>
        </div>
    );
};

export default HomePage;

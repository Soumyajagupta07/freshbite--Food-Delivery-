import React, { useState, useEffect } from 'react';

const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateOnlineStatus = () => {
            setIsOnline(navigator.onLine);
        };

        // Add event listeners for online and offline events
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return (
        <div className="online-status" style={{ textAlign: "center", padding: "10px" }}>
            <h3>
                Status:{" "}
                <span style={{ color: isOnline ? "green" : "red" }}>
                    {isOnline ? "Online" : "Offline"}
                </span>
            </h3>
        </div>
    );
};

export default OnlineStatus;

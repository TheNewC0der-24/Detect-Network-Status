import { useState, useEffect } from "react";

const getConnection = () => {
    return navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
}

export const useNetwork = () => {
    const [connection, setConnection] = useState(getConnection());
    const [isOnline, setIsOnline] = useState(!!getConnection().rtt);

    useEffect(() => {
        const updateStatus = () => {
            setConnection(getConnection());

            // Set Status in Round Trip Time
            setIsOnline(!!getConnection().rtt);
        }

        connection.addEventListener("change", updateStatus);
        return () => connection.removeEventListener("change", updateStatus);
    }, [connection]);

    return [connection, isOnline];
}
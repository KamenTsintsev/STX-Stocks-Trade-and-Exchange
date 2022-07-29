import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createContext } from "react";

const LocationContext = createContext({
    lastLocation: "",
    setLastLocation: () => {},
});

export default LocationContext;

export const LastLocationProvider = ({ children }) => {
    const pathname = useLocation().pathname;
    const [location, setLocation] = useState(
        localStorage.getItem("lastLocation")
    );

    const setLastLocation = () => {
        setLocation(pathname);
        localStorage.setItem("lastLocation", location);
    };

    const lastLocationContext = {
        location,
        setLastLocation,
    };

    return (
        <LocationContext.Provider value={lastLocationContext}>
            {children}
        </LocationContext.Provider>
    );
};

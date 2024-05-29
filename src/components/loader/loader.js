import React, { useState, useEffect } from "react";
import './loader.css'; 

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true); // State to control loader visibility

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide the loader after 3 seconds
        }, 1000);
        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);

    return (
        <div className="home">
            
            {isLoading ? (
                <div className="bg-1">
                <div className="loader"></div></div> // Render the actual loader content
            ) : (
                <div>                 
                </div>
            )}
           
        </div>
    )
}

export default Loader;

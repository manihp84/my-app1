import React, { useEffect, useState } from 'react';

const Djangopost = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Updated URL to the correct endpoint
                const response = await fetch('http://127.0.0.1:8000/api/students/', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                    body: JSON.stringify({
                        sname: 'John Doe', 
                        email: 'john@example.com',
                        age: 20, 
                        subject: 'Math', 
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setMessage('Data posted successfully');
            } catch (error) {
                console.error(error);
                setMessage('An error occurred while posting data.');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <button onClick={() => {} }>
                Post Data
            </button>
            <p>{message}</p>
        </div>
    );
};

export default Djangopost;
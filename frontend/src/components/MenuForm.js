
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const MenuForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    //     const newMenu = { name, description };
    //     const response = await axios.post('http://localhost:5000/api/menus', newMenu);
    //     onMenuCreated(response.data);
    //     setName('');
    //     setDescription('');
    //     navigate("/");
    // };
    axios.post("http://localhost:5000/api/menus", { name, description }).then(() => {
        navigate("/");
      });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Menu Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Create Menu</button>
        </form>
    );
};

export default MenuForm;
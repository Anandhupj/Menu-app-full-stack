
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './MenuList.css'
import ConMenu from './ConMenu';

const MenuList = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/menus").then((res) => setMenus(res.data));
      }, []);

      const handleDeleteMenu = async (menuId) => {
        try {
            await axios.delete(`http://localhost:5000/api/menus/${menuId}`);
            setMenus(prevMenus => prevMenus.filter(menu => menu._id !== menuId));
        } catch (error) {
            console.error("Error deleting menu:", error);
        }
    };

    return (
        <div className='menu-container'>
            <h2>Menus</h2>
            <ul className="menu-list">
                {menus.map(menu => (
                    <li key={menu._id} >
                        {/* {menu.name} - {menu.description} */}
                        <Link to={`/menu/${menu._id}`} className="menu-link">{menu.name} - {menu.description}</Link>
                        <button onClick={() => handleDeleteMenu(menu._id)}  className="delete-button">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <Link to="/create-menu" className="create-menu-link">Create New Menu</Link>
            <div>
                <ConMenu/>
            </div>
        </div>
        
    );
};

export default MenuList;
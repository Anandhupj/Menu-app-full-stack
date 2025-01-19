import { useParams, Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import './MenuDetails.css';

const MenuDetail = () => {
    const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [editingItem, setEditingItem] = useState(null); // Track item being edited
    const [editFormData, setEditFormData] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/menus/${id}`).then((res) => setMenu(res.data));
  }, [id]);

   // Handle input change for edit form
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
};

// Handle menu item edit button click
const handleEditClick = (item) => {
    setEditingItem(item._id);
    setEditFormData({ name: item.name, description: item.description, price: item.price });
};

// Handle menu item update (save changes)
const handleUpdateItem = async (itemId) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/menus/${id}/items/${itemId}`, editFormData);
        
        setMenu((prevMenu) => ({
            ...prevMenu,
            items: prevMenu.items.map((item) =>
                item._id === itemId ? response.data : item
            ),
        }));
        
        setEditingItem(null); // Close the edit form
    } catch (error) {
        console.error("Error updating menu item:", error);
    }
};


  const handleDeleteItem = async (itemId) => {
    try {
        await axios.delete(`http://localhost:5000/api/menus/${id}/items/${itemId}`);
        setMenu(prevMenu => ({
            ...prevMenu,
            items: prevMenu.items.filter(item => item._id !== itemId),
        }));
    } catch (error) {
        console.error("Error deleting menu item:", error);
    }
};

  if (!menu) return <p>Loading...</p>;
    return (
        <div className="menu-detail-container">
            <div className="menu-header">
            <h2>{menu.name}</h2>
            <p>{menu.description}</p>
            </div>
            <h3>Items</h3>
            <ul className="menu-items">
                {menu.items.map(item => (
                    <li key={item._id} className="menu-item">
                        {editingItem === item._id ? (
                            // Show Edit Form
                            <div className="edit-form">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={editFormData.name} 
                                    onChange={handleInputChange} 
                                    placeholder="Item Name"
                                />
                                <input 
                                    type="text" 
                                    name="description" 
                                    value={editFormData.description} 
                                    onChange={handleInputChange} 
                                    placeholder="Description"
                                />
                                <input 
                                    type="number" 
                                    name="price" 
                                    value={editFormData.price} 
                                    onChange={handleInputChange} 
                                    placeholder="Price"
                                />
                                <button className="save-btn" onClick={() => handleUpdateItem(item._id)}>Save</button>
                                <button className="cancel-btn" onClick={() => setEditingItem(null)}>Cancel</button>
                            </div>
                        ) : (
                            // Show Item Details
                            <div>
                        {item.name} - ${item.price}
                        <p>{item.description}</p>
                        <button  className="edit-btn" onClick={() => handleEditClick(item)}>Edit</button>
                        <button className="delete-btnz" onClick={() => handleDeleteItem(item._id)} style={{ marginLeft: "10px", color: "red" }}>
                            Delete
                        </button>
                        </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="menu-links">
            <Link to={`/menu/${id}/add-item`}>Add New Item</Link>
      <br />
      <Link to="/">Back to Menus</Link>
      </div>
        </div>
    );
};

export default MenuDetail;
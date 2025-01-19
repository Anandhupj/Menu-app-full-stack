import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function MenuItemForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/menus/${id}/items`, { name, description, price })
      .then(() => navigate(`/menu/${id}`));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Item Name" required onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" required onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" required onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default MenuItemForm;

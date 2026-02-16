import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchCart = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }
            const { data } = await api.get("/cart/get");
            console.log("Cart data:", data); // Debug log
            setCart(data.cart || []);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            if (error.response?.status === 401) navigate("/login");
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const handleRemove = async (itemId) => {
        try {
            await api.delete(`/cart/remove/${itemId}`);
            // Optimistically update or fetch again
            setCart(prev => prev.filter(item => item._id !== itemId));
        } catch (error) {
            console.error(error);
            alert("Failed to remove item");
        }
    };

    // Calculate total. Ensure item.product is populated and prices are numbers.
    const total = cart.reduce((acc, item) => {
        const price = item.product?.price || 0;
        return acc + (price * item.quantity);
    }, 0);

    if (loading) return (
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <h2>Loading Cart...</h2>
        </div>
    );

    return (
        <section className="section bg-white" style={{ minHeight: '80vh' }}>
            <div className="container animate fade-in">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>Your Cart</h1>

                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Your cart is currently empty.</h3>
                        <button className="btn" onClick={() => navigate("/products")}>Continue Shopping</button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                        {/* Cart Items */}
                        <div>
                            {cart.map((item) => (
                                item.product ? (
                                    <div key={item._id} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1.5rem",
                                        marginBottom: "1.5rem",
                                        paddingBottom: "1.5rem",
                                        borderBottom: "1px solid #eee"
                                    }}>
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }}
                                        />
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.product.name}</h3>
                                            <p style={{ color: '#666', marginBottom: '0.2rem' }}>Size: {item.size}</p>
                                            <p style={{ color: '#666' }}>Quantity: {item.quantity}</p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>₹{item.product.price * item.quantity}</p>
                                            <button
                                                onClick={() => handleRemove(item._id)}
                                                style={{ color: "#ff4d4d", border: "none", background: "none", cursor: "pointer", textDecoration: "underline" }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ) : null
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div style={{
                            background: '#f9f9f9',
                            padding: '2rem',
                            borderRadius: '1rem',
                            height: 'fit-content'
                        }}>
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>Order Summary</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span>Subtotal</span>
                                <span>₹{total}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                            <button
                                className="btn"
                                style={{ width: '100%' }}
                                onClick={() => navigate("/checkout")}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;

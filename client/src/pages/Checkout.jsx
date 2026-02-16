import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        phone: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Fetch API Key
            const { data: { key } } = await api.get("/payment/getkey");

            // Fetch Cart Total
            const { data: cartData } = await api.get("/cart/get");
            const cartItems = cartData.cart;

            if (!cartItems || cartItems.length === 0) {
                alert("Cart is empty");
                navigate("/products");
                return;
            }

            const totalAmount = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

            // Create Order
            const { data: { order } } = await api.post("/payment/checkout", { amount: totalAmount });

            const options = {
                key: key,
                amount: order.amount,
                currency: "INR",
                name: "SneakHub",
                description: "Sneaker Purchase",
                image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                order_id: order.id,
                handler: async function (response) {
                    try {
                        const verifyRes = await api.post("/payment/paymentverification", {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        });

                        if (verifyRes.data.success) {
                            alert(`Payment Successful! Reference: ${verifyRes.data.reference}`);
                            navigate("/"); // Navigate to home or order history
                        } else {
                            alert("Payment Verification Failed");
                        }
                    } catch (error) {
                        console.error(error);
                        alert("Payment Verification Error");
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone
                },
                notes: {
                    address: formData.address
                },
                theme: {
                    color: "#121212"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
            setLoading(false);

        } catch (error) {
            console.error(error);
            setLoading(false);
            alert("Payment Initialization Failed. Make sure you are logged in.");
        }
    };

    return (
        <section className="section bg-white" style={{ minHeight: '80vh', padding: "4rem 0" }}>
            <div className="container animate fade-in">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: "center", color: 'var(--secondary-color)' }}>Checkout</h1>
                <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem", boxShadow: "0 0 20px rgba(0,0,0,0.1)", borderRadius: "10px" }}>
                    <form onSubmit={handlePayment} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                            />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                            />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                            />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Shipping Address</label>
                            <textarea
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                            />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Postal Code</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    required
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn"
                            disabled={loading}
                            style={{ padding: "15px", fontSize: "1.1rem", marginTop: "1rem" }}
                        >
                            {loading ? "Processing..." : "Pay Now"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;

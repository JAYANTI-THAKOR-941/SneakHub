import mongoose from "mongoose";
import dns from "node:dns";

// ✅ Force Google Public DNS to resolve SRV records preventing ECONNREFUSED
try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
    console.log("✅ Custom DNS servers set to Google Public DNS");
} catch (e) {
    console.log("⚠️ Could not set custom DNS servers");
}


 const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        if (error.syscall === 'querySrv' && error.code === 'ECONNREFUSED') {
            console.log("\n⚠️  MongoDB Connection Error: DNS Lookup Failed");
        }
        process.exit(1);
    }
};

export default connectDB;
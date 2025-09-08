"use client"
import { useState } from "react";

const Signup = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ email, password });
    };
    
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form onSubmit={handleSubmit} className="bg-gray-600 p-6 rounded-2xl shadow w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mb-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                required
                className="w-full px-4 py-2 mb-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mb-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            >
            Sign up
            </button>
        </form>
    </div>
    );
}

export default Signup;

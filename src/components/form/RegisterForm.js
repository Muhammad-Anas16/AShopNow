"use client";

import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Model_Schema/authSchema";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { SignUpWithEmail } from "../../lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const router = useRouter();
    const [submitValue, setSubmitValue] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        setSubmitValue(true); // Loading ON

        const { username, email, password } = data;

        try {
            const result = await SignUpWithEmail(email, password, username);

            if (result.success) {
                toast.success("Account created successfully!");
                reset();
                router.push("/auth/login");
            } else {
                toast.error(result.error || "Registration failed. Try again.");
            }
        } catch (error) {
            toast.error("Registration failed. Try again.");
        }

        setSubmitValue(false); // Loading OFF
    };

    return (
        <div className="flex flex-col justify-center px-10 py-16 max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Full Name */}
                <div>
                    <label className="text-sm font-medium text-black">Full Name</label>
                    <input
                        {...register("username")}
                        placeholder="John Doe"
                        className={`w-full mt-1 p-3 border rounded-md outline-none text-black 
                            ${errors.username ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm font-medium text-black">Email Address</label>
                    <input
                        {...register("email")}
                        placeholder="you@example.com"
                        className={`w-full mt-1 p-3 border rounded-md outline-none text-black 
                            ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
                </div>

                {/* Password */}
                <div className="relative">
                    <label className="text-sm font-medium text-black">Password</label>

                    <input
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        placeholder="Enter your password"
                        className={`w-full mt-1 p-3 border rounded-md outline-none text-black 
                            ${errors.password ? "border-red-500" : "border-gray-300"}`}
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[42px] text-gray-500"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>

                    <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={submitValue}
                    className={`w-full bg-[#0c223f] text-white py-3 rounded-md mt-4 
                        transition ${submitValue ? "opacity-60 cursor-not-allowed" : "hover:bg-[#0a1a32]"}`}
                >
                    {submitValue ? "Creating Account..." : "Create Account"}
                </button>

                <span className="bg-gray-400 flex items-center justify-center mb-2">
                    <hr />
                </span>

                <div>
                    <span className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
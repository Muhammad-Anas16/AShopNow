"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../authComponent/authSchema";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignInGoogle, signInWithEmail } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [submitValue, setSubmitValue] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const handleGoogleSignIn = async () => {
        const result = await SignInGoogle();
        if (!result.success) {
            console.error('Sign in failed:', result.error);
            toast.error("Google sign-in failed. Please try again.");
            return;
        }
        router.push(result.data.url);
    };

    const onSubmit = async (data) => {
        setSubmitValue(true);
        const { email, password } = data;
        try {
            const result = await signInWithEmail(email, password);

            if (result.success) {
                toast.success("Account created successfully!");
                reset();
                // router.push("/");
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Email */}
                <div>
                    <label className="text-sm font-medium text-black">Email Address</label>
                    <input
                        {...register("email")}
                        placeholder="you@example.com"
                        className={`w-full mt-1 p-3 border rounded-md outline-none text-black ${errors.email ? "border-red-500" : "border-gray-300"
                            }`}
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
                        className={`w-full mt-1 p-3 border rounded-md outline-none text-black ${errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                    />

                    {/* Show/Hide Password Icon */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[42px] text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>

                    <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={submitValue}
                    className={`w-full bg-[#0c223f] text-white py-3 rounded-md mt-2 transition ${submitValue
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:bg-[#0a1a32]"
                        }`}
                >
                    {submitValue ? "Logging in..." : "Login"}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-500 text-sm">Or continue with</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* OAuth Buttons */}
                <div className="flex items-center justify-center gap-4">
                    {/* Google */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2.5 bg-white hover:bg-gray-100 transition cursor-pointer"
                    >
                        <Image
                            src="/Google.png"
                            width={20}
                            height={20}
                            alt="Google"
                        />
                        <span className="text-gray-700 font-medium text-sm">Google</span>
                    </button>

                    {/* GitHub */}
                    <button
                        type="button"
                        className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2.5 bg-white hover:bg-gray-100 transition cursor-pointer"
                    >
                        <Image
                            src="/GitHub.png"
                            width={20}
                            height={20}
                            alt="GitHub"
                        />
                        <span className="text-gray-700 font-medium text-sm">GitHub</span>
                    </button>
                </div>

                {/* Footer Link */}
                <div className="text-center pt-2">
                    <span className="text-sm text-gray-600">
                        {"Don't have an account?"}{" "}
                        <Link href="/auth/register" className="text-blue-600 hover:underline">
                            Sign Up
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
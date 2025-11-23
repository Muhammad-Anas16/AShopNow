"use client";

import { createAuthClient } from "better-auth/react";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
});

const SignUpWithEmail = async (email, password, username) => {
    try {
        const { data, error } = await authClient.signUp.email(
            {
                name: username,
                email: email,
                password: password,
                callbackURL: "/",
            },
            {
                onRequest: (ctx) => {
                    console.log("auth-client onRequest line 21 ", ctx);
                    toast("Creating your account...");
                },
                onSuccess: (ctx) => {
                    console.log("checking data on SignUp when on success", ctx.data);
                    toast.success("Account created successfully!");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
            }
        );
        if (error) {
            return { success: false, error: error.message };
        }
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message || "Something went wrong" };
    }
};

const signInWithEmail = async (email, password) => {
    try {
        const { data, error } = await authClient.signIn.email(
            {
                email,
                password,
                callbackURL: "/",
                rememberMe: false,
            },
            {
                onRequest: (ctx) => {
                    console.log("auth-client onRequest line 53 ", ctx);
                },
                onSuccess: (ctx) => {
                    console.log("checking data on SignIn when on success", ctx.data);
                    if (ctx.data.twoFactorRedirect) {
                        console.log("Please complete two-factor authentication");
                        return;
                    }
                    toast.success("Sign In successfully!");
                },
                onError: (ctx) => {
                    console.log(ctx.error.message);
                },
            }
        );
        
        if (error) {
            return { success: false, error: error.message };
        }
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message || "Something went wrong" };
    }
};

const SignInGoogle = async () => {
    try {
        const { data, error } = await authClient.signIn.social(
            {
                provider: "google",
                callbackURL: "/",
                errorCallbackURL: "/auth/register",
                newUserCallbackURL: "/",
                disableRedirect: true,
            },
            {
                onRequest: (ctx) => {
                    console.log("auth-client onRequest Google sign-in ", ctx);
                    // toast("Signing in with Google...");
                },
                onSuccess: (ctx) => {
                    console.log("checking data on Google SignIn when on success", ctx.data);
                    // toast.success("Google sign in successful!");
                },
                onError: (ctx) => {
                    console.log(ctx.error.message);
                },
            }
        );

        if (error) {
            return { success: false, error: error.message };
        }

        // if (data?.url) {
        //     redirect(data.url);
        // }
        
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message || "Something went wrong" };
    }
};


export { SignUpWithEmail, signInWithEmail, SignInGoogle };
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="flex justify-center mb-8">
                    <img
                        src="/vigil-logo.png"
                        alt="Vigil"
                        className="h-32 w-auto invert mix-blend-screen opacity-90"
                    />
                </div>

                <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-white mb-2">
                    Welcome back
                </h2>
                <p className="text-center text-sm text-[#8A8F98]">
                    Sign in to your account to continue
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="glass border border-white/[0.08] py-8 px-4 shadow sm:rounded-2xl sm:px-10 bg-[#0A0A0A]/50 backdrop-blur-xl">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#8A8F98]">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-2.5 px-3.5 bg-white/[0.03] text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-white/30 sm:text-sm sm:leading-6 transition-all"
                                    placeholder="you@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-[#8A8F98]">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-white/60 hover:text-white transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-2.5 px-3.5 bg-white/[0.03] text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/20 focus:ring-2 focus:ring-inset focus:ring-white/30 sm:text-sm sm:leading-6 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            {/* Update this href to whatever hyperlink you want the user to go to after logging in */}
                            <a href="/dashboard" className="block w-full">
                                <Button className="w-full bg-white text-black hover:bg-white/90">
                                    Sign in
                                </Button>
                            </a>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/[0.08]" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-[#0A0A0A] px-2 text-[#8A8F98]">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Button variant="outline" className="w-full border-white/[0.08] text-white hover:bg-white/[0.03]">
                                <span className="sr-only">Sign in with Google</span>
                                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                                    <path
                                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                                        fill="#EA4335"
                                    />
                                    <path
                                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                                        fill="#34A853"
                                    />
                                </svg>
                            </Button>
                            <Button variant="outline" className="w-full border-white/[0.08] text-white hover:bg-white/[0.03]">
                                <span className="sr-only">Sign in with GitHub</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

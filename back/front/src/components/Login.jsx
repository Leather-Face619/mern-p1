import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = async (data) => {
        const userinfo = await {
            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:3001/user/login', userinfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Logged in Successfully");
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 1000);
                }
            }).catch((error) => { alert("Error => " + error) })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="flex justify-around mt-6">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Signup
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
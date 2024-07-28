import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useForm } from 'react-hook-form';

import './auth.css';



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        // lấy ra các dữ liệu đc đăng ký 
        // theo dạng object
        getValues,
        //  Func xử lý các sự kiện validate
        handleSubmit,
        //   set giá trị default cho một input name
        setValue,
        //    set giá trị default cho 1 err input name
        setError,
        // clear form
        reset,
        // quản lý dữ liệu form (state)
        formState

    } = useForm();

    const loginSubmit = (value) => {
        console.log('value submit===', value);
        alert('Đăng ký thành công *_*');
    }

    const [isChecked, setIsChecked] = useState(false);


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="h-screen bg-[#202020] flex items-center justify-center">
            <div className="w-full max-w-md py-5 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-black shadow-lg rounded-xl p-5">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-8 text-white">Sign in</h3>

                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    id="email"
                                    className="form-input w-full py-2 px-3 border border-[#6a6a6a] border-0.5 rounded-lg bg-black placeholder-gray-500 text-white focus:outline-none focus:border-[#1db954] focus:ring-0 transition-all duration-300"
                                    placeholder="Email"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Email is required!'
                                        },
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email!'
                                        }
                                    })} />
                                {formState?.errors.email && (<small className='block text-left block text-left text-red-500 mt-1 ml-3'>{formState?.errors.email?.message}</small>)}
                            </div>

                            <div className="relative mb-4">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-input w-full py-2 px-3 border border-[#6a6a6a] border-0.5 rounded-lg bg-black placeholder-gray-500 text-white focus:outline-none focus:border-[#1db954] focus:ring-0 transition-all duration-300"
                                    placeholder="Password"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is required!'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long!'
                                        }
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                                >
                                    <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                </button>
                                {formState?.errors.password && (<small className='block text-left block text-left text-red-500 mt-1 ml-3'>{formState?.errors.password?.message}</small>)}
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        htmlFor="flexSwitchCheckDefault"
                                        className="flex items-center cursor-pointer select-none"
                                    >
                                        <div className="relative" onClick={handleCheckboxChange}>
                                            <div className={`w-9 h-5 rounded-full shadow-inner ${isChecked ? 'bg-[#1db954]' : 'bg-gray-700'}`}></div>
                                            <div className={`absolute top-1 left-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 transform ${isChecked ? 'translate-x-4' : ''}`}></div>
                                        </div>
                                        <span className="ml-3 text-white text-sm">Remember me</span>
                                    </label>
                                </div>
                                <Link to="/forgot" className="text-[#1db954] hover:underline">Forgot password?</Link>
                            </div>
                            <button
                                className="w-full py-2 px-4 bg-[#1ed760] font-semibold text-black rounded-3xl shadow-md transform transition-transform duration-300 hover:ring-2 hover:ring-[#1ed760]"
                                type="submit"
                                onClick={handleSubmit(loginSubmit)}
                            >
                                Log in
                            </button>
                            <div className="flex items-center my-4">
                                <hr className="flex-1 border-t border-gray-300" />
                                <p className="text-gray-500 font-semibold mx-3 mb-0 text-sm">OR</p>
                                <hr className="flex-1 border-t border-gray-300" />
                            </div>

                            <button
                                className="w-full py-2 px-4 bg-black border border-[#6a6a6a] text-white rounded-3xl shadow-md flex items-center justify-center hover:border-white hover:border-[1px] hover:ring-1 hover:ring-white transition-all"
                                type="submit"
                            >
                                <img src="assets/images/google.png" alt="Google" className="w-5 h-5 mr-2" />
                                <span className="flex-1 text-center">Sign in with Google</span>
                            </button>
                            <button
                                className="w-full py-2 px-4 bg-black border border-[#6a6a6a] text-white rounded-3xl shadow-md flex items-center justify-center mt-2 hover:border-white hover:border-[1px] hover:ring-1 hover:ring-white transition-all"
                                type="submit"
                            >
                                <img src="assets/images/fb.png" alt="Facebook" className="w-5 h-5 mr-2" />
                                <span className="flex-1 text-center">Sign in with Facebook</span>
                            </button>

                            <div className="text-center mt-8">
                                <p className="text-gray-500 font-semibold mx-3 mb-0 text-sm">Don't you have an account? <Link to="/register" className="text-[#1db954] hover:underline"> Sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

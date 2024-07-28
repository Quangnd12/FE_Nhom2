import React from "react";
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useForm } from 'react-hook-form';
import './auth.css';

const ForgotPass = () => {
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

    const ForgotSubmit = (value) => {
        console.log('value submit===', value);
        alert('Đăng ký thành công *_*');
    }

    return (
        <section className="h-screen bg-[#202020] flex items-center justify-center">
            <div className="container py-5 h-full flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-black shadow-lg rounded-xl p-5">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-4 text-white">Forgot password</h3>
                            <p className="text-gray-500 font-semibold mx-3 text-sm mb-4">Enter your email address or username, and we'll send you a link to regain access to your account.</p>
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    id="typeEmailX-2"
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
                            <button
                                className="w-full py-2 px-4 bg-[#1ed760] font-semibold text-black rounded-3xl shadow-md transform transition-transform duration-300  hover:ring-2 hover:ring-[#1ed760] shake-on-hover"
                                type="submit"
                                onClick={handleSubmit(ForgotSubmit)}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPass;

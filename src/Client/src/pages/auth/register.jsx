import React, { useState, useContext } from "react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import endpoints from "../../../../endpoint/endpoint";
import LanguageContext from "../../contexts/LanguageContext";

import { useForm } from "react-hook-form";

import "./auth.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { translations } = useContext(LanguageContext);
  const { register, getValues, handleSubmit, setValue, setError, reset, formState } = useForm();

  const registerSubmit = async value => {
    const result = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    alert("Đăng kí thành công!");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="h-screen bg-[#202020] flex items-center justify-center">
      <div className="container py-5 h-full flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-black shadow-lg rounded-xl p-5">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-white">{translations.register}</h3>

              <div className="relative mb-4">
                <input
                  type="username"
                  id="username"
                  className="form-input w-full py-2 px-3 border border-[#6a6a6a] border-0.5 rounded-lg bg-black placeholder-gray-500 text-white focus:outline-none focus:border-[#1db954] focus:ring-0 transition-all duration-300"
                  placeholder={translations.username}
                  {...register("username", {
                    required: {
                      value: true,
                      message: `${translations.requireUser}`,
                    },
                    minLength: {
                      value: 3,
                      message: `${translations.requireUserLen}`,
                    },
                  })}
                />
                {formState?.errors.username && (
                  <small className="block text-left text-red-500 mt-1 ml-3">
                    {formState?.errors.username?.message}
                  </small>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="email"
                  className="form-input w-full py-2 px-3 border border-[#6a6a6a] border-0.5 rounded-lg bg-black placeholder-gray-500 text-white focus:outline-none focus:border-[#1db954] focus:ring-0 transition-all duration-300"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: translations.requireEmail,
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/,
                      message: translations.invalidEmail,
                    },
                    validate: {
                      length: value => (value.length >= 20 && value.length <= 55) || translations.invalidLength,
                      domain: value => {
                        const domain = value.split("@")[1];
                        return domain && domain.endsWith(".com") ? true : translations.invalidDo;
                      },
                      specialChars: value => {
                        // Đây là nơi bạn có thể kiểm tra các ký tự đặc biệt nếu cần
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : translations.invalidChars;
                      },
                    },
                  })}
                />
                {formState?.errors.email && (
                  <small className="block text-left text-red-500 mt-1 ml-3">{formState?.errors.email?.message}</small>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-input w-full py-2 px-3 border border-[#6a6a6a] border-0.5 rounded-lg bg-black placeholder-gray-500 text-white focus:outline-none focus:border-[#1db954] focus:ring-0 transition-all duration-300"
                  placeholder={translations.password}
                  {...register("password", {
                    required: {
                      value: true,
                      message: `${translations.requirePass}`,
                    },
                    minLength: {
                      value: 6,
                      message: `${translations.requirePassLen}`,
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </button>
                {formState?.errors.password && (
                  <small className="block  text-left text-red-500 mt-1 ml-3">
                    {formState?.errors.password?.message}
                  </small>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="password"
                  id="confirm"
                  className="form-input w-full py-2 px-3 border border-[#6a6a6a] border-0.5 rounded-lg bg-black placeholder-gray-500 text-white focus:outline-none focus:border-[#1db954] focus:ring-0 transition-all duration-300"
                  placeholder={translations.confirm}
                  {...register("confirm", {
                    required: {
                      value: true,
                      message: `${translations.requireCPass}`,
                    },
                    minLength: {
                      value: 6,
                      message: `${translations.requireCPassLen}`,
                    },
                    validate: confirm => {
                      const password = getValues()?.password;
                      if (confirm === password) {
                        return true;
                      } else {
                        return `${translations.requireCPassMatch}`;
                      }
                    },
                  })}
                />
                {formState?.errors.confirm && (
                  <small className="block text-left text-red-500 mt-1 ml-3">{formState?.errors.confirm?.message}</small>
                )}
              </div>
              <button
                className="w-full py-2 px-4 bg-[#1ed760] font-semibold text-black rounded-3xl shadow-md transform transition-transform duration-300  hover:ring-2 hover:ring-[#1ed760] shake-on-hover"
                type="submit"
                onClick={handleSubmit(registerSubmit)}
              >
                {translations.register}
              </button>
              <div className="flex items-center my-4">
                <hr className="flex-1 border-t border-gray-300" />
                <p className="text-gray-500 font-semibold mx-3 mb-0 text-sm">OR</p>
                <hr className="flex-1 border-t border-gray-300" />
              </div>
              <div className="text-center mt-8 ">
                <p className="text-gray-500 font-semibold mx-3 mb-0 text-sm">
                  {translations.have}{" "}
                  <Link
                    to="/login"
                    className="custom-text no-underline"
                  >
                    {" "}
                    {translations.login}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

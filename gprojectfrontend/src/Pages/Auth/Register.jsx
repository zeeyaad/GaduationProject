import React, { useState } from "react";
import Logo from "../../../Assets/Logo.png";
import axios from "axios";


const Register = () => {
  
  const [register, setRegister] = useState({
    email: "",
    password: "",
    username: "",
    loading: false,
    err: [],
  });

  const RegisterFun = (e)=>{
      e.preventDefault();
      setRegister({...register, loading: true, err: []});
      axios
        .post("http://localhost:4000/auth/register",{
          email: register.email,
          password: register.password,
          username: register.username,
        })
        .then((resp)=> {
          setRegister({...register, loading:false, err: []})
        })
        .catch( (errors)=>{
          setRegister({
             ...register,
            loading: false,
            err: errors.responce.data.errors,
          })
        })
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Main Login Container */}
      <div className="w-full max-w-md">
        <div className="bg-black rounded-3xl p-8 shadow-2xl">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img src={Logo} alt="نادي حلوان" className="h-14 w-14" />
            </div>
            <h1 className="text-3xl font-bold text-white" dir="rtl">تسجيل الدخول</h1>
          </div>

          {/* Login Form */}
          <form onSubmit={RegisterFun} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <div className="bg-gray-200 rounded-xl p-4 flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  value={register.email}
                  onChange={(e) => setRegister({...register,email:e.target.value})}
                  placeholder="البريد الإلكتروني"
                  className="flex-1 bg-transparent text-gray-800 placeholder-gray-600 text-right"
                  dir="rtl"
                  required
                />
              </div>
            </div>
            
            {/* Username Field */}
            <div className="relative">
              <div className="bg-gray-200 rounded-xl p-4 flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                  type="text"
                  value={register.username}
                  onChange={(e) => setRegister({...register, username:e.target.value})}
                  placeholder="اسم المستخدم"
                  className="flex-1 bg-transparent text-gray-800 placeholder-gray-600 text-right"
                  dir="rtl"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="bg-gray-200 rounded-xl p-4 flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  value={register.password}
                  onChange={(e) => setRegister({...register, password:e.target.value})}
                  placeholder="كلمة المرور"
                  className="flex-1 bg-transparent text-gray-800 placeholder-gray-600 text-right"
                  dir="rtl"
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={register.loading === true}
              className="w-full bg-bright border-buttonPorder text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-400 transition-colors"
            >
              سجل دلوقتي
            </button>
          </form>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <button className="text-white text-sm hover:text-green-300 transition-colors" dir="rtl">
              نسيت كلمة المرور؟
            </button>
          </div>

          {/* Separator */}
          <div className="text-center my-6">
            <span className="text-white text-sm" dir="rtl">أو</span>
          </div>

         

          {/* Register Link */}
          <div className="text-center mt-6">
            <p className="text-white text-sm" dir="rtl">
              ليس لديك حساب؟{" "}
              <button className="text-green-300 hover:text-green-200 font-medium">
                سجل الآن
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
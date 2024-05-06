import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Titulos } from "../../Components/Titulos";
import { Subitulos } from "../../Components/Subtitulos";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"; 

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.Email === "admin@admin.com" && data.password === "admin") {
      login(); 
      navigate("/", { replace: true });
      reset();
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="border-4 border-black p-6 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-14 ">
        <div>
          <Titulos label={"Bienvenido"} />
        </div>
        <div>
          <Subitulos label={"Ingresa tu email"} />
          <div className="flex p-2"></div>
          <input
            className={`flex flex-col border-2 rounded-md w-80 ${errors.Email ? "border-red-500" : ""}`}
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && <span className="bg-red-100 text-red-500">Por favor ingresa un email válido.</span>}
        </div>
        <div>
          <Subitulos label={"Ingresa tu contraseña"} />
          <div className="flex p-2"></div>
          <input
            className={`flex flex-col border-2 rounded-md w-80 ${errors.password ? "border-red-500" : ""}`}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="bg-red-100 text-red-500">Por favor ingresa tu contraseña.</span>}
        </div>
        {error && <p className="bg-red-100 text-red-500">{error}</p>}
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
        
      </form>

      <div className="flex flex-col gap-2 p-4 items-center">
        <Subitulos label={"¿No tienes una cuenta?"} />
        <Link to="/register">Da click aquí</Link>
      </div>
      </div>
    </div>
  );
}

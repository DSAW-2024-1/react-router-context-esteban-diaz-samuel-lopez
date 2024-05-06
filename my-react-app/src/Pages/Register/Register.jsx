import React from 'react';
import { useForm } from 'react-hook-form';
import { Titulos } from '../../Components/Titulos';
import { Subitulos } from '../../Components/Subtitulos';
import Dark_mode from '../../Components/Dark-mode';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="flex flex-col items-center bg-blue-50 dark:bg-gray-900 h-max">
      <div className='flex justify-end  w-full'>
<Dark_mode/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 pb-8">
      <div><Titulos label={"Registro"}/></div>
       
      <div>
      <Subitulos label={"Ingresa tu apellido"}/>
      <div className='flex p-1'></div>
        <input className="flex flex-col border-4 w-80" type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      </div>
             
      <div>
      <Subitulos label={"Ingresa tu apellido"}/>
      <div className='flex p-1'></div>
          <input className="flex flex-col border-4 w-80" type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        </div>
        
    <div>
      <Subitulos label={"Ingresa tu email"}/>
      <div className='flex p-1'></div>
        <input className="flex flex-col border-4 w-80" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    </div>

    <div>
    <Subitulos label={"Ingresa tu contraseña"}/>
    <div className='flex p-2'></div>
    <input className="flex flex-col border-4 w-80" type="password" placeholder="Password" {...register} />
    </div> 
    <div>
    <Subitulos label={"Confirma tu contraseña"}/>
    <div className='flex p-2'></div>
    <input className="flex flex-col border-4 w-80" type="password" placeholder="Password" {...register} />
    </div> 

        <input type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
      </form >
    </div>
  );
}

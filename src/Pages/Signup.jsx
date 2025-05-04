import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from '../Store/AuthSlice';

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispath = useDispatch()

  const submit = (data) => {
    dispath(addData(data))
    navigate("/Home")
  }
  
   

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md flex flex-col justify-center items-center">
        <div>
        <h1 className='m-auto w-full text-3xl font-bold '>Sign Up</h1>
        </div>
       
        <div className='mt-4'>
          <form onSubmit={handleSubmit(submit)}>
        <Input
          {...register("name",{required:true})}
        placeholder = "Enter your name" />
        <Input 
          {...register("email",{required : true})}
        placeholder = "Enter your Gmail" />
        <Button className="!w-full !bg-indigo-600 !p-2 !rounded-lg" children="Sign Up" />
        </form>
        </div>
      </div>
      
    </div>
  );
}

export default Signup;

import React, { useEffect } from 'react';
import './userbox.css'
import { useForm } from 'react-hook-form'
import useAddusers from '../custom-hooks/useraddusers';
import useUpdateusers from '../custom-hooks/useupdateusers';
export default function Userbox({user:selecteduser,onupdate}) {
  const {register,handleSubmit,reset,formState:{errors}} =useForm();
  const addusermutation =useAddusers();
  const updateusermutation = useUpdateusers();
  useEffect(()=>{
    console.log("Userbox rendered");
    console.log(selecteduser)
    reset(selecteduser ?{
      name:selecteduser?.name,
      email:selecteduser?.email,
      username:selecteduser?.username,
      phone:selecteduser?.phone
    }:{
      name:"",
      email:"",
      username:"",
      phone:""
    }
    )


  },[selecteduser,reset]);
  const onsubmit = (data)=>{
    if(selecteduser){
      updateusermutation.mutate({id:selecteduser.id,newuser:data},{
        onSuccess:()=>{
          onupdate(null)
          

        }
      });
      reset();
      
      

    }else{

      addusermutation.mutate(data);
      console.log(data)
      reset();
    }
    

  }
  return (
    <>
    <div className="userbox">
        <h2>Enter user data</h2>
    </div>
    <div className="inputs">
      <form onSubmit={handleSubmit(onsubmit)}>
        <input {...register('name',{required:'name is required'})} type="text"  placeholder='Enter name'/>
        {errors.name && <em>{errors.name.message}</em>}
        <input {...register('email',{required:'name is required'})} type="text" placeholder='Enter email' />
        <input {...register('username',{required:'name is required'})} type="text" placeholder='Enter username' />
        <input {...register('phone',{required:'name is required'})} type="text" placeholder='Enter phone' />
        <button type='submit' >{selecteduser ? "Update user" : "Add user"}</button>
        
        </form>
    </div>
    
    </>
  )
}

import React from 'react'
import { useState } from 'react';
import background from '../assets/background.png'
import { useEffect } from 'react';
import { IoTrashBin } from "react-icons/io5";
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');


    const token = localStorage.getItem('token');
  
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const fetchTodos = async () => {
        try {
      
          const response = await fetch('http://localhost:3000/api/v1/auth/getTodos', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch todos');
          }
      
          
          const responseData = await response.json();
      
          setTodos(responseData.data);
      
        } catch (error) {
          console.error('Error fetching todos:', error);
        }
      };
      
  
     
    useEffect(() => {
      fetchTodos();
    }, []); 
  
  
    //function to add todo
    const addTodo =async(e)=>{
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:3000/api/v1/auth/addTodo',{
            method:'POST',
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({title,description})
          });
  
          if (!response.ok) {
              throw new Error('Failed to add todo');
          }
   
          await fetchTodos();
  
          // Clear input fields
          setTitle('');
          setDescription('');
          
        }
      catch (error) {
        console.error('Error fetching todos:', error);
      }
    }

   
    
    const deleteTodo = async(id)=>{
      try {
             const response =   await fetch(`http://localhost:3000/api/v1/auth/deleteTodo/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
          });
          if (!response.ok) {
              throw new Error('Failed to delete Todo');
          }
          await fetchTodos();
      } catch (error) {
          alert("Error occured!!")
          console.error(error);
      }
    }

  
  const changeStatus = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/v1/auth/updateTodo/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
      });
      await fetchTodos();
    } catch (error) {
      alert("Some error Occurred");
      console.error(error);
    }
  };

  
  return (
    <><Navbar></Navbar>
   
        <div className='bg-gray-200 min-h-screen p-10 flex flex-col relative'>
          
          <h1 className='text-center font-extrabold text-4xl mt-6 mb-12 flex place-self-center'>Todo Application</h1>
          <div className='container'>
    <form className='flex flex-col lg:flex-row gap-4 items-center justify-center'>
        <input type="text" placeholder="Enter title.." value={title} onChange={handleTitleChange} className='w-full lg:w-auto px-4 py-2  border border-gray-400 rounded-md focus:outline-none focus:border-red-500' />
        <input type="text" placeholder="Enter description.." value={description} onChange={handleDescriptionChange} className='w-full lg:w-auto px-4 py-2  border border-gray-400 rounded-md focus:outline-none focus:border-red-500' />
        <button onClick={addTodo} className='w-full lg:w-auto px-8 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-300 ease-in-out'>ADD</button>
    </form>
</div>
<div>    <div className='p-10'>
    <img className='absolute bottom-0 right-0 mb-6 mr-6 w-1/4' height={300} width={350} src={background} alt="background" />
    {todos.length !== 0 && 
          <Todo todos={todos} deleteTodo={deleteTodo} changeStatus={changeStatus}/>
    }
          </div></div>
          </div>
          </>

      );
      
}

export default TodoPage
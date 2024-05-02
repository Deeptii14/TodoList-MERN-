import React from 'react'
import { IoTrashBin } from "react-icons/io5";
const Todo = ({todos,changeStatus,deleteTodo}) => {
  return (
 
  <div className="w-3/4">
  <div className="overflow-hidden rounded-lg">
      <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y">
                          <thead className="font-bold text-[0.98rem]">
                              <tr>
                                  <th scope="col" className="px-4 py-3 text-left  text-gray-500 uppercase tracking-wider">Status</th>
                                  <th scope="col" className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">Title</th>
                                  <th scope="col" className="px-4 py-3 text-left text-gray-500 uppercase tracking-wider">Description</th>
                                  <th scope="col" className="px-4 py-3 text-left  text-gray-500 uppercase tracking-wider">Delete</th>
                              </tr>
                          </thead>
                          <tbody className="">
                              {todos.map(todo => (
                                  <tr key={todo._id}>
                                      
                                      <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="checkbox">
  <input
    type="checkbox"
    defaultChecked={todo.status}
    onClick={() => changeStatus(todo._id)}
    className="h-6 w-6 bg-red-600 checked:bg-red-600"
  />
</div>

                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap"
                                      >
                                       {
                                         todo.status ? (<s className="line-through">{todo.title}</s>):(<div>
{todo.title}
                                         </div>)
                                       }
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">{todo.description}</td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          <button onClick={() => deleteTodo(todo._id)} 
                                          className="text-red-600 font-bold hover:text-red-900"><IoTrashBin className='w-6 h-6'/></button>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          
      </div>
  </div>
</div>


  )
}

export default Todo
import React from 'react'
import background from "../assets/background.png"
const Home = () => {

    return (
      <div className='bg-gray-200 min-h-screen flex flex-col items-center justify-start relative'>
      <img className='absolute bottom-0 right-0 mb-6 mr-6' height={300} width={350} src={background} alt="background" />
            <div className="container h-screen w-screen flex justify-center items-center flex-col">
                <h1 className="text-center text-4xl font-bold mb-8">Welcome to our Todo App</h1>
                <div className="btn items-center">
                    <a href="/login" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold mr-4">
                        Log In
                    </a>

                    <a href="/signup" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold">
                        New Account
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;


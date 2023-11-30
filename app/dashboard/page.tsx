'use client'
import React, { useState } from 'react';

interface Gasto {
  nombre: string;
  gasto: string;
}

const FormPage = () => {
  const [data, setData] = useState<Gasto>({
    nombre: '',
    gasto: ''
  });
  const [gastos, setGastos] = useState<Gasto[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGastos((prevGastos) => [...prevGastos, data]);
    setData({ nombre: '', gasto: '' });
  };
  
  return (
    <div className='h-full grid gap-2 sm:grid-cols-2 lg:grid-cols-2  justify-center'>
      <form className='flex flex-col items-center ' onSubmit={handleSubmit}>
        <div className='py-8 px-6 bg-white rounded-xl max-w-sn'>
          <div className='text-gray-700 grid'>
          <label className='mb-2'>Ingrese sus gastos</label>
          </div>
        <div className='text-gray-700 grid'>
          <div className='flex place-content-center'>
            <h3 className='text-sm font-medium'>Nombre</h3>
          </div>
          <input className='w-full border border-gray-300 my-2  rounded-lg focus:border-violet-500 outline-none focus:ring-1 focus:ring-violet-500' type="text" name="nombre" value={data.nombre} onChange={handleChange} />
        </div>
        <div>
          <div className='flex place-content-center'>
            <h3 className='text-sm font-medium'>Valor</h3>
          </div>
          <input className='w-full border border-gray-300 my-2  rounded-lg focus:border-violet-500 outline-none focus:ring-1 focus:ring-violet-500' type="number" name="gasto" value={data.gasto} onChange={handleChange} />
        </div>
        <div className='px-4 rounded-xl bg-violet-400 m-4 p-2 shadow-sm w-64 justify-center'>
          <button className='w-full bg-violet-400' type="submit">Submit</button>
        </div>
        </div>
      </form>
      
      <div className='m-10'>
      <table className="table table-dark table-striped w-full m-2  rounded-lg overflow-hidden">
          <thead>
            <tr className='bg-violet-300  '>
              <th className='border border-gray-300 px-4 py-2 text-gray-800'>#</th>
              <th className='border border-gray-300 px-4 py-2 text-gray-800'>descripción</th>
              <th className='border border-violet-300 px-4 py-2 text-gray-800'>cantidad</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((gasto, index) => (
              <tr key={index} className= {index % 2 === 0 ? 'bg-white' : 'bg-violet-300'}>
                <th className='border border-gray-400 px-4 py-2'>{index + 1}</th>
                <td className='border border-gray-400 px-4 py-2'>{gasto.nombre}</td>
                <td className='border border-violet-400 px-4 py-2'>${gasto.gasto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormPage;
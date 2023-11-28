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
    <div className='h-full grid gap-2 sm:grid-cols-2 lg:grid-cols-2 bg-gray-50 border border-rounded'>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <h1>Ingrese sus gastos</h1>
        <div>
          <div className='flex place-content-center'>
            <h3 className='text-sm font-medium'>Nombre</h3>
          </div>
          <input className='w-full' type="text" name="nombre" value={data.nombre} onChange={handleChange} />
        </div>
        <div>
          <div className='flex place-content-center'>
            <h3 className='text-sm font-medium'>Valor</h3>
          </div>
          <input className='w-full' type="number" name="gasto" value={data.gasto} onChange={handleChange} />
        </div>
        <div className='px-4 rounded-xl bg-violet-400 m-4 p-2 shadow-sm w-64 justify-center'>
          <button className='w-full bg-violet-400' type="submit">Submit</button>
        </div>
      </form>
      <div>
      <table className="table table-dark table-striped">
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-400 px-4 py-2 text-gray-800'>#</th>
              <th className='border border-gray-400 px-4 py-2 text-gray-800'>Nombre</th>
              <th className='border border-gray-400 px-4 py-2 text-gray-800'>Gasto</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((gasto, index) => (
              <tr key={index} className= {index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                <th className='border border-gray-400 px-4 py-2'>{index + 1}</th>
                <td className='border border-gray-400 px-4 py-2'>{gasto.nombre}</td>
                <td className='border border-gray-400 px-4 py-2'>${gasto.gasto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormPage;
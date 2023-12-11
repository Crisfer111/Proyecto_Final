import React from 'react'
import favBook from '../../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={favBook} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='space-y-6 md:w-1/2'>
            <h2 className='text-5xl my-5 font-bold md:w-3/4 leading-snug'>Encuentra tus libros favoritos <span className='text-blue-600'>Reserva Aquí!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Sumérgete en las profundidades de la narrativa fascinante de "Mitos Y Leyendas", una obra maestra literaria que te transportará a un universo donde los personajes cobran vida y las emociones laten en cada página. Con una trama magistralmente tejida, este libro cautiva desde la primera palabra hasta el último suspiro. A medida que avanzas en la historia, descubrirás giros inesperados, misterios entrelazados y personajes inolvidables que despiertan la imaginación y provocan reflexiones profundas. Escrito con una prosa exquisita, "Mitos Y Leyendas" es mucho más que una novela; es una experiencia que dejará una marca perdurable en tu corazón. ¿Estás listo para perderte en las páginas de este relato absorbente que desafía las expectativas y redefine el arte de contar historias? Adéntrate en el misterio y la maravilla de "Mitos Y Leyendas" y descubre un mundo donde las palabras se convierten en magia.</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
              <div>
                <h3 className='text-3xl font-bold '>800+</h3>
                <p className='text-base'>Lista De Libros</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>550+</h3>
                <p className='text-base'>Registros De Usuarios</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>1200+</h3>
                <p className='text-base'>Pdf Descargados</p>
              </div>
            </div>
            <Link to="/shop" className='block mt-8'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explora Ahora</button></Link>
        </div>
    </div>
  )
}

export default FavoriteBook
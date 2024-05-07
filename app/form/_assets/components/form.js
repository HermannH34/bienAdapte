"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';


const Form = () => {

 return (
  <>
   <div>
    <h1 className='text-2xl font-bold lg:hidden underline mb-7'>Type de bien:</h1>
    <div className='hidden sm:block'>
     <ul className="steps mb-12">
      <li className="step step-primary">Type de bien</li>
      <li className="step">Budget</li>
      <li className="step">Localisation et environnement</li>
      <li className="step">Votre priorité</li>
     </ul>
    </div>
   </div>

   <div className='sm:ml-16'>
    <Image
     src="/cle.png"
     width={75}
     height={75}
     alt="Picture of the author"
    />
    <h1 className='text-base sm:text-2xl font-semibold mt-8'>Quel type de bien recherchez-vous?</h1>
    <form lassName="mt-8">

     <button

      type="submit" className="btn btn-secondary"
     > Envoyer</button>

    </form>
   </div>
  </>)

}
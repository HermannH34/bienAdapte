import AsyncNextImage from './AsyncNextImage';
import React, { useState } from 'react';

const FormSteps = ({ nextButton, register, errors, typeOfProperty, finalStep }) => {

 const [isMasked, setIsMasked] = useState(false);



 return (
  <>
   {(nextButton === 0) && (
    <>
     <AsyncNextImage
      src="/cle.png"
      width={75}
      height={75}
      alt="Picture of the author"
      quality={70}
      priority

     />

     <h1 className='text-base sm:text-2xl font-semibold mt-8'>Quel type de bien recherchez-vous?</h1>
     <div className="flex items-center mt-6">
      <input {...register("propertyType")} id="maison-checkbox" type="checkbox" value="maison" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="maison-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">une jolie maison</label>
     </div>
     <div className="flex items-center mb-2 mt-4">
      <input {...register("propertyType")} id="appartement-checkbox" type="checkbox" value="appartement" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="appartement-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">un bel appartement</label>
     </div>
     {errors.propertyType && <p className="text-red-500 text-sm mt-2">{errors.propertyType.message}</p>}

    </>
   )}
   {(nextButton === 1) && (
    <>
     <AsyncNextImage
      src="/ruler.png"
      width={75}
      height={75}
      alt="Picture of the author"
      quality={70}
      priority
     />
     <h1 className='text-base sm:text-2xl font-semibold font-sans mt-8 mb-6'>Surface minimum et maximum: </h1>
     <div className='mb-2' >
      <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">minimum:</label>
      <input
       {...register("surface-min")}
       type="number"
       id="number-input"
       aria-describedby="helper-text-explanation"
       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="37 m2"
       required
      />
     </div>
     <div>
      <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">maximum:</label>
      <input
       {...register("surface-max")}
       type="number"
       id="number-input"
       aria-describedby="helper-text-explanation"
       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="300 m2"
       required
      />
     </div>
    </>

   )}
   {(nextButton === 2 && typeOfProperty === "maison") && (
    <>
     <AsyncNextImage
      src="/feux-dartifice.png"
      width={75}
      height={75}
      quality={70}
      alt="Picture of the author"
      priority
     />
     <h1 className='text-base sm:text-2xl font-semibold font-sans mt-6 mb-6'>On parle d’une maison: </h1>
     <div className="flex items-center mb-2 mt-4">
      <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="moderne" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="age" className="ml-2 text-lg text-gray-900 dark:text-gray-300">traditionnelle</label>
     </div>
     <div className="flex items-center mb-2 mt-4">
      <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="typique" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="typique" className="ml-2 text-lg text-gray-900 dark:text-gray-300">moderne</label>
     </div>
     <div className="flex items-center mb-2 mt-4">
      <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="hybride" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="hybride" className="ml-2 text-lg text-gray-900 dark:text-gray-300">hybride</label>
     </div>

    </>
   )}
   {(nextButton === 2 && typeOfProperty === "appartement") && (
    <>
     <AsyncNextImage
      src="/feux-dartifice.png"
      width={75}
      height={75}
      quality={70}
      alt="Picture of the author"
      priority
     />
     <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>
      Un appartement dans un bâtiment: </h1>
     <div className="flex items-center mb-2 mt-4">
      <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="typique" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="typique" className="ml-2 text-lg text-gray-900 dark:text-gray-300">moderne</label>
     </div>
     <div className="flex items-center mb-2 mt-4">
      <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="hybride" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="hybride" className="ml-2 text-lg text-gray-900 dark:text-gray-300">ancien</label>
     </div>
     <div className="flex items-center mb-2 mt-4">
      <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="indetermine" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="indetermine" className="ml-2 text-lg text-gray-900 dark:text-gray-300">je ne sais pas</label>
     </div>
    </>
   )}
   {(typeOfProperty === 'appartement' && nextButton === 3) && (
    <>
     <h1 className='text-lg sm:text-3xl font-semibold font-sans mt-4 mb-7'>Les moyens de locomotion:</h1>
     <div className='mb-12'>
      <div className="flex items-center">
       <AsyncNextImage
        src="/bicycle.png"
        width={60}
        height={60}
        alt="Picture of the author"
        className='mr-4'
        priority
       />
       <div>
        <h1 className='text-lg sm:text-2xl font-semibold font-sans ml-4 mt-4'>Le vélo:</h1>
       </div>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("velo")} id="velo-checkbox" type="checkbox" value="oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="velo" className="ml-2 text-base sm:text-lg text-gray-900 dark:text-gray-300">je préfererai avoir un local vélo dans <br></br> mon immeuble</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("velo")} id="velo-checkbox" type="checkbox" value="non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="velo" className="ml-2 text-base sm:text-lg  text-gray-900 dark:text-gray-300">ce n'est pas important pour moi</label>
      </div>
     </div>
     <div>
      <div className="flex items-center">
       <AsyncNextImage
        src="/car (2).png"
        width={60}
        height={60}
        alt="Picture of the author"
        className='mr-4'
        priority
       />
       <div>
        <h1 className='text-lg sm:text-2xl font-semibold font-sans ml-4 mt-2'>La voiture:</h1>
       </div>
      </div>
      <div>
       <div className="flex items-center mb-2 mt-4">
        <input {...register("parking")} id="parking-checkbox" type="checkbox" value="parking" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="parking" className="ml-2 text-base sm:text-lg  text-gray-900 dark:text-gray-300">je veux une place de parking au <br></br>sein de mon immeuble</label>
       </div>
       <div className="flex items-center mb-2 mt-4">
        <input {...register("parking")} id="parking-checkbox" type="checkbox" value="parking" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="parking" className="ml-2 text-base sm:text-lg  text-gray-900 dark:text-gray-300">ça m'est égal</label>
       </div>
      </div>
     </div>
    </>
   )}
   {
    (typeOfProperty === 'appartement' && nextButton === 4) && (
     <>
      <AsyncNextImage
       src="/chauffe-eau.png"
       width={60}
       height={60}
       alt="Picture of the author"
       className='mr-4'
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-6 mb-6'>Le chauffage:</h1>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("chauffage")} id="chauffage-oui-checkbox" type="checkbox" value="chauffage-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="chauffage-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">collectif</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("chauffage")} id="chauffage-non-checkbox" type="checkbox" value="chauffage-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="chauffage-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">individuel</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("chauffage")} id="chauffage-indetermine-checkbox" type="checkbox" value="chauffage-indetermine" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="chauffage-indetermine" className="ml-2 text-lg text-gray-900 dark:text-gray-300">je ne sais pas</label>
      </div>
     </>
    )
   }
   {
    (typeOfProperty === 'maison' && nextButton === 3) && (
     <>
      <AsyncNextImage
       src="/fleurs.png"
       width={75}
       height={75}
       alt="Picture of the author"
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-6 mb-6'>Le jardin: </h1>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("garden")} id="jardin-oui-checkbox" type="checkbox" value="jardin-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="jardin-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("garden")} id="jardin-non-checkbox" type="checkbox" value="jardin-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="jardin-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("garden")} id="jardin-non-negociable-checkbox" type="checkbox" value="jardin-non-negociable" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="jardin-non-negociable" className="ml-2 text-lg text-gray-900 dark:text-gray-300">sans jardin c'est rédhibitoire</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("garden")} id="jardin-pas-davis-checkbox" type="checkbox" value="jardin-pas-davis" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="jardin-pas-davis" className="ml-2 text-lg text-gray-900 dark:text-gray-300">je n'ai pas d'avis</label>
      </div>
     </>
    )
   }
   {
    (typeOfProperty === 'maison' && nextButton === 4) && (
     <>
      <AsyncNextImage
       src="/piscine.png"
       width={75}
       height={75}
       alt="Picture of the author"
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Et on va plus loin... une piscine ?</h1>
      <div className="flex items-center mt-6 mb-6">
       <input {...register("swimmingPool")} id="piscine-oui-checkbox" type="checkbox" value="piscine-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="piscine-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("swimmingPool")} id="piscine-non-checkbox" type="checkbox" value="piscine-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="piscine-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("swimmingPool")} id="jardin-pas-davis-checkbox" type="checkbox" value="piscine-pas-davis" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="piscine-pas-davis" className="ml-2 text-lg text-gray-900 dark:text-gray-300">je n'ai pas d'avis</label>
      </div>
     </>
    )
   }
   {
    (nextButton === 5) && (
     <>
      <div className='mb-12'>
       <div className="flex items-center">
        <AsyncNextImage
         src="/bed.png"
         width={60}
         height={60}
         alt="Picture of the author"
         className='mr-4 mt-2'
         priority
        />
        <div>
         <h1 className='text-base sm:text-2xl font-semibold font-sans ml-4 mt-4'>Combien de chambres ?</h1>
        </div>
       </div>
       <div>
        <label htmlFor="number-input" className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">au minimum</label>
        <input
         {...register("bedroomsMin")}
         type="number"
         id="number-input"
         aria-describedby="helper-text-explanation"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="1"
         required
        />
        <label htmlFor="number-input" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">au maximum:</label>
        <input
         {...register("bedroomsMax")}
         type="number"
         id="number-input"
         aria-describedby="helper-text-explanation"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="6"
         required
        />
       </div>
      </div>
      <div>
       <div className="flex items-center">
        <AsyncNextImage
         src="/bath.png"
         width={60}
         height={60}
         alt="Picture of the author"
         className='mr-4 mt-0'
         priority
        />
        <div>
         <h1 className='text-base sm:text-2xl font-semibold font-sans ml-4 mt-4'>Combien de salle de bains?</h1>
        </div>
       </div>
       <div>
        <label htmlFor="number-input" className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">au minimum</label>
        <input
         {...register("bathroomsMin")}
         type="number"
         id="number-input"
         aria-describedby="helper-text-explanation"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="1"
         required
        />
        <label htmlFor="number-input" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">au maximum:</label>
        <input
         {...register("bathroomsMax")}
         type="number"
         id="number-input"
         aria-describedby="helper-text-explanation"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="6"
         required
        />
       </div>
      </div>
     </>
    )
   }
   {
    (nextButton === 6) && (
     <>
      <div className='mb-12'>
       <div className="flex items-center">
        <AsyncNextImage
         src="/money-bag.png"
         width={60}
         height={60}
         alt="Picture of the author"
         className='mr-4'
         priority
        />
        <div>
         <h1 className='text-base sm:text-2xl font-semibold font-sans ml-4 mt-4'>Votre budget: </h1>
        </div>
       </div>
       <div>
        <label htmlFor="budgetMin" className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">La fourchette basse:</label>
        <input
         {...register("budgetMin")}
         type="number"
         id="budgetMin"
         aria-describedby="helper-text-explanation"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="60 000 €"
         required
        />
        <label htmlFor="budgetMax" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">La fourchette haute:</label>
        <input
         {...register("budgetMax")}
         type="number"
         id="budgetMax"
         aria-describedby="helper-text-explanation"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="1 000 000 €"
         required
        />
       </div>
       <div className="flex items-center pt-10">
        <AsyncNextImage
         src="/coeur.png"
         width={60}
         height={60}
         alt="Picture of the author"
         className='mr-4 mt-0'
         priority
        />
        <div>
         <h1 className='text-base sm:text-2xl font-semibold font-sans ml-4 mt-4'>En cas de coup de coeur: </h1>
        </div>
       </div>
       <div>
        <label htmlFor="coupDeCoeur" className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">Montant:</label>
        <input
         {...register("coupDeCoeur")}
         type="number"
         id="coupDeCoeur"
         aria-describedby="helper-text-explanation"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="?????? €"
        />
        <div className="flex items-center mb-2 mt-4">
         <input {...register("coupDeCoeur")} id="ecole" type="checkbox" value="coupDeCoeur" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
         <label htmlFor="coupDeCoeur-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">à déterminer</label>
        </div>
       </div>
      </div>
     </>

    )
   }
   {
    (nextButton === 7) && (
     <>
      <AsyncNextImage
       src="/foudre.png"
       width={70}
       height={70}
       alt="Picture of the author"
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-6 mb-6'>Quels critères sont succeptibles de vous faire craquer?</h1>
      <textarea
       {...register("coupDeFoudre")}
       id="message"
       rows="4"
       className="block p-2.5 w-22 sm:w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Lâchez vous ici...">
      </textarea>
     </>
    )
   }
   {
    (nextButton === 8) && (
     <>
      <div className='mb-10'>
       <div className="flex items-center">
        <AsyncNextImage
         src="/maintenance.png"
         width={60}
         height={60}
         alt="Picture of the author"
         className='mr-4'
         priority
        />
        <div>
         <h1 className='text-base sm:text-2xl font-semibold font-sans ml-4 mt-4'>Les travaux: </h1>
        </div>
       </div>
       <div>
        <div className="flex items-center mb-2 mt-8">
         <input onClick={() => setIsMasked(true)} checked={isMasked} {...register("travaux")} id="travaux-oui-checkbox" type="checkbox" value="travaux-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
         <label htmlFor="travaux-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">envisageables</label>
        </div>
        <div className="flex items-center mb-2 mt-4">
         <input onClick={() => setIsMasked(false)}  {...register("travaux")} id="travaux-non-checkbox" type="checkbox" value="travaux-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
         <label htmlFor="travaux-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">non envisageables</label>
        </div>
       </div>
      </div>
      {
       (isMasked) && (
        <>
         <div className='mb-10'>
          <h1 className='text-base mb-5 sm:text-2xl font-semibold font-sans mt-4'>L'ampleur des travaux: </h1>
          <input
           {...register("travaux")}
           id="minmax-range"
           type="range"
           min="0"
           max="10"
           defaultValue="5"
           className="w-full sm:w-22 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
         </div>
         <div>
          <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Inclus dans le budget?</h1>
          <div className="flex items-center mb-2 mt-4">
           <input {...register("travauxDansBudget")} id="travauxDansBudget-checkbox" type="checkbox" value="travauxDansBudget" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
           <label htmlFor="travauxDansBudget-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
          </div>
          <div className="flex items-center mb-2 mt-4">
           <input {...register("travauxPasDansBudget")} id="travauxPasDansBudget" type="checkbox" value="travauxPasDansBudget" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
           <label htmlFor="travauxPasDansBudget-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
          </div>
          <div className="flex items-center mb-2 mt-4">
           <input {...register("travauxPasDansBudget")} id="travauxPasDansBudget" type="checkbox" value="travauxPasDansBudget" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
           <label htmlFor="travauxPasDansBudget-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">à déterminer</label>
          </div>
         </div>
        </>
       )
      }
     </>

    )
   }
   {
    nextButton === 9 && (
     <>
      <AsyncNextImage
       src="/accueil.png"
       width={75}
       height={75}
       alt="Picture of the author"
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>C’est bon, on a défini votre bien idéal. <br></br>Mais il se situe où? </h1>
      <div className="flex w-12  mb-6 mt-6 flex-col" style={{ width: '25em' }}>
       <div>
        <label htmlFor="underline_select" className="sr-only">Votre quartier de rêve</label>
        <select
         {...register("quartier")}
         id="underline_select"
         className="block py-2.5 px-0  w-22 sm:w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
         <option>Votre quartier de rêve</option>
         <option value="centre">Montpellier-Centre</option>
         <option value="croix-dargent">Croix-d'Argent</option>
         <option value="cevennes">Les Cévennes</option>
         <option value="mosson">Mosson</option>
         <option value="hopitaux">Hôpitaux-Facultés</option>
         <option value="port-marianne">Port-Marianne</option>
         <option value="arenes">Prés d'Arènes</option>
         <option value="castelnau">Castelnau-le-Lez</option>
         <option value="vendargues">Vendargues</option>
         <option value="grabels">Grabels</option>
         <option value="saint-jean-de-vedas">Saint-Jean-de-Védas</option>
         <option value="lattes">Lattes</option>
        </select>
       </div>
       <div className="flex items-center mb-2 mt-5">
        <label className="form-control">
         <div className="label">
         </div>
         <textarea {...register("quartier-autres")} className="textarea textarea-bordered h-14" placeholder="autres"></textarea>
        </label>
       </div>
      </div>
     </>
    )
   }
   {
    nextButton === 10 && (
     <>
      <AsyncNextImage
       src="/feux-dartifice.png"
       width={75}
       height={75}
       alt="Picture of the author"
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Les services qui doivent être à proximité:</h1>
      <div className="flex items-center mb-6 mt-6">
       <input {...register("servicesDeProximite")} id="ecole" type="checkbox" value="ecole" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="ecole-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">l’école ?</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("servicesDeProximite")} id="tramway" type="checkbox" value="tramway" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="tramway-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">les transports en commun ?</label>
      </div>
      <div className="flex items-center mb-2 mt-5">
       <label className="form-control">
        <div className="label">
         <span className="label-text">autres:</span>
        </div>
        <textarea {...register("servicesDeProximite")} className="textarea textarea-bordered h-14" placeholder=""></textarea>
       </label>
      </div>
     </>
    )
   }
   {
    nextButton === 11 && (
     <>
      <AsyncNextImage
       src="/feux-dartifice.png"
       width={75}
       height={75}
       alt="Picture of the author"
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Les petits plus à coté:</h1>
      <div className="flex items-center mb-6 mt-6">
       <input {...register("loisirsAproximite-parcs")} id="parcs" type="checkbox" value="parcs" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="parcs-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">parcs ?</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("loisirsAproximite-boutiques")} id="boutiques" type="checkbox" value="boutiques" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="boutiques-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">boutiques ?</label>
      </div>
      <div className="flex items-center mb-2 mt-4">
       <input {...register("loisirsAproximite-restaurants/bars")} id="restaurants/bars" type="checkbox" value="restaurants/bars" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="restaurants/bars-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">restaurants/bars ?</label>
      </div>
      <div className="flex items-center mb-2 mt-5">
       <label className="form-control">
        <div className="label">
         <span className="label-text">autres:</span>
        </div>
        <textarea className="textarea textarea-bordered h-14" placeholder="" {...register("loisirsAproximite-autres")}></textarea>
       </label>
      </div>
     </>
    )
   }
   {
    nextButton === 12 && (
     <>
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Plus généralement, quelle ambiance vous parle le plus?</h1>
      <div className='flex flex-col sm:flex-row mb-6 mt-6'>
       <div className="flex flex-col items-center mb-2 mr-4 mt-4 ml-4 sm:ml-0">
        <p className='mb-2'>nature</p>
        <input {...register("ambiance")} id="parcs" type="checkbox" value="parcs" className="w-5 h-5 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <AsyncNextImage
         src="/parc.png"
         width={75}
         height={75}
         alt="parcs"
         priority
        />
       </div>
       <div className="flex items-center mb-2 mt-4 ml-4 mr-4 flex-col">
        <p className='mb-2'>familiale</p>
        <input {...register("ambiance")} id="familiale" type="checkbox" value="familiale" className="w-5 h-5 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <AsyncNextImage
         src="/famille.png"
         width={75}
         height={75}
         alt="restaurants/bars"
         priority
        />
       </div>
       <div className="flex items-center mb-2 mt-4 ml-4 mr-4 flex-col">
        <p className='mb-2'>calme</p>
        <input {...register("ambiance")} id="calm" type="checkbox" value="calm" className="w-5 mb-2 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <AsyncNextImage
         src="/calme.png"
         width={75}
         height={75}
         alt="calm"
         priority
        />
       </div>
       <div className="flex items-center mb-2 mt-4 ml-4 flex-col">
        <p className='mb-2'>festive</p>
        <input {...register("ambiance")} id="restaurants/bars" type="checkbox" value="restaurants/bars" className="w-5 h-5 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <AsyncNextImage
         src="/cocktail.png"
         width={75}
         height={75}
         alt="restaurants/bars"
         priority
        />
       </div>

      </div>
     </>
    )
   }
   {
    nextButton === 13 && (
     <>
      <AsyncNextImage
       src="/important.png"
       width={75}
       height={75}
       alt="Picture of the author"
       priority
      />
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-6 mb-6'>Votre priorité: </h1>
      <textarea
       {...register("nonNegociable")}
       id="message"
       rows="4"
       className="block p-2.5 w-22 sm:w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Ce qui n’est pas négociable...">

      </textarea>
     </>
    )
   }
   {
    (nextButton === 14) && (
     <>
      <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4 mb-7'>Et pour terminer, merci de communiquer vos coordonnées: </h1>
      <input type="text"  {...register("email", { required: true })} placeholder="Email" className="input input-bordered input-info w-full max-w-xs mb-3" />
      <input type="text"  {...register("name", { required: true })} placeholder="Nom prénom" className="input input-bordered input-info w-full max-w-xs mb-3" />
      <div className="mb-6 mt-4">
       <input {...register("donneesPersonnelles", { required: true })} id="donneesPersonnelles" type="checkbox" value="donneesPersonnelles" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
       <label htmlFor="donneesPersonnelles-checkbox" className="ml-2 text-xs text-gray-900 dark:text-gray-300">J'autorise BienAdapté à envoyer mes coordonnées et mon projet d'achat aux agences partenaires qui sont susceptibles d'avoir des biens intéressants, et ce, de manière rémunérée ou non. En cochant la case "accepter et valider", j'accepte les conditions générales d'utilisation et la politique de confidentialité de BienAdapté, dont j'affirme avoir pris connaissance</label>
      </div>
      <button

       type="submit" className="btn btn-secondary"
      > Envoyer</button>
     </>
    )}
   {
    finalStep && (
     <div className="flex flex-col items-center ">
      <h1 className="sm:text-sm lg:text-2xl">Votre demande a bien été prise en compte, <br className='sm:display lg:hidden'></br>on revient vers vous très vite. &#128077;</h1>
     </div>
    )
   }
  </>
 );
};

export default FormSteps;

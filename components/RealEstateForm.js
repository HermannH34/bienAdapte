"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const RealEstateForm = ({ resetForm }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [formContent, setFormContent] = useState('initial');

    const onFormSubmit = data => {
        if (Array.isArray(data.propertyType)) {
            // Si propertyType est un tableau, prenez le premier élément
            setFormContent(data.propertyType[0]);
            console.log(formContent);
        } else {
            // obtenir le nom de la clé premiere de l'objet
            setFormContent(Object.keys(data)[0]);
        }
        // Logique pour vérifier ce que vous obtenez
        reset(); // Réinitialiser le formulaire après la soumission
    };


    return (
        <div style={{ marginLeft: '18em', marginTop: '8em' }}>
            {formContent === 'initial' && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Quel type de bien recherchez-vous?</h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="maison-checkbox" type="checkbox" value="maison" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="maison-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Une jolie maison</label>
                        </div>
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="appartement-checkbox" type="checkbox" value="appartement" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="appartement-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">plutôt appartement</label>
                        </div>
                        <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                    </form>
                </>
            )}
            {formContent === 'maison' && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Surface minimum et maximum: </h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                        <div>
                            <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">minimum:</label>
                            <input
                                {...register("selectedNumber")}
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="37 m2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">maximum:</label>
                            <input
                                {...register("selectedNumber")}
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="300 m2"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Soumettre
                        </button>
                    </form>
                </>

            )}
            {formContent === "selectedNumber" && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>On parle d’une maison: </h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="age-checkbox" type="checkbox" value="moderne" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="age" className="ml-2 text-lg text-gray-900 dark:text-gray-300">moderne</label>
                        </div>
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="age-checkbox" type="checkbox" value="typique" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="typique" className="ml-2 text-lg text-gray-900 dark:text-gray-300">typique</label>
                        </div>
                        <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                    </form>
                </>
            )}
            {(formContent === 'typique' || formContent === 'moderne') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Une maison: </h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="ville-checkbox" type="checkbox" value="ville" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="ville" className="ml-2 text-lg text-gray-900 dark:text-gray-300">de ville</label>
                        </div>
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="pavillonnaire-checkbox" type="checkbox" value="pavillonnaire" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="pavillonnaire" className="ml-2 text-lg text-gray-900 dark:text-gray-300">pavillonnaire</label>
                        </div>
                        <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                    </form>
                </>
            )}
            {(formContent === 'ville' || formContent === 'pavillonnaire') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Le jardin: </h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="jardin-oui-checkbox" type="checkbox" value="jardin-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="jardin-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
                        </div>
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="jardin-non-checkbox" type="checkbox" value="jardin-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="jardin-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
                        </div>
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="jardin-non-negociable-checkbox" type="checkbox" value="jardin-non-negociable" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="jardin-non-negociable" className="ml-2 text-lg text-gray-900 dark:text-gray-300">pas négociable !</label>
                        </div>
                        <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                    </form>
                </>
            )}
        </div>

    );
};

export default RealEstateForm;

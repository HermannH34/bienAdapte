"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const RealEstateForm = ({ resetForm }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [formContent, setFormContent] = useState('initial');

    const onFormSubmit = data => {
        console.log(data);
        if (Array.isArray(data.propertyType)) {
            setFormContent(data.propertyType[0]);
        } else {
            setFormContent(Object.keys(data)[0]);
        }
        reset();
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
            {(formContent.slice(0, 6) === 'jardin') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Et on va plus loin... une piscine ??</h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="piscine-oui-checkbox" type="checkbox" value="piscine-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="piscine-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
                        </div>
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id="piscine-non-checkbox" type="checkbox" value="piscine-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="piscine-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
                        </div>
                        <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                    </form>
                </>
            )}
            {(formContent.slice(0, 7) === 'piscine') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Combien de chambres est ce qu’il vous faut?</h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                        <div>

                            <input
                                {...register("bedrooms")}
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="3 chambres"
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
            {(formContent === 'bedrooms') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Combien de salle de bains? (les embouteillages y en a marre)</h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                        <div>

                            <input
                                {...register("bathrooms")}
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="2 salles de bains"
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
            {(formContent === 'bathrooms') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Votre budget: </h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                        <div>
                            <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">La fourchette basse:</label>
                            <input
                                {...register("budgetMin")}
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="60 000 €"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">La fourchette haute:</label>
                            <input
                                {...register("bugdetMax")}
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="1 000 000 €"
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
            {(formContent.slice(0, 6) === 'budget') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>En cas de coup de coeur: </h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                        <div>
                            <input
                                {...register("coupDeCoeur")}
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="?????? €"
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
            {(formContent === 'coupDeCoeur') && (
                <>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Il se déclenche comment le coup de foudre?</label>
                        <textarea
                            {...register("coupDeFoudre")}
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Lâchez vous ici...">
                        </textarea>
                        <button
                            type="submit"
                            className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Soumettre
                        </button>
                    </form>
                </>
            )}
            {(formContent === 'coupDeFoudre') && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Les travaux: </h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partant ou pas partant</label>
                        <input
                            {...register("travaux")}
                            id="minmax-range"
                            type="range"
                            min="0"
                            max="10"
                            defaultValue="5"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <button
                            type="submit"
                            className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Soumettre
                        </button>
                    </form>
                </>
            )}
            {formContent === 'travaux' && (
                <>
                    <h1 className='text-2xl font-semibold font-sans'>Inclus dans le budget ou pas?</h1>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("travauxDansBudget")} id="travauxDansBudget-checkbox" type="checkbox" value="travauxDansBudget" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="travauxDansBudget-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
                        </div>
                        <div className="flex items-center mb-2 mt-4">
                            <input {...register("travauxPasDansBudget")} id="travauxPasDansBudget" type="checkbox" value="travauxPasDansBudget" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="travauxPasDansBudget-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
                        </div>
                        <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                    </form>
                </>
            )
            }

        </div >


    );
};

export default RealEstateForm;

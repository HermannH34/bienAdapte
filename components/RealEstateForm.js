"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image'
import './style.css';

const RealEstateForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [formContent, setFormContent] = useState('initial');
    const [typeOfproperty, setTypeOfProperty] = useState('');

    let typeOfProperty = '';

    if (typeOfproperty === 'appartement') {
        typeOfProperty = 'un appartement'
    } else {
        typeOfProperty = 'maison';
    }


    const onFormSubmit = data => {
        console.log("Data :", data);
        if (formContent === "appartement" || formContent === "maison") {
            setTypeOfProperty(formContent);
        }

        if (Array.isArray(data.propertyType)) {
            setFormContent(data.propertyType[0]);
        } else {
            const formValue = Object.keys(data)[0]
            setFormContent(formValue);
        }

        reset();
    };




    return (
        <>
            <div className="w-1/2 mx-auto"
            >
                {formContent === 'initial' && (
                    <>
                        <div>
                            <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12">
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                        </div>

                        <div className='ml-16'>
                            <Image
                                src="/cle.png"
                                width={75}
                                height={75}
                                alt="Picture of the author"
                            />
                            <h1 className='text-base sm:text-2xl font-semibold mt-8'>Quel type de bien recherchez-vous?</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("propertyType")} id="maison-checkbox" type="checkbox" value="maison" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="maison-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Une jolie maison</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("propertyType")} id="appartement-checkbox" type="checkbox" value="appartement" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="appartement-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Un bel appartement</label>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant
                                </button>
                            </form>
                        </div>
                    </>
                )}
                {(formContent === 'appartement' || formContent === 'maison') && (
                    <>
                        <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                        <div className='hidden sm:block'>
                            <ul className="steps mb-12">
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
                                <li className="step">Votre priorité</li>
                            </ul>
                        </div>
                        <div className='ml-16'>
                            <Image
                                src="/ruler.png"
                                width={75}
                                height={75}
                                alt="Picture of the author"
                            />
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-8'>Surface minimum et maximum: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <div className='mb-2'>
                                    <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">minimum:</label>
                                    <input
                                        {...register("surface")}
                                        type="number"
                                        id="number-input"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="37 m2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">maximum:</label>
                                    <input
                                        {...register("surface")}
                                        type="number"
                                        id="number-input"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="300 m2"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="py-2.5 px-5 mt-3 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Suivant
                                </button>
                            </form>
                        </div>
                    </>

                )}
                {(formContent === "surface" && typeOfProperty === "maison") && (
                    <>
                        <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                        <div className='hidden sm:block'>
                            <ul className="steps mb-12">
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
                                <li className="step">Votre priorité</li>
                            </ul>
                        </div>
                        <div className='ml-16'>
                            <Image
                                src="/feux-dartifice.png"
                                width={75}
                                height={75}
                                alt="Picture of the author"
                            />
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>On parle d’une maison: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
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
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                            </form>
                        </div>
                    </>
                )}
                {(typeOfproperty === 'appartement' && formContent === "propertyAge") && (
                    <>
                        <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                        <div className='hidden sm:block'>
                            <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
                                <li className="step">Votre priorité</li>
                            </ul>
                        </div>
                        <div className="pt-10">
                            <Image
                                src="/bicycle.png"
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <h1 className='text-lg sm:text-2xl font-semibold font-sans mt-4'> On se déplace à vélo?</h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("velo")} id="velo-checkbox" type="checkbox" value="velo" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="velo" className="ml-2 text-base sm:text-lg text-gray-900 dark:text-gray-300">je préfererai avoir un local vélo dans <br></br> mon immeuble</label>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("velo")} id="velo-checkbox" type="checkbox" value="velo" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="velo" className="ml-2 text-base sm:text-lg  text-gray-900 dark:text-gray-300">ce n'est pas important pour moi</label>
                            </div>
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                        </form>
                    </>
                )}
                {(typeOfproperty === 'appartement' && formContent === "velo") && (
                    <>
                        <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                        <div className='hidden sm:block'>
                            <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
                                <li className="step">Votre priorité</li>
                            </ul>
                        </div>
                        <div className="pt-10">
                            <Image
                                src="/car (2).png"
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <h1 className='text-lg sm:text-2xl font-semibold font-sans mt-8'>On se déplace en voiture?</h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("parking")} id="parking-checkbox" type="checkbox" value="parking" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="parking" className="ml-2 text-base sm:text-lg  text-gray-900 dark:text-gray-300">je veux une place de parking au <br></br>sein de mon immeuble</label>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("parking")} id="parking-checkbox" type="checkbox" value="parking" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="parking" className="ml-2 text-base sm:text-lg  text-gray-900 dark:text-gray-300">ça m'est égal</label>
                            </div>
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                        </form>
                    </>
                )}
                {
                    (typeOfproperty === 'appartement' && formContent === 'parking') && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/chauffe-eau.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Le chauffage:</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("chauffage")} id="chauffage-oui-checkbox" type="checkbox" value="chauffage-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="chauffage-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">collectif</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("chauffage")} id="chauffage-non-checkbox" type="checkbox" value="chauffage-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="chauffage-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">individuel</label>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                            </form>
                        </>
                    )
                }

                {
                    (typeOfproperty === 'maison' && formContent === "propertyAge") && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12">
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className='ml-16'>
                                <Image
                                    src="/fleurs.png"
                                    width={75}
                                    height={75}
                                    alt="Picture of the author"
                                />
                                <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Le jardin: </h1>
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
                                        <label htmlFor="jardin-non-negociable" className="ml-2 text-lg text-gray-900 dark:text-gray-300">sans jardin c'est rédhibitoire</label>
                                    </div>
                                    <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                                </form>
                            </div>
                        </>
                    )
                }
                {
                    (typeOfproperty === 'maison' && formContent.slice(0, 6) === 'jardin') && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12">
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className='ml-16'>
                                <Image
                                    src="/piscine.png"
                                    width={75}
                                    height={75}
                                    alt="Picture of the author"
                                />
                                <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Et on va plus loin... une piscine ?</h1>
                                <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                    <div className="flex items-center mb-2 mt-4">
                                        <input {...register("propertyType")} id="piscine-oui-checkbox" type="checkbox" value="piscine-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="piscine-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
                                    </div>
                                    <div className="flex items-center mb-2 mt-4">
                                        <input {...register("propertyType")} id="piscine-non-checkbox" type="checkbox" value="piscine-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="piscine-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
                                    </div>
                                    <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                                </form>
                            </div>
                        </>
                    )
                }
                {
                    (formContent === "chauffage" || formContent.slice(0, 7) === 'piscine') && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Type de bien:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12">
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className='ml-16'>
                                <form onSubmit={handleSubmit(onFormSubmit)} className="mt-6 max-w-sm">
                                    <div className='mb-12'>
                                        <div className="flex items-center">
                                            <Image
                                                src="/bed.png"
                                                width={60}
                                                height={60}
                                                alt="Picture of the author"
                                                className='mr-4 mt-0'
                                            />
                                            <div>
                                                <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Combien de chambres est ce qu’il vous faut?</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="number-input" className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">au minimum</label>
                                            <input
                                                {...register("bedroomsMin")}
                                                type="number"
                                                id="number-input"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="1"
                                                required
                                            />
                                            <label htmlFor="number-input" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">au maximum:</label>
                                            <input
                                                {...register("bedroomsMax")}
                                                type="number"
                                                id="number-input"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="6"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <Image
                                                src="/bath.png"
                                                width={60}
                                                height={60}
                                                alt="Picture of the author"
                                                className='mr-4 mt-0'
                                            />
                                            <div>
                                                <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Combien de salle de bains?</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="number-input" className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">au minimum</label>
                                            <input
                                                {...register("bathroomsMin")}
                                                type="number"
                                                id="number-input"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="1"
                                                required
                                            />
                                            <label htmlFor="number-input" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">au maximum:</label>
                                            <input
                                                {...register("bathroomsMax")}
                                                type="number"
                                                id="number-input"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="6"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        >
                                            Suivant
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }
                {
                    (formContent.slice(0, 8) === 'bedrooms' || formContent.slice(0, 8) === 'bathrooms') && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Budget:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/money-bag.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Votre budget: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <div className='mb-2'>
                                    <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">La fourchette basse:</label>
                                    <input
                                        {...register("budgetMin")}
                                        type="number"
                                        id="number-input"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="1 000 000 €"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Suivant
                                </button>
                            </form>
                        </>


                    )
                }
                {
                    (formContent.slice(0, 6) === 'budget') && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Budget:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/coeur.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>En cas de coup de coeur: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <div>
                                    <input
                                        {...register("coupDeCoeur")}
                                        type="number"
                                        id="number-input"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="?????? €"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Suivant
                                </button>
                            </form>
                        </>
                    )
                }
                {
                    (formContent === 'coupDeCoeur') && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Budget:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/foudre.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Il se déclenche comment le coup de foudre?</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <textarea
                                    {...register("coupDeFoudre")}
                                    id="message"
                                    rows="4"
                                    className="block p-2.5 w-22 sm:w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Lâchez vous ici...">
                                </textarea>
                                <button
                                    type="submit"
                                    className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Suivant
                                </button>
                            </form>
                        </>
                    )
                }
                {
                    (formContent === 'coupDeFoudre') && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Budget:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/maintenance.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Les travaux: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Partant ou pas partant</label>
                                <input
                                    {...register("travaux")}
                                    id="minmax-range"
                                    type="range"
                                    min="0"
                                    max="10"
                                    defaultValue="5"
                                    className="w-full sm:w-22 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                />
                                <button
                                    type="submit"
                                    className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Suivant
                                </button>
                            </form>

                        </>
                    )
                }
                {
                    formContent === 'travaux' && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Budget:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/maintenance.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Inclus dans le budget ou pas?</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("travauxDansBudget")} id="travauxDansBudget-checkbox" type="checkbox" value="travauxDansBudget" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="travauxDansBudget-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Oui</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("travauxPasDansBudget")} id="travauxPasDansBudget" type="checkbox" value="travauxPasDansBudget" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="travauxPasDansBudget-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Non</label>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                            </form>
                        </>
                    )
                }
                {
                    formContent === 'travauxDansBudget' && (
                        <>
                            <>
                                <h1 className='text-2xl font-bold lg:hidden'>Localisation/environnement:</h1>
                                <div className='hidden sm:block'>
                                    <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                        <li className="step step-primary">Type de bien</li>
                                        <li className="step step-primary">Budget</li>
                                        <li className="step step-primary">Localisation et environnement</li>
                                        <li className="step">Votre priorité</li>
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <Image
                                        src="/accueil.png"
                                        width={80}
                                        height={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>C’est bon, on a défini votre bien idéal. <br></br>Mais il se situe où? </h1>
                                <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                    <div className="flex items-center w-12  mb-2 mt-4" style={{ width: '25em' }}>
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
                                        </select>
                                    </div>
                                    <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        Suivant
                                    </button>
                                </form>
                            </>

                        </>
                    )
                }
                {
                    formContent === 'quartier' && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Localisation/environnement:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step step-primary">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/feux-dartifice.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Les services qui doivent être à proximité:</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("servicesDeProximite")} id="ecole" type="checkbox" value="ecole" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="ecole-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">l’école ?</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("servicesDeProximite")} id="tramway" type="checkbox" value="tramway" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="tramway-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">les transports en commun ?</label>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                            </form>
                        </>
                    )
                }
                {
                    formContent === 'servicesDeProximite' && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Localisation/environnement:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step step-primary">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/feux-dartifice.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Les petits plus à coté:</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("loisirsAproximite")} id="parcs" type="checkbox" value="parcs" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="parcs-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">parcs ?</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("loisirsAproximite")} id="boutiques" type="checkbox" value="boutiques" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="boutiques-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">boutiques ?</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("loisirsAproximite")} id="restaurants/bars" type="checkbox" value="restaurants/bars" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="restaurants/bars-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">restaurants/bars ?</label>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                            </form>
                        </>
                    )
                }
                {
                    formContent === 'loisirsAproximite' && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Localisation/environnement:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step step-primary">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">

                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Plus généralement, quelle ambiance vous <br></br> parle le plus?</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className='flex flex-row'>
                                    <div className="flex flex-col items-center mb-2 mr-4 mt-4">
                                        <input {...register("ambiance")} id="parcs" type="checkbox" value="parcs" className="w-5 h-5 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Image
                                            src="/parc.png"
                                            width={80}
                                            height={80}
                                            alt="parcs"
                                        />
                                    </div>
                                    <div className="flex items-center mb-2 mt-4 ml-4 mr-4 flex-col">
                                        <input {...register("ambiance")} id="calm" type="checkbox" value="calm" className="w-5 mb-2 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Image
                                            src="/calme.png"
                                            width={80}
                                            height={80}
                                            alt="calm"
                                        />
                                    </div>
                                    <div className="flex items-center mb-2 mt-4 ml-4 flex-col">
                                        <input {...register("ambiance")} id="restaurants/bars" type="checkbox" value="restaurants/bars" className="w-5 h-5 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <Image
                                            src="/biere.png"
                                            width={80}
                                            height={80}
                                            alt="restaurants/bars"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant</button>
                            </form>

                        </>
                    )
                }
                {
                    formContent === 'ambiance' && (
                        <>
                            <h1 className='text-2xl font-bold lg:hidden'>Votre priorité:</h1>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step step-primary">Localisation et environnement</li>
                                    <li className="step step-primary">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/important.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Votre priorité: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <textarea
                                    {...register("nonNegociable")}
                                    id="message"
                                    rows="4"
                                    className="block p-2.5 w-22 sm:w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ce qui n’est pas négociable...">

                                </textarea>
                                <button
                                    type="submit"
                                    className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Suivant
                                </button>
                            </form>

                        </>
                    )
                }
                {
                    formContent === 'nonNegociable' && (
                        <>
                            <div className='hidden sm:block'>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step step-primary">Localisation et environnement</li>
                                    <li className="step step-primary">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                            </div>
                            <h1 className='text-base sm:text-2xl font-semibold font-sans mt-4'>Et pour terminer, merci de communiquer vos coordonnées: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <input type="text"  {...register("email", { required: true })} placeholder="Email" className="input input-bordered input-info w-full max-w-xs mb-3" />
                                <input type="text"  {...register("name", { required: true })} placeholder="Nom prénom" className="input input-bordered input-info w-full max-w-xs mb-3" />
                                <div className="mb-6 mt-4">
                                    <input {...register("donneesPersonnelles", { required: true })} id="donneesPersonnelles" type="checkbox" value="donneesPersonnelles" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="donneesPersonnelles-checkbox" className="ml-2 text-xs text-gray-900 dark:text-gray-300">J'autorise BienAdapté à envoyer mes coordonnées et mon projet d'achat aux agences partenaires qui sont susceptibles d'avoir des biens intéressants. En cochant la case "accepter et valider", j'accepte les conditions générales d'utilisation et la politique de confidentialité de BienAdapté dont j'affirme avoir pris connaissance.</label>
                                </div>
                                <button

                                    type="submit" className="btn btn-secondary"
                                > Envoyer</button>

                            </form>
                        </>
                    )
                }
            </div >
            {
                formContent === 'email' && (
                    <div className="flex flex-col items-center ">
                        <h1 className="sm:text-sm lg:text-2xl">Votre demande a bien été prise en compte, <br className='sm:display lg:hidden'></br>on revient vers vous très vite. &#128077;</h1>
                    </div>
                )
            }
        </>

    );
};

export default RealEstateForm;

"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image'
import realEstateForm from '@/app/form/residenceprincipale/page';
import { randomBytes } from 'crypto';
import Link from 'next/link';
import config from '@/config';

const RealEstateForm = ({ resetForm }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [formContent, setFormContent] = useState('initial');
    const [typeOfproperty, setTypeOfProperty] = useState('');
    const [chronology, setChronolgy] = useState('Résidence principale')

    let typeOfPropertyString = '';
    let realEstateImg = '';
    if (typeOfproperty === 'appartement') {
        typeOfPropertyString = 'un appartement';
        realEstateImg = '/buildings.png';
    } else {
        typeOfPropertyString = 'une maison';
        realEstateImg = '/home.png';
    }


    const onFormSubmit = data => {
        console.log("Data :", data);
        if (formContent === "appartement" || formContent === "maison") {
            setChronolgy(formContent)
            setTypeOfProperty(formContent);
        }

        if (Array.isArray(data.propertyType)) {
            setFormContent(data.propertyType[0]);
        } else {
            const formValue = Object.keys(data)[0]
            setFormContent(formValue);

            if (formValue === "appartement" || formValue === "maison") {
                setChronolgy(chronology)
            }
            console.log('chronology:', chronology)
        }

        reset();
    };

    return (
        // style={{ fontFamily: 'Roboto, sans-serif' }}
        <>
            <div style={{ marginLeft: '16em', marginTop: '6em', position: 'relative', fontFamily: 'Roboto, sans-serif' }} >
                {formContent === 'initial' && (
                    <>
                        <div>
                            <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
                                <li className="step">Votre priorité</li>
                            </ul>
                        </div>
                        <div className="pt-10">
                            <Image
                                src="/cle.png"
                                width={75}
                                height={75}
                                alt="Picture of the author"
                            />
                        </div>
                        <h1 className='text-2xl font-semibold font-sans mt-8'>Quel type de bien recherchez-vous?</h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("propertyType")} id="maison-checkbox" type="checkbox" value="maison" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="maison-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Une jolie maison</label>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("propertyType")} id="appartement-checkbox" type="checkbox" value="appartement" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="appartement-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">Un bel appartement</label>
                            </div>
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                        </form>
                    </>
                )}
                {(formContent === 'appartement' || formContent === 'maison') && (
                    <>
                        <div>
                            <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
                                <li className="step">Votre priorité</li>
                            </ul>
                        </div>
                        <div className="pt-10">
                            <Image
                                src="/ruler.png"
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                        </div>
                        <h1 className='text-2xl font-semibold font-sans mt-8'>Surface minimum et maximum: </h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                            <div className='mb-2'>
                                <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">minimum:</label>
                                <input
                                    {...register("surface")}
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
                                    {...register("surface")}
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
                {(formContent === "surface") && (

                    <>
                        <div>
                            <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
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
                        <h1 className='text-2xl font-semibold font-sans mt-4'>On parle d’{typeOfPropertyString}: </h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="moderne" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="age" className="ml-2 text-lg text-gray-900 dark:text-gray-300">moderne</label>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("propertyAge")} id="age-checkbox" type="checkbox" value="typique" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="typique" className="ml-2 text-lg text-gray-900 dark:text-gray-300">classique</label>
                            </div>
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                        </form>
                    </>
                )}
                {(typeOfproperty === 'appartement' && formContent === "propertyAge") && (
                    <>
                        <div>
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
                        <h1 className='text-2xl font-semibold font-sans mt-4'> On se déplace à vélo?</h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("velo")} id="velo-checkbox" type="checkbox" value="velo" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="velo" className="ml-2 text-lg text-gray-900 dark:text-gray-300">je préfererai avoir un local vélo dans mon immeuble</label>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("velo")} id="velo-checkbox" type="checkbox" value="velo" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="velo" className="ml-2 text-lg text-gray-900 dark:text-gray-300">ce n'est pas important pour moi</label>
                            </div>
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                        </form>
                    </>
                )}
                {(typeOfproperty === 'appartement' && formContent === "velo") && (
                    <>
                        <div>
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
                        <h1 className='text-2xl font-semibold font-sans mt-8'>On se déplace en voiture?</h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("parking")} id="parking-checkbox" type="checkbox" value="parking" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="parking" className="ml-2 text-lg text-gray-900 dark:text-gray-300">je veux une place de parking au sein de mon immeuble</label>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("parking")} id="parking-checkbox" type="checkbox" value="parking" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="parking" className="ml-2 text-lg text-gray-900 dark:text-gray-300">ça m'est égal</label>
                            </div>
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                        </form>
                    </>
                )}
                {
                    (typeOfproperty === 'appartement' && formContent === 'parking') && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Le chauffage:</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("chauffage")} id="chauffage-oui-checkbox" type="checkbox" value="chauffage-oui" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="chauffage-oui" className="ml-2 text-lg text-gray-900 dark:text-gray-300">collectif</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("chauffage")} id="chauffage-non-checkbox" type="checkbox" value="chauffage-non" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="chauffage-non" className="ml-2 text-lg text-gray-900 dark:text-gray-300">individuel</label>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                            </form>
                        </>
                    )
                }
                {(typeOfproperty === 'maison' && formContent === "propertyAge") && (
                    <>
                        <div>
                            <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                <li className="step step-primary">Type de bien</li>
                                <li className="step">Budget</li>
                                <li className="step">Localisation et environnement</li>
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
                        <h1 className='text-2xl font-semibold font-sans mt-4'>Une maison: </h1>
                        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-4">
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("propertyType")} id="ville-checkbox" type="checkbox" value="ville" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="ville" className="ml-2 text-lg text-gray-900 dark:text-gray-300">de ville</label>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <input {...register("propertyType")} id="pavillonnaire-checkbox" type="checkbox" value="pavillonnaire" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="pavillonnaire" className="ml-2 text-lg text-gray-900 dark:text-gray-300">en quartier résidentiel</label>
                            </div>
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                        </form>
                    </>
                )
                }
                {
                    (typeOfproperty === 'maison' && (formContent === 'ville' || formContent === 'pavillonnaire')) && (
                        <>
                            <div>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/fleurs.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Le jardin: </h1>
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
                    )
                }
                {
                    (typeOfproperty === 'maison' && formContent.slice(0, 6) === 'jardin') && (
                        <>
                            <div>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/piscine.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Et on va plus loin... une piscine ?</h1>
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
                    )
                }
                {
                    (formContent === "chauffage" || formContent.slice(0, 7) === 'piscine') && (
                        <>
                            <div>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/bed.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Combien de chambres est ce qu’il vous faut?</h1>
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
                    )
                }
                {
                    (formContent === 'bedrooms') && (
                        <>
                            <div>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step">Budget</li>
                                    <li className="step">Localisation et environnement</li>
                                    <li className="step">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                                <Image
                                    src="/bath.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Combien de salle de bains? (les embouteillages y'en a marre)</h1>
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
                    )
                }
                {
                    (formContent === 'bathrooms') && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Votre budget: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <div className='mb-2'>
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


                    )
                }
                {
                    (formContent.slice(0, 6) === 'budget') && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>En cas de coup de coeur: </h1>
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
                    )
                }
                {
                    (formContent === 'coupDeCoeur') && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Il se déclenche comment le coup de foudre?</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
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
                    )
                }
                {
                    (formContent === 'coupDeFoudre') && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Les travaux: </h1>
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
                    )
                }
                {
                    formContent === 'travaux' && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Inclus dans le budget ou pas?</h1>
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
                {
                    formContent === 'travauxDansBudget' && (
                        <>
                            <>
                                <div>
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
                                <h1 className='text-2xl font-semibold font-sans mt-4'>C’est bon, on a défini votre bien idéal. Mais il se situe où? </h1>
                                <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                    <div className="flex items-center w-12  mb-2 mt-4" style={{ width: '25em' }}>
                                        <label htmlFor="underline_select" className="sr-only">Votre quartier de rêve</label>
                                        <select
                                            {...register("quartier")}
                                            id="underline_select"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
                                        Soumettre
                                    </button>
                                </form>
                            </>

                        </>
                    )
                }
                {
                    formContent === 'quartier' && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Les services qui doivent être à proximité:</h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("servicesDeProximite")} id="ecole" type="checkbox" value="ecole" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="ecole-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">l’école ?</label>
                                </div>
                                <div className="flex items-center mb-2 mt-4">
                                    <input {...register("servicesDeProximite")} id="tramway" type="checkbox" value="tramway" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="tramway-checkbox" className="ml-2 text-lg text-gray-900 dark:text-gray-300">les transports en commun ?</label>
                                </div>
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                            </form>
                        </>
                    )
                }
                {
                    formContent === 'servicesDeProximite' && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Les petits plus à coté:</h1>
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
                                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                            </form>
                        </>
                    )
                }
                {formContent === 'loisirsAproximite' && (
                    <>
                        <div>
                            <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                <li className="step step-primary">Type de bien</li>
                                <li className="step step-primary">Budget</li>
                                <li className="step step-primary">Localisation et environnement</li>
                                <li className="step">Votre priorité</li>
                            </ul>
                        </div>
                        <div className="pt-10">

                        </div>
                        <h1 className='text-2xl font-semibold font-sans mt-4'>Plus généralement, quelle ambiance vous parle le plus?</h1>
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
                            <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
                        </form>

                    </>
                )}
                {
                    formContent === 'ambiance' && (
                        <>
                            <div>
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
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Votre priorité: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <textarea
                                    {...register("nonNegociable")}
                                    id="message"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ce qui n’est pas négociable...">

                                </textarea>
                                <button
                                    type="submit"
                                    className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Soumettre
                                </button>
                            </form>

                        </>
                    )
                }
                {
                    formContent === 'nonNegociable' && (
                        <>
                            <div>
                                <ul className="steps mb-12" style={{ marginLeft: '-14em', marginTop: '-5em', position: 'absolute' }}>
                                    <li className="step step-primary">Type de bien</li>
                                    <li className="step step-primary">Budget</li>
                                    <li className="step step-primary">Localisation et environnement</li>
                                    <li className="step step-primary">Votre priorité</li>
                                </ul>
                            </div>
                            <div className="pt-10">
                            </div>
                            <h1 className='text-2xl font-semibold font-sans mt-4'>Et pour terminer, merci de communiquer vos coordonnées: </h1>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 max-w-sm">
                                <input type="text"  {...register("email")} placeholder="Email" className="input input-bordered input-info w-full max-w-xs mb-3" />
                                <input type="text"  {...register("name")} placeholder="Nom prénom" className="input input-bordered input-info w-full max-w-xs mb-3" />
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
                        <h1 className="text-2xl">Votre demande a bien été prise en compte, on reviens vers vous très vite. &#128077;</h1>
                    </div>
                )}
        </>

    );
};

export default RealEstateForm;

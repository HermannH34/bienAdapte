"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const RealEstateForm = ({ resetForm }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [formContent, setFormContent] = useState('initial');
    const [nextQuestion, setNextQuestion] = useState('');


    const questions = {
        initialQuestion: {
            question: 'Quel type de bien souhaitez-vous acheter ?',
            choices: ["Plutôt maison", "Ou appartement"],
        },
        surface: {
            question: "Quelle surface pour votre maison ?",
            choices: ["Entre 50m² et 100m²", "Plus de 100m²"],
        },
        houseLocalisation: {
            question: "On parle d’une maison:",
            choices: ["de ville", "en quartier pavillonnaire"],
        },
        houseGarden: {
            question: "Le jardin ?",
            choices: ["Oui", "Non", "Pas négociable"],
        },
        swimmingPoolGarden: {
            question: "Et on va plus loin...",
            choices: ["Une piscine ??"],
        },
        bedRooms: {
            question: "Combien de chambres est ce qu’il vous faut? 1, 2, 3...??",
            numberInput: true
        },
        bathRooms: {
        }

    };

    useEffect(() => {

        if (resetForm) {
            setFormContent('initial');
            setNextQuestion(questions.initialQuestion);
        } else if (formContent === 'initial') {
            setNextQuestion(questions.initialQuestion);
        } else if (formContent[0] === 'Plutôt maison') {
            setNextQuestion(questions.surface);
        } else if (formContent.includes("Entre 50m² et 100m²") || formContent.includes("Plus de 100m²")) {
            setNextQuestion(questions.houseLocalisation);
        } else if (formContent.includes("de ville") || formContent.includes("en quartier pavillonnaire")) {
            setNextQuestion(questions.houseGarden);
        } else if (formContent.includes("Oui") || formContent.includes("Non") || formContent.includes("Pas négociable")) {
            setNextQuestion(questions.swimmingPoolGarden);
        } else if (formContent.includes("Une piscine ??")) {
            setNextQuestion(questions.bedRooms);
        }


    }, [formContent, resetForm]);


    const onFormSubmit = data => {
        console.log(data.propertyType);
        setFormContent([...data.propertyType]);
        reset();
    };

    if (nextQuestion.numberInput) {
        return (
            <div style={{ marginLeft: '18em', marginTop: '8em' }}>
                <h1 className='text-2xl font-semibold font-sans'>{nextQuestion.question}</h1>
                <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">

                    {/* { */}

                    {/* // <form class="max-w-sm mx-auto"> */}
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choisir un nombre:</label>
                    <input {...register("propertyType")} type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3" required />
                    {/* </form> */}

                    {/* } */}
                </form>
                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>

            </div>
        )
    }

    return (
        <div style={{ marginLeft: '18em', marginTop: '8em' }}>
            <h1 className='text-2xl font-semibold font-sans'>{nextQuestion.question}</h1>
            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">


                {
                    nextQuestion.choices && nextQuestion.choices.map((choice, index) => (
                        <div key={index} className="flex items-center mb-2 mt-4">
                            <input {...register("propertyType")} id={choice} type="checkbox" value={choice} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor={choice} className="ms-2 text-base text-lg text-gray-900 dark:text-gray-300">{choice}</label>
                        </div>
                    ))
                }
                <button type="submit" className="py-2.5 px-5 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Soumettre</button>
            </form>
        </div>
    );
};

export default RealEstateForm;

"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import FormSteps from './FormSteps';
import Steps from './Steps';
import sendDataInDB from '../../libs/actions.js';

const RealEstateForm = () => {
    const { register, handleSubmit, setError, clearErrors, formState: { errors }, watch } = useForm();

    const [typeOfProperty, setTypeOfProperty] = useState('');
    const [nextButton, setNextButton] = useState(0);
    const [finalStep, setFinalStep] = useState(false);

    const [step, setStep] = useState('Type de bien: ')
    const formRef = useRef(null);

    const [chronology, setChronology] = useState({
        typeOfProperty: "step step-primary",
        budget: "step",
        localisation: "step",
        priority: "step",
    })


    useEffect(() => {
        updateStepAndChronology(nextButton, setStep, setChronology);

    }, [nextButton]);


    const handleFormSubmit = async data => {
        const dataInserted = await sendDataInDB(data)
        setNextButton(nextButton => nextButton + 1)

        setFinalStep(dataInserted)
    };

    const nextStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const watchedValue = watch('propertyType')


        if (!watchedValue && nextButton === 0) {
            setError("propertyType", { type: "manual", message: "Vous devez sélectionner au moins une option" });
            return;
        }
        clearErrors("typeOfProperty");

        const houseStep = watchedValue && watchedValue[0] === "maison"
        const apartmentStep = watchedValue && watchedValue[0] === "appartement"

        if (houseStep || apartmentStep) {
            setTypeOfProperty(watchedValue[0]);
        }
        setNextButton(nextButton => nextButton + 1)

    }

    const pastStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setNextButton(nextButton => nextButton - 1)

        if (nextButton === 0) {
            setTypeOfProperty('')
        }

    }


    return (
        <>
            <div className="w-1/2 mx-auto"
            >
                <>
                    <Steps chronology={chronology} step={step} />
                    <div className='sm:ml-16'>
                        <form ref={formRef} className="mt-5" onSubmit={handleSubmit(handleFormSubmit)} >
                            <>
                                <FormSteps
                                    nextButton={nextButton}
                                    register={register}
                                    errors={errors}
                                    typeOfProperty={typeOfProperty}
                                    finalStep={finalStep}

                                />
                            </>

                        </form>
                        <div className='flex mt-3'>
                            {
                                (nextButton < 14 && nextButton !== 0) && (
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        pastStep();
                                    }} className="py-2.5 px-3 mt-6 mb-2 mr-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Précédent
                                    </button>
                                )
                            }
                            {
                                nextButton < 14 && (
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        nextStep();
                                    }}
                                        className="py-2.5 px-5 mt-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </>
            </div >
        </>
    );
};


const updateStepAndChronology = (stepIndex, setStep, setChronology) => {
    if (stepIndex < 6) {
        setStep('Type de bien: ');
        setChronology({
            typeOfProperty: "step step-primary",
            budget: "step",
            localisation: "step",
            priority: "step",
        });
    } else if (stepIndex < 9) {
        setStep('Budget: ');
        setChronology({
            typeOfProperty: "step step-primary",
            budget: "step step-primary",
            localisation: "step",
            priority: "step",
        });
    } else if (stepIndex < 13) {
        setStep('Localisation et environnement: ');
        setChronology({
            typeOfProperty: "step step-primary",
            budget: "step step-primary",
            localisation: "step step-primary",
            priority: "step",
        });
    } else if (stepIndex < 14) {
        setStep('Votre priorité: ');
        setChronology({
            typeOfProperty: "step step-primary",
            budget: "step step-primary",
            localisation: "step step-primary",
            priority: "step step-primary",
        });
    } else {
        setStep('');
        setChronology({
            typeOfProperty: "step step-primary",
            budget: "step step-primary",
            localisation: "step step-primary",
            priority: "step step-primary",
        });
    }
};


export default RealEstateForm;

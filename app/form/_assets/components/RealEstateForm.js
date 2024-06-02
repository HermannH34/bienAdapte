"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import FormSteps from './FormSteps';
import Steps from './Steps';
import insertForm from './actions.js';

const RealEstateForm = () => {
    const { register, handleSubmit, setError, clearErrors, formState: { errors }, reset } = useForm();

    const [typeOfProperty, setTypeOfProperty] = useState('');
    const [nextButton, setNextButton] = useState(0);
    const [step, setStep] = useState('Type de bien: ')
    const formRef = useRef(null);

    const [chronology, setChronology] = useState({
        typeOfProperty: "step step-primary",
        budget: "step",
        localisation: "step",
        priority: "step",
    })

    const [datasForDB, setDatasForDB] = useState({})

    useEffect(() => {
        updateStepAndChronology(nextButton, setStep, setChronology);
        if (nextButton === 15 && formRef.current) {
            setTimeout(() => {
                formRef.current.submit();
                handleSendDataToDB(datasForDB);
            }, 2000)
        }

    }, [nextButton]);


    const handleFormSubmit = data => {
        onFormSubmit(data, nextButton, setError, clearErrors, setTypeOfProperty, setNextButton, reset, datasForDB, setDatasForDB);
    };

    const pastStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setNextButton(nextButton => nextButton - 1)

        if (nextButton === 0) {
            setTypeOfProperty('')
        }

        reset()
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

                                />
                            </>
                            <div className='flex mt-3'>
                                {
                                    (nextButton < 14 && nextButton !== 0) && (
                                        <button type="submit" value="past" onClick={(e) => {
                                            e.preventDefault();
                                            pastStep();
                                        }} className="py-2.5 px-3 mt-6 mb-2 mr-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Précédent
                                        </button>
                                    )
                                }
                                {
                                    nextButton < 14 && (
                                        <button type="submit" className="py-2.5 px-5 mt-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Suivant
                                        </button>
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </>
            </div >
        </>
    );
};

const handleSendDataToDB = async (datasForDB) => {
    insertForm(datasForDB);
}

const onFormSubmit = async (data, nextButton, setError, clearErrors, setTypeOfProperty, setNextButton, reset, datasForDB, setDatasForDB) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });


    const dataKey = Object.keys(data)
    const dataValue = Object.values(data)


    setDatasForDB(prevDatasForDB => ({
        ...prevDatasForDB,
        [dataKey]: dataValue
    }));



    const propertyTypeInput = data.propertyType

    if (propertyTypeInput == null && nextButton === 0) {
        setError("propertyType", { type: "manual", message: "Vous devez sélectionner au moins une option" });
        return;
    }
    clearErrors("typeOfProperty");

    let formValueForPropertyType;
    if (nextButton === 0) {
        formValueForPropertyType = data.propertyType[0];
    }

    if (formValueForPropertyType === "maison" || formValueForPropertyType === "appartement") {
        setTypeOfProperty(formValueForPropertyType);
    }

    setNextButton(nextButton => nextButton + 1);

    reset();
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

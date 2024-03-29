"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const RealEstateForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [formContent, setFormContent] = useState('initial');

    const onSubmit = (data) => {
        if (data.type[0] === 'maison') {
            setFormContent('maison');
        }
    };

    return (
        <div className="" style={{ marginLeft: "275px" }}>
            {formContent === 'initial' && (
                <FormSection
                    title="Quel type de bien recherchez-vous?"
                    checkBoxes={[
                        { label: "Plutôt maison", value: "maison", style: { width: "188px" } },
                        { label: "Ou appartement", value: "appartement", style: { width: "210px" } }
                    ]}
                    onSubmit={onSubmit}
                />
            )}

            {formContent === 'maison' && (
                <FormSection
                    title="Une maison:"
                    checkBoxes={[
                        { label: "Moderne", value: "Moderne", style: { width: "188px" } },
                        { label: "Typique", value: "Typique", style: { width: "210px" } }
                    ]}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    );
};

const FormSection = ({ title, checkBoxes, onSubmit }) => {
    const { handleSubmit, register } = useForm();

    return (
        <>
            <h1 className="mb-10 prose text-2xl font-extrabold" style={{ marginTop: "55px" }}>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 mb-20">
                <div className="space-y-3">
                    {checkBoxes.map(({ label, value, style }) => (
                        <CheckBox key={value} label={label} value={value} register={register("type")} style={style} />
                    ))}
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-primary">Soumettre</button>
                </div>
            </form>
        </>
    );
};

const CheckBox = ({ label, value, register, style }) => {
    return (
        <div className="form-control" style={style}>
            <label className="label cursor-pointer flex items-center">
                <input {...register} type="checkbox" value={value} className="checkbox checkbox-primary mr-2" />
                <span className="label-text font-medium text-lg">{label}</span>
            </label>
        </div>
    );
};

export default RealEstateForm;

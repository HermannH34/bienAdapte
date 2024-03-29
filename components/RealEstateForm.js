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
                <>
                    <h1 className="mb-10 prose text-2xl font-extrabold" style={{ marginTop: "55px" }}>Quel type de bien recherchez-vous?</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 mb-20">
                        <div className="space-y-3">
                            <CheckBox label="Plutôt maison" value="maison" register={register("type")} style={{ width: "188px" }} />
                            <CheckBox label="Ou appartement" value="appartement" register={register("type")} style={{ width: "210px" }} />
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-primary">Soumettre</button>
                        </div>
                    </form>
                </>
            )}

            {formContent === 'maison' && (
                <>
                    <h1 className="mb-10 prose text-2xl font-extrabold" style={{ marginTop: "55px" }}>Une maison:</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 mb-20">
                        <div className="space-y-3">
                            <CheckBox label="Moderne" value="Moderne" register={register("type")} style={{ width: "188px" }} />
                            <CheckBox label="Typique" value="Typique" register={register("type")} style={{ width: "210px" }} />
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-primary">Soumettre</button>
                        </div>
                    </form>
                </>
            )}
        </div >
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

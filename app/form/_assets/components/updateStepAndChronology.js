const STEP_CLASSES = {
    primary: "step step-primary",
    default: "step",
};

const updateStepAndChronology = (stepIndex, setStep, setChronology) => {
    if (stepIndex < 6) {
        setStep('Type de bien: ');
        setChronology({
            typeOfProperty: STEP_CLASSES.primary,
            budget: STEP_CLASSES.default,
            localisation: STEP_CLASSES.default,
            priority: STEP_CLASSES.default,
        });
    } else if (stepIndex < 9) {
        setStep('Budget: ');
        setChronology({
            typeOfProperty: STEP_CLASSES.primary,
            budget: STEP_CLASSES.primary,
            localisation: STEP_CLASSES.default,
            priority: STEP_CLASSES.default,
        });
    } else if (stepIndex < 13) {
        setStep('Localisation et environnement: ');
        setChronology({
            typeOfProperty: STEP_CLASSES.primary,
            budget: STEP_CLASSES.primary,
            localisation: STEP_CLASSES.primary,
            priority: STEP_CLASSES.default,
        });
    } else if (stepIndex < 14) {
        setStep('Votre priorité: ');
        setChronology({
            typeOfProperty: STEP_CLASSES.primary,
            budget: STEP_CLASSES.primary,
            localisation: STEP_CLASSES.primary,
            priority: STEP_CLASSES.primary,
        });
    } else {
        setStep('');
        setChronology({
            typeOfProperty: STEP_CLASSES.primary,
            budget: STEP_CLASSES.primary,
            localisation: STEP_CLASSES.primary,
            priority: STEP_CLASSES.primary,
        });
    }
};

export default updateStepAndChronology;
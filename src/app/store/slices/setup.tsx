
export type SetupState = {
    step: number;
    setStep: (step: number) => void;
};

export const createSetupSlice = (set: any, get: any) : SetupState => ({ 
    step: 1,
    setStep: (step: number) => set({ step }),
});
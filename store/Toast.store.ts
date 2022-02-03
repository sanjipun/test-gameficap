import create from 'zustand';

type ToastTypes = {
    showToast: boolean,
    type: string,
    toastMessage: string,
    toast: (data: { message: string, type: string }) => void
}
export const useToast = create<ToastTypes>((set, get) => ({
    showToast: false,
    type: '',
    toastMessage: '',
    toast: async (data) => {
        set({ toastMessage: data.message, showToast: true, type: data.type });
        setTimeout(() => {
            set({ showToast: false })
            setTimeout(() => {
                set({ toastMessage: '', type: '' })
            }, 700)
        }, 5000)
    }
}))
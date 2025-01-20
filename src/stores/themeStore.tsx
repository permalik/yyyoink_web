import {create} from "zustand/index";

interface ThemeState {
    theme: "light" | "dark";
    toggle: () => void;
};

const useThemeStore = create<ThemeState>((set) => ({
    theme: "light",
    toggle: () =>
        set((state) => ({
            theme: state.theme == "light" ? "dark" : "light",
        })),
}));

export default useThemeStore;
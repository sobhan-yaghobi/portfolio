import { create } from "zustand"

export type TypeThemeStore = {
  theme: "dark" | "light"
  setTheme: (theme: TypeThemeStore["theme"]) => void
}

const useTheme = create<TypeThemeStore>((set) => ({
  theme: "dark",
  setTheme: (theme) => set((prevState) => ({ ...prevState, theme })),
}))

export default useTheme

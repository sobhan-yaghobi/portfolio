import { TypeTechnicalSkill } from "@/types/TechnicalSkill"
import { create } from "zustand"

export type technicalStoreType = {
  technicalSkill: TypeTechnicalSkill | null
  setTechnicalSkill: (technical: technicalStoreType["technicalSkill"]) => void
}

const useTechnicalSkill = create<technicalStoreType>((set) => ({
  technicalSkill: null,
  setTechnicalSkill: (technicalSkill) => set((prev) => ({ ...prev, technicalSkill })),
}))

export default useTechnicalSkill

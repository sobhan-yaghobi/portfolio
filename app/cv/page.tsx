import React from "react"
import { getCv } from "@/services/cv"
import { getProfile } from "@/services/profile"
import { getSocialMediaList } from "@/services/socialMedia"

import CvProfile from "@/components/templates/cv/CvProfile"
import CvAboutMe from "@/components/templates/cv/CvAboutMe"
import CvEducation from "@/components/templates/cv/CvEducation"
import CvSoftSkillList from "@/components/templates/cv/CvSoftSkillList"
import CvTechnicalSkill from "@/components/templates/cv/CvTechnicalSkill"
import CvProjectList from "@/components/templates/cv/CvProjectList"
import CvSocialMediaList from "@/components/templates/cv/CvSocialMediaList"
import AnimateElement from "@/components/modules/AnimateElement"

const page: React.FC = async () => {
  const profile = await getProfile()
  const cv = await getCv()
  const socialMediaList = await getSocialMediaList()

  return (
    <AnimateElement selectedAnimationName="animateCv">
      <div id="cv" className="w-full relative lg:px-52 lg:py-12">
        <div className="bg-black/50 w-full rounded-xl relative overflow-hidden lg:p-12 max-lg:container">
          <CvProfile profile={profile} />
          <div className="divider" />
          <div className="flex max-lg:flex-col">
            <div className="w-1/2 *:text-sm [&>*]:mt-12 max-lg:w-full">
              <CvSocialMediaList socialMediaList={socialMediaList} />
              <CvAboutMe bio={profile?.bio} />
              <CvEducation />
              <CvSoftSkillList softSkillList={cv.softSkillList} />
              <CvTechnicalSkill technicalSkillList={cv.technicalSkillList} />
            </div>

            <div className="divider divider-horizontal max-lg:hidden" />

            <div className="w-1/2 *:text-sm [&>*]:mt-12 max-lg:w-full">
              <CvProjectList projectList={cv.projectList} />
            </div>
          </div>
        </div>
      </div>
    </AnimateElement>
  )
}

export default page

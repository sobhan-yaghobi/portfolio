import React from "react"
import { getCv } from "@/lib/fetcher/cv"
import { getProfile } from "@/lib/fetcher/profile"
import { getSocialMediaList } from "@/lib/fetcher/socialMedia"

import CvProfile from "@/components/templates/CvProfile"
import CvAboutMe from "@/components/templates/CvAboutMe"
import CvEducation from "@/components/templates/CvEducation"
import CvSoftSkillList from "@/components/templates/CvSoftSkillList"
import CvTechnicalSkill from "@/components/templates/CvTechnicalSkill"
import CvProjectList from "@/components/templates/CvProjectList"
import CvSocialMediaList from "@/components/templates/CvSocialMediaList"
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

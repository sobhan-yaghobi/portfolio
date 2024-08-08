import { isEven } from "@/lib/utils"

import Magnetic from "@/components/modules/Magnetic"
import Image from "next/image"

const packageList = [
  [
    "/packages/js.svg",
    "/packages/react.svg",
    "/packages/safari.svg",
    "/packages/postman.svg",
    "/packages/zod.svg",
    "/packages/vue.svg",
    "/packages/bootstrap.svg",
    "/packages/ts.svg",
  ],
  [
    "/packages/github.svg",
    "/packages/redux.svg",
    "/packages/material-ui.svg",
    "/packages/vite.svg",
    "/packages/git.svg",
    "/packages/next-js.svg",
  ],
  [
    "/packages/stackoverFlow.svg",
    "/packages/firefox.svg",
    "/packages/vscode.svg",
    "/packages/google.svg",
  ],
  ["/packages/gitlab.svg", "/packages/tailwind.svg"],
]

const PackageList: React.FC = () => {
  return (
    <div
      id="package-list"
      className="w-fit max-w-full center flex-col relative z-10 *:select-none max-md:hidden"
    >
      {packageList.map((srcList, index) => (
        <div
          key={`package-row-${index}`}
          className={`icon-package-row mb-3 last:mb-0 flex ${isEven(index) && "flex-row-reverse"}`}
        >
          {srcList.map((src, index) => (
            <Magnetic key={`icon-package${index}`}>
              <Image
                className="icon-package mx-3"
                priority
                width={50}
                height={50}
                draggable={false}
                src={src}
                alt="package-image"
              />
            </Magnetic>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PackageList

import { ArrowRight, AtSign, PhoneCall, User } from "lucide-react"
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="mt-40">
      <div className="p-3">
        <div className="w-96 h-40 rounded-3xl overflow-hidden relative pt-10">
          <div className="w-full h-16 glass bg-background absolute top-0 left-0"></div>
          <div className="bg-[#f5f5dc] w-full h-full px-3 pb-2 pt-7 rounded-t-3xl relative z-10">
            <div id="profile" className="size-12 bg-blue-500 rounded-full absolute -top-6 left-3" />
            <div id="header" className="text-black h-full flex flex-col justify-between">
              <h5 className="text-xl">Telegram</h5>
              <p className="text-sm font-">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="flex *:gap-1 justify-between">
                <div className="flex">
                  <p className="badge badge-sm py-3 gap-1">
                    <AtSign className="icon-sm" />
                    sobhan
                  </p>
                  <p className="badge badge-sm py-3 gap-1">
                    <PhoneCall className="icon-sm" />
                    +98 9396007232
                  </p>
                </div>
                <button className="btn btn-xs">
                  <ArrowRight className="icon-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </div>
    </footer>
  )
}

export default Footer

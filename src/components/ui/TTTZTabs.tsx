"use client"

import { Tab, Tabs } from "@nextui-org/tabs"


export default function TTTZTabs() {
  return (
    <div className="flex w-full flex-col">
       <Tabs size="md" variant="underlined" color="secondary" aria-label="Tabs sizes" classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-secondary",
          tab: "max-w-fit px-0 h-12 font-semibold",
          tabContent: "group-data-[selected=true]:text-secondary"
        }}>
          <Tab key="Psot" title="Posts"/>
          <Tab key="Followers" title="Followers"/>
          <Tab key="videos" title="Videos"/>
        </Tabs>
    </div>
  )
}

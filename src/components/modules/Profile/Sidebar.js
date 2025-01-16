"use client"
import Switch from "@/components/Switch"
import { useState } from "react"

export default function Sidebar() {
    const [emailOnFollow, setEmailOnFollow] = useState(false)
    return (
      <aside className="bg-blue-800 text-white p-4 space-y-6 w-1/4">
        <h2 className="text-lg font-bold">Platform Settings</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Account</h3>
            <Switch
        checked={emailOnFollow}
        onChange={setEmailOnFollow}
        label="Email me when someone follows me"
      />
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Email me when someone follows me</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Email me when someone answers on my post</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Email me when someone mentions me</span>
            </label>
          </div>
          <div>
            <h3 className="font-semibold">Application</h3>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>New launches and projects</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Monthly updates</span>
            </label>
          </div>
        </div>
      </aside>
    )
  }
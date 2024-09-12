'use client'
import React from 'react'
import { MyLinks } from './MyLinks'

export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-slate-300 to-slate-500">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between lg:px-8">
          <p className="text-xl leading-5 font-semibold font-mono text-black">
          Let's Connect.
          </p>
          <div className="flex space-x-6">
            <MyLinks />
          </div>
        </div>
      </footer>
    )
  }
  
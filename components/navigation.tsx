"use client"

import { Dock, DockIcon, DockItem, DockLabel } from "./dock-provider"
import Link from "next/link"
import { Home, FileText, Briefcase, Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Navigation() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <Dock className="bg-black/40 backdrop-blur-xl border border-white/20">
        {/* Home */}
        <DockItem>
          <DockLabel>Home</DockLabel>
          <DockIcon>
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <Home size={24} />
            </Link>
          </DockIcon>
        </DockItem>

        {/* About/Story */}
        <DockItem>
          <DockLabel>Story</DockLabel>
          <DockIcon>
            <Link
              href="#about"
              className="flex items-center justify-center w-full h-full text-white hover:text-yellow-400 transition-colors"
            >
              <FileText size={24} />
            </Link>
          </DockIcon>
        </DockItem>

        {/* Projects */}
        <DockItem>
          <DockLabel>Projects</DockLabel>
          <DockIcon>
            <Link
              href="#projects"
              className="flex items-center justify-center w-full h-full text-white hover:text-yellow-400 transition-colors"
            >
              <Briefcase size={24} />
            </Link>
          </DockIcon>
        </DockItem>

        {/* Contact */}
        <DockItem>
          <DockLabel>Contact</DockLabel>
          <DockIcon>
            <Link
              href="#contact"
              className="flex items-center justify-center w-full h-full text-white hover:text-yellow-400 transition-colors"
            >
              <Mail size={24} />
            </Link>
          </DockIcon>
        </DockItem>

        {/* GitHub */}
        <DockItem>
          <DockLabel>GitHub</DockLabel>
          <DockIcon>
            <a
              href="#"
              className="flex items-center justify-center w-full h-full text-white hover:text-yellow-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
          </DockIcon>
        </DockItem>

        {/* LinkedIn */}
        <DockItem>
          <DockLabel>LinkedIn</DockLabel>
          <DockIcon>
            <a
              href="#"
              className="flex items-center justify-center w-full h-full text-white hover:text-yellow-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </DockIcon>
        </DockItem>

        {/* Twitter */}
        <DockItem>
          <DockLabel>Twitter</DockLabel>
          <DockIcon>
            <a
              href="#"
              className="flex items-center justify-center w-full h-full text-white hover:text-yellow-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string[]
  speed?: number
  deleteSpeed?: number
  waitTime?: number
  cursorChar?: string
  className?: string
}

export function Typewriter({
  text,
  speed = 70,
  deleteSpeed = 40,
  waitTime = 1500,
  cursorChar = "|",
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = text[index]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, speed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, waitTime)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, deleteSpeed)
      } else {
        setIsDeleting(false)
        setIndex((index + 1) % text.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, index, isDeleting, text, speed, deleteSpeed, waitTime])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">{cursorChar}</span>
    </span>
  )
}

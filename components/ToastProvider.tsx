// components/ToastProvider.tsx

"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import {
  Toast,
  ToastProvider as RadixToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "@/components/ui/toast"

type ToastContextType = {
  addToast: (title: string, description?: string, variant?: "default" | "destructive") => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider")
  }
  return context
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<{ id: string; title: string; description?: string; variant?: "default" | "destructive" }[]>([])

  const addToast = (title: string, description?: string, variant: "default" | "destructive" = "default") => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts([...toasts, { id, title, description, variant }])
    setTimeout(() => setToasts(toasts => toasts.filter(toast => toast.id !== id)), 5000)
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      <RadixToastProvider>
        {children}
        {toasts.map(({ id, title, description, variant }) => (
          <Toast key={id} variant={variant}>
            <ToastTitle>{title}</ToastTitle>
            {description && <ToastDescription>{description}</ToastDescription>}
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}

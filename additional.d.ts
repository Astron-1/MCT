declare module 'framer-motion' {
  import * as React from 'react'

  export interface AnimationProps {
    animate?: any
    initial?: any
    transition?: any
    variants?: any
    whileHover?: any
    whileTap?: any
  }

  export interface MotionProps extends AnimationProps {
    className?: string
    style?: React.CSSProperties
    [key: string]: any
  }

  export type Motion = {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      MotionProps & JSX.IntrinsicElements[K]
    >
  }

  export const motion: Motion
  export const AnimatePresence: React.FC<{
    children?: React.ReactNode
    mode?: 'sync' | 'wait' | 'popLayout'
    initial?: boolean
    onExitComplete?: () => void
  }>
}

// Handle any other problematic modules here
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
} 
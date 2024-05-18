import { ReactNode } from "react"

export const MyApp = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-greenWedding h-screen w-screen">
      <h1 className="text-2xl text-center py-20">
        {children}
      </h1>
    </div>
  )
}
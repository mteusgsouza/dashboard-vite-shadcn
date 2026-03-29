// useTitle.js
import { useEffect } from "react"

export function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    // Opcional: restaura o título original ao sair da página
    return () => {
      document.title = prevTitle
    }
  }, [title])
}

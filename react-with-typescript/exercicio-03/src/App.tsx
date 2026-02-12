import React from "react"

interface IUser {
  id: number,
  name: string,
  username: string,
  email: string
}
const App = () => {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const controller = new AbortController()

    const getFetch = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal }
        )

        if(!response.ok) {
          throw new Error("Erro na requisição!")
        }

        const dataFetch = await response.json()
        setUsers(dataFetch)

      } catch(err) {
        if(err instanceof Error && err.name !== "AbortError") {
          setError("Erro ao buscar usuário!")
        }

      } finally {
        setLoading(false)

      }
    }

    getFetch()

    return () => {
      controller.abort()
    }
  }, [])

  if(loading) return <p>Carregando...</p>
  if(error) return <p>{error}</p>

  return (
    <div>
      {users.map(user => {
        return(
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.username} - {user.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App

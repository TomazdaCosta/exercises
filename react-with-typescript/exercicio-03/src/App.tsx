import React from "react"

interface IUser {
  id: number,
  name: string,
  username: string,
  email: string
}
const App = () => {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [load, setLoad] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const getFetch = async () => {
      try {
        setLoad(true)
        setError(null)

        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok) {
          setError("Erro ao buscar usuário!")
        }

        const dataFetch = await response.json()
        setUsers(dataFetch)

      } catch {
        setError("Erro ao buscar usuário!")

      } finally {
        setLoad(false)
        
      }
    }

    getFetch()
  }, [])

  if(load) return <p>Carregando...</p>
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

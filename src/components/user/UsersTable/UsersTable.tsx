import { Table } from 'src/components/ui/Table'

interface UsersTableProps {
  users: User[]
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <section data-fes-users-table>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome de usuário</th>
            <th>E-mail</th>
            <th>Administrador</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  )
}

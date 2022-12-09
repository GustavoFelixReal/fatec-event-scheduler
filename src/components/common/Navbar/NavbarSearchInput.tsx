import { FiSearch } from 'react-icons/fi'

export function NavbarSearchInput() {
  return (
    <div
      role="searchbox"
      aria-label="Barra de pesquisa"
      data-fes-navbar-search-input
    >
      <input type="text" placeholder="Pesquisar" />
      <button title="Pesquisar" aria-label="Pesquisar">
        <FiSearch size={18} />
      </button>
    </div>
  )
}

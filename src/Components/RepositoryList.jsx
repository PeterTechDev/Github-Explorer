import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss';

const repositoryData = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/petertechdev'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repositoryData}/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem repository={repositoryData}/>
        <RepositoryItem/>
      </ul>
    </section>
  );
}
import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss';

// https://api.github.com/users/petertechdev/repos

const repositoryData = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/petertechdev'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() =>{
    fetch('https://api.github.com/users/petertechdev/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

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
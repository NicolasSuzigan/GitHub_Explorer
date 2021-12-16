import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'form in React',
  link: 'https://github.com/'
}

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
    </section>
  );
}
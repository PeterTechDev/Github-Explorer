type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
  <li>
    <strong>{props.repository?.name }</strong>
    <p>{props.repository?.description ?? 'Default'}</p>

    <p>{props.repository}</p>

    <a href={props.repository.anything}>
      Acessar repositório
    </a>
  </li>
  );
}
export function RepositoryItem(props) {
  return (
    <>
      <li>{props.repository?.name}</li>

      <p>{props.repository?.description}</p>

      <a 
        href={props.repository?.html_url ?? 'https://github.com'}
        target="_blank"
      >
        Acessar repositório
      </a>
    </>
  );
}
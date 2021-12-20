export function RepositoryItem(props) {
  return (
    <>
      <li>{props.repository?.name ?? 'default'}</li>

      <p>{props.repository?.description ?? ''}</p>

      <a href={props.repository?.link ?? 'https://github.com'}>
        Acessar repositório
      </a>
    </>
  );
}
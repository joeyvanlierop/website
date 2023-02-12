export function Definition(props: {
  name: string;
  phoenetic: string;
  type: string;
  definition: string;
  example: string;
}) {
  return (
    <>
      <h4 className="mb-0">{props.name}</h4>
      <p className="my-0">{props.phoenetic}</p>
      <p className="my-0 text-neutral-500 dark:text-neutral-400">
        {props.type}
      </p>
      <p className="my-0 ml-5 text-neutral-500 dark:text-neutral-400">
        {props.definition}
      </p>
      <p className="my-0 ml-5 italic text-neutral-500 dark:text-neutral-400">
        {props.example}
      </p>
    </>
  );
}

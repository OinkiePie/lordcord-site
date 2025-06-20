export default function SVGCrown(props) {
  const { ...rest } = props;
  return (
    <svg
      width='36px'
      height='36px'
      viewBox='0 0 36 36'
      xmlns='http://www.w3.org/2000/svg'
      className='-translate-y-1'
      {...rest}>
      <path d='M5.5 20.375c5-10 20-10 25 0 1 2 1 8 0 10-5 5-20 5-25 0-1-2-1-8 0-10zm10 3a1 1 0 00-6 0 1 1 0 006 0zm5 0a1 1 0 006 0 1 1 0 00-6 0zm-16-3c-6 1-6 9 0 10-1-2-1-8 0-10zm27 0c6 1 6 9 0 10 1-2 1-8 0-10m-24-4c4-6 17-6 21 0v-10l-5.25 5.25-5.25-9.75-5.25 9.75-5.25-5.25v10z' />
    </svg>
  );
}

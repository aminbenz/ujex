import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <>
      An error occurred: {error.message}
      <button onClick={() => reset()}>Try again</button>
      <button>
        <Link href="/">Go home</Link>
      </button>
    </>
  );
}

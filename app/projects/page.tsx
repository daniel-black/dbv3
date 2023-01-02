import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className='space-y-5 text-lg'>
      <Link href='/'>← back</Link>
      <h2 className='text-zinc-500 italic text-base'>Projects</h2>
      <p>I tend to start more projects than I finish ;/</p>
    </div>
  );
}
export default function About() {
  const bio ="Hi, thanks for passing by my portfolio.\nDeveloped using next js,  work is in progress...";
  return (
    <section
      id="about"
      aria-label="Some data about me"
      className="py-20 sm:py-32 bg-neutral-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl capitalize font-bold tracking-tight">
          <span className="text-5xl text-orange-700 capitalize">a</span>bout me
        </p>
        <div className="rounded p-8 mt-8 border border-neutral-500">
          <p className="mb-4">{bio}</p>
          <a className="cursor-pointer inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-neutral-600 text-white hover:text-neutral-100 hover:bg-neutral-500 active:bg-neutral-800 active:text-neutral-100 focus-visible:outline-neutral-600"
            href="/cvLaxman.pdf">
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}

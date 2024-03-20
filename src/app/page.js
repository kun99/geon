import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl pt-20 lg:mx-auto">
      <div class="mb-20 items-start w-full">
        <nav class="flex flex-row gap-x-4 ">
        <Link href="/geon">home</Link>
          <Link href="/geon/work">work</Link>
          <Link href="/geon/projects">projects</Link>
          <Link href="/geon/reading">reading</Link>
        </nav>
      </div>

      <section>
        <h1 class="text-xl font-bold mb-8">hello, I&apos;m Geon 👋</h1>
        <p>
          I&apos;m a budding software engineer and football enthusiast (COYS!) who
          enjoys working on random projects that just spring to mind. I
          currently am a student in Mahidol University International College,
          and will be graduating by the end of the year.{" "}
        </p>
        <div class="mt-5">
          <ul class="flex flex-row gap-x-3">
            <li>
              <a
                href="https://github.com/kun99"
                target="_blank"
                class=" decoration-teal-400 underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto: geon.rjs@gmail.com"
                class="decoration-red-400 underline"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

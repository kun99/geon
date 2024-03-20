export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl pt-20 lg:mx-auto">
      <div class="mb-20 items-start w-full">
        <nav class="flex flex-row gap-x-4 ">
          <a href="/">home</a>
          <a href="/work">work</a>
          <a href="/projects">projects</a>
          <a href="/reading">reading</a>
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

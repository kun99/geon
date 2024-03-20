import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl pt-20 lg:mx-auto">
      <div class="mb-20 items-start w-full">
        <nav class="flex flex-row gap-x-4 ">
          <Link href="/">home</Link>
          <Link href="/work">work</Link>
          <Link href="/projects">projects</Link>
          <Link href="/reading">reading</Link>
        </nav>
      </div>

      <section>
        <h2 class="text-xl font-bold mb-8">some projects</h2>
        <p>
          I mostly spend time making random, smaller projects out of impulse.
          But here are some of the more notable ones. You can check out other
          projects I have in my{" "}
          <a
            href="https://github.com/kun99"
            target="_blank"
            class=" decoration-teal-400 underline"
          >
            Github
          </a>{" "}
          profile.
        </p>
        <hr class="my-5 border-neutral-300"></hr>
        <ul class="list-disc">
          <li>
            <div class="mt-5">
              <div class="text-lg font-semibold">reddit dashboard</div>
              <div class="text-sm">2024</div>
              <p class="mt-4 text-base">
                A web application that displays the hottest submissions from up
                to four user-selected subreddits in one screen. Built out of a
                need to be able to procrastinate more effectively by being able
                to view posts from multiple subreddits at once without having to
                switch tabs.
              </p>
              <p class="mt-4 text-sm">
                Stack: FastAPI, Vue.js, Python, HTML/CSS, Javascript, Tailwind,
                Firebase/Firestore
              </p>
            </div>
          </li>
          <li>
            <div class="mt-5">
              <div class="text-lg font-semibold">streameasy</div>
              <div class="text-sm">2023</div>
              <p class="mt-4 text-base">
                A web application for video hosting and streaming. Utilizes the
                HLS protocol for smooth video playback, fetching video chunks
                from an S3 storage system. These chunks are organized into a
                .m3u8 extension playlist file, accessed via generated presigned
                URLs.
              </p>
              <p class="mt-4 text-sm">
                Stack: Flask, Vue.js, Python, HTML/CSS, Javascript, Tailwind,
                DigitalOcean S3
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

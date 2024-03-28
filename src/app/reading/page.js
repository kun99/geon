import Link from "next/link";

export default function Reading() {
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
        <h2 class="text-xl font-bold mb-8">recent reading</h2>
        <p>
          I&apos;m really into learning about the history and culture of
          different countries and <a href=""></a>peoples. I typically tend to consume
          literature that helps me broaden my knowledge in these areas.{" "}
        </p>
        <hr class="my-5 border-neutral-300"></hr>
        <div class="mt-5">
          <div class="font-semibold"> - 2024 - </div>
          <ul>
            <li class="mt-2">
              <a
                href="https://www.google.co.th/books/edition/Arabs/Qw-LDwAAQBAJ?hl=en&gbpv=0"
                target="_blank"
              >
                Arabs: A 3,000-Year History of Peoples, Tribes and Empires
              </a>
            </li>
            <li class="mt-2">
              <a
                href="https://www.google.co.th/books/edition/Ethnic_and_Religious_Identities_and_Inte/jSxOvgAACAAJ?hl=en"
                target="_blank"
              >
                Ethnic and Religious Identities and Integration in Southeast
                Asia
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

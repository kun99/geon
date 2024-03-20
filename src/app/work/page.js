import Link from "next/link";

export default function Work() {
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
        <h2 class="text-xl font-bold mb-8">my work history</h2>
        <p>
          I&apos;m aiming to put my skills to the test in a professional
          enterprise environment, where I can apply everything I&apos;ve learned
          so far. My main goal is to soak up as much knowledge and experience as
          I can from whichever company is willing to give me a chance. 😁
        </p>
        <hr class="my-5 border-neutral-300"></hr>
        <div class="mt-5">
          <div class="text-lg font-semibold">Daechang Hi-Tech</div>
          <div class="text-sm">Contract, December 2023- March 2024</div>
          <p class="mt-4 text-base">
            Developed a trolley tracking software using the Spring Boot and
            Vue.js frameworks with focus on writing SQL queries for a versatile
            filtering feature. Software objective was to make the trolley
            recording process quicker, and to allow easy monitoring of trolleys
            that haven&apos;t returned within their expected time frame. The
            software receives input data through a QR code scanner, which reads
            unique QR codes assigned to each trolley. This data is then stored
            locally in an embedded H2 database.
          </p>
          <p class="mt-4 text-sm">
            Stack: Spring Boot, Vue.js, H2 database, Java, HTML/CSS, Javascript,
            Tailwind, SQL
          </p>
        </div>
      </section>
    </main>
  );
}

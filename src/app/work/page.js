import Link from "next/link";

export default function Work() {
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
        <h2 class="text-xl font-bold mb-8">my work history</h2>
        <p>
          I&apos;m aiming to put my skills to the test in a professional
          enterprise environment, where I can apply everything I&apos;ve learned
          so far. My main goal is to soak up as much knowledge and experience as
          I can from whichever company is willing to give me a chance. 😁
        </p>
        <hr class="my-5 border-neutral-300"></hr>
        <div class="mt-5">
          <div class="text-lg font-semibold">Agoda</div>
          <div class="text-sm">Software Engineer Intern (Backend), May 2024 - August 2024</div>
          <p class="mt-4 text-base">
          Joined the Fintech team as a backend software engineer intern but 
          ended up dabbling in UI and frontend a decent amount as well. Worked on 
          two different tools for the finance back-office platform: trade payout 
          and generic adjustment, and played a modest role in the 
          LLM Documenter project by using GitLab APIs to detect changes in 
          files and automate commits for updated documentation generated 
          through an LLM.
          </p>
          <p class="mt-4 text-sm">
            Stack: Play, Ktor, React, Scala, Kotlin, TypeScript, HTML/CSS, SQL, SQL Server
          </p>
        </div>
        <hr class="my-5 border-neutral-300"></hr>
        <div class="mt-5">
          <div class="text-lg font-semibold">Daechang Hi-Tech</div>
          <div class="text-sm">Contract, December 2023 - March 2024</div>
          <p class="mt-4 text-base">
            Developed and maintained a QR code-based trolley management system using
            Spring Boot and Vue.js with focus on writing SQL queries for a H2 database
            for a versatile filtering feature.
          </p>
          <p class="mt-4 text-sm">
            Stack: Spring Boot, Vue.js, Java, HTML/CSS, JavaScript, Tailwind, SQL, H2
          </p>
        </div>
        <br></br>
      </section>
    </main>
  );
}

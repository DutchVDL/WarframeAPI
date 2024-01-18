import Link from "next/link"

import WarframeCards from "@/components/WarframeCards"

import getData from "../Api/data"

export default async function Home() {
  const data = await getData()

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <section className="bg-gray-700 py-8 text-center text-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold">CHOOSE YOUR WARFRAME</h1>
        <p className="mt-2">
          With a vast array of fully customizable Warframes -- each with their
          own unique abilities like Invisibility, Teleport or Mind Control --
          the power is yours to create the perfect assassin, tank, support or
          stealth Warframe
        </p>
      </section>

      <main className="container mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
        <WarframeCards data={data} />

        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-300">
            Discover more about Warframes and join the adventure!
          </p>
          <Link
            href="https://www.warframe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-gray-500 px-6 py-2 text-white transition-all duration-300 hover:bg-blue-600 dark:bg-gray-900"
          >
            Visit Warframe
          </Link>
        </div>
      </main>
    </div>
  )
}

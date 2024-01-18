"use client"

import React, { useState } from "react"
import Link from "next/link"

import WarframeInterface from "@/config/dataType"
import { filterCategory } from "@/config/filterType"

import FilterBox from "./FilterBox"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

const WarframeCards = ({ data }: { data: WarframeInterface }) => {
  // State to manage the selected filter category
  const [filter, setFilter] = useState<filterCategory>("All")

  // Handler function to update the filter category
  const handleFilterChange = (selectedCategory: filterCategory): void => {
    setFilter(selectedCategory)
  }

  return (
    <>
      {/* Filter box component to handle category filtering */}
      <FilterBox onFilterChange={handleFilterChange} />

      {/* Main grid layout for displaying Warframe cards */}
      <main className="grid grid-cols-1 gap-10 py-4 md:grid-cols-2 lg:grid-cols-3 xl:mx-5 xl:grid-cols-4">
        {/* Mapping through filtered Warframe data and displaying cards */}
        {data &&
          data
            .filter(
              (el: WarframeInterface) => filter === "All" || el.type == filter
            )
            .map((el: WarframeInterface, i: number) => (
              <Card
                key={i}
                className="mx-auto min-h-[400px] max-w-[300px] bg-gray-100 text-black shadow-sm duration-150 hover:scale-105 hover:shadow-slate-200 dark:bg-gray-800 dark:text-white"
              >
                {/* Card Header section */}
                <CardHeader
                  className={`bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-100`}
                >
                  <CardTitle>{el.name}</CardTitle>
                </CardHeader>

                {/* Card Content section */}
                <CardContent className="h-[65%] p-4">
                  <h2 className="text-yellow-500">Price: {el.buildPrice}</h2>
                  <p className="mt-2 text-justify text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-gray-400 dark:text-gray-200">
                      Description
                    </span>{" "}
                    - {el.description}
                  </p>
                </CardContent>

                {/* Card Footer section */}
                <CardFooter className="flex justify-between p-4">
                  {/* Button with category information */}
                  <Button
                    variant="outline"
                    className={`text-gray-500 dark:text-gray-300`}
                  >
                    {el.category}
                  </Button>

                  {/* Link to more details */}
                  <Link
                    href={`/warframes/${i}`}
                    className={`text-blue-500 transition-all duration-150 hover:cursor-pointer hover:font-bold dark:text-blue-300`}
                  >
                    More Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
      </main>
    </>
  )
}

export default WarframeCards

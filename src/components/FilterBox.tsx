import React, { ChangeEvent, FC, useState } from "react"

// Import the filter category type
import { filterCategory } from "@/config/filterType"

// Define the props interface for FilterBox
interface FilterBoxProps {
  onFilterChange: (category: string) => void
}

// Functional component for the filter box
const FilterBox: FC<FilterBoxProps> = ({ onFilterChange }) => {
  // Define available filter categories
  const categories: filterCategory[] = [
    "All",
    "Warframe",
    "Prime Warframes",
    "Archwing",
    "Necramech",
  ]

  // State to manage the selected filter category
  const [selectedCategory, setSelectedCategory] =
    useState<filterCategory>("All")

  // Handle filter change and notify parent component
  const handleFilterChange = (category: filterCategory) => {
    setSelectedCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="my-10 ml-10 flex items-center dark:text-white">
      <label className="mr-2 text-lg font-bold dark:text-gray-200">
        Filter by Category:
      </label>
      <div className="relative">
        <select
          value={selectedCategory}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm leading-tight focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FilterBox

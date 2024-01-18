import getData from "@/Api/data"

// Define the expected parameters for the dynamic route
type Params = {
  params: {
    id: string
  }
}

// Interface for an Ability object
interface Ability {
  uniqueName: string
  name: string
  description: string
}

// React component for the Warframe details page
const Warframe = async ({ params: { id } }: Params) => {
  // Fetch data from the API
  const data = await getData()

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <div>
        <title>{data[id].name} - Warframe</title>
      </div>

      <div className="container mx-auto p-6">
        <div className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex h-64 w-full flex-col items-center justify-center bg-gray-400  p-6 dark:bg-gray-700">
            <div className="text-center dark:text-white">
              <p className="mb-2 text-2xl font-bold">{data[id].name}</p>
              <p className="mb-2">{data[id].category}</p>
              <p className="mb-2">Stamina: {data[id].stamina}</p>
              <p>Sprint Speed: {data[id].sprintSpeed}</p>
            </div>
          </div>

          <div className="p-6">
            <h1 className="mb-4 text-3xl font-bold">Description</h1>

            <p className="mb-4 dark:text-gray-400">{data[id].description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-bold">Category:</span>{" "}
                  {data[id].category}
                </p>
                <p>
                  <span className="font-bold">Type:</span> {data[id].type}
                </p>
                <p>
                  <span className="font-bold">Health:</span> {data[id].health}
                </p>
                <p>
                  <span className="font-bold">Armor:</span> {data[id].armor}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Shield:</span> {data[id].shield}
                </p>
                <p>
                  <span className="font-bold">Power:</span> {data[id].power}
                </p>
                <p>
                  <span className="font-bold">Build Price:</span>{" "}
                  {data[id].buildPrice}
                </p>
                <p>
                  <span className="font-bold">Build Time:</span>{" "}
                  {data[id].buildTime}
                </p>
              </div>
            </div>
            <div className="mt-24">
              <p className="mb-2 text-lg font-bold">Abilities:</p>
              <ul className="list-disc pl-6">
                {data[id].abilities.map((ability: Ability, index: number) => (
                  <li key={index}>
                    <span className="font-bold">{ability.name}:</span>{" "}
                    {ability.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Warframe

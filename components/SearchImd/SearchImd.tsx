import { SearchLocation } from "../SearchLocation";
import { SearchTypeOperation } from "../SearchTypeOperation";
import { SearchTypeProperty } from "../SearchTypeProperty";


export function SearchImd() {
    return (
        <div className="flex-col justify-between gap-4 py-4 bg-gray-500 rounded-md flex md:flex-row backdrop-blur-lg shadow-accent mt-8">
            <SearchLocation />
            <SearchTypeProperty />
            <SearchTypeOperation />
        </div>
    )
}
import { SearchLocation } from "../SearchLocation";
import { SearchTypeOperation } from "../SearchTypeOperation";
import { SearchTypeProperty } from "../SearchTypeProperty";


export function SearchImd() {
    return (
        <div className="flex-col justify-between gap-4 p-8 bg-gray-500 rounded-md flex backdrop-blur-lg shadow-accent mt-8">
            <div>
                <SearchTypeOperation />
            </div>
            <div className="flex flex-row gap-4">
                <SearchLocation />
                <SearchTypeProperty />
            </div>
        </div>
    )
}
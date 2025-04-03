import { SearchButton } from "../SearchButton/SearchButton";
import { SearchLocation } from "../SearchLocation";
import { SearchTypeOperation } from "../SearchTypeOperation";
import { SearchTypeProperty } from "../SearchTypeProperty";



export function SearchImd() {
    return (
        <div className="flex-col justify-between gap-4 p-8 rounded-md flex backdrop-blur-lg shadow-accent mt-8">
            <div>
                <SearchTypeOperation />
            </div>
            <div className="flex flex-row gap-4 justify-between">
                <SearchLocation />
                <SearchTypeProperty />
            </div>
            <SearchButton />
        </div>
    )
}
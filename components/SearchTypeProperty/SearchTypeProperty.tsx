import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SearchTypeProperty() {
    return (
        <div className="w-1/2">
            <Select>
                <SelectTrigger className="w-[180px]" >
                    <SelectValue placeholder="Tipo de propiedad" />
                </SelectTrigger>
                <SelectContent className=" bg-amber-100">
                    <SelectItem value="catamarca">Departamento</SelectItem>
                    <SelectItem value="neuquen">Casa</SelectItem>
                    <SelectItem value="la rioja">Quincho</SelectItem>
                </SelectContent>
            </Select>
        </div>

    )
}
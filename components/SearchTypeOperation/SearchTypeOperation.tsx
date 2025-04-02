import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export function SearchTypeOperation() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Alquilar</TabsTrigger>
                <TabsTrigger value="password">Comprar</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
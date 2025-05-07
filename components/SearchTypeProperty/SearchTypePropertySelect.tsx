"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs"; // Importar nuqs

export type Option = {
    value: string;
    label: string;
};

interface MultiSelectProps {
    options: Option[]; // Array con los tipos de propiedades
    placeholder?: string;
    emptyMessage?: string;
    className?: string;
    noServer: boolean; // Propiedad para evitar la carga del servidor
    queryKey: string; // Clave de la consulta para nuqs
    startTransition?: (callback: () => void) => void; // Propiedad opcional para manejar transiciones
}

export function SearchTypePropertySelect({
    options,
    placeholder = "Tipo de propiedad...",
    emptyMessage = "No se encontraron elementos.",
    className,
    noServer, // Propiedad para evitar la carga del servidor
    queryKey, // Clave de la consulta para nuqs
    startTransition
}: MultiSelectProps) {



    const [selected, setSelected] = useQueryState<string[]>(queryKey, parseAsArrayOf(parseAsString).withDefault([]).withOptions({
        shallow: noServer, startTransition // Evita recargar la página al actualizar la URL
    })); // Sincronizar los tipos seleccionados con la URL usando nuqs

    const [page, setPage] = useQueryState(
        "page",
        parseAsString.withDefault("1").withOptions({
            shallow: true,
            startTransition,
        })
    ); // Manejar el estado de `page` con nuqs

    console.log("page actual", page); // Imprimir el valor de `page` en la consola


    const [open, setOpen] = React.useState(false);

    const handleUnselect = (item: string) => {
        setSelected(selected.filter((i) => i !== item)); // Remover el tipo de la lista seleccionada

        // **Actualizar el valor de `page` a `1` en los searchParams**
        setPage("1"); // Usar `setPage` para actualizar el estado de `page`
    };

    const handleSelect = (value: string) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value)); // Si ya está seleccionado, lo elimina


        } else {
            setSelected([...selected, value]); // Si no está seleccionado, lo agrega

            // **Actualizar el valor de `page` a `1` en los searchParams**
            setPage("1"); // Usar `setPage` para actualizar el estado de `page`
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn("w-full justify-between", className)}
                >
                    <div className="flex flex-wrap gap-1 overflow-hidden">
                        {selected.length === 0 && placeholder}
                        {selected.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                                {selected.map((item) => (
                                    <Badge key={item} variant="secondary" className="mr-1 mb-1">
                                        {options.find((option) => option.value === item)?.label}
                                        <span
                                            className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleUnselect(item);
                                                }
                                            }}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }}
                                            onClick={() => handleUnselect(item)}
                                        >
                                            <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                        </span>
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                    <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Buscar elemento..." />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => {
                                        handleSelect(option.value);
                                        setOpen(true);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selected.includes(option.value) ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}


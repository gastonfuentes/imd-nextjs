'use client'

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { parseAsInteger, useQueryState } from "nuqs";

export const PaginationFront = ({ totalPages, startTransition }: { totalPages: number, startTransition: (callback: () => void) => void }) => {

    console.log("totalPages desde pagination", totalPages); // Imprimir el número total de páginas en la consola

    const [page, setPage] = useQueryState(
        'page',
        parseAsInteger
            .withDefault(1)
            .withOptions({ shallow: false, startTransition })
    );

    const handleNextPage = () => setPage(page + 1);
    const handlePreviousPage = () => setPage(page - 1);

    return (
        <Pagination className="mt-8">
            <PaginationContent>
                {/* Botón para ir a la página anterior */}
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePreviousPage();
                        }}
                    /* disabled={page === 1} */ // Deshabilitar si estamos en la primera página
                    />
                </PaginationItem>

                {/* Renderizar dinámicamente los PaginationLink */}
                {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <PaginationItem key={pageNumber}>
                            <PaginationLink
                                href="#"
                                isActive={page === pageNumber} // Resaltar la página activa
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(pageNumber);
                                }}
                            >
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                {/* Botón para ir a la página siguiente */}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNextPage();
                        }}
                    /*  disabled={page === totalPages} */ // Deshabilitar si estamos en la última página
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

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

export const PaginationFront = ({ totalPages }: { totalPages: number }) => {

    console.log("totalPages desde pagination", totalPages); // Imprimir el número total de páginas en la consola

    const [page, setPage] = useQueryState(
        'page',
        parseAsInteger
            .withDefault(1)
            .withOptions({ shallow: false })
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
                        aria-disabled={page <= 1}
                        tabIndex={page <= 1 ? -1 : undefined}
                        className={
                            page <= 1 ? "pointer-events-none opacity-50" : undefined
                        }
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
                        aria-disabled={page >= totalPages}
                        tabIndex={page >= totalPages ? -1 : undefined}
                        className={
                            page >= totalPages ? "pointer-events-none opacity-50" : undefined
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};


import { JSDOM } from "jsdom";

export function extractImagesFromContent(content: string): string[] {
    const dom = new JSDOM(content); // Crear un DOM virtual usando jsdom
    const images = Array.from(dom.window.document.querySelectorAll("img")); // Seleccionar todas las etiquetas <img>
    return images.map((img) => img.src); // Devolver un array con las URLs de las imágenes
}
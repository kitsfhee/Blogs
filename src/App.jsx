import { useState } from 'react';
import { CalendarIcon, ClockIcon } from "lucide-react"; // Asegúrate de tener instalada la librería lucide-react
import './index.css';

// Estructura esperada para las entradas del blog
const entradasBlog = [
  {
    titulo: "Introducción a React Hooks",
    extracto: "Aprende cómo los Hooks simplifican el desarrollo en React y mejoran la reutilización de código.",
    autor: {
      nombre: "Ana García",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    fecha: "15 de septiembre, 2023",
    tiempoLectura: "5 min",
    categoria: "React",
    imagen: "/placeholder.svg?height=200&width=400"
  },
  {
    titulo: "Optimización de rendimiento en Next.js",
    extracto: "Descubre técnicas avanzadas para mejorar la velocidad y eficiencia de tus aplicaciones Next.js.",
    autor: {
      nombre: "Carlos Rodríguez",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    fecha: "10 de septiembre, 2023",
    tiempoLectura: "8 min",
    categoria: "Next.js",
    imagen: "/placeholder.svg?height=200&width=400"
  },
  {
    titulo: "Diseño responsivo con Tailwind CSS",
    extracto: "Aprende a crear interfaces adaptables y atractivas utilizando las utilidades de Tailwind CSS.",
    autor: {
      nombre: "Laura Martínez",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    fecha: "5 de septiembre, 2023",
    tiempoLectura: "6 min",
    categoria: "CSS",
    imagen: "/placeholder.svg?height=200&width=400"
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`min-h-screen w-full ${darkMode ? 'dark-mode bg-gray-900' : 'bg-gray-100'} flex flex-col items-center justify-center`}>
      {/* Header con el botón para cambiar de tema */}
      <header className="absolute top-4 right-4">
        <label className="theme">
          <input
            type="checkbox"
            className="input"
            checked={!darkMode} // Refleja el estado del tema
            onChange={toggleDarkMode} // Cambia el tema cuando se activa
          />
          <svg
            className="icon icon-sun"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" x2="12" y1="1" y2="3"></line>
            <line x1="12" x2="12" y1="21" y2="23"></line>
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
            <line x1="1" x2="3" y1="12" y2="12"></line>
            <line x1="21" x2="23" y1="12" y2="12"></line>
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
          </svg>
          <svg className="icon icon-moon" viewBox="0 0 24 24">
            <path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
          </svg>
        </label>
      </header>

      {/* Título */}
      <main className="w-full px-4 py-8">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Mi Blog de Desarrollo
        </h1>

        {/* Sección del Blog */}
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entradasBlog.map((entrada, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105">
              <img src={entrada.imagen} alt={`Imagen para ${entrada.titulo}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {entrada.categoria}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <time dateTime={entrada.fecha}>{entrada.fecha}</time>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{entrada.titulo}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{entrada.extracto}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={entrada.autor.avatar}
                      alt={`Avatar de ${entrada.autor.nombre}`}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{entrada.autor.nombre}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                    <ClockIcon className="mr-1 h-4 w-4" />
                    <span>{entrada.tiempoLectura} de lectura</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors duration-300">
                  Leer más
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4 bg-gray-800 text-white">
        <p>&copy; {new Date().getFullYear()} Blog Anime Nyac</p>

        {/* Agregar los íconos de redes sociales */}
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 320 512">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <svg className="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" height="1.8em">
              <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
            </svg>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <svg viewBox="0 0 16 16" className="bi bi-instagram" fill="currentColor" height="1.2em" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </li>
        </ul>
      </footer>
    </div>
  );
}

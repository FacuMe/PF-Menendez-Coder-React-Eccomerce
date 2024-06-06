import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        id: "AAAA0001",
        name: "Cien años de soledad",
        author: "Gabriel García Márquez",
        image: "/imagen1.jpg",
        price: 20,
        stock: 15,
        category: "literatura",
        newArrivals: false,
        offers: true,
        featured: true,
        description: "Una saga familiar que narra la historia de los Buendía en el pueblo ficticio de Macondo, explorando temas como el amor, la soledad y la búsqueda de significado en la vida."
    },
    {
        id: "AAAA0002",
        name: "El amor en los tiempos del cólera",
        author: "Gabriel García Márquez",
        image: "/imagen2.jpg",
        price: 18,
        stock: 10,
        category: "literatura",
        newArrivals: true,
        offers: false,
        featured: true,
        description: "Una historia de amor ambientada en Colombia a finales del siglo XIX y principios del XX, que explora la pasión, la perseverancia y la esperanza a lo largo del tiempo."
    },
    {
        id: "AAAA0003",
        name: "La sombra del viento",
        author: "Carlos Ruiz Zafón",
        image: "/imagen3.webp",
        price: 22,
        stock: 5,
        category: "literatura",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "Una novela que sigue a un joven llamado Daniel Sempere en la Barcelona de la posguerra, mientras descubre un misterioso libro que cambiará su vida para siempre."
    },
    {
        id: "AAAA0004",
        name: "El señor de los anillos",
        author: "J.R.R. Tolkien",
        image: "/imagen4.webp",
        price: 35,
        stock: 8,
        category: "fantasia",
        newArrivals: true,
        offers: false,
        featured: true,
        description: "Una épica de fantasía que sigue el viaje de Frodo Bolsón para destruir un poderoso anillo y salvar a la Tierra Media de la oscuridad."
    },
    {
        id: "AAAA0005",
        name: "1984",
        author: "George Orwell",
        image: "/imagen5.jpg",
        price: 19,
        stock: 20,
        category: "ficcion",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "Una distopía que presenta un futuro totalitario en el que el gobierno controla todos los aspectos de la vida de las personas."
    },
    {
        id: "AAAA0006",
        name: "Rebelión en la granja",
        author: "George Orwell",
        image: "/imagen6.jpeg",
        price: 15,
        stock: 12,
        category: "literatura",
        newArrivals: false,
        offers: true,
        featured: false,
        description: "Una sátira política que utiliza animales de una granja para representar a diferentes personajes y situaciones de la Revolución Rusa de 1917."
    },
    {
        id: "AAAA0007",
        name: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        image: "/imagen7.png",
        price: 24,
        stock: 18,
        category: "fantasia",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "El primer libro de la serie de Harry Potter, que narra las aventuras de un joven mago mientras descubre el mundo de la magia y lucha contra el malvado Lord Voldemort."
    },
    {
        id: "AAAA0008",
        name: "El alquimista",
        author: "Paulo Coelho",
        image: "/imagen8.png",
        price: 21,
        stock: 7,
        category: "ficcion",
        newArrivals: true,
        offers: false,
        featured: false,
        description: "La historia de Santiago, un joven pastor andaluz que viaja desde su tierra natal hasta el desierto egipcio en busca de un tesoro oculto."
    },
    {
        id: "AAAA0009",
        name: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        image: "/imagen9.png",
        price: 28,
        stock: 14,
        category: "clasicos",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "Considerada una de las obras más importantes de la literatura española, esta novela cuenta las aventuras de un caballero llamado Don Quijote y su fiel escudero Sancho Panza."
    },
    {
        id: "AAAA0010",
        name: "Moby Dick",
        author: "Herman Melville",
        image: "/imagen10.webp",
        price: 32,
        stock: 3,
        category: "aventura",
        newArrivals: true,
        offers: false,
        featured: true,
        description: "La historia del capitán Ahab y su obsesión por cazar a una gran ballena blanca, conocida como Moby Dick, en una aventura llena de peligros y tragedias."
    },
    {
        id: "AAAA0011",
        name: "Orgullo y prejuicio",
        author: "Jane Austen",
        image: "/imagen11.jpg",
        price: 17,
        stock: 9,
        category: "romance",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "Una novela de amor y sociedad que sigue la vida de Elizabeth Bennet, una joven ingeniosa e independiente, y su relación con el altivo Sr. Darcy."
    },
    {
        id: "AAAA0012",
        name: "El código Da Vinci",
        author: "Dan Brown",
        image: "/imagen12.webp",
        price: 26,
        stock: 6,
        category: "misterio",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "Una novela de misterio que sigue al simbologista Robert Langdon en una búsqueda para resolver un misterio que involucra a la Iglesia Católica y a Leonardo da Vinci."
    },
    {
        id: "AAAA0013",
        name: "Los miserables",
        author: "Victor Hugo",
        image: "/imagen13.webp",
        price: 30,
        stock: 11,
        category: "clasicos",
        newArrivals: false,
        offers: true,
        featured: false,
        description: "Una historia épica que sigue las vidas de varios personajes en la Francia del siglo XIX, explorando temas como la redención, el amor y la justicia."
    },
    {
        id: "AAAA0014",
        name: "El retrato de Dorian Gray",
        author: "Oscar Wilde",
        image: "/imagen14.jpg",
        price: 18,
        stock: 5,
        category: "ficcion",
        newArrivals: false,
        offers: false,
        featured: false,
        description: "La historia de un joven llamado Dorian Gray, que vende su alma para mantener su belleza juvenil mientras su retrato envejece en su lugar."
    },
    {
        id: "AAAA0015",
        name: "Drácula",
        author: "Bram Stoker",
        image: "/imagen15.jpg",
        price: 22,
        stock: 8,
        category: "terror",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "La historia del Conde Drácula y su intento de trasladarse de Transilvania a Inglaterra para encontrar nuevas víctimas y propagar la no-muerte."
    },
    {
        id: "AAAA0016",
        name: "El principito",
        author: "Antoine de Saint-Exupéry",
        image: "/imagen16.webp",
        price: 12,
        stock: 20,
        category: "juvenil",
        newArrivals: true,
        offers: false,
        featured: true,
        description: "Un cuento filosófico que sigue las aventuras de un joven príncipe que viaja a diferentes planetas, aprendiendo sobre el amor, la amistad y la vida."
    },
    {
        id: "AAAA0017",
        name: "El nombre del viento",
        author: "Patrick Rothfuss",
        image: "/imagen17.webp",
        price: 27,
        stock: 13,
        category: "fantasia",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "La primera novela de la serie Crónica del asesino de reyes, que sigue la vida de Kvothe, un músico y aventurero legendario, mientras narra su historia a un cronista."
    },
    {
        id: "AAAA0018",
        name: "La ladrona de libros",
        author: "Markus Zusak",
        image: "/imagen18.webp",
        price: 16,
        stock: 9,
        category: "historico",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "Una historia narrada por la Muerte que sigue la vida de Liesel Meminger, una niña que roba libros y comparte palabras en la Alemania nazi."
    },
    {
        id: "AAAA0019",
        name: "La hoguera de las vanidades",
        author: "Tom Wolfe",
        image: "/imagen19.jpg",
        price: 23,
        stock: 4,
        category: "ficcion",
        newArrivals: false,
        offers: false,
        featured: false,
        description: "Una novela satírica que se desarrolla en la ciudad de Nueva York en la década de 1980, que explora temas como la ambición, la riqueza y la corrupción."
    },
    {
        id: "AAAA0020",
        name: "El guardian entre el centeno",
        author: "J.D. Salinger",
        image: "/imagen20.jpg",
        price: 20,
        stock: 10,
        category: "juvenil",
        newArrivals: false,
        offers: false,
        featured: true,
        description: "La historia de Holden Caulfield, un adolescente alienado que lucha contra la hipocresía y la superficialidad de la sociedad adulta."
    }
]

const seedProducts = () => {
    products.map(({ id, ...rest }) =>{
        addDoc(collection(db, "products"), rest)
    });
} 

seedProducts();
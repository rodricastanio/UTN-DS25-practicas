"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../src/config/prisma"));
async function main() {
    console.log('Iniciando seed de libros...');
    // Opcional: limpiar antes
    await prisma_1.default.book.deleteMany();
    const books = [
        // ROMANCE
        {
            titulo: "HeartStopper",
            autor: "Alice Oseman",
            precio: 10.0,
            genero: "Romance",
            descripcion: "Una novela gráfica tierna y honesta sobre el amor adolescente entre Charlie, un chico sensible, y Nick, un jugador de rugby amable. Una historia que celebra la amistad, el autodescubrimiento y los vínculos reales.",
            imagen: "/imagenes/PortadaHeartStopper.jpeg",
        },
        {
            titulo: "A través de mi ventana",
            autor: "Ariana Godoy",
            precio: 10.0,
            genero: "Romance",
            descripcion: "Raquel siempre estuvo enamorada de Ares, su enigmático vecino. Lo que comienza como una obsesión silenciosa se convierte en una historia llena de pasión, drama y emociones a flor de piel. Un fenómeno de Wattpad que llegó a Netflix.",
            imagen: "/imagenes/PortadaVentana.jpeg",
        },
        {
            titulo: "Los dos mueren al final",
            autor: "Adam Silvera",
            precio: 10.0,
            genero: "Romance",
            descripcion: "En un mundo donde sabés cuándo vas a morir, Mateo y Rufus reciben la llamada: hoy es su último día. Lo que no esperan es encontrarse, ni enamorarse en las pocas horas que les quedan. Intensa, emotiva e inolvidable.",
            imagen: "/imagenes/PortadaMueren.jpeg",
        },
        {
            titulo: "Antes de diciembre",
            autor: "Joana Marcus",
            precio: 10.0,
            genero: "Romance",
            descripcion: "Jenna se muda a otra ciudad para estudiar, prometida con su novio… pero todo cambia cuando conoce a su nuevo compañero de piso. Un romance juvenil cargado de dudas, deseo y decisiones que lo cambian todo.",
            imagen: "/imagenes/PortadaDiciembre.jpeg",
        },
        {
            titulo: "Gente que conocemos en vacaciones",
            autor: "Emily Henry",
            precio: 10.0,
            genero: "Romance",
            descripcion: "Poppy y Alex son mejores amigos que se van de viaje juntos cada verano. Pero hace dos años, algo pasó. Ahora, tienen una última oportunidad para arreglarlo… o perderlo todo. Divertida, cálida y con chispa.",
            imagen: "/imagenes/PortadaVacaciones.jpeg",
        },
        {
            titulo: "Érase una vez un corazón roto",
            autor: "Stephanie Garber",
            precio: 10.0,
            genero: "Romance",
            descripcion: "Evangelina cree en los cuentos de hadas, pero cuando el destino la traiciona, hace un trato con el Príncipe de los Corazones. Romance, magia y traiciones en una historia donde enamorarse puede ser peligroso.",
            imagen: "/imagenes/PortadaRoto.jpeg",
        },
        // PSICOLOGÍA
        {
            titulo: "Psicopatología de la vida cotidiana",
            autor: "Sigmund Freud",
            precio: 10.0,
            genero: "Psicología",
            descripcion: "Freud nos muestra que esos pequeños 'accidentes' diarios no son casuales, sino ventanas al inconsciente. Este libro revela cómo lo reprimido se manifiesta en gestos cotidianos.",
            imagen: "/imagenes/PortadaCotidiana.gif",
        },
        {
            titulo: "El chiste y su relación con el inconsciente",
            autor: "Sigmund Freud",
            precio: 10.0,
            genero: "Psicología",
            descripcion: "Freud analiza cómo los chistes expresan deseos reprimidos, tensiones internas o conflictos psíquicos. Una vía directa al inconsciente.",
            imagen: "/imagenes/PortadaChiste.jpeg",
        },
        {
            titulo: "Los patitos feos",
            autor: "Boris Cyrulnik",
            precio: 10.0,
            genero: "Psicología",
            descripcion: "Explica cómo las personas pueden reconstruirse tras vivir traumas en la infancia. Un libro esperanzador sobre resiliencia.",
            imagen: "/imagenes/PortadaPatitos.png",
        },
        {
            titulo: "Pensar rápido, pensar despacio",
            autor: "Daniel Kahneman",
            precio: 10.0,
            genero: "Psicología",
            descripcion: "Muestra cómo nuestros dos sistemas de pensamiento influyen en nuestras decisiones, y cómo esto puede llevarnos a errores y comportamientos poco saludables.",
            imagen: "/imagenes/PortadaPensar.jpeg",
        },
        {
            titulo: "Ansiedad",
            autor: "Scott Stossel",
            precio: 10.0,
            genero: "Psicología",
            descripcion: "Un relato personal e informativo sobre los efectos de la ansiedad, sus causas y tratamientos. Combina investigación, historia y experiencia propia.",
            imagen: "/imagenes/PortadaAnsiedad.jpeg",
        },
        {
            titulo: "El demonio de la depresión",
            autor: "Andrew Solomon",
            precio: 10.0,
            genero: "Psicología",
            descripcion: "Un testimonio profundo y estremecedor sobre la depresión. Mezcla análisis clínico con historias reales y experiencia personal.",
            imagen: "/imagenes/PortadaDemonio.jpeg",
        },
        // TERROR
        {
            titulo: "El instituto",
            autor: "Stephen King",
            precio: 10.0,
            genero: "Terror",
            descripcion: "Niños con poderes especiales son secuestrados y llevados a un siniestro institute donde se experimenta con ellos. Terror psicológico y suspenso.",
            imagen: "/imagenes/PortadaInstituto.jpeg",
        },
        {
            titulo: "La Casa de los Espíritus",
            autor: "Isabel Allende",
            precio: 10.0,
            genero: "Terror",
            descripcion: "Realismo mágico con pasajes inquietantes sobre fantasmas y secretos familiares. Explora el lado oscuro de la mente y la memoria.",
            imagen: "/imagenes/PortadaEspiritus.jpeg",
        },
        {
            titulo: "El silencio de los corderos",
            autor: "Thomas Harris",
            precio: 10.0,
            genero: "Terror",
            descripcion: "Thriller psicológico que nos presenta al icónico Hannibal Lecter. Suspenso y horror en un juego mortal entre cazador y presa.",
            imagen: "/imagenes/PortadaSilencio.jpeg",
        },
        {
            titulo: "Mexican Gothic",
            autor: "Silvia Moreno-Garcia",
            precio: 10.0,
            genero: "Terror",
            descripcion: "Ambientada en México, con una casa misteriosa y secretos oscuros. Suspenso, terror sobrenatural y una atmósfera escalofriante.",
            imagen: "/imagenes/PortadaMexican.jpeg",
        },
        {
            titulo: "Bird Box",
            autor: "Josh Malerman",
            precio: 10.0,
            genero: "Terror",
            descripcion: "Un mundo postapocalíptico donde lo que no puedes ver puede matarte. Terror psicológico y tensión constante.",
            imagen: "/imagenes/PortadaBird.jpeg",
        },
        {
            titulo: "Cuento de hadas",
            autor: "Stephen King",
            precio: 10.0,
            genero: "Terror",
            descripcion: "Un adolescente hereda una llave a otro mundo. King mezcla lo fantástico con el terror puro. Una historia sobre la lucha entre la luz y la sombra.",
            imagen: "/imagenes/PortadaHadas.jpeg",
        },
        // CIENCIA FICCIÓN
        {
            titulo: "El problema de los 3 cuerpos",
            autor: "Cixin Liu",
            precio: 10.0,
            genero: "Ciencia Ficción",
            descripcion: "Durante la Revolución Cultural China, se establece contacto con una civilización alienígena. Ciencia ficción dura con ideas profundas y giros inesperados.",
            imagen: "/imagenes/Portada3Cuerpos.jpeg",
        },
        {
            titulo: "Neuromante",
            autor: "William Gibson",
            precio: 10.0,
            genero: "Ciencia Ficción",
            descripcion: "Un hacker caído en desgracia recibe un último trabajo que lo sumerge en una red virtual peligrosa. Clásico cyberpunk con tecnología e inteligencia artificial.",
            imagen: "/imagenes/PortadaNeuromate.jpeg",
        },
        {
            titulo: "El fin de la eternidad",
            autor: "Isaac Asimov",
            precio: 10.0,
            genero: "Ciencia Ficción",
            descripcion: "Un agente temporal viaja en el tiempo para modificar eventos, pero descubre que esas alteraciones tienen un costo devastador. Paradojas temporales y ética.",
            imagen: "/imagenes/PortadaEternidad.jpeg",
        },
        {
            titulo: "La chica mecánica",
            autor: "Paolo Bacigalupi",
            precio: 10.0,
            genero: "Ciencia Ficción",
            descripcion: "Futuro donde la biotecnología domina y la humanidad enfrenta una crisis ecológica. Una historia intensa con crítica ambiental y ética.",
            imagen: "/imagenes/PortadaMecanica.jpeg",
        },
        {
            titulo: "El archivo de las tormentas",
            autor: "Brandon Sanderson",
            precio: 10.0,
            genero: "Ciencia Ficción",
            descripcion: "Tecnología ancestral y poderes sorprendentes en un mundo épico que explora ciencia, política y humanidad.",
            imagen: "/imagenes/PortadaTormentas.jpeg",
        },
        {
            titulo: "Klara y el Sol",
            autor: "Kazuo Ishiguro",
            precio: 10.0,
            genero: "Ciencia Ficción",
            descripcion: "Klara es una 'amiga artificial' que descubre los matices del amor, la enfermedad y la humanidad. Una novela emotiva y futurista.",
            imagen: "/imagenes/PortadaKlara.jpeg",
        },
    ];
    // Usamos createMany para insertar todos
    await prisma_1.default.book.createMany({ data: books });
    const count = await prisma_1.default.book.count();
    console.log(`Seed completado: ${count} libros en la base de datos.`);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma_1.default.$disconnect();
});

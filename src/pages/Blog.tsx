import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, ChevronUp, MessageCircle } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured: boolean;
  content: string[];
}

const articles: Article[] = [
  {
    slug: "codigo-colores-cepillos",
    title: "Código de Colores en Cepillos: Cómo Prevenir Contaminación Cruzada con El Castor",
    category: "Guía Técnica",
    excerpt:
      "El sistema de código de colores FDA separa herramientas por zona: azul para producción, rojo para pisos, verde para áreas externas y amarillo para superficies de contacto con alimentos. Aprenda cómo implementarlo correctamente con los cepillos El Castor que distribuimos.",
    date: "10 Feb 2026",
    readTime: "6 min",
    featured: true,
    content: [
      "La contaminación cruzada es uno de los riesgos más críticos en cualquier planta de alimentos. Ocurre cuando bacterias, alérgenos o residuos químicos se transfieren de una zona a otra a través de herramientas de limpieza compartidas. Por ejemplo, un cepillo usado para limpiar pisos de la zona de carga que luego se usa en una mesa de producción puede introducir contaminantes directamente en la línea de proceso.",
      "El sistema de código de colores de la FDA fue diseñado específicamente para prevenir esto. La idea es simple: asignar un color específico a cada zona de la planta, de modo que las herramientas nunca se mezclen entre áreas con diferentes niveles de riesgo.",
      "Azul — Zona de producción y áreas de contacto directo con alimentos en proceso. Este color se reserva para las áreas de mayor criticidad. Los cepillos azules solo deben usarse en mesas de trabajo, bandas transportadoras y equipos donde el alimento está expuesto.",
      "Amarillo — Superficies de contacto con alimentos listos para consumo. Se diferencia del azul porque aplica a alimentos que ya no pasarán por otro proceso térmico o de desinfección. Es común en áreas de empaque final y servido.",
      "Rojo — Pisos, drenajes y áreas de baja criticidad dentro de la planta. Los cepillos rojos nunca deben acercarse a superficies de contacto con alimentos. Son exclusivos para pisos de producción, drenajes y zonas húmedas.",
      "Verde — Áreas externas, patios, zonas de carga y descarga. Estos cepillos se usan fuera del área de producción y tienen el nivel de restricción más bajo.",
      "Blanco — Se usa opcionalmente para áreas de lácteos o zonas de alérgenos donde se necesita una distinción adicional dentro de la planta.",
      "Los cepillos El Castor que distribuimos en VAROSA están disponibles en todos estos colores y cumplen con certificación FDA para contacto con alimentos. Son fabricados con cerdas que no se desprenden y materiales que resisten la desinfección repetida con químicos concentrados.",
      "Para implementar el sistema correctamente, le recomendamos: primero, hacer un mapa de su planta identificando las zonas por nivel de riesgo. Segundo, asignar un color a cada zona y documentarlo en un procedimiento escrito. Tercero, capacitar al personal para que entienda que las herramientas no se comparten entre zonas bajo ninguna circunstancia. Cuarto, colocar señalización visible en cada zona indicando el color asignado.",
      "Si está preparando una auditoría de inocuidad o quiere implementar el código de colores en su planta, nuestro equipo técnico puede acompañarle en el proceso con una visita de diagnóstico sin costo.",
    ],
  },
  {
    slug: "reducir-consumo-papel-tork",
    title: "5 Formas de Reducir el Consumo de Papel en Baños de Alto Tráfico con TORK",
    category: "Ahorro y Eficiencia",
    excerpt:
      "Los dispensadores TORK SmartOne reducen el consumo de papel higiénico hasta un 40% gracias a su sistema de dispensado hoja por hoja. Compare el costo por uso vs. rollos convencionales y descubra cómo calcular el ahorro real para su operación.",
    date: "3 Feb 2026",
    readTime: "5 min",
    featured: true,
    content: [
      "El papel higiénico y las toallas de mano son de los insumos que más rápido se consumen en hoteles, restaurantes, centros comerciales y plantas con baños de alto tráfico. El problema no es solo el costo del papel, sino el desperdicio: con dispensadores abiertos o rollos convencionales, los usuarios toman mucho más de lo necesario.",
      "TORK, la marca profesional de Essity, diseñó sistemas de dispensado específicamente para controlar este problema. Estas son las 5 estrategias que más impacto tienen:",
      "1. Dispensadores TORK SmartOne de hoja por hoja. A diferencia de los rollos expuestos, el sistema SmartOne entrega una porción predeterminada por cada uso. Según datos del fabricante, esto reduce el consumo hasta un 40% comparado con dispensadores convencionales de rollo jumbo. El usuario toma lo que necesita y no más.",
      "2. Toallas de mano TORK Xpress en lugar de rollos de cocina. En áreas de cocina y servicio, muchos negocios usan rollos de cocina que se jalan sin control. Las toallas dobladas TORK Xpress se dispensan una a una y absorben más por unidad, reduciendo el número de hojas utilizadas por secado.",
      "3. Calcular el costo por uso, no el costo por rollo. Un error común es comparar precios por unidad. Un rollo genérico puede costar menos, pero si rinde 200 usos y un rollo TORK rinde 400 usos controlados, el costo real por visita al baño es menor con TORK. Nuestro equipo puede ayudarle a calcular el costo por uso específico de su operación.",
      "4. Instalar dispensadores cerrados con llave. Los dispensadores abiertos invitan al vandalismo y al desperdicio. Los dispensadores TORK con llave protegen el rollo, evitan que se moje y aseguran que el papel se dispense correctamente. Además, el personal de limpieza puede verificar el nivel sin abrir el dispensador gracias a la ventana de nivel visible.",
      "5. Programar la reposición en lugar de reaccionar al desabasto. Cuando un baño se queda sin papel, el resultado es una mala experiencia para el cliente y papel tirado por todas partes cuando se repone de emergencia. Con VAROSA, programamos visitas de reposición basadas en el consumo real de su operación para que nunca se quede sin insumos.",
      "La instalación de dispensadores TORK es parte de nuestro servicio técnico. Incluye la instalación física, capacitación del personal de limpieza y un primer cálculo de consumo para dimensionar correctamente la cantidad de dispensadores por baño.",
    ],
  },
  {
    slug: "dilucion-quimicos-diversey",
    title: "Dilución Correcta de Químicos Diversey: Errores Comunes que Cuestan Dinero",
    category: "Tips de Ahorro",
    excerpt:
      "Usar más producto del necesario no limpia mejor — solo desperdicia dinero. Conozca las diluciones correctas de los principales productos Diversey y cómo los sistemas de dosificación automática pueden ahorrarle hasta un 30% en químicos.",
    date: "27 Ene 2026",
    readTime: "7 min",
    featured: false,
    content: [
      "Uno de los errores más costosos en limpieza industrial es la dilución incorrecta de químicos. Y el error más común no es usar menos producto — es usar más. Muchos operarios creen que si un poco limpia bien, mucho limpiará mejor. En realidad, una sobredilución desperdicia producto, puede dañar superficies y deja residuos que atraen más suciedad.",
      "Los productos Diversey están formulados con concentraciones específicas que funcionan óptimamente a la dilución recomendada por el fabricante. Cada producto tiene una tabla de dilución que indica la proporción exacta de producto por litro de agua según el tipo de suciedad y superficie.",
      "Errores comunes que vemos en el campo:",
      "Diluir a ojo. Sin medida, la concentración varía en cada preparación. Un día el producto sale muy diluido y no limpia, al siguiente sale muy concentrado y se desperdicia. La solución es usar dosificadores automáticos o al menos recipientes de medida calibrados.",
      "Mezclar productos incompatibles. Algunos operarios mezclan desengrasantes con desinfectantes pensando que hacen un producto más fuerte. Esto puede neutralizar los ingredientes activos de ambos productos y en el peor caso generar gases peligrosos. Cada producto Diversey se usa solo, en su dilución indicada.",
      "No enjuagar antes de desinfectar. La desinfección solo funciona sobre superficies previamente limpias. Si se aplica desinfectante sobre una superficie con grasa o residuos, el ingrediente activo se consume reaccionando con la materia orgánica en lugar de eliminar las bacterias. El protocolo correcto es: primero limpiar con detergente, enjuagar, luego aplicar desinfectante.",
      "Preparar producto de más y almacenarlo. Los químicos diluidos pierden efectividad con el tiempo. Un balde de desinfectante preparado hoy puede tener un 50% menos de actividad mañana. Se debe preparar solo la cantidad que se va a usar en el turno.",
      "Los sistemas de dosificación automática que ofrecemos en VAROSA eliminan estos problemas. Se instalan directo en la línea de agua y dispensan la cantidad exacta de químico por litro, cada vez. Nuestros clientes que han migrado a estos sistemas reportan ahorros de entre 20% y 30% en consumo de químicos, además de resultados más consistentes en limpieza.",
      "Si quiere evaluar si su operación está diluyendo correctamente, nuestro equipo técnico puede hacer una visita de diagnóstico donde medimos el consumo actual, identificamos oportunidades de ahorro y recomendamos el sistema de dosificación adecuado para su planta.",
    ],
  },
  {
    slug: "senasa-bpm-2026",
    title: "¿Qué Exige el SENASA para Plantas de Alimentos en Costa Rica? Guía BPM 2026",
    category: "Normativas",
    excerpt:
      "Las Buenas Prácticas de Manufactura (BPM) reguladas por SENASA establecen requisitos específicos de limpieza y desinfección para plantas procesadoras de alimentos. Repasamos los puntos clave y qué productos cumplen con las especificaciones.",
    date: "20 Ene 2026",
    readTime: "8 min",
    featured: false,
    content: [
      "El Servicio Nacional de Salud Animal (SENASA) es la autoridad en Costa Rica que regula las condiciones sanitarias de las plantas procesadoras de alimentos. Las Buenas Prácticas de Manufactura (BPM) son el marco normativo que establece los requisitos mínimos que toda planta debe cumplir para operar legalmente y pasar auditorías.",
      "En lo que respecta a limpieza y desinfección, los puntos principales que SENASA evalúa son:",
      "Programa de limpieza documentado. La planta debe tener un documento escrito que detalle qué se limpia, con qué frecuencia, qué productos se usan, a qué dilución, y quién es responsable. No basta con limpiar — hay que demostrar que se limpia de manera planificada y sistemática.",
      "Productos aprobados para uso alimentario. Los químicos utilizados deben ser aptos para contacto indirecto con alimentos y contar con fichas técnicas y hojas de seguridad (SDS) disponibles. Productos como los de la línea Diversey y Kemical que distribuimos cumplen con estas especificaciones y entregamos la documentación técnica completa a cada cliente.",
      "Separación de herramientas por zona. Aunque SENASA no exige textualmente el código de colores FDA, sí requiere que las herramientas de limpieza estén separadas por área para prevenir contaminación cruzada. Implementar el código de colores con cepillos El Castor es la forma más práctica y visible de cumplir con este requisito.",
      "Registros de limpieza verificables. Se deben mantener registros que demuestren que los procedimientos se ejecutan. Esto incluye listas de verificación diarias firmadas, registros de dilución y, si es posible, validaciones objetivas como pruebas ATP.",
      "Control de plagas vinculado a limpieza. Una planta limpia es la primera barrera contra plagas. SENASA evalúa que la limpieza contribuya al control de plagas, especialmente en áreas de almacenamiento y residuos.",
      "Capacitación del personal. Todo el personal operativo debe recibir capacitación documentada en BPM, incluyendo prácticas correctas de limpieza. Nosotros ofrecemos capacitaciones in situ como parte de nuestro servicio técnico.",
      "Si su planta va a recibir una auditoría de SENASA o de un cliente internacional, nuestro equipo puede revisar sus protocolos actuales de limpieza, identificar brechas y ayudarle a preparar la documentación necesaria. Este acompañamiento es parte del valor agregado que ofrecemos como distribuidor, no solo como proveedor de productos.",
    ],
  },
  {
    slug: "tork-vs-genericos",
    title: "Dispensadores de Jabón: TORK vs. Dispensadores Genéricos — ¿Vale la Diferencia?",
    category: "Comparativo",
    excerpt:
      "Analizamos durabilidad, costo por lavado, higiene y mantenimiento entre dispensadores TORK de Essity y opciones genéricas del mercado. Los datos muestran que la inversión inicial mayor se recupera en menos de 8 meses.",
    date: "13 Ene 2026",
    readTime: "6 min",
    featured: false,
    content: [
      "Cuando un hotel o restaurante necesita dispensadores de jabón, la primera tentación es comprar la opción más barata. Y tiene sentido — un dispensador genérico puede costar un tercio de un dispensador TORK. Pero el precio de compra es solo el inicio de la historia.",
      "Durabilidad. Los dispensadores genéricos suelen ser de plástico delgado que se quiebra con el uso constante. En baños de alto tráfico, es común tener que reemplazarlos cada 6-8 meses. Los dispensadores TORK están diseñados para uso intensivo con materiales de ingeniería que resisten impactos y limpieza con químicos agresivos. Su vida útil típica es de 3 a 5 años.",
      "Costo por lavado. Los dispensadores genéricos usan jabón líquido que se dispensa sin control — el usuario puede presionar varias veces o el mecanismo gotea. Los sistemas TORK dispensan una dosis medida por activación. Un cartucho TORK rinde más lavados que una botella de jabón genérico del mismo volumen. Cuando se calcula el costo por lavado de manos, TORK es consistentemente más económico.",
      "Higiene. Los dispensadores genéricos de rellenado son un riesgo sanitario. Cada vez que se rellenan, se introduce contaminación al contenedor. Estudios han mostrado que el jabón en dispensadores de relleno puede contener niveles significativos de bacterias. Los cartuchos sellados TORK eliminan este riesgo porque el jabón nunca está expuesto al ambiente.",
      "Mantenimiento. Un dispensador genérico que falla significa jabón derramado en el piso, quejas de clientes y tiempo del personal de limpieza arreglando el problema. Los dispensadores TORK tienen mecanismos simples, partes reemplazables y soporte técnico de VAROSA incluido en el servicio.",
      "Imagen. En un hotel o restaurante, los baños son parte de la experiencia del cliente. Un dispensador genérico rayado y con jabón goteando da una impresión muy diferente a un dispensador TORK limpio y funcional. La inversión en imagen también tiene retorno.",
      "Nuestro cálculo para un hotel de 40 habitaciones muestra que la inversión adicional en dispensadores TORK se recupera en aproximadamente 8 meses solo por el ahorro en jabón y la eliminación de reemplazos. A partir de ahí, todo es ahorro neto.",
      "Si quiere que hagamos un cálculo específico para su operación, coordinamos una visita donde evaluamos sus baños actuales, contamos los puntos de dispensado y le presentamos una comparación de costos a 12 meses con números reales.",
    ],
  },
  {
    slug: "limpieza-cip-lecherias",
    title: "Limpieza CIP en Lecherías: Protocolo Paso a Paso con Kemical y Solquisa",
    category: "Guía Técnica",
    excerpt:
      "La limpieza CIP (Clean-In-Place) es crítica en equipos de ordeño y tanques de enfriamiento. Detallamos el protocolo de 5 pasos con los productos Kemical y Solquisa que cumplen con los estándares del sector lácteo costarricense.",
    date: "6 Ene 2026",
    readTime: "9 min",
    featured: false,
    content: [
      "La limpieza CIP (Clean-In-Place) es el método estándar para limpiar y desinfectar equipos de ordeño, líneas de transporte de leche y tanques de enfriamiento sin necesidad de desarmar los equipos. En una lechería, este proceso se ejecuta después de cada ordeño y su correcta ejecución impacta directamente en el conteo bacteriano de la leche y la vida útil del producto final.",
      "El protocolo CIP que recomendamos consta de 5 pasos, utilizando productos Kemical y Solquisa que están formulados específicamente para el sector lácteo:",
      "Paso 1 — Enjuague con agua tibia (35-40°C). Inmediatamente después del ordeño, circular agua tibia por todo el sistema para remover los residuos gruesos de leche. No usar agua caliente en este paso porque coagula las proteínas y las adhiere a las superficies, haciendo más difícil la limpieza posterior. Este enjuague debe durar al menos 5 minutos.",
      "Paso 2 — Lavado alcalino. Circular la solución alcalina (detergente Kemical para lecherías) a la dilución y temperatura recomendada por el fabricante, generalmente entre 60-75°C. Este paso disuelve las grasas y proteínas lácteas adheridas a las superficies internas. La circulación debe durar entre 10 y 15 minutos para asegurar un contacto suficiente.",
      "Paso 3 — Enjuague intermedio con agua limpia. Remover todos los residuos de detergente alcalino del sistema. Este paso es importante porque los residuos de detergente pueden neutralizar el ácido del siguiente paso.",
      "Paso 4 — Lavado ácido. Circular la solución ácida (Solquisa para lecherías) para remover depósitos minerales como piedra de leche (calcio y magnesio) que se acumulan en las superficies. La piedra de leche crea una capa porosa donde las bacterias se protegen y multiplican. Este lavado se realiza a temperatura ambiente o tibia y dura 10 minutos. No es necesario hacerlo después de cada ordeño — la frecuencia típica es cada 2 a 3 días o según lo indique la inspección visual.",
      "Paso 5 — Sanitización final. Antes del siguiente ordeño, circular una solución sanitizante por el sistema para eliminar las bacterias que pudieron colonizar durante el período de reposo. Dejar escurrir antes de ordeñar.",
      "Errores frecuentes que encontramos en fincas:",
      "Usar la misma solución alcalina o ácida por varios lavados. Los químicos pierden efectividad después de cada uso. Siempre preparar solución fresca para cada ciclo CIP.",
      "No verificar la temperatura. El detergente alcalino necesita temperatura para funcionar. Si el agua está fría, la limpieza será deficiente aunque se use la dilución correcta. Un termómetro simple en la línea de retorno es suficiente para verificar.",
      "Saltar el lavado ácido. Si la piedra de leche se acumula, se forma una biopelícula que no se remueve con detergente alcalino. Eventualmente esto sube el conteo bacteriano y puede causar rechazos del producto.",
      "En VAROSA hacemos visitas técnicas a lecherías donde evaluamos el protocolo CIP actual, verificamos diluciones y temperaturas, y dejamos al personal capacitado para ejecutar el proceso correctamente.",
    ],
  },
  {
    slug: "auditorias-atp",
    title: "Auditorías ATP: Qué Son, Por Qué Importan y Cómo VAROSA Puede Ayudarle",
    category: "Servicios",
    excerpt:
      "Las pruebas de bioluminiscencia ATP miden la contaminación en superficies en segundos. Ofrecemos este servicio como parte de nuestro acompañamiento técnico. Conozca cómo funciona y qué resultados hemos obtenido con clientes reales.",
    date: "16 Dic 2025",
    readTime: "5 min",
    featured: false,
    content: [
      "ATP significa Adenosín Trifosfato, una molécula presente en todas las células vivas. Cuando una superficie tiene residuos orgánicos — ya sean bacterias, restos de alimentos, grasa o cualquier material biológico — contiene ATP. Las pruebas de bioluminiscencia ATP detectan esta molécula y la convierten en un número que indica el nivel de limpieza de la superficie.",
      "El proceso es rápido y simple: se pasa un hisopo especial por la superficie que se quiere evaluar, se inserta en un luminómetro portátil y en 15 segundos se obtiene una lectura en RLU (Unidades Relativas de Luz). A mayor número de RLU, mayor contaminación. Los rangos aceptables varían según la industria, pero en general: menos de 200 RLU se considera limpio, entre 200 y 500 necesita atención, y más de 500 indica que la limpieza fue insuficiente.",
      "La gran ventaja del ATP sobre métodos tradicionales (como cultivos microbiológicos) es la inmediatez. Un cultivo tarda 24-72 horas en dar resultados, para ese momento la producción ya continuó. La prueba ATP da resultados en el momento, lo que permite corregir antes de que el equipo vuelva a usarse.",
      "En VAROSA ofrecemos el servicio de auditoría ATP como parte de nuestro acompañamiento técnico. No es un servicio aparte con costo adicional — lo incluimos como herramienta para demostrar que los productos y protocolos que implementamos funcionan.",
      "Un caso típico de cómo usamos las auditorías ATP con nuestros clientes: en la primera visita, tomamos lecturas ATP de las superficies críticas antes y después de la limpieza con los productos actuales del cliente. Esto establece una línea base. Luego implementamos el protocolo recomendado con productos Diversey, Kemical o Solquisa según el caso, y tomamos nuevas lecturas. La diferencia es visible y medible en números.",
      "Estas auditorías son particularmente valiosas para clientes que deben presentar evidencia objetiva de limpieza ante auditores externos, clientes internacionales o entes reguladores como SENASA. Un reporte de ATP con resultados numéricos tiene mucho más peso que una lista de verificación visual.",
      "Si quiere conocer el nivel real de limpieza de su operación, podemos coordinar una visita de auditoría ATP sin compromiso. Le entregamos un reporte con las lecturas y recomendaciones específicas.",
    ],
  },
  {
    slug: "fibras-esponjas-3m",
    title: "Cómo Elegir las Fibras y Esponjas 3M Correctas para Cada Superficie",
    category: "Guía Técnica",
    excerpt:
      "No todas las fibras son iguales: la fibra verde raya el acero inoxidable y la blanca no limpia grasa pesada. Aprenda a seleccionar la fibra 3M correcta según el material y el tipo de suciedad para proteger sus superficies y equipos.",
    date: "9 Dic 2025",
    readTime: "4 min",
    featured: false,
    content: [
      "Las fibras y esponjas 3M son de los productos más utilizados en limpieza profesional, pero también de los más mal usados. El error más frecuente es usar una sola fibra para todo. Cada color de fibra 3M tiene un nivel de abrasión diferente, diseñado para un tipo específico de superficie y suciedad.",
      "Fibra verde (Scotch-Brite 96): Es la más abrasiva de uso común. Ideal para ollas, sartenes, parrillas y superficies que resisten rayado. No usar en acero inoxidable, vidrio o superficies pintadas porque las raya permanentemente. Es excelente para remover grasa quemada en cocinas de alto volumen.",
      "Fibra azul (Scotch-Brite 2000): Abrasión media. Diseñada para limpieza general de superficies que necesitan algo de fricción pero no tanto como la verde. Funciona bien en pisos, mesones de concreto y superficies cerámicas.",
      "Fibra blanca (Scotch-Brite 98): Baja abrasión. Para superficies delicadas como acero inoxidable, plásticos, resinas y superficies antiadherentes. No raya pero tampoco tiene el poder para remover grasa pesada o residuos quemados. Es la fibra correcta para mesas de acero inoxidable en plantas de alimentos.",
      "Fibra marrón (Scotch-Brite): Abrasión alta para trabajo pesado en pisos industriales, equipos de concreto y superficies rugosas. No usar en ninguna superficie de contacto con alimentos.",
      "La regla general es: si la superficie es más valiosa que el costo de la limpieza, use una fibra menos abrasiva. Una mesa de acero inoxidable que cuesta cientos de miles de colones no debería limpiarse con una fibra verde de pocos colones que le va a dejar rayas permanentes.",
      "Otro error común es reutilizar fibras hasta que se deshacen. Una fibra desgastada pierde su capacidad de limpieza y puede dejar residuos en la superficie. Recomendamos establecer una frecuencia de reemplazo basada en el uso — en cocinas de alto volumen, una fibra verde puede durar una semana; una blanca en una planta de alimentos, dos a tres semanas.",
      "En VAROSA manejamos la línea completa de fibras 3M y podemos ayudarle a seleccionar la fibra correcta para cada punto de su operación. Armamos kits por zona para que el personal siempre tenga la fibra adecuada a la mano.",
    ],
  },
];

const categories = ["Todos", "Guía Técnica", "Ahorro y Eficiencia", "Tips de Ahorro", "Normativas", "Comparativo", "Servicios"];

const Blog = () => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const toggle = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  const filteredArticles =
    activeCategory === "Todos"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filteredArticles.filter((a) => a.featured);
  const regular = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog"
        description="Guías técnicas, tips de ahorro y normativas para limpieza industrial, higiene alimentaria y sector HORECA en Costa Rica. Contenido práctico por VAROSA."
        path="/blog"
        keywords="guía limpieza industrial, BPM Costa Rica, código colores cepillos FDA, ahorro papel TORK, dilución Diversey, auditoría ATP, limpieza CIP lecherías"
      />
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-highlight/8 via-accent/5 to-transparent diagonal-section opacity-60" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Blog y <span className="text-accent">Recursos</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Guías técnicas, tips de ahorro y normativas para sacar el máximo
                provecho a sus productos de limpieza e higiene profesional
              </p>
            </div>
          </div>
        </section>

        {/* Categories — functional filter */}
        <section className="py-8 border-b border-primary/10 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveCategory(category);
                    setExpandedSlug(null);
                  }}
                  className={
                    activeCategory === category
                      ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold shadow-accent"
                      : "border-primary/20 text-foreground hover:border-highlight hover:text-highlight hover:bg-highlight/5"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-10">
            {/* Featured */}
            {featured.length > 0 && (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">
                  Artículos Destacados
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {featured.map((article, index) => (
                    <ScrollReveal key={article.slug} delay={index * 150}>
                    <ArticleCard
                      article={article}
                      expanded={expandedSlug === article.slug}
                      onToggle={() => toggle(article.slug)}
                      variant="featured"
                    />
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}

            {/* All / filtered */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">
              {activeCategory === "Todos" ? "Todos los Artículos" : activeCategory}
            </h2>
            {filteredArticles.length === 0 ? (
              <p className="text-foreground/60 text-center py-12">
                No hay artículos en esta categoría todavía.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeCategory === "Todos" ? articles : filteredArticles).map(
                  (article, index) => (
                    <ScrollReveal key={article.slug + "-grid"} delay={index * 80}>
                    <ArticleCard
                      article={article}
                      expanded={expandedSlug === article.slug}
                      onToggle={() => toggle(article.slug)}
                      variant="grid"
                    />
                    </ScrollReveal>
                  )
                )}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                ¿Tiene una Consulta Técnica?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Nuestro equipo técnico puede asesorarle sobre productos, diluciones,
                protocolos de limpieza y normativas. Escríbanos por WhatsApp.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-all duration-300"
              >
                <a
                  href="https://wa.me/50686703251?text=Hola%2C%20tengo%20una%20consulta%20t%C3%A9cnica%20sobre%20productos%20de%20limpieza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Consulta por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

/* ——————————————————————————————— Article Card ——————————————————————————————— */

function ArticleCard({
  article,
  expanded,
  onToggle,
  variant,
}: {
  article: Article;
  expanded: boolean;
  onToggle: () => void;
  variant: "featured" | "grid";
}) {
  const isFeatured = variant === "featured";

  return (
    <Card
      className={`border border-primary/10 hover:border-accent/40 transition-all duration-300 group overflow-hidden bg-card ${
        expanded ? "ring-2 ring-accent/30" : ""
      }`}
    >
      {/* Color banner */}
      <div
        className={`${
          isFeatured ? "h-48" : "h-40"
        } bg-gradient-to-br from-highlight/15 via-accent/10 to-secondary/10`}
      />

      <CardHeader className="pb-3">
        <div className={`flex items-center gap-3 mb-2 flex-wrap`}>
          <Badge
            variant="secondary"
            className={
              isFeatured
                ? "bg-highlight/15 text-highlight border-highlight/20 font-medium"
                : "text-xs bg-accent/10 text-accent border-accent/20"
            }
          >
            {article.category}
          </Badge>
          <div
            className={`flex items-center gap-3 ${
              isFeatured ? "text-sm" : "text-xs"
            } text-foreground/60`}
          >
            <span className="flex items-center gap-1">
              <Calendar className={isFeatured ? "h-4 w-4" : "h-3 w-3"} aria-hidden="true" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className={isFeatured ? "h-4 w-4" : "h-3 w-3"} aria-hidden="true" />
              {article.readTime}
            </span>
          </div>
        </div>

        <CardTitle
          className={`${
            isFeatured ? "text-xl sm:text-2xl" : "text-lg"
          } font-heading text-foreground group-hover:text-highlight transition-colors leading-tight`}
        >
          {article.title}
        </CardTitle>

        <CardDescription
          className={`${
            isFeatured ? "text-sm sm:text-base" : "text-sm"
          } mt-2 text-foreground/70 leading-relaxed`}
        >
          {article.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-0">
        {/* Expandable content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-primary/10 pt-6 pb-4 space-y-4">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="pt-4 border-t border-primary/10">
              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold shadow-lg transition-all duration-300"
              >
                <a
                  href={`https://wa.me/50686703251?text=Hola%2C%20le%C3%AD%20el%20art%C3%ADculo%20%22${encodeURIComponent(article.title)}%22%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  ¿Preguntas sobre este tema? Escríbanos
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Toggle button */}
        <Button
          onClick={onToggle}
          className={`w-full mt-2 font-semibold transition-all duration-300 ${
            expanded
              ? "bg-foreground/10 text-foreground hover:bg-foreground/15"
              : isFeatured
              ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-varosa"
              : "bg-transparent text-highlight hover:text-highlight hover:bg-highlight/10 border border-highlight/20"
          }`}
          variant={expanded ? "ghost" : isFeatured ? "default" : "outline"}
          size={isFeatured ? "default" : "sm"}
        >
          {expanded ? (
            <>
              Cerrar Artículo
              <ChevronUp className="ml-2 h-4 w-4" aria-hidden="true" />
            </>
          ) : (
            <>
              Leer Artículo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default Blog;

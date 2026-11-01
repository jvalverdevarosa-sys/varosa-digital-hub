// Contenido del blog de VAROSA. Fuente única: lo usan la página /blog (listado)
// y /blog/:slug (artículo completo). Al agregar un artículo, sumar también su
// slug en src/data/blog-slugs.json (lo lee vite.config.ts para el prerender) y
// en public/sitemap.xml.
import demaSprayCleanCocina from "@/assets/blog/dema-spray-clean-cocina.webp";
import diverseyDosificacionBodega from "@/assets/blog/diversey-dosificacion-bodega.webp";

// El contenido de un artículo es una lista de bloques. Un string simple es un
// párrafo (formato usado por los artículos originales); los objetos permiten
// insertar subtítulos e imágenes de ambiente dentro del cuerpo.
export type ContentBlock =
  | string
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; width?: number; height?: number };

export interface Article {
  slug: string;
  /** Fecha de publicación en ISO 8601 (para Schema.org y sitemap). */
  isoDate: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured: boolean;
  content: ContentBlock[];
}

export const articles: Article[] = [
  {
    slug: "dosificacion-quimicos-industria-alimentaria",
    isoDate: "2026-07-03",
    title:
      "Dosificación correcta de químicos en la industria alimentaria: donde la inocuidad, el ahorro y la sostenibilidad se encuentran",
    category: "Inocuidad alimentaria",
    excerpt:
      "Dosificar bien los químicos de limpieza protege la inocuidad alimentaria, reduce costos y es más sostenible. Cómo lograrlo en su planta o cocina.",
    date: "3 Jul 2026",
    readTime: "8 min",
    featured: true,
    content: [
      "En una planta de alimentos, en una cocina industrial o en una lechería, la limpieza no es un tema de \"orden y presentación\": es una barrera sanitaria. Y dentro de esa barrera hay una decisión pequeña, casi invisible, que termina afectando tres cosas a la vez: qué tan seguro es su producto, cuánto gasta su operación en químicos y qué huella deja en el ambiente. Esa decisión es la dosificación.",
      "Dosificar es, simplemente, usar la cantidad correcta de producto —en la concentración correcta— para cada tarea. Suena obvio, pero es uno de los puntos donde más dinero se pierde y donde más riesgo sanitario se acumula sin que nadie lo note.",
      { type: "heading", text: "La limpieza y desinfección es un control crítico, no un trámite" },
      "En cualquier sistema de inocuidad basado en HACCP, la limpieza y desinfección (L&D) es un programa prerrequisito: la base sobre la que se sostiene todo lo demás. Si la base falla, los controles posteriores trabajan en desventaja.",
      "Hay dos ideas que conviene tener siempre presentes:",
      "Limpiar y desinfectar son pasos distintos. Limpiar retira la suciedad y la materia orgánica; desinfectar reduce los microorganismos. Se limpia primero, porque la materia orgánica (grasa, residuos de alimento) inactiva a muchos desinfectantes. Desinfectar sobre una superficie sucia es, en la práctica, desinfectar a medias.",
      "La concentración y el tiempo de contacto son parte de la fórmula. Cada desinfectante fue diseñado para actuar a una concentración y durante un tiempo determinados. Si se aplica más diluido de lo debido, puede no eliminar los microorganismos; si no se respeta el tiempo de contacto, tampoco.",
      "Cuando la desinfección se queda corta de forma repetida, aparece el problema más silencioso de todos: los biofilms, capas donde los microorganismos se protegen y resisten mucho mejor a los químicos. Son especialmente delicados cuando se trata de patógenos ambientales como Listeria, habituales en entornos de planta.",
      { type: "heading", text: "El costo oculto de dosificar \"a ojo\"" },
      "El método más común —y más caro— es el \"chorrito\": echar producto de la garrafa según el criterio del momento. El problema es que ese criterio varía por persona, por turno y por día. Y varía en las dos direcciones, ambas costosas:",
      "Quedarse corto compromete la eficacia: sobreviven microorganismos y se abre la puerta a reprocesos, rechazos y riesgo sanitario.",
      "Pasarse desperdicia producto, deja residuos químicos que luego hay que enjuagar (más agua, más tiempo), puede corroer equipos y superficies, y suma un riesgo de seguridad para quien manipula el químico concentrado.",
      "Dicho de otra forma: dosificar mal cuesta caro tanto si se usa de menos como si se usa de más. Y como el gasto se reparte gota a gota en el día a día, casi nunca se ve como una sola cifra grande… aunque lo sea al final del mes.",
      { type: "heading", text: "Dosificar bien también es ahorrar" },
      "Aquí está la parte que muchas operaciones subestiman. Cuando se dosifica con un sistema —una bomba dosificadora, una estación de dilución, un dosificador automático en el punto de uso— pasan varias cosas buenas al mismo tiempo:",
      "La concentración deja de depender de la persona. El equipo entrega siempre la misma dilución, turno tras turno.",
      "Se usa solo lo necesario. No más, no menos. Eso se traduce directamente en menos producto consumido.",
      "Los resultados se vuelven repetibles, lo que hace la operación más fácil de auditar: si la concentración es constante y está documentada, sus registros de L&D para HACCP se sostienen solos.",
      "Según las estimaciones de VAROSA con algunos de sus clientes, el ahorro en consumo de producto puede superar el 20% al pasar a un sistema de dosificación. Conviene tomarlo como un estimado, no como una garantía: la cifra real depende del tipo de industria, del sistema de dosificación y de los químicos que se utilicen.",
      { type: "heading", text: "Y es más sostenible de lo que parece" },
      "Usar la cantidad correcta no solo cuida el presupuesto: reduce la huella ambiental de la operación.",
      "Menos químico usado significa menos envases, menos transporte y menos carga en las aguas residuales.",
      "Los formatos concentrados (que se diluyen en sitio) reducen el empaque y el peso que se moviliza frente a los productos listos para usar.",
      "Las formulaciones biodegradables se descomponen con mayor facilidad, lo que aligera el impacto sobre los cuerpos de agua.",
      "Este punto no es menor en Costa Rica. El vertido y reúso de aguas residuales está regulado por el Decreto Ejecutivo N.º 33601-MINAE-S (2007), Reglamento de Vertido y Reúso de Aguas Residuales, de aplicación obligatoria en todo el país. La norma obliga a todo ente generador a tratar sus aguas residuales para cumplir con las disposiciones del reglamento y a presentar reportes operacionales periódicos ante el Ministerio de Salud. Para una planta de alimentos, dosificar de forma responsable —usar solo el químico necesario y apostar por formulaciones más amigables— reduce la carga que llega al efluente y ayuda a mantenerse del lado correcto de esa normativa.",
      { type: "heading", text: "Cómo llevarlo a la práctica" },
      "Pasar del \"chorrito\" a un sistema confiable se apoya en cuatro pilares:",
      "1. El equipo adecuado para cada punto de uso. En VAROSA trabajamos con equipos de dosificación SEKO ProMax, además de espumadores y estaciones de dosificación DEMA, combinados con químicos concentrados de líneas líderes como Diversey.",
      "2. Capacitación del personal, para que el sistema se use como fue diseñado.",
      "3. Verificación objetiva, más allá de \"se ve limpio\". Aquí entran las auditorías por bioluminiscencia (ATP), que miden en segundos la carga residual sobre una superficie.",
      "4. Documentación, que convierte todo lo anterior en evidencia para sus auditorías de inocuidad.",
      {
        type: "image",
        src: demaSprayCleanCocina,
        alt: "Estación de dosificación DEMA Spray Clean II instalada en una cocina industrial, con selección de detergente, sanitizante y enjuague.",
        width: 960,
        height: 1280,
      },
      { type: "heading", text: "En VAROSA lo acompañamos de principio a fin" },
      "En VAROSA no solo distribuimos los productos: ayudamos a que se usen bien. A través de nuestros Servicios Técnicos instalamos sistemas de dosificación, realizamos auditorías ATP para verificar la eficacia de la limpieza y capacitamos a los equipos de planta y cocina.",
      {
        type: "image",
        src: diverseyDosificacionBodega,
        alt: "Sistema de dosificación de químicos Diversey montado en pared en una bodega de alimentos, con fichas técnicas de producto a la vista.",
        width: 1280,
        height: 536,
      },
      "Si quiere revisar cómo está dosificando hoy su operación —y dónde puede ganar en inocuidad, ahorro y sostenibilidad al mismo tiempo—, escríbanos por WhatsApp al +506 8501-2040 y con gusto lo orientamos.",
    ],
  },
  {
    slug: "codigo-colores-cepillos",
    isoDate: "2026-02-10",
    title: "Código de Colores en Cepillos: Cómo Prevenir Contaminación Cruzada con El Castor",
    category: "Guía Técnica",
    excerpt:
      "El código de colores separa las herramientas de limpieza por zona para evitar la contaminación cruzada. No es una exigencia de la FDA ni existe un esquema único: cada planta define el suyo. Le mostramos un esquema de ejemplo y cómo implementarlo con los cepillos El Castor que distribuimos.",
    date: "10 Feb 2026",
    readTime: "6 min",
    featured: true,
    content: [
      "La contaminación cruzada es uno de los riesgos más críticos en cualquier planta de alimentos. Ocurre cuando bacterias, alérgenos o residuos químicos se transfieren de una zona a otra a través de herramientas de limpieza compartidas. Por ejemplo, un cepillo usado para limpiar pisos de la zona de carga que luego se usa en una mesa de producción puede introducir contaminantes directamente en la línea de proceso.",
      "El código de colores es una práctica de la industria —no una exigencia de la FDA— pensada justamente para prevenir esto. La idea es simple: asignar un color a cada zona de la planta, de modo que las herramientas nunca se mezclen entre áreas con diferentes niveles de riesgo. No existe un esquema de colores universal: cada planta define el suyo según sus zonas y riesgos. El que mostramos a continuación es un ejemplo común; lo importante es documentarlo y respetarlo.",
      "Azul — Zona de producción y áreas de contacto directo con alimentos en proceso. Este color se reserva para las áreas de mayor criticidad. Los cepillos azules solo deben usarse en mesas de trabajo, bandas transportadoras y equipos donde el alimento está expuesto.",
      "Amarillo — Superficies de contacto con alimentos listos para consumo. Se diferencia del azul porque aplica a alimentos que ya no pasarán por otro proceso térmico o de desinfección. Es común en áreas de empaque final y servido.",
      "Rojo — Pisos, drenajes y áreas de baja criticidad dentro de la planta. Los cepillos rojos nunca deben acercarse a superficies de contacto con alimentos. Son exclusivos para pisos de producción, drenajes y zonas húmedas.",
      "Verde — Áreas externas, patios, zonas de carga y descarga. Estos cepillos se usan fuera del área de producción y tienen el nivel de restricción más bajo.",
      "Blanco — Se usa opcionalmente para áreas de lácteos o zonas de alérgenos donde se necesita una distinción adicional dentro de la planta.",
      "Los cepillos El Castor que distribuimos en VAROSA están disponibles en todos estos colores. Según el fabricante, están hechos con materiales que cumplen la normativa de la FDA para contacto con alimentos y resisten la desinfección repetida con químicos concentrados.",
      "Para implementar el sistema correctamente, le recomendamos: primero, hacer un mapa de su planta identificando las zonas por nivel de riesgo. Segundo, asignar un color a cada zona y documentarlo en un procedimiento escrito. Tercero, capacitar al personal para que entienda que las herramientas no se comparten entre zonas bajo ninguna circunstancia. Cuarto, colocar señalización visible en cada zona indicando el color asignado.",
      "Si está preparando una auditoría de inocuidad o quiere implementar el código de colores en su planta, nuestro equipo técnico puede acompañarle en el proceso con una visita de diagnóstico sin costo.",
    ],
  },
  {
    slug: "reducir-consumo-papel-tork",
    isoDate: "2026-02-03",
    title: "5 Formas de Reducir el Consumo de Papel en Baños de Alto Tráfico con TORK",
    category: "Ahorro y Eficiencia",
    excerpt:
      "Según TORK, sus dispensadores SmartOne reducen el consumo de papel higiénico hasta un 40% frente a un rollo jumbo convencional, gracias al dispensado hoja por hoja. Compare el costo por uso vs. rollos convencionales y descubra cómo calcular el ahorro real para su operación.",
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
    isoDate: "2026-01-27",
    title: "Dilución Correcta de Químicos Diversey: Errores Comunes que Cuestan Dinero",
    category: "Tips de Ahorro",
    excerpt:
      "Usar más producto del necesario no limpia mejor — solo desperdicia dinero. Conozca los errores de dilución más comunes y cómo los sistemas de dosificación automática ayudan a usar solo lo necesario.",
    date: "27 Ene 2026",
    readTime: "7 min",
    featured: false,
    content: [
      "Uno de los errores más costosos en limpieza industrial es la dilución incorrecta de químicos. Y el error más común no es usar menos producto — es usar más. Muchos operarios creen que si un poco limpia bien, mucho limpiará mejor. En realidad, una solución más concentrada de lo indicado desperdicia producto, puede dañar superficies y deja residuos que atraen más suciedad.",
      "Los productos Diversey están formulados con concentraciones específicas que funcionan óptimamente a la dilución recomendada por el fabricante. Cada producto tiene una tabla de dilución que indica la proporción exacta de producto por litro de agua según el tipo de suciedad y superficie.",
      "Errores comunes que vemos en el campo:",
      "Diluir a ojo. Sin medida, la concentración varía en cada preparación. Un día el producto sale muy diluido y no limpia, al siguiente sale muy concentrado y se desperdicia. La solución es usar dosificadores automáticos o al menos recipientes de medida calibrados.",
      "Mezclar productos incompatibles. Algunos operarios mezclan desengrasantes con desinfectantes pensando que hacen un producto más fuerte. Esto puede neutralizar los ingredientes activos de ambos productos y en el peor caso generar gases peligrosos. Cada producto Diversey se usa solo, en su dilución indicada.",
      "No enjuagar antes de desinfectar. La desinfección solo funciona sobre superficies previamente limpias. Si se aplica desinfectante sobre una superficie con grasa o residuos, el ingrediente activo se consume reaccionando con la materia orgánica en lugar de eliminar las bacterias. El protocolo correcto es: primero limpiar con detergente, enjuagar, luego aplicar desinfectante.",
      "Preparar producto de más y almacenarlo. Muchas soluciones diluidas —en especial las cloradas— pierden efectividad con el paso de las horas. Revise en la ficha técnica cuánto dura la solución preparada y prepare solo la cantidad que se va a usar en el turno.",
      "Los sistemas de dosificación automática que ofrecemos en VAROSA eliminan estos problemas. Se instalan directo en la línea de agua y dispensan la cantidad exacta de químico por litro, cada vez. Según las estimaciones de VAROSA con algunos de sus clientes, el ahorro en consumo de químicos puede superar el 20% al pasar a un sistema de dosificación, además de lograr resultados más consistentes. Es un estimado, no una garantía: depende de la operación, del sistema y de los productos.",
      "Si quiere evaluar si su operación está diluyendo correctamente, nuestro equipo técnico puede hacer una visita de diagnóstico donde medimos el consumo actual, identificamos oportunidades de ahorro y recomendamos el sistema de dosificación adecuado para su planta.",
    ],
  },
  {
    slug: "senasa-bpm-2026",
    isoDate: "2026-01-20",
    title: "¿Qué Exigen SENASA y el Ministerio de Salud a las Plantas de Alimentos en Costa Rica? Guía BPM 2026",
    category: "Normativas",
    excerpt:
      "Según el tipo de producto, una planta de alimentos en Costa Rica la autoriza SENASA o el Ministerio de Salud, y en ambos casos se evalúan Buenas Prácticas de Manufactura (BPM). Repasamos los puntos clave de limpieza y desinfección que conviene tener al día.",
    date: "20 Ene 2026",
    readTime: "8 min",
    featured: false,
    content: [
      "En Costa Rica, quién autoriza una planta de alimentos depende de lo que produce. Según el Decreto N.º 37025-MAG-S (2012), el Servicio Nacional de Salud Animal (SENASA) otorga el Certificado Veterinario de Operación a los establecimientos que procesan productos de origen animal, y el Ministerio de Salud otorga el Permiso Sanitario de Funcionamiento al resto de plantas de alimentos. En ambos casos, las Buenas Prácticas de Manufactura (BPM) —recogidas en el Reglamento Técnico Centroamericano RTCA 67.01.33:06— marcan los requisitos mínimos para operar y pasar auditorías.",
      "En lo que respecta a limpieza y desinfección, estos son los puntos que más se revisan en una inspección o auditoría:",
      "Programa de limpieza documentado. La planta debe tener un documento escrito que detalle qué se limpia, con qué frecuencia, qué productos se usan, a qué dilución, y quién es responsable. No basta con limpiar — hay que demostrar que se limpia de manera planificada y sistemática.",
      "Productos aprobados para uso alimentario. Los químicos utilizados deben ser aptos para contacto indirecto con alimentos y contar con fichas técnicas y hojas de seguridad (SDS) disponibles. Productos como los de la línea Diversey y Kemical que distribuimos cumplen con estas especificaciones y entregamos la documentación técnica completa a cada cliente.",
      "Separación de herramientas por zona. Prevenir la contaminación cruzada implica que las herramientas de limpieza no circulen entre áreas de distinto riesgo. El código de colores no es obligatorio, pero es la forma más práctica y visible de lograrlo; con cepillos El Castor se implementa fácilmente.",
      "Registros de limpieza verificables. Se deben mantener registros que demuestren que los procedimientos se ejecutan. Esto incluye listas de verificación diarias firmadas, registros de dilución y, si es posible, validaciones objetivas como pruebas ATP.",
      "Control de plagas vinculado a limpieza. Una planta limpia es la primera barrera contra plagas, especialmente en áreas de almacenamiento y residuos, y ambos programas suelen revisarse juntos.",
      "Capacitación del personal. Todo el personal operativo debe recibir capacitación documentada en BPM, incluyendo prácticas correctas de limpieza. Nosotros ofrecemos capacitaciones in situ como parte de nuestro servicio técnico.",
      "Si su planta va a recibir una inspección de SENASA o del Ministerio de Salud, o una auditoría de un cliente internacional, nuestro equipo puede revisar sus protocolos actuales de limpieza, identificar brechas y ayudarle a preparar la documentación necesaria. Este acompañamiento es parte del valor agregado que ofrecemos como distribuidor, no solo como proveedor de productos.",
    ],
  },
  {
    slug: "tork-vs-genericos",
    isoDate: "2026-01-13",
    title: "Dispensadores de Jabón: TORK vs. Dispensadores Genéricos — ¿Vale la Diferencia?",
    category: "Comparativo",
    excerpt:
      "Analizamos durabilidad, costo por lavado, higiene y mantenimiento entre dispensadores TORK de Essity y opciones genéricas del mercado. En nuestro cálculo para un hotel de 40 habitaciones, la inversión inicial mayor se recuperó en unos 8 meses; el resultado varía según cada operación.",
    date: "13 Ene 2026",
    readTime: "6 min",
    featured: false,
    content: [
      "Cuando un hotel o restaurante necesita dispensadores de jabón, la primera tentación es comprar la opción más barata. Y tiene sentido — un dispensador genérico puede costar un tercio de un dispensador TORK. Pero el precio de compra es solo el inicio de la historia.",
      "Durabilidad. Los dispensadores genéricos suelen ser de plástico delgado que se quiebra con el uso constante. En baños de alto tráfico es común tener que reemplazarlos con frecuencia. Los dispensadores TORK están diseñados para uso intensivo, con materiales que resisten impactos y la limpieza con químicos, por lo que suelen durar bastante más.",
      "Costo por lavado. Los dispensadores genéricos usan jabón líquido que se dispensa sin control — el usuario puede presionar varias veces o el mecanismo gotea. Los sistemas TORK dispensan una dosis medida por activación. Un cartucho TORK rinde más lavados que una botella de jabón genérico del mismo volumen. Por eso, al calcular el costo por lavado de manos —y no el precio de la botella— TORK suele resultar más económico. Lo calculamos con los números de su operación.",
      "Higiene. Los dispensadores genéricos de rellenado son un riesgo sanitario. Cada vez que se rellenan, se introduce contaminación al contenedor. Un estudio publicado en 2011 en la revista Applied and Environmental Microbiology (Zapka y colaboradores) encontró contaminados los 14 dispensadores de relleno de una escuela; quienes se lavaban con ese jabón terminaban con 26 veces más bacterias gramnegativas en las manos. Al cambiarlos por dispensadores de recarga sellada, ninguno estaba contaminado un año después. Los cartuchos sellados TORK eliminan este riesgo porque el jabón nunca está expuesto al ambiente.",
      "Mantenimiento. Un dispensador genérico que falla significa jabón derramado en el piso, quejas de clientes y tiempo del personal de limpieza arreglando el problema. Los dispensadores TORK tienen mecanismos simples, partes reemplazables y soporte técnico de VAROSA incluido en el servicio.",
      "Imagen. En un hotel o restaurante, los baños son parte de la experiencia del cliente. Un dispensador genérico rayado y con jabón goteando da una impresión muy diferente a un dispensador TORK limpio y funcional. La inversión en imagen también tiene retorno.",
      "En nuestro cálculo para un hotel de 40 habitaciones, la inversión adicional en dispensadores TORK se recuperó en aproximadamente 8 meses por el ahorro en jabón y la eliminación de reemplazos. Es un caso de referencia: el plazo real depende de cada operación.",
      "Si quiere que hagamos un cálculo específico para su operación, coordinamos una visita donde evaluamos sus baños actuales, contamos los puntos de dispensado y le presentamos una comparación de costos a 12 meses con números reales.",
    ],
  },
  {
    slug: "limpieza-cip-lecherias",
    isoDate: "2026-01-06",
    title: "Limpieza CIP en Lecherías: Protocolo Paso a Paso con Kemical y Solquisa",
    category: "Guía Técnica",
    excerpt:
      "La limpieza CIP (Clean-In-Place) es crítica en equipos de ordeño y tanques de enfriamiento. Detallamos un protocolo de 5 pasos con productos Kemical y Solquisa para el sector lácteo.",
    date: "6 Ene 2026",
    readTime: "9 min",
    featured: false,
    content: [
      "La limpieza CIP (Clean-In-Place) es el método estándar para limpiar y desinfectar equipos de ordeño, líneas de transporte de leche y tanques de enfriamiento sin necesidad de desarmar los equipos. En una lechería, este proceso se ejecuta después de cada ordeño y su correcta ejecución impacta directamente en el conteo bacteriano de la leche y la vida útil del producto final.",
      "El protocolo CIP que recomendamos consta de 5 pasos, utilizando productos Kemical y Solquisa que están formulados específicamente para el sector lácteo:",
      "Paso 1 — Enjuague con agua tibia (35-40°C). Inmediatamente después del ordeño, circular agua tibia por todo el sistema para remover los residuos gruesos de leche. No usar agua caliente en este paso porque coagula las proteínas y las adhiere a las superficies, haciendo más difícil la limpieza posterior. Este enjuague debe durar al menos 5 minutos.",
      "Paso 2 — Lavado alcalino. Circular la solución alcalina (detergente Kemical para lecherías) a la dilución y temperatura recomendada por el fabricante, generalmente entre 60-75°C. Este paso disuelve las grasas y proteínas lácteas adheridas a las superficies internas. La circulación debe durar entre 10 y 15 minutos para asegurar un contacto suficiente.",
      "Paso 3 — Enjuague intermedio con agua limpia. Remover todos los residuos de detergente alcalino del sistema. Este paso es importante porque los residuos de detergente pueden neutralizar el ácido del siguiente paso.",
      "Paso 4 — Lavado ácido. Circular la solución ácida (Solquisa para lecherías) para remover depósitos minerales como piedra de leche (calcio y magnesio) que se acumulan en las superficies. La piedra de leche crea una capa porosa donde las bacterias se protegen y multiplican. Este lavado se realiza a temperatura ambiente o tibia y dura 10 minutos. No siempre es necesario después de cada ordeño: la frecuencia depende de la dureza del agua y de la recomendación del fabricante del producto; una referencia común es cada 2 a 3 días, ajustando según la inspección visual.",
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
    isoDate: "2025-12-16",
    title: "Auditorías ATP: Qué Son, Por Qué Importan y Cómo VAROSA Puede Ayudarle",
    category: "Servicios",
    excerpt:
      "Las pruebas de bioluminiscencia ATP miden la contaminación en superficies en segundos. Ofrecemos este servicio como parte de nuestro acompañamiento técnico. Conozca cómo funciona y cómo lo usamos con nuestros clientes.",
    date: "16 Dic 2025",
    readTime: "5 min",
    featured: false,
    content: [
      "ATP significa Adenosín Trifosfato, una molécula presente en todas las células vivas. Cuando una superficie tiene residuos orgánicos — ya sean bacterias, restos de alimentos, grasa o cualquier material biológico — contiene ATP. Las pruebas de bioluminiscencia ATP detectan esta molécula y la convierten en un número que indica el nivel de limpieza de la superficie.",
      "El proceso es rápido y simple: se pasa un hisopo especial por la superficie que se quiere evaluar, se inserta en un luminómetro portátil y en segundos se obtiene una lectura en RLU (Unidades Relativas de Luz). A mayor número de RLU, mayor contaminación. Los límites de aceptación no son universales: cada fabricante de luminómetros usa su propia escala, y cada planta fija sus límites por superficie en su plan de verificación.",
      "La gran ventaja del ATP sobre métodos tradicionales (como cultivos microbiológicos) es la inmediatez. Un cultivo tarda 24-72 horas en dar resultados, para ese momento la producción ya continuó. La prueba ATP da resultados en el momento, lo que permite corregir antes de que el equipo vuelva a usarse.",
      "En VAROSA ofrecemos el servicio de auditoría ATP como parte de nuestro acompañamiento técnico. No es un servicio aparte con costo adicional — lo incluimos como herramienta para demostrar que los productos y protocolos que implementamos funcionan.",
      "Un caso típico de cómo usamos las auditorías ATP con nuestros clientes: en la primera visita, tomamos lecturas ATP de las superficies críticas antes y después de la limpieza con los productos actuales del cliente. Esto establece una línea base. Luego implementamos el protocolo recomendado con productos Diversey, Kemical o Solquisa según el caso, y tomamos nuevas lecturas. La diferencia es visible y medible en números.",
      "Estas auditorías son particularmente valiosas para clientes que deben presentar evidencia objetiva de limpieza ante auditores externos, clientes internacionales o entes reguladores como SENASA. Un reporte de ATP con resultados numéricos tiene mucho más peso que una lista de verificación visual.",
      "Si quiere conocer el nivel real de limpieza de su operación, podemos coordinar una visita de auditoría ATP sin compromiso. Le entregamos un reporte con las lecturas y recomendaciones específicas.",
    ],
  },
  {
    slug: "fibras-esponjas-3m",
    isoDate: "2025-12-09",
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

export const getArticle = (slug: string | undefined) =>
  articles.find((a) => a.slug === slug);

import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { business } from '@/src/lib/business';
import { getMetadata } from '@/src/lib/seo';
import { Phone, MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

const servicePageContent: Record<string, {
  intro: string[];
  detailsTitle: string;
  details: string[];
  problemsTitle: string;
  problems: string[];
  closing: string[];
}> = {
  persianas: {
    intro: [
      "En Reparaciones Nieto trabajamos a diario con persianas domésticas y comerciales que se atascan, hacen ruido, bajan torcidas o directamente dejan de funcionar cuando más se necesitan. Nuestro servicio de reparación de persianas en Alicante está pensado para resolver averías con rapidez, explicando al cliente el origen del problema y aplicando una solución duradera, no un simple parche temporal.",
      "La mayoría de incidencias en persianas empiezan con síntomas pequeños: una cinta desgastada, una lama fisurada, un recogedor que no recoge bien o una guía con suciedad acumulada. Si se actúa a tiempo, la reparación suele ser más rápida y económica. Cuando se deja pasar, el mecanismo completo trabaja forzado y terminan apareciendo roturas mayores en eje, flejes, poleas o incluso en el propio cajón.",
      "Por eso nuestro enfoque combina diagnóstico técnico, reparación precisa y revisión general del conjunto. No solo arreglamos la pieza rota; comprobamos el estado del resto de componentes para que la persiana vuelva a subir y bajar con suavidad, seguridad y estabilidad."
    ],
    detailsTitle: "Cómo trabajamos la reparación de persianas",
    details: [
      "Cada intervención comienza con una revisión visual y mecánica para detectar si la avería está en la cinta, las lamas, el eje, los flejes, la polea o las guías laterales. En Alicante es muy habitual encontrar desgaste por uso intensivo, exposición solar, salitre y falta de mantenimiento periódico, especialmente en viviendas próximas a la costa y en locales con mucho tránsito.",
      "Una vez localizado el fallo, planteamos la reparación más eficiente. Si basta con sustituir una cinta o varios flejes, lo hacemos in situ con material compatible y resistente. Si existen deformaciones en lamas o desalineación del enrollamiento, reajustamos el mecanismo para evitar que el problema se repita. También revisamos el cajón para comprobar que no haya piezas sueltas, rozamientos o acumulación de suciedad que comprometan el funcionamiento.",
      "Además, prestamos mucha atención al acabado final. Una persiana bien reparada no solo debe funcionar; debe hacerlo con recorrido uniforme, sin tirones y sin forzar el sistema. Esa diferencia es la que evita nuevas averías al poco tiempo y mejora la sensación de calidad del servicio."
    ],
    problemsTitle: "Averías frecuentes que resolvemos",
    problems: [
      "Entre las incidencias más habituales están las cintas rotas o deshilachadas, los recogedores bloqueados, las persianas que se quedan colgadas, las lamas partidas, los flejes sueltos y las guías que frenan el desplazamiento. También vemos muchos casos de persianas que suben torcidas por una mala tensión del eje o por fijaciones desgastadas.",
      "En viviendas con persianas antiguas, otro problema común es el endurecimiento del mecanismo. La persona nota que cada vez cuesta más subir y bajar, y acaba forzando la cinta hasta romperla. En negocios y escaparates, en cambio, suelen aparecer averías relacionadas con uso repetitivo, golpes o falta de ajuste tras pequeñas deformaciones.",
      "Si la persiana presenta varios fallos al mismo tiempo, valoramos si conviene una reparación parcial o una intervención más completa para dejarla en condiciones fiables de uso diario. Nuestro objetivo es que el cliente tenga una referencia clara del estado real de la instalación y una solución proporcionada."
    ],
    closing: [
      "Trabajamos tanto en reparaciones urgentes como en revisiones programadas. Si tu persiana se ha quedado atascada, no cierra bien o empieza a dar señales de desgaste, actuar a tiempo casi siempre reduce el coste final y evita daños en piezas más caras del sistema.",
      "Atendemos Alicante y alrededores con servicio rápido, materiales adecuados y experiencia real en persianas de vivienda, locales y comunidades. Si necesitas una revisión o una reparación profesional, te orientamos de forma clara y sin rodeos."
    ]
  },
  "persianas-hogar": {
    intro: [
      "Las persianas de hogar cumplen varias funciones al mismo tiempo: regulan la luz, mejoran la privacidad, ayudan al aislamiento y protegen la vivienda frente al calor y al desgaste exterior. Cuando fallan, el problema no es solo estético; también afecta al confort y a la seguridad del día a día. En Reparaciones Nieto ofrecemos un servicio especializado para persianas domésticas en Alicante, con soluciones adaptadas al tipo de vivienda y al sistema instalado.",
      "En casas y pisos vemos averías muy distintas según la antigüedad del inmueble, la orientación de la ventana y el material de la persiana. En zonas de mucho sol, por ejemplo, es frecuente que los componentes sufran más fatiga térmica. En viviendas con uso diario intensivo, el desgaste aparece antes en cintas, recogedores, flejes y motores.",
      "Nuestro trabajo consiste en revisar la persiana como un conjunto: mecanismo, eje, cajón, guías y lamas. Eso nos permite solucionar el fallo actual y detectar puntos débiles que, si no se corrigen, suelen convertirse en nuevas incidencias a corto plazo."
    ],
    detailsTitle: "Servicio pensado para el confort de la vivienda",
    details: [
      "No todas las persianas domésticas tienen las mismas necesidades. Hay persianas tradicionales de cinta, sistemas motorizados, persianas térmicas, modelos de aluminio y configuraciones específicas para dormitorios, salones o accesos exteriores. Por eso ajustamos cada reparación o instalación al tipo de persiana y al uso real que tiene en la vivienda.",
      "Cuando el problema está en el aislamiento o en el esfuerzo de maniobra, revisamos si la instalación está equilibrada correctamente. Una persiana que pesa demasiado, roza o cierra mal no solo resulta incómoda; también penaliza el aislamiento y acelera el desgaste del sistema. En muchos casos, pequeños ajustes mejoran notablemente la experiencia diaria del usuario.",
      "También atendemos motorizaciones y actualizaciones para mejorar comodidad. En viviendas donde las persianas se usan mucho, automatizar o reajustar el sistema puede alargar la vida útil y reducir averías asociadas a tirones, bajadas bruscas o maniobras incorrectas."
    ],
    problemsTitle: "Qué solemos reparar en persianas domésticas",
    problems: [
      "Reparamos persianas que no suben, no bajan, se descuelgan, hacen ruido, quedan torcidas o se quedan a medio recorrido. También actuamos cuando hay lamas deterioradas, cajones mal cerrados, flejes fatigados o motores que han perdido fuerza y ya no completan bien el ciclo.",
      "Otro caso muy común en Alicante es la persiana que parece funcionar, pero ya no aísla como antes. Esto puede deberse a deformaciones, falta de ajuste, desgaste en guías o cierre incompleto. Muchas veces el cliente relaciona el problema con la ventana, cuando en realidad el fallo está en la persiana o en el registro.",
      "Nuestro objetivo no es solo dejarla operativa, sino devolverle un funcionamiento cómodo, estable y coherente con el uso de la vivienda. Eso es especialmente importante en dormitorios, habitaciones infantiles, salones expuestos al sol y accesos con alta exigencia térmica."
    ],
    closing: [
      "Si tu persiana doméstica falla, conviene revisarla antes de que la avería afecte a más componentes o te deje sin cierre en una estancia importante. Una intervención a tiempo suele ser más sencilla, más limpia y más rentable.",
      "Trabajamos con criterio técnico y atención rápida para que la vivienda recupere confort, seguridad y buen funcionamiento sin complicaciones innecesarias."
    ]
  },
  "persianas-local": {
    intro: [
      "Las persianas de local soportan un uso mucho más exigente que una persiana doméstica. En muchos negocios se abren y cierran todos los días, varias veces al día, y además están expuestas a golpes, vibraciones, suciedad y desgaste continuado. Por eso necesitan un servicio técnico especializado que entienda tanto la parte mecánica como la urgencia comercial que implica una avería.",
      "En Reparaciones Nieto atendemos persianas de local en Alicante con enfoque práctico: recuperar la operatividad cuanto antes, minimizar el tiempo de parada y dejar el sistema en condiciones fiables para el trabajo diario. Sabemos que un cierre que no sube o no baja no es una simple molestia, sino un problema directo para la actividad del negocio.",
      "Actuamos sobre persianas enrollables, sistemas de seguridad, mecanismos manuales y motorizados, trabajando tanto en incidencias urgentes como en mantenimiento preventivo para evitar bloqueos y roturas en momentos críticos."
    ],
    detailsTitle: "Reparación orientada a continuidad del negocio",
    details: [
      "Cada persiana comercial tiene particularidades según el tipo de local, el peso del cierre, el motor, el eje y la frecuencia de uso. Por eso revisamos el conjunto completo antes de intervenir: guías, lamas, fijaciones, sistema de tracción, motor y elementos de seguridad. Esto nos permite decidir si la avería se resuelve con una reparación puntual o si conviene reforzar otras piezas que ya están dando señales de fatiga.",
      "En comercios, uno de los mayores problemas es que pequeñas incidencias pasan desapercibidas hasta que el cierre falla del todo. Un ruido extraño, una bajada irregular o una vibración repetida suelen anticipar averías en guías, eje o motor. Cuando se detectan a tiempo, la reparación suele ser mucho más controlada y menos costosa.",
      "También atendemos aperturas urgentes y problemas de maniobra que impiden cerrar el negocio con normalidad. En estos casos priorizamos la recuperación de seguridad y funcionamiento, y después realizamos los ajustes necesarios para estabilizar el sistema."
    ],
    problemsTitle: "Incidencias habituales en persianas de local",
    problems: [
      "Las averías más frecuentes incluyen bloqueos, lamas dañadas por golpes, motores que no responden correctamente, mandos desconfigurados, cierres que bajan torcidos y sistemas de cierre que ya no ofrecen la misma seguridad. También son habituales los problemas de rozamiento por guías sucias o desajustadas.",
      "En locales con mucha exposición exterior, la suciedad y la falta de mantenimiento aceleran el deterioro del mecanismo. Cuando además existe motorización, cualquier descompensación del cierre termina afectando al esfuerzo del motor y puede provocar averías más serias.",
      "Por eso recomendamos no esperar a que el cierre quede totalmente inutilizado. Si el local ya muestra señales de mal funcionamiento, una revisión técnica puede evitar una parada más larga y una reparación de mayor alcance."
    ],
    closing: [
      "Nuestro servicio para persianas de local está pensado para negocios que necesitan rapidez, claridad y una solución estable. Atendemos tanto incidencias puntuales como revisiones preventivas para reducir riesgos en aperturas y cierres diarios.",
      "Si tu persiana comercial no funciona bien o quieres prevenir una avería en el peor momento, te ayudamos a dejarla lista para un uso continuo y seguro."
    ]
  },
  "cierres-metalicos": {
    intro: [
      "Los cierres metálicos son un elemento clave de seguridad para comercios, almacenes, naves y accesos con exposición exterior. Cuando presentan una avería, el impacto suele ser inmediato: dificultad para abrir, imposibilidad de cerrar correctamente, pérdida de seguridad o riesgo de que el sistema quede bloqueado en una posición comprometida. Por eso el mantenimiento y la reparación deben hacerse con criterio técnico y rapidez.",
      "En Reparaciones Nieto trabajamos cierres metálicos en Alicante con un enfoque centrado en resistencia, estabilidad y continuidad de uso. No solo nos ocupamos del fallo visible; revisamos cómo está trabajando el conjunto para evitar que el problema reaparezca por desajustes, fatiga del eje, deformaciones o suciedad acumulada en las guías.",
      "Atendemos cierres manuales y motorizados, incluyendo incidencias urgentes y mejoras orientadas a facilitar la maniobra diaria, reforzar la seguridad y prolongar la vida útil del sistema."
    ],
    detailsTitle: "Intervenciones técnicas en cierres metálicos",
    details: [
      "Cada cierre metálico tiene un comportamiento distinto según su tamaño, peso, frecuencia de uso y exposición al exterior. Por eso comenzamos revisando guías, lamas, eje, motor, puntos de fricción y elementos de bloqueo. Una avería localizada muchas veces es la consecuencia de un desajuste más amplio del conjunto.",
      "Cuando el cierre roza, vibra, baja torcido o fuerza el motor, suele existir una combinación de desgaste y descompensación. Si solo se sustituye la pieza más visible sin corregir el origen, el problema vuelve. Nuestro trabajo busca precisamente restablecer el funcionamiento correcto del cierre y dejarlo preparado para soportar el uso real del negocio.",
      "También realizamos revisiones preventivas para establecimientos que prefieren anticiparse a fallos graves. Este tipo de mantenimiento es especialmente útil en negocios que no pueden asumir una persiana bloqueada en plena jornada o al cierre del local."
    ],
    problemsTitle: "Problemas frecuentes en cierres metálicos",
    problems: [
      "Reparamos lamas dobladas o sueltas, cierres atascados, guías desalineadas, ejes fatigados, motores con pérdida de fuerza, mandos que fallan y sistemas que ya no cierran con la precisión necesaria. En algunos casos el problema aparece tras un golpe o intento de manipulación; en otros, es desgaste puro por uso continuado.",
      "Los ambientes con polvo, humedad o proximidad al mar también castigan especialmente los cierres metálicos. El salitre, la suciedad fina y la falta de lubricación adecuada terminan generando rozamientos que multiplican el esfuerzo del mecanismo y del motor.",
      "Una señal de alerta habitual es cuando el cierre todavía funciona, pero ya no lo hace con suavidad. Ese es el momento ideal para intervenir, porque todavía se está a tiempo de evitar una avería mayor con más coste y más tiempo de parada."
    ],
    closing: [
      "Si tu cierre metálico necesita una reparación, una revisión o una motorización, trabajamos con soluciones realistas, materiales adecuados y atención rápida. La prioridad es recuperar seguridad y funcionamiento sin improvisaciones.",
      "Atendemos Alicante y alrededores con experiencia en cierres de negocio, accesos comerciales y naves, siempre con el objetivo de dejar el sistema preparado para un uso estable y seguro."
    ]
  },
  fontaneria: {
    intro: [
      "Nuestro servicio de fontanería en Alicante está pensado para resolver averías comunes, incidencias urgentes y problemas de instalación que afectan al funcionamiento normal de la vivienda o del local. Cuando hay una fuga, un atasco o un fallo de agua caliente, lo importante no es solo llegar rápido, sino diagnosticar bien para evitar que el mismo problema vuelva a repetirse pocos días después.",
      "En Reparaciones Nieto atendemos tanto emergencias de fontanería como reparaciones programadas. Eso incluye actuaciones en cocina, baño, termo, calentador, cisterna, grifería y redes interiores de agua. Trabajamos con un enfoque práctico: identificar el origen real de la avería, explicar al cliente qué está pasando y aplicar una solución proporcionada al problema detectado.",
      "La fontanería doméstica suele fallar por acumulación de desgaste, cal, obstrucciones, juntas fatigadas, piezas internas deterioradas o pequeñas pérdidas que se han dejado avanzar. En Alicante, además, la dureza del agua hace que muchos componentes sufran más de lo que parece, sobre todo en griferías, mecanismos de cisterna, termos y calentadores."
    ],
    detailsTitle: "Servicios específicos de fontanería que realizamos",
    details: [
      "Atendemos emergencias de fontanería cuando hay una incidencia que no puede esperar: fugas activas, reboses, bajadas fuertes de presión, fallos de agua caliente o elementos sanitarios averiados que impiden el uso normal de la vivienda o del negocio. En estos casos priorizamos la contención del problema y la recuperación del servicio.",
      "También resolvemos atascos en desagües, fregaderos y WC, actuando sobre los puntos de obstrucción más habituales y revisando si el atasco responde a un problema puntual o a una acumulación más amplia en la instalación. Del mismo modo, trabajamos fugas de agua visibles y ocultas, baja presión en grifos o circuitos, grifos que gotean, problemas con calentador o agua caliente y averías en cisterna y WC.",
      "Cuando una incidencia se repite, no nos limitamos a cambiar la pieza dañada. Comprobamos si hay exceso de cal, desgaste general del conjunto, obstrucción parcial o mala regulación. Ese enfoque es el que permite dejar una reparación más estable y útil para el cliente."
    ],
    problemsTitle: "Averías frecuentes que resolvemos en Alicante",
    problems: [
      "Entre las incidencias más habituales están las fugas de agua en conexiones, llaves, sifones y mecanismos de cisterna; los atascos en fregadero, desagües de baño y WC; la baja presión en determinados puntos de consumo; los grifos que gotean de forma continua; y los fallos de calentador o agua caliente que dejan al cliente sin servicio en momentos clave.",
      "También son frecuentes los sanitarios que pierden agua, las cisternas que no cargan bien o no descargan correctamente, y los pequeños escapes que parecen menores pero terminan elevando el consumo o provocando humedades. En viviendas con instalaciones más antiguas, muchas de estas averías vienen acompañadas de piezas fatigadas o ajustadas de forma deficiente tras reparaciones anteriores.",
      "Nuestro trabajo se centra en dejar la instalación operativa, segura y revisada. Si detectamos que la avería actual es un síntoma de un problema más amplio, lo explicamos claramente para que el cliente pueda decidir con información real y sin sorpresas."
    ],
    closing: [
      "Si necesitas un fontanero urgente en Alicante para una fuga, un atasco, un problema de agua caliente o una cisterna averiada, podemos ayudarte con rapidez y criterio técnico. También atendemos reparaciones no urgentes y mejoras en instalaciones que ya muestran desgaste.",
      "La fontanería bien resuelta evita daños mayores, pérdidas de agua y molestias repetidas. Por eso trabajamos con diagnóstico claro, reparación cuidada y atención orientada a que el problema quede realmente solucionado."
    ]
  },
  "fontanero-urgente": {
    intro: [
      "Cuando una avería de agua aparece de forma repentina, el margen para decidir con calma desaparece. Una fuga activa, un sanitario desbordado, un termo que falla o una llave que no corta bien pueden provocar daños materiales, pérdida de servicio e incluso afectar a vecinos o a la actividad de un local. Por eso el servicio de fontanero urgente en Alicante debe ir más allá de llegar rápido: tiene que contener el problema y dejar una solución segura desde el primer momento.",
      "En Reparaciones Nieto atendemos urgencias de fontanería con un enfoque muy claro. Lo primero es estabilizar la incidencia para evitar que siga causando daños. Después identificamos el origen real y valoramos si puede resolverse completamente en la misma intervención o si conviene una segunda fase con materiales o trabajos complementarios. Esa forma de trabajar evita decisiones improvisadas que luego salen caras.",
      "Actuamos en viviendas, comunidades y negocios donde una avería no puede esperar. Sabemos que en este tipo de situaciones el cliente necesita claridad, tiempos realistas y una solución eficaz, no explicaciones técnicas innecesarias. Por eso combinamos rapidez con diagnóstico y priorización correcta."
    ],
    detailsTitle: "Cómo abordamos una urgencia de fontanería",
    details: [
      "La primera parte de una urgencia consiste en evaluar el riesgo inmediato. Revisamos si hay salida continua de agua, posibilidad de filtración, afectación a circuitos eléctricos cercanos, pérdida total de servicio o imposibilidad de usar puntos esenciales como WC, fregadero o agua caliente. Según el caso, actuamos sobre llaves de paso, conexiones, sifones, mecanismos, grifería, termos o tramos dañados de instalación.",
      "Una vez controlada la incidencia, revisamos el contexto técnico. En muchas averías urgentes el fallo visible es solo la consecuencia de un desgaste previo: juntas fatigadas, piezas con cal, atascos parciales, conexiones mal ajustadas o mecanismos que llevaban tiempo trabajando mal. Resolver la urgencia sin revisar ese fondo hace que el problema vuelva. Por eso, incluso en una intervención rápida, siempre verificamos el estado general relacionado con la avería.",
      "También damos mucha importancia a la comunicación. En una emergencia el cliente necesita saber qué se ha encontrado, qué se ha reparado y qué conviene vigilar después. Esa información reduce incertidumbre y ayuda a tomar mejores decisiones si hace falta una actuación adicional."
    ],
    problemsTitle: "Urgencias que atendemos con más frecuencia",
    problems: [
      "Entre las incidencias más habituales están las fugas activas bajo fregadero o lavabo, cisternas que no paran de perder agua, llaves o latiguillos que revientan, termos que dejan de dar servicio en momentos de alta necesidad, atascos que provocan rebose y sanitarios averiados que impiden el uso básico del baño.",
      "También atendemos problemas de agua caliente repentina, bajadas severas de presión, escapes en conexiones visibles y averías que afectan al cierre general de la vivienda o local. En negocios, además, una avería urgente puede comprometer la apertura o la atención al público, por lo que el criterio de prioridad es aún más importante.",
      "Nuestro objetivo es que la urgencia quede controlada con una intervención que sea útil de verdad. Si el problema requiere una solución definitiva adicional, lo explicamos de forma directa para que no se quede en un simple arreglo temporal."
    ],
    closing: [
      "Si necesitas un fontanero urgente en Alicante, podemos ayudarte a contener la avería, recuperar el servicio y dejar una base fiable para que el problema no siga creciendo. Trabajamos con prioridad real sobre las incidencias que afectan al uso y a la seguridad de la instalación.",
      "Una urgencia bien atendida evita daños mayores, reduce costes posteriores y devuelve tranquilidad. Por eso combinamos rapidez, criterio técnico y una intervención centrada en resolver lo que de verdad importa en ese momento."
    ]
  },
  "atascos-desagues-fregadero-wc": {
    intro: [
      "Los atascos son una de las averías de fontanería más molestas porque bloquean el uso normal de cocina y baño y, si se agravan, pueden provocar malos olores, reboses y daños por agua. Un fregadero que no traga, un desagüe que evacua lentamente o un WC que amenaza con desbordarse no son solo molestias cotidianas; son señales de que el sistema ya no está evacuando correctamente.",
      "En Reparaciones Nieto atendemos atascos de desagües, fregadero y WC en Alicante con un enfoque práctico. No nos limitamos a abrir paso de forma provisional, sino que revisamos si el atasco se debe a una acumulación puntual, un estrechamiento progresivo, una mala pendiente, restos incrustados o una obstrucción más profunda dentro de la instalación.",
      "Eso es importante porque muchos atascos aparentemente resueltos reaparecen a los pocos días cuando no se ha identificado bien el origen. Por eso combinamos desatasco, revisión del comportamiento del desagüe y orientación clara para que la solución sea más estable."
    ],
    detailsTitle: "Qué revisamos cuando hay un atasco",
    details: [
      "El primer paso es observar cómo responde el punto afectado. No es lo mismo un fregadero que evacua lentamente que un WC bloqueado o un plato de ducha que rebosa cuando se usa otro punto de agua. Ese comportamiento nos da pistas sobre si el atasco es local, compartido o más profundo dentro del tramo de evacuación.",
      "Después actuamos sobre sifones, conexiones y tramos accesibles, comprobando si el problema viene de acumulación de grasa, jabón, papel, cal o residuos sólidos. En cocinas, los atascos por grasa y restos alimentarios son muy frecuentes. En baños, suelen influir jabón, cabello, toallitas y sedimentos. En WC, los bloqueos pueden ser más compactos y exigir una intervención más cuidadosa.",
      "Además de desatascar, verificamos si la evacuación queda realmente restablecida. Si el agua sigue tragando con lentitud o aparecen ruidos y retornos, valoramos si hay un problema de fondo que conviene tratar para evitar nuevas incidencias."
    ],
    problemsTitle: "Señales de un atasco que no conviene dejar pasar",
    problems: [
      "Los síntomas más comunes son el vaciado lento, los malos olores, el gorgoteo en tuberías, el agua que sube en otros sanitarios y los reboses intermitentes. Estas señales indican que el sistema ya está trabajando con dificultad y que, si no se interviene, el atasco terminará bloqueando por completo el uso del punto afectado.",
      "También es frecuente que el cliente pruebe soluciones caseras que solo desplazan parcialmente la obstrucción o dañan componentes del sistema. Algunos productos muy agresivos no solucionan la acumulación real y, además, complican el trabajo posterior por seguridad y por deterioro de piezas.",
      "Cuando el atasco se repite, casi siempre hay una causa estructural o de mantenimiento detrás. En esos casos es especialmente útil una revisión más completa para dejar el desagüe funcionando con continuidad y no a base de arreglos temporales."
    ],
    closing: [
      "Si tienes un atasco en fregadero, desagüe o WC en Alicante, lo más recomendable es actuar antes de que aparezcan reboses o afectación a otros puntos de la instalación. Una intervención a tiempo suele ser más limpia y más controlada.",
      "Trabajamos con soluciones orientadas a recuperar la evacuación normal y reducir el riesgo de recurrencia. Así el cliente vuelve a usar cocina o baño con seguridad y sin convivir con una avería pendiente."
    ]
  },
  "fugas-de-agua": {
    intro: [
      "Las fugas de agua son una de las averías más delicadas en una instalación porque pueden empezar siendo casi invisibles y terminar generando daños importantes en paredes, muebles, falsos techos o viviendas colindantes. A veces la pérdida es evidente y constante; otras veces se manifiesta en forma de humedad, consumo anormal, manchas o goteos intermitentes que el cliente no asocia al origen real.",
      "En Reparaciones Nieto atendemos fugas de agua en Alicante con un enfoque de localización y reparación orientado a resolver el problema sin improvisaciones. Lo primero es confirmar por dónde está escapando el agua y en qué punto del sistema se origina. Después valoramos si la reparación puede hacerse de forma directa en la zona afectada o si conviene revisar conexiones relacionadas.",
      "Este tipo de averías exige precisión, porque muchas veces la fuga visible no coincide exactamente con el punto de fallo. El agua puede desplazarse por gravedad o por capilaridad y aparecer lejos del origen, por lo que actuar sobre la mancha sin diagnosticar bien la causa no resuelve nada."
    ],
    detailsTitle: "Cómo abordamos la localización y reparación",
    details: [
      "El primer paso es analizar el comportamiento de la fuga: si es continua o puntual, si aparece con el uso de agua caliente o fría, si depende de una descarga, una apertura de grifo o un tramo concreto del circuito. Esa información ayuda a acotar el origen y a evitar desmontajes innecesarios.",
      "Una vez identificado el punto probable, revisamos llaves, latiguillos, grifería, conexiones, sifones, mecanismos de cisterna, termos y tramos accesibles de tubería. En muchos casos el problema está en una junta fatigada, una rosca mal asentada o un componente deteriorado por cal o envejecimiento. En otros, la fuga afecta a un tramo más delicado y requiere una actuación más controlada.",
      "Además de reparar, verificamos el comportamiento posterior. Una fuga no está solucionada solo porque deje de gotear en ese instante; hay que comprobar que el punto queda estable, que no persisten humedades activas y que el resto del entorno relacionado no presenta nuevos signos de presión, pérdida o filtración."
    ],
    problemsTitle: "Qué riesgos tiene dejar avanzar una fuga",
    problems: [
      "Una fuga pequeña puede convertirse en un problema grande si se mantiene en el tiempo. Aumenta el consumo, deteriora materiales, favorece la aparición de humedades y puede afectar a instalaciones cercanas. En comunidades o edificios plurifamiliares, además, las consecuencias se amplían rápidamente cuando el agua encuentra falsos techos o zonas comunes de paso.",
      "También son problemáticas las fugas intermitentes, porque suelen pasar desapercibidas hasta que ya existe una mancha visible o un daño acumulado. En esos casos, la reparación llega más tarde y el coste indirecto puede ser mucho mayor que el de la avería original.",
      "Por eso recomendamos actuar en cuanto aparecen señales como goteos, manchas, olor a humedad, presión irregular asociada a pérdida o consumo que no encaja con el uso real. Cuanto antes se localiza el punto, más sencilla suele ser la intervención."
    ],
    closing: [
      "Si sospechas una fuga de agua en Alicante, es mejor revisar el origen antes de que la incidencia se traduzca en daños materiales o en una reparación más amplia. Una intervención temprana permite contener el problema y actuar con más precisión.",
      "Nuestro servicio está orientado a localizar la causa real, reparar con criterio y dejar la instalación en condiciones seguras. Así se evita convivir con una pérdida oculta que sigue empeorando aunque el síntoma parezca pequeño."
    ]
  },
  "baja-presion-agua": {
    intro: [
      "La baja presión de agua puede parecer una molestia menor, pero afecta directamente a la comodidad y al funcionamiento de cocina, baño, calentador y electrodomésticos. Ducharse con caudal insuficiente, llenar lentamente un fregadero o notar que el agua caliente no responde bien suelen ser señales de que algo no está funcionando como debería en la instalación.",
      "En Reparaciones Nieto revisamos problemas de baja presión de agua en Alicante buscando la causa concreta, porque no todas las pérdidas de caudal responden al mismo origen. A veces el fallo está en una grifería o filtro; otras veces aparece en llaves, latiguillos, acumulación de cal o un comportamiento irregular del circuito interior.",
      "Nuestro objetivo es determinar si la baja presión afecta a un punto aislado, a una parte de la vivienda o a todo el sistema, y a partir de ahí aplicar una solución proporcionada. Ese diagnóstico previo es esencial para no cambiar piezas sin necesidad."
    ],
    detailsTitle: "Qué comprobamos cuando falta presión",
    details: [
      "La revisión empieza identificando dónde se produce la caída de presión. Si afecta solo a un grifo, el problema puede estar en aireadores, cartuchos, latiguillos o acumulación interna. Si afecta a varios puntos, revisamos llaves, filtros, tramos de paso y comportamiento de la instalación para localizar restricciones o pérdidas de eficiencia.",
      "En Alicante la cal es un factor muy importante. Con el tiempo, muchos componentes reducen su paso útil por incrustaciones y el cliente empieza a notar menos caudal, aunque la instalación aparentemente siga funcionando. Este desgaste progresivo es habitual en griferías, termos, mezcladores y puntos donde el agua trabaja con más temperatura.",
      "También valoramos si la baja presión está interfiriendo con el calentador o el agua caliente sanitaria. Hay sistemas que requieren un caudal mínimo para activar correctamente el servicio, por lo que una caída de presión no solo afecta al confort, sino al funcionamiento completo del equipo."
    ],
    problemsTitle: "Indicadores frecuentes y causas habituales",
    problems: [
      "Los síntomas más comunes son duchas débiles, grifos con caudal irregular, mayor diferencia entre agua fría y caliente, tardanza en llenar sanitarios y puntos de agua que han ido perdiendo fuerza con el tiempo. A veces el cliente nota el problema solo en ciertas franjas o en determinadas zonas de la vivienda.",
      "Las causas suelen estar en filtros obstruidos, aireadores saturados, tramos con cal, llaves parcialmente bloqueadas o componentes internos deteriorados. En instalaciones antiguas también puede haber tramos más castigados por corrosión o sedimentación, algo que conviene valorar con calma antes de intervenir.",
      "Si se deja pasar, la baja presión tiende a generar más incomodidad y puede acabar afectando a equipos sensibles al caudal. Por eso es recomendable revisar el origen cuando el cambio empieza a ser perceptible y no esperar a una pérdida total de rendimiento."
    ],
    closing: [
      "Si notas baja presión de agua en Alicante, podemos revisar el sistema para localizar la restricción real y aplicar una solución ajustada al problema. No todas las pérdidas de caudal requieren la misma intervención, y acertar con el origen marca la diferencia.",
      "Una buena reparación mejora la comodidad diaria, el rendimiento de la instalación y el funcionamiento del agua caliente. Por eso tratamos estos casos con diagnóstico preciso y una intervención pensada para durar."
    ]
  },
  "grifos-que-gotean": {
    intro: [
      "Un grifo que gotea parece una avería pequeña, pero cuando se mantiene en el tiempo se convierte en una fuente continua de desperdicio de agua, ruido, desgaste y molestia. Además, el goteo suele ser la fase visible de un problema interno más amplio: piezas fatigadas, cartuchos desgastados, cierre deficiente, juntas deterioradas o acumulación de cal.",
      "En Reparaciones Nieto reparamos grifos que gotean en Alicante revisando no solo el síntoma, sino el estado real del mecanismo. Eso permite decidir si compensa reparar el componente, sustituir piezas concretas o cambiar el conjunto cuando ya no ofrece un funcionamiento fiable.",
      "La clave está en intervenir con criterio. Un grifo puede seguir siendo aprovechable con una reparación simple, o puede estar tan castigado por cal y uso que la solución más eficiente sea sustituirlo. Nuestro trabajo es explicarlo con claridad para que el cliente tenga una respuesta práctica y proporcionada."
    ],
    detailsTitle: "Revisión técnica de grifería con pérdidas",
    details: [
      "El análisis comienza comprobando si el goteo se produce en el pico, en la base, en conexiones o en mandos. Ese detalle cambia por completo la intervención, porque no tiene el mismo origen una fuga de cierre interno que una pérdida por junta o una filtración en el cuerpo del grifo.",
      "Después revisamos desgaste, acumulación de cal, tipo de mecanismo y compatibilidad de reparación. En Alicante, la dureza del agua castiga especialmente cartuchos, cierres cerámicos y aireadores, haciendo que el grifo pierda precisión en la maniobra y empiece a gotear incluso cuando aparentemente está bien cerrado.",
      "También verificamos si el problema afecta al uso normal: dificultad para regular temperatura, mandos duros, salpicaduras por aireador obstruido o pérdidas que humedecen encimera o mueble. En esos casos no basta con parar el goteo; conviene dejar el punto de agua funcionando correctamente en conjunto."
    ],
    problemsTitle: "Qué ocurre si no se corrige a tiempo",
    problems: [
      "Un goteo constante genera consumo innecesario, desgaste de superficies y en algunos casos humedad en muebles o encimeras. Además, cuando el cierre está fallando, el problema rara vez mejora solo: normalmente va a más, hasta convertir una molestia leve en una avería clara.",
      "También son habituales los grifos que no gotean siempre, pero pierden en determinados momentos por dilatación térmica o presión residual. Esa intermitencia hace que muchos clientes lo pospongan, aunque el desgaste ya esté avanzando y la reparación sea cada vez menos simple.",
      "Si se detecta a tiempo, en muchos casos la intervención es rápida y controlada. Dejarlo pasar suele aumentar la probabilidad de que acabe siendo necesaria una sustitución completa o de que aparezcan daños indirectos en la zona de apoyo."
    ],
    closing: [
      "Si tienes un grifo que gotea en Alicante, conviene revisarlo antes de que siga malgastando agua o genere más desgaste en la instalación. Una reparación a tiempo suele ser más rentable y evita molestias innecesarias.",
      "Atendemos grifería de cocina, baño y zonas auxiliares con criterio técnico, revisando el conjunto para que el punto de agua quede cómodo, estanco y funcional para el uso diario."
    ]
  },
  "problemas-calentador-agua-caliente": {
    intro: [
      "Los problemas con calentador o agua caliente afectan de forma directa a la rutina diaria, y suelen aparecer justo cuando más se necesitan: duchas, limpieza, cocina o apertura del negocio. Cuando el equipo no enciende, el agua sale templada, tarda demasiado o la temperatura fluctúa, no basta con hablar de una avería genérica; hace falta revisar qué parte del sistema está fallando.",
      "En Reparaciones Nieto atendemos incidencias relacionadas con agua caliente en Alicante valorando tanto el equipo como las condiciones de la instalación. A veces el problema está en el calentador o termo, pero otras veces se debe a baja presión, cal, mezclas defectuosas o componentes auxiliares que interfieren con el funcionamiento del servicio.",
      "Nuestro enfoque es práctico: comprobar el comportamiento real, identificar si se trata de un fallo de activación, de temperatura, de suministro o de desgaste interno, y aplicar una solución razonable según el estado del sistema."
    ],
    detailsTitle: "Qué revisamos cuando falla el agua caliente",
    details: [
      "Empezamos valorando si el fallo es total o parcial. No es lo mismo quedarse completamente sin agua caliente que tenerla con poca temperatura o con cambios bruscos durante el uso. Ese patrón nos ayuda a orientar la revisión hacia presión, alimentación, regulación o componentes internos del equipo.",
      "En Alicante, la cal vuelve a jugar un papel importante. Termos, calentadores, llaves y mezcladores pueden perder rendimiento con el tiempo, afectando tanto al caudal como a la temperatura estable. Si el sistema necesita un mínimo de presión para arrancar, una pequeña caída en el circuito ya puede provocar que el servicio parezca averiado cuando el origen es mixto.",
      "Además, revisamos la interacción entre el equipo y los puntos de consumo. Hay incidencias que se manifiestan solo en ciertos grifos o en determinados usos, lo que indica que el problema no siempre está exclusivamente en el calentador, sino en cómo responde el conjunto de la instalación."
    ],
    problemsTitle: "Incidencias habituales en calentador y agua caliente",
    problems: [
      "Los fallos más comunes incluyen ausencia total de agua caliente, agua tibia insuficiente, temperatura inestable, calentador que no arranca, paradas intermitentes y pérdida de rendimiento progresiva. También son frecuentes las incidencias que el cliente nota solo en la ducha o en un grifo concreto.",
      "Cuando el problema se deja avanzar, el servicio se vuelve más imprevisible y aumenta la incomodidad diaria. En algunos casos, además, el usuario intenta compensar con maniobras en llaves o mandos que terminan ocultando el verdadero origen y dificultan un diagnóstico rápido.",
      "Una revisión correcta permite separar si estamos ante un fallo del equipo, un problema de caudal, una mezcla inestable o un desgaste general del sistema. Esa diferencia es esencial para aplicar una solución útil y no limitarse a una reparación superficial."
    ],
    closing: [
      "Si tienes problemas con calentador o agua caliente en Alicante, podemos revisar el sistema con criterio técnico y orientarte hacia la solución más adecuada según el origen real del fallo. Cuanto antes se diagnostique, más sencillo suele ser recuperar un servicio estable.",
      "Nuestro objetivo es que vuelvas a tener agua caliente con normalidad, sin fluctuaciones ni fallos repetidos, y con una reparación o ajuste coherente con el estado de la instalación."
    ]
  },
  "cisterna-wc-averiado": {
    intro: [
      "Una cisterna o un WC averiado altera de inmediato el uso normal del baño y, en muchos casos, va acompañado de pérdidas continuas de agua, recargas interminables, descargas deficientes o imposibilidad de usar el sanitario con normalidad. Aunque a veces se vea como una avería menor, el impacto en consumo, comodidad e higiene puede ser muy alto si no se corrige a tiempo.",
      "En Reparaciones Nieto reparamos cisternas y averías frecuentes en WC en Alicante con una revisión orientada al funcionamiento completo del conjunto. No se trata solo de cambiar una pieza al azar, sino de comprobar si el problema está en el mecanismo de descarga, el llenado, la válvula, la estanqueidad, las conexiones o el propio sanitario.",
      "Esto es importante porque muchas averías en cisternas se vuelven repetitivas cuando se resuelven solo a medias. Un mecanismo puede dejar de fallar por unos días y volver a perder agua si el resto del sistema sigue desajustado o fatigado."
    ],
    detailsTitle: "Cómo revisamos una cisterna o WC averiado",
    details: [
      "La intervención comienza observando el comportamiento de la descarga y del llenado. Revisamos si la cisterna carga correctamente, si corta bien el agua, si pierde al inodoro, si descarga con suficiente fuerza y si existen ruidos o llenados excesivamente largos. Cada síntoma apunta a un tipo distinto de desgaste o desajuste.",
      "Después comprobamos el estado de los mecanismos internos, juntas, pulsadores, conexiones y elementos de fijación. En Alicante, la cal vuelve a influir mucho, especialmente en piezas móviles y puntos de cierre. Un mecanismo que en teoría funciona puede perder estanqueidad por depósitos o desgaste acumulado.",
      "También valoramos la relación entre cisterna y sanitario. En algunos casos el problema no está solo en el mecanismo, sino en el asiento de cierre, la conexión o el conjunto de uso. Por eso buscamos dejar la instalación no solo reparada, sino equilibrada y cómoda de usar."
    ],
    problemsTitle: "Fallas frecuentes en cisternas y WC",
    problems: [
      "Las averías más habituales son cisternas que no paran de cargar, pérdidas continuas al interior del WC, descargas débiles, pulsadores que no responden bien, mecanismos de llenado defectuosos y escapes visibles en conexiones o base. También es frecuente que el cliente note la avería por un aumento de consumo o por el ruido constante de agua.",
      "Cuando no se corrige, una cisterna defectuosa puede desperdiciar mucha agua y convertir una incidencia sencilla en una molestia permanente. Además, si el usuario fuerza pulsadores o intenta regular manualmente piezas desgastadas, a veces se generan fallos añadidos que complican la reparación.",
      "Por eso conviene actuar en cuanto aparecen síntomas claros. En muchos casos la solución es relativamente directa si se interviene a tiempo y se revisa el conjunto con atención técnica."
    ],
    closing: [
      "Si tienes una cisterna o un WC averiado en Alicante, podemos revisar el mecanismo, detener pérdidas y devolver al baño un funcionamiento normal y fiable. Actuar a tiempo evita consumo innecesario y molestias repetidas.",
      "Trabajamos con reparaciones orientadas a la estabilidad del sistema, para que el sanitario quede operativo, estanco y cómodo de usar en el día a día."
    ]
  },
};

type Service = typeof business.services[number];

const getChildServices = (serviceId: string) =>
  business.services.filter((item) => item.parentServiceId === serviceId);

const getSiblingServices = (service: Service) => {
  if (!service.parentServiceId) return [];
  return business.services.filter(
    (item) => item.parentServiceId === service.parentServiceId && item.slug !== service.slug
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = business.services.find(s => s.slug === slug);
  if (!service) return {};

  return getMetadata(
    service.seoTitle || service.title,
    service.seoDescription || `${service.description} Servicio profesional en Alicante con garantía de 15 años. Presupuesto sin compromiso.`,
    `/servicios/${slug}`
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = business.services.find(s => s.slug === slug);

  if (!service) notFound();
  const childServices = getChildServices(service.id);
  const siblingServices = getSiblingServices(service);
  const parentService = service.parentServiceId
    ? business.services.find((item) => item.id === service.parentServiceId)
    : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Reparaciones Nieto",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alicante",
        "addressCountry": "ES"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Alicante"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Reparación",
      "itemListElement": ((childServices.length ? childServices.map((item) => item.title) : service.subservices) || [service.title]).map((item) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item
        }
      }))
    }
  };

  const pageContent = servicePageContent[service.slug] || servicePageContent.persianas;

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/servicios" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a servicios
        </Link>

        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {service.seoTitle || `${service.title} en Alicante`}
          </h1>
          
          <div className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-10 text-gray-600">
            <div className="rounded-[2rem] border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm sm:p-10">
              <p className="text-xl font-medium leading-relaxed text-gray-900 sm:text-2xl">
                En Reparaciones Nieto somos expertos en {service.title.toLowerCase()} con más de 15 años de experiencia en el sector.
              </p>
              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                Ofrecemos un servicio integral que abarca desde la instalación inicial hasta el mantenimiento y la reparación urgente de cualquier avería. Nuestro equipo técnico está altamente cualificado para trabajar con todo tipo de materiales y sistemas, asegurando siempre un acabado profesional y duradero.
              </p>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
              {pageContent.intro.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? "text-lg font-medium leading-8 text-gray-800" : "text-base leading-8 text-gray-600 sm:text-lg"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">¿Qué incluye nuestro servicio?</h3>
              <ul className="mt-8 grid grid-cols-1 gap-4 list-none p-0 md:grid-cols-2">
                {[
                  "Diagnóstico gratuito de la avería",
                  "Presupuesto cerrado sin compromiso",
                  "Materiales de primera calidad",
                  "Garantía por escrito de la reparación",
                  "Servicio de urgencia 24 horas",
                  "Limpieza total tras el trabajo"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {!!service.subservices?.length && (
              <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Servicios específicos que atendemos</h3>
                <ul className="mt-8 grid grid-cols-1 gap-4 list-none p-0 md:grid-cols-2">
                  {service.subservices.map((item) => {
                    const linkedService = childServices.find((child) => child.title === item);

                    if (linkedService) {
                      return (
                        <li key={item} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                          <Link href={`/servicios/${linkedService.slug}`} className="flex items-center space-x-3 hover:text-blue-600 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                            <span className="font-medium text-gray-800">{linkedService.title}</span>
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li key={item} className="flex items-center space-x-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="font-medium text-gray-800">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{pageContent.detailsTitle}</h3>
              <div className="mt-8 space-y-6">
                {pageContent.details.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === 0 ? "text-lg font-medium leading-8 text-gray-800" : "text-base leading-8 text-gray-600 sm:text-lg"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{pageContent.problemsTitle}</h3>
              <div className="mt-8 space-y-6">
                {pageContent.problems.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === 0 ? "text-lg font-medium leading-8 text-gray-800" : "text-base leading-8 text-gray-600 sm:text-lg"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Cobertura y atención en Alicante</h3>
              <div className="mt-8 space-y-6">
                {pageContent.closing.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === 0 ? "text-lg font-medium leading-8 text-gray-800" : "text-base leading-8 text-gray-600 sm:text-lg"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {(parentService || siblingServices.length > 0 || childServices.length > 0) && (
              <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Servicios relacionados</h3>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {parentService && (
                    <Link
                      href={`/servicios/${parentService.slug}`}
                      className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-blue-200 hover:bg-white transition-colors"
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Servicio principal de fontanería</p>
                      <p className="mt-2 text-lg font-bold text-gray-900">{parentService.title}</p>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{parentService.description}</p>
                    </Link>
                  )}
                  {childServices.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/servicios/${item.slug}`}
                      className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-blue-200 hover:bg-white transition-colors"
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Subservicio específico</p>
                      <p className="mt-2 text-lg font-bold text-gray-900">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{item.description}</p>
                    </Link>
                  ))}
                  {siblingServices.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/servicios/${item.slug}`}
                      className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:border-blue-200 hover:bg-white transition-colors"
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Relacionado</p>
                      <p className="mt-2 text-lg font-bold text-gray-900">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-8 mt-16">
            <h2 className="text-3xl font-bold">Solicita tu presupuesto para {service.title.toLowerCase()}</h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              No dejes que una pequeña avería se convierta en un problema mayor. Contacta con nosotros ahora.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Llamar al {business.phone}
              </a>
              <a 
                href={`https://wa.me/${business.whatsapp}`}
                className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

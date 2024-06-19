import React from 'react';
import { useParams } from 'react-router-dom';
import Modelo from "../assets/Modelo.jpg"

const conceptsData = {
  administracion: [
    'Definición 1: La administración es un proceso constante compuesto por las actividades de planeación, organización, dirección y control de determinados recursos, que pueden ser de índole organizacional o personal, a partir de las cuales se busca el mejor desempeño posible y la obtención de ciertos objetivos, considerando las condiciones del entorno y las particulares.',
    'Definición 2: La administración es fundamental porque es el órgano encargado del progreso económico organizado. Se puede inferir que es indispensable, no solo para el éxito de las empresas con fines de lucro, sino para la sociedad en su conjunto y para todo individuo que hace parte de ella.',
    'Definición 3: La administración tiene como objetivo emplear de la mejor manera los recursos de que dispone, mediante las funciones de planeación, organización, dirección y control. Una buena administración es esencial para el desarrollo social y económico, bien sea en el ámbito individual, en la esfera del hogar, en el entorno empresarial o en los escenarios gubernamentales.'
  ],
  administracionproyectos: [
    'Definición 1: La administración de proyectos es la disciplina que se encarga de planificar, organizar, dirigir y controlar los recursos (humanos, financieros, materiales, tecnológicos, etc.) de un proyecto para alcanzar sus objetivos dentro de un plazo determinado, presupuesto establecido y con la calidad esperada.',
    'Definición 2: La administración de proyectos es la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades de un proyecto para cumplir con los requisitos del mismo. Incluye procesos de inicio, planificación, ejecución, monitoreo y control, y cierre.'
  ],
  negociacion: [
    'Concepto 1: La negociación es un proceso de comunicación entre dos o más partes que tienen intereses comunes y divergentes, con el objetivo de llegar a un acuerdo que sea beneficioso para todos los involucrados. Este proceso implica el intercambio de información, propuestas y concesiones, y requiere habilidades de comunicación, persuasión y resolución de conflictos.',
    'Concepto 2: La negociación es una herramienta fundamental para resolver conflictos de manera pacífica y constructiva. A través del diálogo y la búsqueda de soluciones mutuamente aceptables, se pueden superar las diferencias y alcanzar acuerdos que satisfagan las necesidades de todas las partes involucradas.'
  ],
  procesoadministrativo: [
    "El proceso administrativo es un conjunto de etapas interconectadas y cíclicas que guían la gestión de una organización hacia el logro de sus objetivos. Estas etapas, planificación, organización, dirección y control, se retroalimentan continuamente para optimizar el uso de los recursos y garantizar la eficiencia en el cumplimiento de las metas establecidas.",

    "En la planificación, se definen los objetivos a corto, mediano y largo plazo, se analizan los entornos internos y externos, y se diseñan estrategias y planes de acción detallados. Se establecen prioridades, se asignan responsabilidades y se determinan los recursos necesarios para alcanzar los resultados deseados.",

    "La organización implica estructurar y coordinar los recursos humanos, materiales, financieros y tecnológicos de la empresa. Se establecen jerarquías, se definen roles y funciones, y se crean mecanismos de comunicación y colaboración para asegurar el flujo eficiente de la información y la toma de decisiones.",

    "La dirección se centra en liderar y motivar al equipo humano para alcanzar los objetivos establecidos. Implica la comunicación efectiva de la visión y los valores de la organización, la toma de decisiones estratégicas, la resolución de conflictos y la creación de un ambiente de trabajo positivo y productivo.",

    "El control consiste en evaluar el desempeño de la organización, comparándolo con los objetivos y estándares establecidos. Se identifican las desviaciones, se analizan las causas y se toman medidas correctivas para garantizar que la empresa se mantenga en el camino correcto hacia el éxito.",

    "El proceso administrativo es una herramienta fundamental para la gestión de cualquier organización, independientemente de su tamaño o sector. Permite optimizar el uso de los recursos, mejorar la eficiencia, aumentar la productividad y alcanzar los objetivos de manera efectiva. Es un ciclo continuo que se adapta a los cambios del entorno y permite a la empresa crecer y prosperar a largo plazo."
  ],
  manipulacion: [
    'Concepto 1: La manipulación es el ejercicio de una influencia encubierta sobre otra persona o grupo, buscando que actúen de acuerdo a los intereses del manipulador, a menudo en detrimento de los propios intereses de los manipulados.',
    'Concepto 2: La manipulación implica un desequilibrio de poder entre el manipulador y el manipulado. El manipulador utiliza su posición de poder, ya sea real o percibida, para controlar y dirigir el comportamiento de los demás. Este abuso de poder puede manifestarse en diferentes ámbitos, como las relaciones personales, el trabajo, la política o los medios de comunicación.'
  ],
  eficacia: [
    "La eficacia es la capacidad de lograr el efecto deseado o esperado. Es decir, se refiere a la habilidad de alcanzar un objetivo o meta propuesta. En el ámbito empresarial, la eficacia se relaciona con el cumplimiento de los objetivos establecidos, sin importar los recursos utilizados para lograrlo.",

    "Por ejemplo, un vendedor eficaz es aquel que logra cerrar un número determinado de ventas, independientemente del tiempo o esfuerzo que le haya llevado. Una empresa eficaz es aquella que alcanza sus metas de producción o ganancias, aunque haya tenido que invertir más recursos de los previstos.",

    "Es importante destacar que la eficacia no debe confundirse con la eficiencia. Mientras que la eficacia se centra en el logro de los resultados, la eficiencia se refiere a la optimización de los recursos utilizados para alcanzar esos resultados."
  ],
  eficiencia: [
    "La eficiencia es la capacidad de lograr un objetivo o resultado deseado utilizando la menor cantidad de recursos posibles, como tiempo, dinero, energía o esfuerzo. En otras palabras, se trata de optimizar el uso de los recursos para maximizar los resultados.",

    "Por ejemplo, en el ámbito empresarial, una empresa eficiente es aquella que produce más bienes o servicios con la misma cantidad de recursos, o que produce la misma cantidad de bienes o servicios con menos recursos. Esto se puede lograr a través de la mejora de los procesos, la reducción de los desperdicios y la optimización del uso de la tecnología."
  ],
  riesgosenproyectos: [
    'El riesgo es la posibilidad de que ocurra un evento futuro incierto que pueda tener un impacto negativo en los objetivos de un individuo, organización o proyecto. Esta incertidumbre puede estar relacionada con la probabilidad de que el evento ocurra y la magnitud de su impacto.',
    'El riesgo también se puede definir como la posibilidad de sufrir una pérdida o daño, ya sea financiero, material, físico o de otro tipo. Esta pérdida puede ser el resultado de un evento inesperado o de una decisión equivocada.',
    'En el ámbito financiero, el riesgo se asocia con la volatilidad o fluctuación de los precios de los activos. Cuanto mayor sea la volatilidad, mayor será el riesgo de que el valor de un activo disminuya.',
    'Definición 1 de riesgos en proyectos...',
    'Definición 2 de riesgos en proyectos...',
    'Modelo de creación propia...'
  ]
};

const riegosDefnitions = [
  'El riesgo es la posibilidad de que ocurra un evento futuro incierto que pueda tener un impacto negativo en los objetivos de un individuo, organización o proyecto. Esta incertidumbre puede estar relacionada con la probabilidad de que el evento ocurra y la magnitud de su impacto.',
  'El riesgo también se puede definir como la posibilidad de sufrir una pérdida o daño, ya sea financiero, material, físico o de otro tipo. Esta pérdida puede ser el resultado de un evento inesperado o de una decisión equivocada.',
  'En el ámbito financiero, el riesgo se asocia con la volatilidad o fluctuación de los precios de los activos. Cuanto mayor sea la volatilidad, mayor será el riesgo de que el valor de un activo disminuya.',
]

const riesgosInProyects = [
  "En el contexto de los proyectos, el riesgo se define como un evento o condición incierta que, de ocurrir, podría tener un impacto positivo o negativo en los objetivos del proyecto. Estos eventos pueden ser internos o externos al proyecto y pueden afectar el alcance, el cronograma, el costo o la calidad del proyecto.",
  "Los riesgos en proyectos también se pueden entender como la posibilidad de que el proyecto no alcance sus objetivos debido a eventos o circunstancias imprevistas. Estos riesgos pueden surgir en cualquier etapa del proyecto y pueden tener diferentes niveles de impacto."
]

const Conceptos = () => {
  const { concept } = useParams();
  const definitions = conceptsData[concept] || [];

  const titleMap = {
    administracion: 'Administración',
    administracionproyectos: 'Administración de Proyectos',
    negociacion: 'Negociación',
    procesoadministrativo: 'Proceso Administrativo',
    manipulacion: 'Manipulación',
    eficacia: 'Eficacia',
    eficiencia: 'Eficiencia',
    riesgosenproyectos: 'Riesgos en Proyectos'
  };

  const translatedTitle = titleMap[concept] || concept;

  return (
    <div className='flex flex-col'>
      <h1 className='capitalize text-white opacity-70'>{translatedTitle}</h1>
      {concept === "riesgosenproyectos" ? (
        <div>
          <h2 className='font-bold text-white mt-2 text-[18px]'>Riesgos:</h2>
          <ul className='ml-2 mt-3'>
            {riegosDefnitions.map((riesgos, index) => (
              <li className='mb-5 text-white list-disc ml-7'>{riegosDefnitions}</li>
            ))}
          </ul>

          <h2 className='font-bold text-white mt-8 text-[18px]'>Riesgos en proyectos:</h2>
          <ul className='ml-2 mt-3'>
            {riesgosInProyects.map((riesgosP, index) => (
              <li className='mb-5 text-white list-disc ml-7'>{riesgosP}</li>
            ))}
          </ul>

          <h2 className='font-bold text-white mt-8 text-[18px]'>Modelo de creación</h2>
          <img src={Modelo} alt="Imagen de riesgos" className="mt-4 mb-5 w-[50rem]" />

        </div>
      ) : (
        <ul>
          {definitions.map((definition, index) => (
            <li key={index} className={`text-white mb-10 ${(concept === "procesoadministrativo" || concept === "eficacia" || concept === "eficiencia") ? "mb-8" : "list-disc"} ml-7 mt-4`}>{definition}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Conceptos;
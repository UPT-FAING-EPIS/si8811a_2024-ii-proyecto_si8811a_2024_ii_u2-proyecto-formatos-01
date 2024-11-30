<center>

[comment]: <img src="./media/media/image1.png" style="width:1.088in;height:1.46256in" alt="escudo.png" />

![./media/media/image1.png](./media/logo-upt.png)

**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERIA**

**Escuela Profesional de Ingeniería de Sistemas**

**Proyecto *"Infraestructura Tecnológica para el Evento Juegos Florales de la Universidad Privada de Tacna"***

Curso: *Tópicos de Base de Datos Avanzados*

Docente: *Mag. Patrick Cuadros Quiroga*

Integrantes:


***Apaza Ccalle, Albert Kenyi (2021071075)***

***Huallpa Maron, Jesús Antonio (2021071085)***

**Tacna – Perú**

***2024***

**  
**
</center>

<table style="width: 100%; border: none;">
<tr>
    <td style="text-align: left; vertical-align: top;">
        <img src="./media/logo-upt.png" alt="Logo de Mi Empresa" style="width: 50px;">
    </td>
    <td style="text-align: right; vertical-align: top;">
        <img src="./media/logo-cliente.png" alt="Logo de mi Cliente" style="width: 100px;">
    </td>
</tr>
</table>


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|MPV|ELV|ARV|10/10/2020|Versión Original|












**Sistema *"Infraestructura Tecnológica para el Evento Juegos Florales de la Universidad Privada de Tacna"***

**Documento de Especificación de Requerimientos de Software**

**Versión *{1.0}***
**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|MPV|ELV|ARV|10/10/2020|Versión Original|


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>


**INDICE GENERAL**
#
[1.	Generalidades de la Empresa](#_Toc52661346)

1.1	Nombre de la Empresa

1.2	Vision

1.3	Mision

1.4	Organigrama

[2.	Visionamiento de la Empresa](#_Toc52661347)

2.1	Descripción del Problema

2.2	Objetivos de Negocios

2.3	Objetivos de Diseño

2.4	Alcance del proyecto

2.5	Viabilidad del Sistema

2.6	Información obtenida del Levantamiento de Información

[3.	Análisis de Procesos](#_Toc52661348)

3.1	Diagrama del Proceso Actual – Diagrama de actividades

3.2	Diagrama del Proceso Propuesto – Diagrama de actividades Inicial

[4.	Especificación de Requerimientos de Software](#_Toc52661349)

4.1	Cuadro de Requerimientos funcionales Inicial

4.2	Cuadro de Requerimientos No funcionales

4.3	Cuadro de Requerimientos funcionales Final

4.4	Reglas de Negocio

[5.	Fase de Desarrollo](#_Toc52661350)

5.1	Cuadro de Requerimientos funcionales Inicial

5.2	Cuadro de Requerimientos No funcionales

- **a)** Diagrama de Paquetes
- **b)** Diagrama de Casos de Uso
- **c)** Escenarios de Caso de Uso (narrativa)

5.3	Cuadro de Requerimientos funcionales Final

- **a)** Análisis de Objetos
- **b)** Diagrama de Actividades con Objetos
- **c)** Diagrama de Secuencia
- **d)** Diagrama de Clases

[CONCLUSIONES](#_Toc52661355)

[RECOMENDACIONES](#_Toc52661356)

[BIBLIOGRAFIA](#_Toc52661357)

[WEBGRAFIA](#_Toc52661358)


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

**<u>Informe Especificacion Requerimientos</u>**

    El presente documento describe los requerimientos de infraestructura tecnológica para el proyecto "Infraestructura Tecnológica para el Evento Juegos Florales de la Universidad Privada de Tacna". El objetivo principal de este proyecto es diseñar y desplegar una infraestructura robusta y escalable que permita la correcta ejecución de las actividades del evento Juegos Florales, utilizando tecnologías de vanguardia.

    Este proyecto se enfoca en la creación de una infraestructura tecnológica que optimice la gestión del evento mediante el uso de servicios en la nube, como AWS (Amazon Web Services), y herramientas especializadas para la automatización, monitoreo y gestión de datos. El uso de plataformas como Terraform, MongoDB Atlas y Grafana contribuirá a mejorar la disponibilidad, seguridad y eficiencia de la infraestructura necesaria para soportar los requerimientos del evento, proporcionando un entorno ágil y confiable.

    El documento tiene como propósito definir y detallar los requerimientos técnicos de la infraestructura del sistema, estableciendo claramente los recursos y servicios que serán necesarios para el funcionamiento eficiente y seguro del evento. Además, aborda las características y condiciones de la infraestructura que deben cumplir para satisfacer las necesidades de los usuarios, alineando las expectativas del equipo de desarrollo, los organizadores del evento y los involucrados en la toma de decisiones.


1. <span id="_Toc52661346" class="anchor"></span>**Generalidades de la Empresa**

    1.1	Nombre de la Empresa

        Universidad Privada de Tacna

    1.2	Visión

        La visión de la Universidad Privada de Tacna es ser una universidad líder en el sur del Perú, comprometida con la innovación tecnológica y el desarrollo académico. A través de la incorporación de tecnologías avanzadas, busca mejorar la experiencia de sus estudiantes y fortalecer su posición en el ámbito educativo regional y nacional.

    1.3	Misión

        La misión de la Universidad Privada de Tacna es formar profesionales altamente capacitados en diversas especialidades, promoviendo la investigación, la innovación y la calidad educativa. Se enfoca en ofrecer una formación integral que prepare a sus estudiantes para enfrentar los desafíos del mundo laboral globalizado, a través del uso de tecnologías de vanguardia.

    1.4	Organigrama

    ![Organigrama](./media/organigrama.png)

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

2. <span id="_Toc52661347" class="anchor"></span>**Visionamiento de la Empresa **

    2.1 Descripción del Problema

    2.2 Objetivos de Negocios

    2.3 Objetivos de Diseño

    2.4 Alcance del proyecto

    2.5 Viabilidad del Sistema

    2.6 Información obtenida del Levantamiento de Información

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

3. <span id="_Toc52661348" class="anchor"></span>**Análisis de Procesos**

    3.1 Diagrama del Proceso Actual – Diagrama de actividades

    3.2 Diagrama del Proceso Propuesto – Diagrama de actividades Inicial

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

4. <span id="_Toc52661349" class="anchor"></span>**Especificación de Requerimientos de Software**

    4.1 Cuadro de Requerimientos funcionales Inicial

    4.2 Cuadro de Requerimientos No funcionales

    4.3 Cuadro de Requerimientos funcionales Final

    4.4 Reglas de Negocio

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

5. <span id="_Toc52661350" class="anchor"></span>**Cuadro de Requerimientos funcionales Inicial**

    5.1 Cuadro de Requerimientos funcionales Inicial

    5.2	Cuadro de Requerimientos No funcionales

    - **a)** Diagrama de Paquetes

    - **b)** Diagrama de Casos de Uso

    - **c)** Escenarios de Caso de Uso (narrativa)


    5.3	Cuadro de Requerimientos funcionales Final

    - **a)** Análisis de Objetos

    - **b)** Diagrama de Actividades con Objetos

    - **c)** Diagrama de Secuencia

    - **d)** Diagrama de Clases


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>


<span id="_Toc52661355" class="anchor"></span>**CONCLUSIONES**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661356" class="anchor"></span>**RECOMENDACIONES**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661357" class="anchor"></span>**BIBLIOGRAFIA**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

<span id="_Toc52661358" class="anchor"></span>**WEBGRAFIA**

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

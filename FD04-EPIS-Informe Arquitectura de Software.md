
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

**Documento de Arquitectura de Software**

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
[1.	INTRODUCCIÓN](#_Toc52661346)

1.1	Propósito (Diagrama 4+1)

1.2	Alcance

1.3	Definición, siglas y abreviaturas

1.4	Organización del documento

[2.	OBJETIVOS Y RESTRICCIONES ARQUITECTONICAS](#_Toc52661347)

2.1	Requerimientos Funcionales

2.2	Requerimientos No Funcionales – Atributos de Calidad

[3.	REPRESENTACIÓN DE LA ARQUITECTURA DEL SISTEMA](#_Toc52661348)

3.1.	Vista de Caso de uso	

3.1.1.	Diagramas de Casos de uso	

3.2.	Vista Lógica	

3.2.1.	Diagrama de Subsistemas (paquetes)	

3.2.2.	Diagrama de Secuencia (vista de diseño)	

3.2.3.	Diagrama de Colaboración (vista de diseño)	

3.2.4.	Diagrama de Objetos	

3.2.5.	Diagrama de Clases	

3.2.6.	Diagrama de Base de datos (relacional o no relacional)	

3.3.	Vista de Implementación (vista de desarrollo)	

3.3.1.	Diagrama de arquitectura software (paquetes)	

3.3.2.	Diagrama de arquitectura del sistema (Diagrama de componentes)	

3.4.	Vista de procesos	

3.4.1.	Diagrama de Procesos del sistema (diagrama de actividad)	

3.5.	Vista de Despliegue (vista física)	

3.5.1.	Diagrama de despliegue	


[4.	ATRIBUTOS DE CALIDAD DEL SOFTWARE](#_Toc52661349)

Escenario de Funcionalidad	

Escenario de Usabilidad	

Escenario de confiabilidad	

Escenario de rendimiento	

Escenario de mantenibilidad	

Otros Escenarios	




<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

**<u>Informe Especificacion Requerimientos</u>**

[1.	INTRODUCCIÓN](#_Toc52661346)

1.1	Propósito (Diagrama 4+1)

1.2	Alcance

1.3	Definición, siglas y abreviaturas

1.4	Organización del documento

[2.	OBJETIVOS Y RESTRICCIONES ARQUITECTONICAS](#_Toc52661347)

2.1	Requerimientos Funcionales

2.2	Requerimientos No Funcionales – Atributos de Calidad

[3.	REPRESENTACIÓN DE LA ARQUITECTURA DEL SISTEMA](#_Toc52661348)

3.1.	Vista de Caso de uso	

3.1.1.	Diagramas de Casos de uso	

3.2.	Vista Lógica	

3.2.1.	Diagrama de Subsistemas (paquetes)	

3.2.2.	Diagrama de Secuencia (vista de diseño)	

3.2.3.	Diagrama de Colaboración (vista de diseño)	

3.2.4.	Diagrama de Objetos	

3.2.5.	Diagrama de Clases	

3.2.6.	Diagrama de Base de datos (relacional o no relacional)	

3.3.	Vista de Implementación (vista de desarrollo)	

3.3.1.	Diagrama de arquitectura software (paquetes)	

3.3.2.	Diagrama de arquitectura del sistema (Diagrama de componentes)	

3.4.	Vista de procesos	

3.4.1.	Diagrama de Procesos del sistema (diagrama de actividad)	

3.5.	Vista de Despliegue (vista física)	

3.5.1.	Diagrama de despliegue	


[4.	ATRIBUTOS DE CALIDAD DEL SOFTWARE](#_Toc52661349)

Escenario de Funcionalidad	

Escenario de Usabilidad	

Escenario de confiabilidad	

Escenario de rendimiento	

Escenario de mantenibilidad	

Otros Escenarios

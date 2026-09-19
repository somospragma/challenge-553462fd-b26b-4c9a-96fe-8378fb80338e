# Implementación de un Sistema de Gestión de Tareas con Paradigmas Reactivos y Funcionales

El equipo de desarrollo necesita implementar un sistema de gestión de tareas que opere con paradigmas no imperativos, específicamente reactivo y funcional. El sistema debe manejar la creación, asignación, y seguimiento de tareas, asegurando una alta escalabilidad y resiliencia. El objetivo es demostrar la aplicación práctica de estos paradigmas en un contexto real.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Adopción de Paradigmas de Programación No Imperativos: Con Enfoque Reactivo y Funcional |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 5-6 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del Dominio y Requisitos

**Objetivo:** Entender el dominio del sistema de gestión de tareas y sus requisitos funcionales.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica las entidades clave del dominio (tareas, usuarios, proyectos) y sus relaciones.
- Establece los requisitos funcionales para la creación, asignación y seguimiento de tareas.

**Entregable:** Descripción detallada del dominio y sus requisitos funcionales.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo los paradigmas reactivo y funcional pueden influir en la estructura del dominio.
- Piensa en cómo manejarías la concurrencia y la asincronía en este contexto.

</details>

### Fase 2: Diseño del Sistema con Paradigma Reactivo

**Objetivo:** Diseñar el sistema de gestión de tareas utilizando un paradigma reactivo.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Define cómo manejarás la creación, asignación y seguimiento de tareas utilizando un enfoque reactivo.
- Identifica los pilares del paradigma reactivo que aplicarás (no bloqueo, elasticidad, mensajería y resiliencia).

**Entregable:** Diagrama de flujo que representa el diseño del sistema utilizando un paradigma reactivo.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejarías la concurrencia y la asincronía utilizando un enfoque reactivo.
- Piensa en cómo garantizarías la elasticidad y la resiliencia del sistema.

</details>

### Fase 3: Implementación del Sistema con Paradigma Funcional

**Objetivo:** Implementar el sistema de gestión de tareas utilizando un paradigma funcional.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Define cómo manejarás la creación, asignación y seguimiento de tareas utilizando un enfoque funcional.
- Identifica los operadores básicos del paradigma funcional que utilizarás (map, filter, reduce).

**Entregable:** Descripción detallada de la implementación del sistema utilizando un paradigma funcional.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejarías la inmutabilidad y la pureza de funciones en tu implementación.
- Piensa en cómo garantizarías la composición y la reutilización de funciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los paradigmas reactivo y funcional y cómo se aplican en el diseño del sistema de gestión de tareas?
- **paraQueSirve**: ¿Para qué sirven los paradigmas reactivo y funcional en el contexto del sistema de gestión de tareas?
- **comoSeUsa**: ¿Cómo se utilizan los paradigmas reactivo y funcional en la implementación del sistema de gestión de tareas?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar los paradigmas reactivo y funcional en el diseño e implementación del sistema de gestión de tareas?
- **queDecisionesImplica**: ¿Qué decisiones implica la aplicación de los paradigmas reactivo y funcional en el diseño e implementación del sistema de gestión de tareas?

## Criterios de Evaluacion

- Definición clara del dominio y sus requisitos funcionales.
- Diseño del sistema utilizando un paradigma reactivo.
- Implementación del sistema utilizando un paradigma funcional.
- Identificación de los pilares del paradigma reactivo y los operadores básicos del paradigma funcional.
- Manejo de la concurrencia, asincronía, inmutabilidad y pureza de funciones en la implementación.
- Toma de decisiones y justificación de trade-offs al aplicar los paradigmas reactivo y funcional.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*

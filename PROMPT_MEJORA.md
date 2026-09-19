# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Master; Chapter Backend, Especialidad Desarrollador, Tecnología Node, Senior

### Brecha de conocimiento
Implementa un paradigma de programación distinto al imperativo, como el paradigma reactivo o el paradigma funcional. Domina los cuatro pilares especificados en el manifiesto de sistemas reactivos, favoreciendo mejor rendimiento, una mayor escalabilidad y una mayor resiliencia. Conoce las ventajas, desventajas y operadores básicos en la implementación de este paradigma.

### Misión / candidato
Candidato con experiencia tanto en Frontend (Angular, Master) como en Backend (Node, Senior), ideal para aplicar paradigmas reactivos y funcionales en múltiples contextos.

### Reto
- Tema: Adopción de Paradigmas de Programación No Imperativos: Con Enfoque Reactivo y Funcional
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de un Sistema de Gestión de Tareas con Paradigmas Reactivos y Funcionales
- Tiempo estimado: 5-6 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición del Dominio y Requisitos — objetivo: Entender el dominio del sistema de gestión de tareas y sus requisitos funcionales. — entregable (NO resolver): Descripción detallada del dominio y sus requisitos funcionales.
- Fase 2: Diseño del Sistema con Paradigma Reactivo — objetivo: Diseñar el sistema de gestión de tareas utilizando un paradigma reactivo. — entregable (NO resolver): Diagrama de flujo que representa el diseño del sistema utilizando un paradigma reactivo.
- Fase 3: Implementación del Sistema con Paradigma Funcional — objetivo: Implementar el sistema de gestión de tareas utilizando un paradigma funcional. — entregable (NO resolver): Descripción detallada de la implementación del sistema utilizando un paradigma funcional.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/config/web-client.config.ts ===
import { WebClientConfig } from '@nestjs/common';

export const webClientConfig: WebClientConfig = {
  errorHandler: (error) => {
    return error.onErrorResume();
  },
};

// === ARCHIVO: src/domain/task.ts ===
export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: string,
    public assignedTo: string
  ) {}

  createTask(title: string, description: string, assignedTo: string): Task {
    return new Task('', title, description, 'pending', assignedTo);
  }

  assignTask(taskId: string, assignedTo: string): Task {
    return new Task(taskId, '', '', 'assigned', assignedTo);
  }

  updateStatus(taskId: string, status: string): Task {
    return new Task(taskId, '', '', status, '');
  }
}

// === ARCHIVO: src/application/task-service.ts ===
import { Injectable } from '@nestjs/common';
import { Task } from '../domain/task';
import { TaskRepository } from '../infrastructure/task-repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  createTask(title: string, description: string, assignedTo: string): Task {
    const task = new Task('', title, description, 'pending', assignedTo);
    this.taskRepository.save(task);
    return task;
  }

  assignTask(taskId: string, assignedTo: string): Task {
    const task = this.taskRepository.findById(taskId);
    if (task) {
      task.assignTask(taskId, assignedTo);
      this.taskRepository.save(task);
    }
    return task;
  }

  updateStatus(taskId: string, status: string): Task {
    const task = this.taskRepository.findById(taskId);
    if (task) {
      task.updateStatus(taskId, status);
      this.taskRepository.save(task);
    }
    return task;
  }
}

// === ARCHIVO: src/infrastructure/task-repository.ts ===
import { Task } from '../domain/task';

export class TaskRepository {
  private tasks: Task[] = [];

  save(task: Task): void {
    this.tasks.push(task);
  }

  findById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }
}

// === ARCHIVO: src/presentation/task-controller.ts ===
import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from '../application/task-service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  createTask(@Body() body: { title: string, description: string, assignedTo: string }): Task {
    return this.taskService.createTask(body.title, body.description, body.assignedTo);
  }

  @Post('assign')
  assignTask(@Body() body: { taskId: string, assignedTo: string }): Task {
    return this.taskService.assignTask(body.taskId, body.assignedTo);
  }

  @Post('update-status')
  updateStatus(@Body() body: { taskId: string, status: string }): Task {
    return this.taskService.updateStatus(body.taskId, body.status);
  }
}

// === ARCHIVO: src/test/task.spec.ts ===
import { Task } from '../../src/domain/task';

describe('Task', () => {
  it('should create a new task', () => {
    const task = new Task('', 'Test Task', 'Test Description', 'pending', 'User1');
    expect(task.title).toBe('Test Task');
  });

  it('should assign a task to a user', () => {
    const task = new Task('1', 'Test Task', 'Test Description', 'pending', '');
    task.assignTask('1', 'User2');
    expect(task.assignedTo).toBe('User2');
  });

  it('should update the status of a task', () => {
    const task = new Task('1', 'Test Task', 'Test Description', 'pending', 'User1');
    task.updateStatus('1', 'completed');
    expect(task.status).toBe('completed');
  });
});

// === ARCHIVO: src/config/resilience4j.config.ts ===
import { Resilience4jConfig } from '@nestjs/common';

export const resilience4jConfig: Resilience4jConfig = {
  circuitBreaker: {
    name: 'taskService',
    fallback: (error) => {
      return { status: 'failed', message: 'Circuit breaker opened' };
    }
  },
  retry: {
    maxAttempts: 3,
    delay: 1000
  },
  bulkhead: {
    maxConcurrentCalls: 10,
    maxQueueSize: 10
  }
};

// === ARCHIVO: package.json ===
{
  "name": "task-management-system",
  "version": "1.0.0",
  "main": "dist/main.js",
  "license": "MIT",
  "scripts": {
    "start": "nest start",
    "build": "nest build",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.0.0",
    "@nestjs/platform-express": "10.0.0",
    "rxjs": "7.5.0",
    "resilience4j": "2.0.0"
  },
  "devDependencies": {
    "@nestjs/testing": "10.0.0",
    "jest": "29.0.0",
    "ts-jest": "29.0.0",
    "@types/jest": "29.0.0"
  }
}

```

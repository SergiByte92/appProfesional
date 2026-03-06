# App Profesional

Aplicacion profesional desarrollada con **Next.js + React + shadcn/ui** y empaquetada para Android mediante **Capacitor**.

## Captura de la aplicacion

![Pantalla principal App Profesional](docs/readme.png)

## Objetivo de la actividad

- Mejorar y organizar la interfaz siguiendo manual de estilo.
- Implementar sistema de informes con filtros, KPIs y grafico.
- Incluir ayuda contextual y manual/documentacion estructurada.
- Generar APK Android para instalacion.

## Stack tecnico

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS + shadcn/ui
- Recharts
- Capacitor Android

## Estructura funcional

- `Inicio`: panel principal y accesos rapidos.
- `Listado`: registros operativos con acceso a detalle.
- `Detalle`: vista individual por registro.
- `Informe`: filtros + KPIs + grafico + tabla resumen.
- `Ayuda`: boton contextual `?`, centro de ayuda y manual HTML.

## Diseno y responsive

- Sidebar en escritorio y navegacion compacta en movil.
- Topbar optimizada para movil (sin solaparse con barra de estado).
- Correcciones de overflow horizontal para evitar recortes en pantallas pequenas.
- Tipografias usadas: **Geist** + **Noto Sans JP**.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de produccion web

```bash
npm run build
```

La app se exporta en `out/` (configurado con `output: "export"` en `next.config.ts`).

## Flujo Android (Capacitor)

Sincronizar assets web con Android:

```bash
npx cap sync android
```

Abrir proyecto Android Studio:

```bash
npx cap open android
```

## APK Debug

```bash
cd android
./gradlew assembleDebug
```

Salida:

- `android/app/build/outputs/apk/debug/app-debug.apk`

## APK Release (firmada)

Generacion release:

```bash
cd android
./gradlew assembleRelease
```

APK generado por Gradle:

- `android/app/build/outputs/apk/release/app-release-unsigned.apk`

Firma APK (ejemplo con `apksigner`):

```bash
apksigner sign --ks <tu-keystore.jks> --out app-release-signed.apk app-release-unsigned.apk
```

Verificacion:

```bash
apksigner verify --print-certs app-release-signed.apk
```

## Instalacion en dispositivo/emulador

```bash
adb install -r android/app/build/outputs/apk/release/app-release-signed.apk
```

## Checklist final de entrega

- [x] Build de produccion generado
- [x] Capacitor sincronizado correctamente
- [x] APK Release firmada creada
- [x] APK instalada y funcionando
- [x] Diseno responsive en movil
- [x] Documento README incluido

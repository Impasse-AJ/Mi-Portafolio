# Abraham Pauta Portfolio

Portfolio profesional de Abraham Pauta, Desarrollador Web Full Stack Junior.

Sitio estatico construido con React, TypeScript, Vite, Tailwind CSS, lucide-react y motion/react. No usa backend, Gemini, APIs externas ni variables de entorno para funcionar.

## Contenido

- Perfil profesional junior realista.
- Experiencia en practicas en EXA Formacion.
- Stack tecnico organizado por areas.
- Proyecto destacado: Pokémon World Map.
- Contacto sin telefono publico.
- Modal de CV imprimible desde el navegador.
- Metadatos SEO y Open Graph para `https://abrahampauta.com`.

## Desarrollo local

```bash
npm install
npm run dev
```

Servidor local por defecto:

```text
http://localhost:3000
```

## Validacion

```bash
npm run lint
npm run build
```

## Despliegue con Docker

El contenedor sirve el build estatico con Nginx en el puerto interno `80`. El `docker-compose.yml` publica solo en localhost:

```text
127.0.0.1:8080 -> container:80
```

Construir y arrancar:

```bash
docker compose up -d --build
```

Ejemplo de Caddyfile en la VPS:

```caddyfile
abrahampauta.com {
  reverse_proxy 127.0.0.1:8080
  encode zstd gzip
}
```

## Produccion

- No subir secretos ni `.env` al repositorio.
- No se necesita `GEMINI_API_KEY`.
- Cloudflare puede gestionar DNS/proxy delante de Caddy.
- Caddy puede encargarse del certificado TLS si el proxy de Cloudflare lo permite.

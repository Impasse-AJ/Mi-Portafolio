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

## Despliegue en VPS

Arquitectura de despliegue:

```text
Cloudflare -> Caddy -> Docker -> Nginx -> build estatica React/Vite
```

Cloudflare gestiona DNS/proxy, Caddy recibe el trafico HTTPS y lo reenvia al servicio local publicado por Docker. Dentro del contenedor, Nginx sirve la build estatica generada por React/Vite.

El contenedor no debe exponerse directamente a internet. El puerto de Docker debe publicarse solo en `127.0.0.1`, y Caddy debe actuar como reverse proxy hacia ese puerto local.

### Actualizar despliegue

Entrar en la ruta del proyecto en la VPS:

```bash
cd /ruta/del/proyecto
```

Actualizar desde GitHub:

```bash
git pull
```

Reconstruir y levantar el contenedor:

```bash
docker compose up -d --build
```

Comprobar estado:

```bash
docker compose ps
```

Ver logs del contenedor:

```bash
docker logs abraham-portfolio
```

Comprobar respuesta local:

```bash
curl -I http://127.0.0.1:3000
```

Comprobar dominios:

```bash
curl -I https://abrahampauta.com
curl -I https://www.abrahampauta.com
```

### Caddy

Bloque Caddy generico:

```caddyfile
abrahampauta.com, www.abrahampauta.com {
    reverse_proxy 127.0.0.1:3000
}
```

### Backups de configuracion

Hacer backup del `Caddyfile`:

```bash
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup
```

Guardar una copia de la configuracion efectiva de Docker Compose:

```bash
docker compose config > docker-compose.config.backup.yml
```

## Seguridad

- No subir secretos ni `.env` al repositorio.
- No subir claves, credenciales ni tokens.
- No documentar la IP publica de la VPS.
- No exponer el contenedor directamente a internet.
- Publicar el puerto del contenedor solo en `127.0.0.1`.
- Cloudflare puede gestionar DNS/proxy delante de Caddy.
- Caddy puede encargarse del certificado TLS si el proxy de Cloudflare lo permite.
- No se necesita `GEMINI_API_KEY`.

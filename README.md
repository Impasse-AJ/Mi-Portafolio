# Abraham Pauta Portfolio

Portfolio profesional de Abraham Pauta, Desarrollador Web Full Stack Junior.

Sitio estático construido con React, TypeScript, Vite, Tailwind CSS, lucide-react y motion/react. No usa backend, Gemini, APIs externas ni variables de entorno para funcionar.

## Contenido

- Perfil profesional junior realista.
- Experiencia en prácticas en EXA Formación.
- Stack técnico organizado por áreas.
- Proyecto destacado: Pokémon World Map.
- Contacto sin teléfono público.
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

## Validación

```bash
npm run lint
npm run build
```

## Despliegue en VPS

Arquitectura de despliegue:

```text
Cloudflare → Caddy → Docker → Nginx → build estática React/Vite
```

Cloudflare gestiona DNS/proxy, Caddy recibe el tráfico HTTPS y lo reenvía al servicio local publicado por Docker. Caddy actúa como reverse proxy público y Nginx se ejecuta dentro del contenedor únicamente para servir los archivos estáticos generados por Vite.

El contenedor no debe exponerse directamente a internet. El puerto de Docker debe publicarse solo en `127.0.0.1`, y Caddy debe actuar como reverse proxy hacia ese puerto local.

### Actualizar despliegue

Entrar en la ruta del proyecto en la VPS:

```bash
cd /srv/apps/Mi-Portafolio
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
docker logs --tail=50 abraham-portfolio
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

Bloque Caddy genérico:

```caddyfile
abrahampauta.com, www.abrahampauta.com {
    reverse_proxy 127.0.0.1:3000
}
```

### Backups de configuración

Hacer backup del `Caddyfile`:

```bash
cp /etc/caddy/Caddyfile /srv/backups/Caddyfile-portfolio-$(date +%F-%H%M)
```

Guardar una copia de la configuración efectiva de Docker Compose:

```bash
cd /srv/apps/Mi-Portafolio
docker compose config > /srv/backups/portfolio-compose-$(date +%F-%H%M).yml
```

## Seguridad

- No subir secretos ni `.env` al repositorio.
- No subir claves, credenciales ni tokens.
- No documentar la IP pública de la VPS.
- No exponer el contenedor directamente a internet.
- Publicar el puerto del contenedor solo en `127.0.0.1`.
- Cloudflare gestiona DNS/proxy delante de Caddy.
- Caddy gestiona el reverse proxy hacia el contenedor local.
- No se necesita `GEMINI_API_KEY`.

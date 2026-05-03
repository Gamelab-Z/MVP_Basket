# 🏀 MVP Basketball Manager

Una aplicación web completa para gestionar tu equipo de baloncesto, comprar/vender jugadores, jugar partidos simulados y ganar recompensas.

## ✨ Características

- 👤 **Sistema de Autenticación**: Registro, login y perfil de usuario
- 💰 **Economía del Juego**: Euros y Gemas como moneda
- 🎁 **Códigos Promocionales**: Recompensas especiales (ej: `GameLab_732026` = 10B€ + 10B💎)
- ⚽ **Simulador de Partidos**: Partidos de 45 minutos basados en estadísticas
- 🏪 **Tienda de Jugadores**: Compra y venta de jugadores con diferentes raridades
- 📊 **Estadísticas**: Seguimiento de victorias, derrotas, nivel y experiencia
- 🎮 **Sistema de Progresión**: Sube de nivel, gana experiencia y mejora tu equipo

## 🚀 Inicio Rápido

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Editar .env con tu MongoDB URI
npm run dev
```

El servidor estará en `http://localhost:5000`

### Frontend (Próximamente)

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará en `http://localhost:5173`

## 📋 Estructura del Proyecto

```
MVP_Basket/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Player.js
│   │   │   ├── Match.js
│   │   │   └── PromoCode.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
└── frontend/ (próximamente)
```

## 🎮 Códigos Promocionales Especiales

| Código | Recompensa |
|--------|------------|
| `GameLab_732026` | 10,000,000,000 € + 10,000,000,000 💎 |

## 🔧 Tecnologías

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Autenticación**: JWT
- **Base de Datos**: MongoDB

## 📝 Licencia

MIT

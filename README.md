# NEUROQUANT INDIA - AI Trading Intelligence Platform

Production-grade intelligence platform for NSE/BSE markets.

## Architecture
- **Backend:** 6 FastAPI Microservices (Dockerized)
- **Web:** Next.js (TailwindCSS + Recharts)
- **Mobile:** Flutter Android (Clean Architecture + Riverpod)
- **Database:** PostgreSQL + Redis
- **AI:** FinBERT (News), LSTM (Regime), PPO (Portfolio)

## Setup Instructions

### 1. Prerequisites
- Docker & Docker Compose
- Node.js (v18+)
- Flutter SDK
- Python 3.11+

### 2. Backend & Database
1. Copy `.env.example` to `.env` and fill in your Broker API keys.
2. Run the platform using Docker:
   ```bash
   docker-compose up --build
   ```

### 3. Web Dashboard
1. Navigate to `web/`:
   ```bash
   npm install
   npm run dev
   ```
2. Access at `http://localhost:3000`

### 4. Flutter App
1. Navigate to `mobile/`:
   ```bash
   flutter pub get
   flutter run
   ```

## Microservices Ports
- Data Service: `8001`
- News Service: `8002`
- Volatility Service: `8003`
- Risk Engine: `8004`
- RL Engine: `8005`
- Fusion Engine: `8006`

## Security
- All endpoints use JWT authentication (skeleton implemented).
- API keys are encrypted in the database.

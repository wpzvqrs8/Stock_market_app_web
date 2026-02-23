from fastapi import FastAPI
import uvicorn
import os

app = FastAPI(title="NeuroQuant India - Volatility Service", version="1.0.0")

@app.get("/")
async def root():
    return {"status": "ok", "service": "volatility-service"}

@app.get("/v1/surface/{symbol}")
async def get_vol_surface(symbol: str):
    return {
        "symbol": symbol,
        "surface_data": [
            {"strike": 24000, "expiry": "2026-03-26", "iv": 14.5},
            {"strike": 24500, "expiry": "2026-03-26", "iv": 15.1},
            {"strike": 25000, "expiry": "2026-03-26", "iv": 16.2}
        ]
    }

@app.get("/v1/anomalies")
async def get_anomalies():
    return [
        {"symbol": "BANKNIFTY", "type": "IV_SPIKE", "intensity": "High", "strike": 52000}
    ]

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8003))
    uvicorn.run(app, host="0.0.0.0", port=port)

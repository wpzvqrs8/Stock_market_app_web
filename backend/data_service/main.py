from fastapi import FastAPI, HTTPException, Depends
from typing import List, Optional
from pydantic import BaseModel
import uvicorn
import os

app = FastAPI(title="NeuroQuant India - Data Service", version="1.0.0")

class MarketData(BaseModel):
    symbol: str
    price: float
    change: float
    volume: int
    timestamp: str

@app.get("/")
async def root():
    return {"status": "ok", "service": "data-service"}

@app.get("/v1/equity/{symbol}")
async def get_equity_data(symbol: str):
    # Dummy data for demonstration
    return {
        "symbol": symbol,
        "exchange": "NSE",
        "last_price": 2500.45,
        "change": 12.30,
        "p_change": 0.52,
        "volume": 1200000,
        "vix": 15.4
    }

@app.get("/v1/options/{symbol}/chain")
async def get_options_chain(symbol: str):
    # Dummy options chain
    return {
        "symbol": symbol,
        "expiry": "2026-03-26",
        "data": [
            {"strike": 24000, "call_iv": 14.5, "put_iv": 15.2, "call_oi": 150000, "put_oi": 120000},
            {"strike": 24100, "call_iv": 14.2, "put_iv": 14.8, "call_oi": 160000, "put_oi": 110000}
        ]
    }

@app.get("/v1/vix")
async def get_vix():
    return {"symbol": "INDIA VIX", "value": 15.4, "change": -0.2}

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8001))
    uvicorn.run(app, host="0.0.0.0", port=port)

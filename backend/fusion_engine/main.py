from fastapi import FastAPI
import uvicorn
import os

app = FastAPI(title="NeuroQuant India - Fusion Engine", version="1.0.0")

@app.get("/")
async def root():
    return {"status": "ok", "service": "fusion-engine"}

@app.get("/v1/signal/{symbol}")
async def get_fused_signal(symbol: str):
    return {
        "symbol": symbol,
        "overall_signal": "BUY",
        "confidence": 0.82,
        "components": {
            "sentiment": 0.9,
            "volatility": 0.7,
            "risk": 0.85,
            "rl_agent": 0.8
        },
        "expected_move": "+1.2%"
    }

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8006))
    uvicorn.run(app, host="0.0.0.0", port=port)

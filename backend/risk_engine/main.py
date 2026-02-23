from fastapi import FastAPI
import uvicorn
import os

app = FastAPI(title="NeuroQuant India - Risk Engine", version="1.0.0")

@app.get("/")
async def root():
    return {"status": "ok", "service": "risk-engine"}

@app.get("/v1/regime")
async def get_regime():
    return {
        "current_regime": "Expanding Bull",
        "confidence": 0.88,
        "features": ["VIX LOW", "NIFTY_EMA_CROSSOVER", "NEWS_SENTIMENT_POS"]
    }

@app.get("/v1/crash-probability")
async def get_crash_prob():
    return {
        "probability": 0.05,
        "level": "Low",
        "days_forward": 7
    }

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8004))
    uvicorn.run(app, host="0.0.0.0", port=port)

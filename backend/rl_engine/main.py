from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict
import uvicorn
import os

app = FastAPI(title="NeuroQuant India - RL Engine", version="1.0.0")

class StateVector(BaseModel):
    sentiment: float
    iv_anomaly: float
    regime_state: int
    crash_prob: float
    technical_features: Dict[str, float]

@app.get("/")
async def root():
    return {"status": "ok", "service": "rl-engine"}

@app.post("/v1/allocate")
async def allocate_portfolio(state: StateVector):
    # Placeholder for PPO inference
    return {
        "allocations": {
            "NIFTY50": 0.6,
            "BANKNIFTY": 0.2,
            "CASH": 0.2
        },
        "reasoning": "High sentiment and low crash probability favor equity exposure."
    }

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8005))
    uvicorn.run(app, host="0.0.0.0", port=port)

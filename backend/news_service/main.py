from fastapi import FastAPI
import uvicorn
import os

app = FastAPI(title="NeuroQuant India - News Service", version="1.0.0")

@app.get("/")
async def root():
    return {"status": "ok", "service": "news-service"}

@app.get("/v1/sentiment/{symbol}")
async def get_sentiment(symbol: str):
    # This would call the FinBERT model
    return {
        "symbol": symbol,
        "sentiment_score": 0.65,
        "sentiment_label": "Bullish",
        "last_updated": "2026-02-23T20:30:00Z"
    }

@app.get("/v1/feed")
async def get_news_feed():
    return [
        {
            "title": "RBI holds rates, maintains hawkish stance",
            "source": "Economic Times",
            "time": "2 hours ago",
            "sentiment": 0.1,
            "category": "Macro"
        },
        {
            "title": "Reliance expanding Jio Financial footprints",
            "source": "Moneycontrol",
            "time": "4 hours ago",
            "sentiment": 0.8,
            "category": "Corporate"
        }
    ]

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8002))
    uvicorn.run(app, host="0.0.0.0", port=port)

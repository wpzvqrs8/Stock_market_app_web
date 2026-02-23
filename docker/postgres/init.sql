-- NeuroQuant India Database Schema

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE market_data (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR(20) NOT NULL,
    exchange VARCHAR(10) NOT NULL,
    open_price DECIMAL(18, 4),
    high_price DECIMAL(18, 4),
    low_price DECIMAL(18, 4),
    close_price DECIMAL(18, 4),
    volume BIGINT,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    UNIQUE(symbol, timestamp)
);

CREATE TABLE options_chain (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR(20) NOT NULL,
    strike DECIMAL(18, 4) NOT NULL,
    expiry DATE NOT NULL,
    call_oi INT,
    put_oi INT,
    call_iv DECIMAL(10, 4),
    put_iv DECIMAL(10, 4),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE sentiment_scores (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR(20) NOT NULL,
    score DECIMAL(5, 4) NOT NULL, -- -1 to 1
    label VARCHAR(20),
    article_count INT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE regime_states (
    id SERIAL PRIMARY KEY,
    regime_name VARCHAR(50) NOT NULL,
    confidence DECIMAL(5, 4),
    crash_probability DECIMAL(5, 4),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE portfolios (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name VARCHAR(100),
    total_value DECIMAL(18, 4),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rl_decisions (
    id SERIAL PRIMARY KEY,
    portfolio_id INT REFERENCES portfolios(id),
    decision_json JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

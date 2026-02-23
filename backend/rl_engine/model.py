# Using Stable Baselines3 for PPO
# from stable_baselines3 import PPO

class PortfolioAgent:
    """
    RL Agent using Proximal Policy Optimization (PPO) for portfolio allocation.
    """
    def __init__(self):
        print("Initialized RL Portfolio Agent (PPO)")

    def get_allocation(self, state_vector: list) -> dict:
        """
        Map state (Sentiment, IV, Regime, Prices) to target weights.
        """
        # state_vector includes: [sentiment, iv, regime_id, crash_prob, tech_indices...]
        
        return {
            "NIFTY50": 0.55,
            "BANKNIFTY": 0.25,
            "GOLD_ETF": 0.10,
            "CASH": 0.10
        }

if __name__ == "__main__":
    agent = PortfolioAgent()
    print(agent.get_allocation([0.6, 15.4, 1, 0.05]))

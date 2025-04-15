---
id: pools
title: Comprehensive Guide to Liquidity Pools
sidebar_label: Pools
---

# Creating Liquidity Pools 💦

Launch trading pairs and become a liquidity provider on EagleFi's decentralized exchange.

<!-- ![Pool Creation Interface](path-to-pool-creation-screenshot.png) -->

## Step-by-Step Pool Creation

### 1. Access Pool Interface

1. Navigate to **Pools** in main menu
2. Select **Create Pool**
3. Connect your Massa Wallet if not already connected

![Pool Navigation](/img/Access_P.png)

### 2. Select Token Pair

#### Token A (Your Project Token)

- Click token selector
- Search by name or paste contract address
- For tokens that are not listed:
  - Import using contract address
  - Verify token details
- Cannot be WMAS/MAS
  
![Token A Selection](/img/T_A.png)

#### Token B (WMAS Default)

- Automatically set to WMAS (Wrapped MASSA)
- Can switch to MAS (native currency) if needed
  
  ![Token B Selection](/img/T_B.png)

<!-- ![Token Selection](screenshot-token-selection.png) -->

### 3. Set Initial Parameters

#### Price Ratio

- Enter Token A's USD price
- Token B (WMAS) amount auto-calculates

![Price Input](/img/Price_per_T.png)

#### Initial Liquidity

- Provide both tokens to bootstrap pool
- Maintain ratio according to current price

<!-- ![Price Setup](screenshot-price-input.png) -->

### 4. Configure Fee Tier

Choose from four fee structures:

| Fee Percentage | Best For                      | Trade-off               |
|----------------|------------------------------|-------------------------|
| 0.01%          | Stablecoin pairs             | Lowest fee income       |
| 0.05%          | Pegged assets                | Moderate volatility     |
| 0.3%           | Most MRC-20 pairs (Default)  | Balanced risk/reward    |
| 1%             | Exotic/illiquid tokens       | High impermanent loss   |

![Fee Selection](/img/Trading_fees.png)

### 5. Pool Validation

Our system automatically checks for:

- Token pair availability
- Duplicate pool prevention
- Sufficient token balances
- Valid price ratio

### 6. Transaction Execution

1. Click **Create Pool**
2. Approve two transactions:
   - Token contract allowance (if non-native)
   - Pool creation transaction
3. Wait for blockchain confirmation

![Transaction Approval](/img/create_pool.png)

## Post-Creation Actions

### Verify Pool Creation

1. Check **Your Pools** section in Portfolio or Pools page
2. Confirm pool appears in [Massa Explorer](https://explorer.massa.net)
3. Verify initial liquidity

### Initial Liquidity Tips

- Maintain 1:1 value ratio
- Larger liquidity reduces price slippage
- Consider minimum 1,000 tokens per asset

## Critical Considerations

### Immutable Parameters

- Token pair
- Fee structure
- Contract address

### Risk Factors

⚠️ **Impermanent Loss**  
Price divergence between assets may reduce value compared to holding

⚠️ **Fee Competition**  
Lower fee pools may attract more volume

⚠️ **Token Risks**  
Vet project tokens thoroughly - malicious tokens can drain liquidity

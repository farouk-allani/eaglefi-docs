---
id: swapping
title: Advanced Token Swapping Guide
sidebar_label: Swapping
---

# Complete Guide to Token Swapping ♻️

Execute instant token trades on EagleFi with Massa's sub-second finality and low fees.

<!-- ![Swap Interface Demo](path-to-swap-screenshot.png) -->

## Step-by-Step Swap Process

### 1. Access Swap Interface

1. Navigate to **Swap** in main menu
2. Connect your Massa Wallet
3. Ensure sufficient balance for swap and gas fees

<!-- ![Swap Access](screenshot-swap-access.png) -->

### 2. Select Token Pair

#### From Token

- Click token selector (top section)
- Choose from:
  - Native MAS/WMAS
  - MRC-20 tokens
  <!-- - Import custom tokens via address -->
- Balance displays automatically

#### To Token

- Select output token (bottom section)
- Cannot be same as "From" token
<!-- - ROLLS token restricted to MAS pairs -->

<!-- ![Token Selection](screenshot-token-select.png) -->

### 3. Enter Swap Amounts

#### Input Options

- **From Amount**: Direct input with balance percentage shortcuts
- **To Amount**: Auto-calculated based on pool rates
- Bidirectional updates (either field can initiate calculation)

#### Price Information

- Live USD conversions for both tokens
- Dynamic price impact percentage
- Minimum received calculation (slippage-adjusted)

<!-- ![Amount Input](screenshot-amount-input.png) -->

### 4. Configure Swap Settings

Access via gear icon (top-right):

| Setting            | Description                          | Default  |
|---------------------|--------------------------------------|----------|
| Slippage Tolerance | Maximum price movement allowed       | 0.5%     |

<!-- ![Settings Modal](screenshot-settings.png) -->

### 5. Execute Swap

#### Pre-Swap Checks

1. Sufficient token balance
2. Available liquidity
3. Price impact < slippage tolerance

#### Transaction Flow

1. Click **Swap**
2. Approve token spending (if first MRC-20 swap)
3. Confirm swap transaction
4. Wait for blockchain confirmation

<!-- ![Swap Confirmation](screenshot-swap-confirm.png) -->

## Special Swap Types

### Native Token Wrapping

| Action   | Process                      | Ratio  |
|----------|------------------------------|--------|
| Wrap MAS | Convert to WMAS (1:1)        | 1:1    |
| Unwrap   | Convert WMAS back to MAS     | 1:1    |

<!-- ### ROLLS Transactions

| Action | Requirements               | Rate       |
|--------|----------------------------|------------|
| Buy    | 100 MAS = 1 ROLL           | Fixed      |
| Sell   | 1 ROLL = 100 MAS           | Fixed      | -->

## Post-Swap Actions

### Verification

1. Check updated balances in Portfolio
2. View transaction on [Massa Explorer](https://explorer.massa.net)
3. Confirm receipt in wallet history

### Liquidity Provision

[Add swapped tokens](./pools) to liquidity pools to earn fees

## Technical Considerations

### Swap Execution Flow

1. Best route calculation via backend API
2. Multi-pool routing when necessary
3. Automated allowance management
4. Massa Web3 contract interactions

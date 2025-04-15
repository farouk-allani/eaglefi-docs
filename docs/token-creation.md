---
id: token-creation
title: Creating a Token on EagleFi
sidebar_label: Token Creation
---

# How to use EagleFi's Token Creation Tool on Massa 🛠️

With EagleFi's Token Creation Tool, we expand our vision to make DeFi more accessible on Massa blockchain, empowering users with the ability to create tokens effortlessly and permissionlessly.

Whether you're launching a new project on Massa, building a community token, or exploring blockchain possibilities, this tool eliminates the complexities of token creation, making it as simple as a few clicks. Our tool ensures:

- **Accessibility**: No coding skills required - create tokens through our intuitive interface
- **Customization**: Define your token properties including name, symbol, supply, and advanced features
- **Security**: Protected mint authority and immutable core parameters for your peace of mind

<!-- ![Token Creation Banner](path-to-your-banner-image.png) -->

## Step-by-Step Creation Process

### 1. Accessing the Token Creator

1. Navigate to **Create** in the main menu
2. Click **Create Token** from the dropdown
3. Ensure your wallet is connected

![Accessing the Token Creator](/img/AccessTC.png)

### 2. Completing Token Details

#### Core Information (Required)

- **Token Name**  
  *Example: "EagleFi Community Token"*  
  - Maximum 32 characters
  - Cannot contain special sequence "||"
  - Will be publicly visible
  
  ![Token name](/img/token_name.png)

- **Token Symbol**  
  *Example: "EGL"*  
  - 2-5 uppercase letters only (A-Z)
  - No numbers or special characters
  - Primary identifier for trading
  
  ![Token symbol](/img/T_symbol.jpg)

<!-- ![Core Information Section](screenshot-core-fields.png) -->

#### Token Supply

- **Total Supply**  
  - Enter whole numbers only (decimals handled automatically)
  - Fixed at creation - cannot be modified later
  - Minimum: 1 token
  - Maximum: 10<sup>24</sup> tokens
  - Decimals automatically set to 18
  
  ![Token supply](/img/T_supply.jpg)

<!-- *Pro Tip: Use commas for readability (e.g., 1,000,000)* -->

### 3. Advanced Features (Optional)

#### Token Functionality

Enable special capabilities through checkboxes:

- **Pausable**  
  Freeze all token transfers in emergencies
- **Mintable**  
  Create additional tokens post-deployment
- **Burnable**  
  Allow token holders to destroy tokens

<!-- ![Features Section](screenshot-features.png) -->

#### Branding & Metadata

- **Description**  
  - 500 character maximum
  - Markdown supported
  - Appears in token explorer
  
  ![Token description](/img/T_description.jpg)
  
- **Logo URL**  
  - HTTPS URL to PNG/SVG image
  - Recommended: 256x256px
  - Hosted on permanent storage (IPFS recommended)
  
  ![Token logo](/img/T_url.jpg)
  
- **Website**  
  - Official project URL
  - Must include https://
  
  ![Token website](/img/T_website.jpg)

<!-- ![Branding Section](screenshot-branding.png) -->

### 4. Deployment Process

1. Double-check all parameters
2. Click **Create Token**
3. Approve wallet transaction
4. Wait for blockchain confirmation

![Transaction confirmation](/img/T_success.png)

- Congratulations, your token has been created!

<!-- ![Deployment Process](screenshot-transaction.png) -->

## Post-Creation Actions

### Verification

- Token automatically appears in your portfolio
- Check transaction in [Massa Explorer](https://explorer.massa.net)
- Verify metadata accuracy

### Next Steps

1. [Add liquidity](./pools) to enable trading
2. Distribute tokens to community members
3. List on EagleMarketCap

## Critical Considerations

### Immutable Parameters

- Token Symbol
- Contract Address
- Decimals

### Security Warnings

⚠️ **Mintable Tokens**  
Retain mint authority wallet securely - anyone with access can create new tokens

⚠️ **Pausable Function**  
Only deployer address can pause transactions

---

**Need Help?**  
Contact support@eaglefi.io or visit our [Discord](https://discord.gg/r7hpAxVUMC)

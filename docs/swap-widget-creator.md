---
id: swap-widget
title: Embeddable Swap Widget Creator
sidebar_label: Swap Widget
---

# Turn Any Site into a DEX 🛠️

EagleFi's Swap Widget lets you embed decentralized trading directly into your website. Perfect for projects, communities, or anyone who wants to add instant swap functionality.

---

## Create Your Custom Widget

### 1. Access the Widget Builder

1. Go to [EagleFi.io/swap-widget-creator](https://www.eaglefi.io/swap-widget-creator) 
2. Connect your wallet ([See how](./getting-started))  

![Widget Creator Interface](/img/swap_widget_creator.png)

---

### 2. Configure Your Widget

**Select Tokens**

- **From Token**: Choose default "From" token
- **To Token**: Choose default "To" token

**Lock Settings**

- 🔒 **Fix From Token**: Force users to swap from specific token
- 🔒 **Fix To Token**: Force swap to specific token

![Token Configuration](/img/fix_from_and_to.png)  

---

### 3. Generated Embed Code

1. Embed code will be updated automatically as you make changes
2. Copy the iframe code snippet  
3. Paste into your website's HTML  

```html
<!-- Example Embed Code -->
<iframe src="https://eaglefi.io/swap-widget?fromToken=MAS..." 
        width="100%" 
        height="640px"
        style="border: 0; margin: 0 auto; display: block;">
</iframe>
```

### 4. Widget Preview

Here's how the widget will appear on your website:

![Embedded Widget Preview](/img/iframe_final.png)

Key features visible in the embedded widget:

- Clean, minimalist interface
- "Connect Wallet" button prominently displayed
- Token selection dropdowns
- Amount input fields
- Real-time price quotes
- Swap button
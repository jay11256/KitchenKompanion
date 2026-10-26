# KitchenKompanion
# ฅ^•ﻌ•^ฅ kitchen kompanion ♡

**hewwo chef!! nyaaa~** 🎀

welcome to **kitchen kompanion**, your purr-sonal little kitchen helper! i'm koko the catgirl, and i'm here to help you keep your kitchen organized, your tummy full, and your groceries from going bad! >w<

## 🍓 what can you do here, nya~?

- 🧺 **my fridge:** keep track of all your yummy ingredients and when they expire!
- 🛒 **shopping list:** make cute little grocery receipts, check off items, and bring them home to your fridge!
- 🍳 **recipes:** find yummy meals based on what you already have! no food left behind, meow~
- 🎀 **profile:** personalize your kitchen with your dietary preferences!
- 🥕 **add item:** give your new groceries a cozy home in your virtual fridge!

## ♡ how to get started

1. open `index.html` in your browser by clicking the file!
2. use the navigation bar to explore your kitchen~
3. add your groceries, plan some meals, and get cooking!

**no installations needed, nya!** everything runs right in your browser! ฅ^•ﻌ•^ฅ

---


## 💻 behind the meowgic!

kitchen kompanion is a browser-based web application built for **cmsc434: human-computer interaction**! 

### tech stack

- **html5:** structures all the pages and features.
- **css3:** handles styling, colors, fonts, buttons, and layouts.
- **javascript:** manages user interactions and functionality.
- **localStorage:** saves ingredients and shopping lists in the browser.
- **google fonts:** provides our kawaii typography!

### project structure

```text
kitchen-kompanion/
├── index.html           # main app and navigation
├── inventory.html       # virtual fridge
├── shopping-list.html   # grocery receipt
├── add-item.html        # add groceries
├── recipes.html         # recipe discovery
├── profile.html         # user preferences
├── style.css            # shared styling
└── README.md            # you're here, nya!~
```

### how it works, nya~

**navigation:** `index.html` uses an iframe to display different pages while keeping the navigation bar visible.

**data storage:** javascript uses `localStorage` to save information as JSON, so your groceries don't disappear when you switch tabs or refresh!

**shopping to fridge:** users can transfer items from their shopping list to the add item form. the item name is automatically filled in, and once confirmed, the item is saved to inventory and removed from the shopping list.

**expiration prediction:** estimated expiration dates are calculated based on the selected food group and purchase date. these are approximate estimates, not food safety guarantees!


### things to keep in mind

- data is stored locally in your browser, not in an external database.
- clearing browser storage may delete saved items.
- localStorage behavior may vary when opening files directly through `file://`.
- this is a prototype developed for our hci course, but more to come mew!! dont steal >:(

### a little note from koko ♡

hewwo developer! thank you for visiting my little kitchen! this project was made to explore user-centered design, intuitive navigation, and interactive web interfaces.

please take good care of your groceries, and remember to eat something yummy today! urp, sooo full >w<

*happy coding and cooking, nya~ ฅ^•ﻌ•^ฅ*

// =========================================================
// MENU DATA — edit this file to update the menus.
// No HTML needed: add, remove or change items below.
//
// Each item: { name, desc, price, tags }
//   tags: "V" = vegetarian, "GF" = gluten-free, "V · GF" = both
//
// Menus marked [] (empty) show a "coming soon" message
// until the client sends the real menu.
// =========================================================

const MENUS = {
  blu: {
    label: "Blu restaurant",
    food: [
      {
        category: "Starters",
        items: [
          { name: "Warm olives", desc: "Citrus peel, rosemary, chile", price: "$8", tags: "V · GF" },
          { name: "Whipped feta", desc: "Roasted tomato, herbs, grilled flatbread", price: "$13", tags: "V" },
          { name: "Crispy calamari", desc: "Lemon, parsley, smoked pepper aioli", price: "$16", tags: "" },
          { name: "Market greens", desc: "Radish, sunflower seed, champagne vinaigrette", price: "$12", tags: "V · GF" }
        ]
      },
      {
        category: "Pizza",
        note: "Our dough is naturally leavened for 48 hours.",
        items: [
          { name: "Margherita", desc: "Tomato, fresh mozzarella, basil, olive oil", price: "$17", tags: "V" },
          { name: "Garden", desc: "Mushroom, sweet pepper, onion, olive, mozzarella", price: "$20", tags: "V" },
          { name: "Spicy salami", desc: "Calabrian chile, tomato, mozzarella, honey", price: "$22", tags: "" },
          { name: "Sausage & fennel", desc: "House sausage, caramelized onion, pecorino", price: "$23", tags: "" }
        ]
      },
      {
        category: "Mains",
        items: [
          { name: "Grilled market fish", desc: "White bean, tomato, herbs, lemon", price: "$29", tags: "GF" },
          { name: "Roasted half chicken", desc: "Crispy potatoes, salsa verde, jus", price: "$28", tags: "GF" },
          { name: "Rigatoni", desc: "Slow tomato, fennel sausage, parmesan", price: "$24", tags: "" },
          { name: "Farro bowl", desc: "Roasted squash, greens, tahini, pepita", price: "$21", tags: "V" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Olive oil cake", desc: "Citrus, mascarpone, sea salt", price: "$11", tags: "V" },
          { name: "Chocolate pot", desc: "Dark chocolate, whipped cream, cocoa nib", price: "$12", tags: "V · GF" },
          { name: "Seasonal sorbet", desc: "Ask about today’s flavor", price: "$8", tags: "V · GF" }
        ]
      }
    ],
    bar: []
  },

  library: {
    label: "Library restaurant",
    food: [],
    bar: []
  }
};

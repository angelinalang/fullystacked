// =========================================================
// THE LIBRARY — MENU DATA (from the client's printed menu)
// Edit this file to update the menu. No HTML needed.
//
// FOOD items:   { name, desc, price }
// DRINK groups: { name, items: [{ name, size, price }] }
//   - size is optional, e.g. "10 oz"
//   - price can be "MKT" (market price) or "" (no price shown)
//
// Each category has a "callno": a library-style call number
// (641.5 is the real Dewey Decimal number for cooking; 641.2x is drinks)
// =========================================================

const MENU = {
  food: [
    {
      category: "Appetizers",
      callno: "641.5 APP",
      items: [
        { name: "House-made Salsa", desc: "Served with chips", price: "$4.95" },
        { name: "Made-to-order Guacamole", desc: "Served with chips & salsa", price: "$9.95" },
        { name: "Spinach Queso Dip", desc: "Served with chips & salsa", price: "$10.95" },
        { name: "Roasted Garlic Hummus", desc: "Served with toast points & carrots", price: "$8.95" },
        { name: "Sourdough Pretzel", desc: "With your choice of IPA mustard, beer cheese, or ranch. Two pretzels $10.95", price: "$5.95" }
      ]
    },
    {
      category: "Nachos",
      callno: "641.5 NAC",
      note: "Served with pico de gallo & salsa. Half orders available.",
      items: [
        { name: "Cheese Only", desc: "½ order $5.50", price: "$9.95" },
        { name: "Veggie", desc: "Green pepper, onion, mushrooms, tomatoes, & black olives. ½ order $6.95", price: "$11.95" },
        { name: "Chicken", desc: "½ order $7.95", price: "$13.95" },
        { name: "House-smoked Pulled Pork", desc: "½ order $7.50", price: "$12.95" },
        { name: "Homemade Pot Roast", desc: "½ order $7.95", price: "$13.95" }
      ]
    },
    {
      category: "Quesadillas",
      callno: "641.5 QUE",
      note: "Served with salsa.",
      items: [
        { name: "Veggie", desc: "Cheese, green peppers, red onions, black olives, mushrooms, & tomatoes", price: "$10.95" },
        { name: "Chicken", desc: "Chicken, cheese, green peppers, red onions, & tomatoes", price: "$12.95" },
        { name: "House-smoked Pulled Pork", desc: "Pulled pork, cheese, green peppers, red onions, & tomatoes", price: "$12.95" },
        { name: "Homemade Pot Roast", desc: "Roast, cheese, green peppers, red onions, & tomatoes", price: "$12.95" }
      ]
    },
    {
      category: "Salads & Soups",
      callno: "641.5 SAL",
      note: "Salad dressings: ranch, honey mustard, Italian, balsamic & oil, or raspberry vinaigrette.",
      items: [
        { name: "Library Salad", desc: "Greens, cheese, tomatoes, & mushrooms. Add blackened chicken for $4", price: "$10.95" },
        { name: "Dinner Salad", desc: "Greens, cheese, tomatoes, & mushrooms", price: "$5.95" },
        { name: "Pot Roast in a Bread Bowl", desc: "Chunks of roast, gravy, green beans, corn, & carrots simmering in our baked sourdough bowl", price: "$11.95" },
        { name: "Soup in a Bread Bowl", desc: "Ask your server what we have today", price: "$10.95" }
      ]
    },
    {
      category: "Burgers & Sammies",
      callno: "641.5 BUR",
      note: "All sandwiches and burgers come with a pickle spear, potato chips, and appropriate fixins.",
      items: [
        { name: "Short Rib Grilled Cheese", desc: "Monterrey, cheddar, caramelized onion, arugula", price: "$13.95" },
        { name: "Parmesan Buttered Grilled Cheese", desc: "Monterrey & cheddar", price: "$10.95" },
        { name: "Mushroom Grilled Cheese", desc: "Wild mushroom & arugula", price: "$11.95" },
        { name: "Library Cheeseburger", desc: "Angus beef, cheddar cheese, & all the proper veggies", price: "$11.95" },
        { name: "The Onion Cheeseburger", desc: "Angus beef, American cheese, & caramelized onion", price: "$11.95" },
        { name: "Mushroom Swiss Burger", desc: "The Swiss deserve no credit for this one", price: "$12.95" },
        { name: "Pot Roast Sliders", desc: "Topped with truffle oil mashed new potatoes & onion tanglers. Does not come with chips or pickle", price: "$12.95" },
        { name: "House-smoked Pulled Pork Sandwich", desc: "Topped with slaw, pickled red onion, & BBQ sauce", price: "$10.95" }
      ]
    },
    {
      category: "Pizzas",
      callno: "641.5 PIZ",
      note: "10″ pizzas with the freshest ingredients on a hand-rolled dough seasoned with olive oil, fresh herbs, & cornmeal.",
      items: [
        { name: "Four Cheese", desc: "Blended romano, parmesan, mozzarella, & provolone", price: "$11.95" },
        { name: "Tomato, Basil, & Garlic", desc: "Ripe red tomatoes over fresh-cut basil & house-roasted garlic", price: "$11.95" },
        { name: "Veggie Pie", desc: "Black olives, red onions, mushrooms, tomatoes, & green peppers", price: "$11.95" },
        { name: "Pepperoni", desc: "Generous amounts of thinly sliced, spicy pepperoni", price: "$12.95" },
        { name: "Italian Sausage", desc: "A hearty helping of chunky, crumbled sausage", price: "$12.95" },
        { name: "Combo Pizza", desc: "Take the Veggie Pie & add Italian sausage & pepperoni", price: "$13.95" },
        { name: "BBQ Chicken", desc: "A tangy blend of chicken, bacon, cilantro, & BBQ sauce", price: "$13.95" },
        { name: "Chicken Alfredo", desc: "Blackened chicken, mushrooms, & a very creamy alfredo sauce", price: "$13.95" }
      ]
    },
    {
      category: "Sweets",
      callno: "641.86 SWE",
      items: [
        { name: "La Baguette’s Chocolate Delight", desc: "À la mode", price: "$6.95" },
        { name: "Salted Caramel Pretzel", desc: "With chocolate or hot caramel sauce", price: "$5.95" },
        { name: "Eli’s New York Style Cheesecake", desc: "With strawberry sauce", price: "$5.95" }
      ]
    }
  ],

  drinks: [
    {
      category: "Draft Beer",
      callno: "641.23 DRA",
      note: "Happy hour every day, 3:00–6:00: all draft beers are $2 less than the printed price.",
      groups: [
        {
          name: "Light",
          items: [
            { name: "Anthem Pollinator Pilsner", price: "$5.50" },
            { name: "Michelob Ultra", price: "$4" },
            { name: "Pabst Blue Ribbon", price: "$4" },
            { name: "Boulevard Tank 7", size: "10 oz", price: "$6" },
            { name: "Stella Artois", price: "$6" },
            { name: "Blue Moon", price: "$5.50" },
            { name: "Boulevard Wheat", price: "$5.50" },
            { name: "Anthem Golden One", price: "$5.50" },
            { name: "Cowboy Cold", price: "$5.50" },
            { name: "Stonecloud Neon Sunshine", price: "$7" },
            { name: "Pacifico", price: "$5.50" },
            { name: "Yuengling", price: "$5.50" },
            { name: "Corona Premier", price: "$5.50" }
          ]
        },
        {
          name: "Pale",
          items: [
            { name: "Founders All Day IPA", price: "$6" },
            { name: "COOP F5 IPA", price: "$7" },
            { name: "Sierra Nevada Pale Ale", price: "$7" },
            { name: "Roughtail ERWO", price: "$7" },
            { name: "Stonecloud Astrodog IPA", price: "$7" },
            { name: "Skydance Fancy Dance IPA", price: "$7" }
          ]
        },
        {
          name: "Amber",
          items: [
            { name: "COOP DNR", size: "10 oz", price: "$8" },
            { name: "Shiner Bock", price: "$6" },
            { name: "Abita Amber", price: "$8" },
            { name: "Skydance NDN Amber", price: "$6" },
            { name: "Big Sky Moose Drool", price: "$5.50" }
          ]
        },
        {
          name: "Dark",
          items: [
            { name: "Left Hand Milk Stout", size: "10 oz", price: "$7" },
            { name: "Guinness", price: "$7" },
            { name: "Prairie Bomb", size: "10 oz", price: "$8" }
          ]
        },
        {
          name: "Rotators",
          items: [
            { name: "Prairie Brewing Rotator", price: "MKT" },
            { name: "405 Brewing Rotator", price: "MKT" },
            { name: "Random Rotator", price: "MKT" }
          ]
        },
        {
          name: "Fruit",
          items: [
            { name: "Lindeman’s Framboise", size: "10 oz", price: "$11" },
            { name: "Anthem Super Fancy", price: "$6" },
            { name: "Prairie Rainbow Sherbet", price: "$6" },
            { name: "Angry Orchard", price: "$5.50" }
          ]
        }
      ]
    },
    {
      category: "Made in Oklahoma Flights",
      callno: "641.23 MIO",
      note: "Pick any 4 Oklahoma drafts for a flight. Price will vary slightly!",
      groups: [
        {
          name: "Choose from",
          items: [
            { name: "Anthem Golden One", price: "" },
            { name: "Stonecloud Neon Sunshine", price: "" },
            { name: "COOP DNR", price: "" },
            { name: "Anthem Super Fancy", price: "" },
            { name: "Prairie Rainbow Sherbet", price: "" },
            { name: "COOP F5 IPA", price: "" },
            { name: "Roughtail ERWO", price: "" },
            { name: "Stonecloud Astrodog IPA", price: "" },
            { name: "Skydance Fancy Dance IPA", price: "" },
            { name: "Anthem Pollinator Pilsner", price: "" },
            { name: "Prairie Bomb", price: "" },
            { name: "Prairie Brewing Rotator", price: "" },
            { name: "405 Brewing Rotator", price: "" }
          ]
        }
      ]
    },
    {
      category: "Bottles & Cans",
      callno: "641.23 BOT",
      groups: [
        {
          name: "Bottles & cans",
          items: [
            { name: "Miller Lite", price: "$4" },
            { name: "Coors Light", price: "$4" },
            { name: "Dos Equis", price: "$5" },
            { name: "COOP Schooner", price: "$6" },
            { name: "Fat Tire", price: "$5" },
            { name: "Red Stripe", price: "$5" }
          ]
        },
        {
          name: "More cans",
          items: [
            { name: "Negra Modelo", price: "$5" },
            { name: "Dogfish Head SeaQuench", price: "$6" },
            { name: "Austin Pineapple", price: "$6" },
            { name: "NUTRL Seltzer", price: "$6" },
            { name: "Estrella Damm Daura", size: "gluten free", price: "$5" }
          ]
        }
      ]
    },
    {
      category: "Wine",
      callno: "641.22 WIN",
      note: "Prices are glass / bottle.",
      groups: [
        {
          name: "White",
          items: [
            { name: "Kendall Jackson Chardonnay", price: "$11 / $42" },
            { name: "Riff Pinot Grigio", price: "$9.50 / $36" },
            { name: "Atlantique Sauvignon Blanc", price: "$8.50 / $33" },
            { name: "Wente Riesling", price: "$9 / $34" },
            { name: "And Why Am I Mr. Pink Rosé", price: "$4 / $17" },
            { name: "Brut Opera Prima", price: "$4 / $17" }
          ]
        },
        {
          name: "Red",
          items: [
            { name: "Pullus Halozan Red Wine", price: "$9 / $34" },
            { name: "Bodini Malbec", price: "$7 / $26" },
            { name: "Pavette Pinot Noir", size: "bottle", price: "$33" },
            { name: "Colores Del Sol Malbec", size: "bottle", price: "$30" },
            { name: "Ultraviolet Cabernet Sauvignon", price: "$8 / $31" },
            { name: "Carnivor Zinfandel", price: "$7 / $27" }
          ]
        },
        {
          name: "Canned (2 glasses)",
          items: [
            { name: "The Pinot Project Rosé", price: "$12" },
            { name: "The Pinot Project Pinot Noir", price: "$12" }
          ]
        },
        {
          name: "House (Angeline)",
          items: [
            { name: "Chardonnay", size: "glass", price: "$7" },
            { name: "Cabernet Sauvignon", size: "glass", price: "$7" }
          ]
        }
      ]
    }
  ]
};

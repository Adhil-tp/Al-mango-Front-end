
const foodProducts = [
  {
    id: 1,
    name: "Signature Beef Burger",
    category: "Burger",
    description: "A classic Signature Beef Burger featuring a juicy beef patty, topped with fresh lettuce, tomatoes, pickles, and a secret sauce. Perfectly grilled to satisfy your cravings for a hearty burger meal.",
    price:1.400
  },
  {
    id: 2,
    name: "Cheetos Beef Burger",
    category: "Burger",
    description: "A unique twist on the traditional beef burger, this Cheetos Beef Burger adds a crunchy layer of Cheetos to a tender beef patty. Enjoy the contrast of textures with every bite, along with a rich cheese sauce.",
    price:1.400
  },
  {
    id: 3,
    name: "Cheetos Chicken Burger",
    category: "Burger",
    description: "Our Cheetos Chicken Burger brings together crispy fried chicken with a layer of crunchy Cheetos for an irresistible crunch. Topped with lettuce and a tangy cheese sauce, it’s an unforgettable treat.",
    price:1.200
  },
  {
    id: 4,
    name: "Mega Crispy",
    category: "Burger",
    description: "For those who love extra crunch, the Mega Crispy Burger is a dream come true. Featuring a crispy fried chicken patty with fresh toppings and a special crispy coating that adds the perfect crunch to every bite.",
    price:1.600
    
  },
  {
    id: 5,
    name: "Double Chicken Burger",
    category: "Burger",
    description: "Double the chicken, double the flavor! The Double Chicken Burger features two juicy chicken patties stacked high with cheese, lettuce, and a signature sauce, making every bite even more satisfying.",
    price:1.500
  },
  {
    id: 6,
    name: "Double Beef Burger",
    category: "Burger",
    description: "The Double Beef Burger packs twice the beefy goodness with two delicious beef patties. Loaded with fresh vegetables, cheese, and a rich sauce, this burger is designed to satisfy even the biggest appetite.",
    price:1.800
  },
  {
    id: 7,
    name: "Egg Butter Burger",
    category: "Burger",
    description: "A delicious combination of a tender beef or chicken patty and a fried egg, the Egg Butter Burger is slathered with rich butter sauce. Perfect for breakfast or any time you crave a savory, satisfying meal.",
    price:1.400
  },
  {
    id: 8,
    name: "Chicken Cheese Burger",
    category: "Burger",
    description: "Our Chicken Cheese Burger pairs a juicy, grilled chicken patty with melted cheese, crisp lettuce, and a special sauce, all between a soft bun. A perfect balance of creamy and savory flavors in every bite.",
    price:1.200
  },
  {
    id: 9,
    name: "Beef Cheese Burger",
    category: "Burger",
    description: "A timeless favorite, the Beef Cheese Burger combines a perfectly grilled beef patty with melted cheese, fresh veggies, and a signature sauce. A delicious choice for beef and cheese lovers alike.",
    price:1.400
  },
  {
    id: 10,
    name: "Crispy Burger",
    category: "Burger",
    description: "The Crispy Burger features a crispy fried patty, either chicken or beef, topped with fresh vegetables, cheese, and a tangy sauce. It’s an ideal choice for those who crave a satisfying crunch with every bite.",
    price:1.000
  },
  {
    id: 11,
    name: "Chicken Burger",
    category: "Burger",
    description: "A simple yet delightful Chicken Burger, featuring a tender, grilled chicken patty, fresh lettuce, tomato, and a tangy sauce. Perfect for a light yet fulfilling meal, this burger is a go-to for chicken lovers.",
    price:1.000
  },
  {
    id: 12,
    name: "Beef Burger",
    category: "Burger",
    description: "The Beef Burger offers a classic burger experience, with a juicy beef patty grilled to perfection, topped with fresh veggies and a savory sauce. A timeless choice for any beef burger enthusiast.",
    price:1.200
  },
  {
    id: 13,
    name: "Mushroom Burger Chicken",
    category: "Burger",
    description: "The Mushroom Burger Chicken is a perfect blend of grilled chicken and sautéed mushrooms, creating a savory and earthy flavor profile. Topped with cheese and a creamy sauce, it’s a unique burger experience.",
    price:1.200
  },
  {
    id: 14,
    name: "Mushroom Burger Beef",
    category: "Burger",
    description: "Enjoy the rich flavors of a beef patty paired with sautéed mushrooms in our Mushroom Burger Beef. Topped with melted cheese and a savory sauce, this burger is a must-try for mushroom and beef lovers alike.",
    price:1.400
  },
  {
    id: 15,
    name: "Crunchy Burger",
    category: "Burger",
    description: "The Crunchy Burger delivers a perfect balance of textures, with a crunchy fried patty and fresh toppings. Enjoy the combination of crispiness and savory flavors in this standout burger option.",
    price:1.200
  },
  {
    id: 16,
    name: "Chicken Fresh Club",
    category: "Sandwiches",
    description: "The Chicken Fresh Club is a delicious multi-layer sandwich featuring juicy grilled chicken, crispy lettuce, ripe tomatoes, and creamy mayo, all stacked between three slices of toasted bread. A satisfying choice for any meal.",
    price:1.600
  },
  {
    id: 17,
    name: "Beef Fresh Club",
    category: "Sandwiches",
    description: "The Beef Fresh Club combines tender beef slices with fresh vegetables and a savory sauce, layered between toasted bread. It’s a hearty option packed with flavor, perfect for a fulfilling lunch or dinner.",
    price:1.900
  },
  {
    id: 18,
    name: "Crispy Club",
    category: "Sandwiches",
    description: "Enjoy the Crispy Club, a delightful sandwich featuring crispy fried chicken, fresh greens, and zesty sauce. Served on toasted bread, it offers a crunchy texture with every bite and a burst of flavor that satisfies.",
    price:1.200
  },
  {
    id: 19,
    name: "Mathafi Club",
    category: "Sandwiches",
    description: "The Mathafi Club is a unique sandwich crafted with layers of grilled chicken, crispy bacon, fresh lettuce, and a special sauce. This flavor-packed sandwich is sure to be a hit with anyone looking for something special.",
    price:1.200
  },
  {
    id: 20,
    name: "Fantasia",
    category: "Sandwiches",
    description: "The Fantasia sandwich is a colorful creation featuring a variety of fresh vegetables, creamy cheese, and your choice of meat, all served on a soft baguette. It’s a deliciously fresh option for any sandwich lover.",
    price:1.200
  },
  {
    id: 21,
    name: "Fantasia Club",
    category: "Sandwiches",
    description: "Our Fantasia Club takes the classic club sandwich to the next level with layers of savory meats, fresh veggies, and a delicious sauce, all stacked between toasted bread. A filling and flavorful choice for any occasion.",
    price:1.500
  },
  {
    id: 22,
    name: "Chicken Pasta",
    category: "Pasta",
    description: "The Chicken Pasta dish features perfectly cooked pasta tossed with tender pieces of chicken in a creamy sauce, complemented by fresh herbs and spices. This hearty meal is sure to satisfy any pasta lover’s cravings.",
    price:1.500
  },
  {
    id: 23,
    name: "Vegetable Pasta",
    category: "Pasta",
    description: "Our Vegetable Pasta is a delightful blend of fresh seasonal vegetables tossed with pasta and a light, flavorful sauce. It’s a healthy option that offers a burst of colors and flavors, perfect for a refreshing meal.",
    price:1.500
  },
  {
    id: 24,
    name: "Rubiyan Pasta",
    category: "Pasta",
    description: "Rubiyan Pasta features succulent shrimp cooked to perfection and tossed with pasta in a rich, savory sauce. This dish offers a delightful seafood experience that pairs well with fresh herbs and spices for added flavor.",
    price:1.500
  },
  {
    id: 25,
    name: "Chicken Fries",
    category: "Fries",
    description: "Chicken Fries offer a delightful twist on traditional fries, featuring crispy, seasoned chicken strips cut into fry shapes. Served with your choice of dipping sauce, they make for a perfect snack or appetizer.",
    price:1.000
  },
  {
    id: 26,
    name: "Beef Fries",
    category: "Fries",
    description: "Indulge in Beef Fries, where tender beef strips are seasoned and fried to perfection. These savory fries are a unique take on classic fries and are sure to satisfy your meat cravings.",
    price:1.200
  },
  {
    id: 27,
    name: "Crispy Fries",
    category: "Fries",
    description: "Crispy Fries are a classic favorite, perfectly fried to achieve a golden, crunchy exterior while remaining fluffy on the inside. Served hot and fresh, they are the ultimate side dish for any meal.",
    price:1.200
  },
  {
    id: 28,
    name: "Crispy Shrimp Fries",
    category: "Fries",
    description: "Crispy Shrimp Fries feature juicy shrimp coated in a crispy batter, shaped like fries for a fun twist. Perfectly seasoned and served with a zesty dipping sauce, these fries are a delicious seafood treat.",
    price:1.400
  },
  {
    id: 29,
    name: "Mushroom Fries",
    category: "Fries",
    description: "Mushroom Fries offer a savory alternative to traditional fries, featuring crispy fried mushrooms that deliver a rich, earthy flavor. These fries are perfect for mushroom lovers looking for a unique snack.",
    price:1.400
  },
  {
    id: 30,
    name: "Texas Chicken Fries",
    category: "Fries",
    description: "Texas Chicken Fries are seasoned with a bold blend of spices and served hot. Featuring tender chicken pieces, these fries bring the taste of Texas to your plate, making them a delicious snack or side.",
    price:1.200
  },
  {
    id: 31,
    name: "Chicken Cheetos Fries",
    category: "Fries",
    description: "Chicken Cheetos Fries combine crispy chicken pieces with a crunchy layer of Cheetos for an exciting flavor experience. Served with dipping sauce, they are the perfect balance of crunch and savoriness.",
    price:1.200
  },
  {
    id: 32,
    name: "Beef Cheetos Fries",
    category: "Fries",
    description: "Beef Cheetos Fries offer a unique combination of crispy beef strips and a crunchy Cheetos coating. This flavorful snack is perfect for those who love bold flavors and a satisfying crunch.",
    price:1.400
  },
  {
    id: 33,
    name: "Dynamite Fries",
    category: "Fries",
    description: "Dynamite Fries are loaded with spicy flavors, featuring crispy fries topped with a zesty sauce, jalapeños, and cheese. This dish is perfect for those who enjoy a fiery kick with their fries.",
    price:.800
  },
  {
    id: 34,
    name: "Beef Fresh Wrap",
    category: "Wraps",
    description: "The Beef Fresh Wrap features tender slices of seasoned beef wrapped in a soft tortilla, complemented by fresh vegetables and a tangy sauce. It's a flavorful and satisfying choice for a quick meal on the go.",
    price:1.400
  },
  {
    id: 35,
    name: "Chicken Fresh Wrap",
    category: "Wraps",
    description: "Our Chicken Fresh Wrap combines grilled chicken breast with crisp lettuce, tomatoes, and a zesty sauce, all wrapped in a soft tortilla. This wrap is packed with protein and flavor, making it a perfect choice for lunch or dinner.",
    price:1.200
  },
  {
    id: 36,
    name: "Crispy Wrap",
    category: "Wraps",
    description: "The Crispy Wrap is a delightful blend of crispy fried chicken and fresh ingredients, all wrapped in a warm tortilla. With a satisfying crunch and flavorful sauce, it’s a great option for those who enjoy texture in their meals.",
    price:1.000
  },
  {
    id: 37,
    name: "Twister Wrap",
    category: "Wraps",
    description: "The Twister Wrap offers a unique twist on traditional wraps, featuring layers of savory meats, fresh veggies, and a blend of sauces wrapped tightly in a tortilla. This exciting wrap is perfect for a flavorful meal anytime.",
    price:1.200
  },
  {
    id: 38,
    name: "Denver Wrap",
    category: "Wraps",
    description: "Inspired by classic flavors, the Denver Wrap combines scrambled eggs, diced ham, and cheese, all wrapped in a soft tortilla. This hearty wrap is perfect for breakfast or as a protein-packed snack throughout the day.",
    price:1.000
  },
  {
    id: 39,
    name: "Mexican Wrap",
    category: "Wraps",
    description: "The Mexican Wrap brings the bold flavors of Mexico to your plate, featuring spiced chicken, beans, rice, and fresh salsa wrapped in a tortilla. It’s a vibrant and delicious option for those who love Mexican cuisine.",
    price:1.000
  },
  {
    id: 40,
    name: "Crispy Combo",
    category: "Sandwiches", 
    description: "Our Crispy Wrap combines a crunchy fried chicken filling with fresh greens and a flavorful sauce, all wrapped in a warm tortilla. This wrap delivers a satisfying crunch and delicious flavors in every bite.",
    price:1.000
  },
  {
    id: 41,
    name: "Steak Combo",
    category: "Sandwiches",
    description: "The Steak Combo Wrap features succulent slices of grilled steak, paired with sautéed peppers and onions, wrapped in a tortilla. This flavorful combination is perfect for meat lovers looking for a hearty meal.",
    price:1.200
  },
  {
    id: 42,
    name: "Nutella",
    category: "Ice Creams",
    description: "Indulge in our Nutella ice cream, a creamy delight infused with the rich and velvety flavor of Nutella. This delicious treat is perfect for chocolate lovers, offering a luscious experience with every scoop.",
    price:.800
  },
  {
    id: 43,
    name: "Maltesers",
    category: "Ice Creams",
    description: "Maltesers ice cream combines the delightful crunch of Maltesers chocolate with smooth ice cream, creating a perfect balance of flavors. Each spoonful offers a unique texture and a chocolatey taste that will leave you craving more.",
    price:.800
  },
  {
    id: 44,
    name: "Mix Fruit",
    category: "Ice Creams",
    description: "Our Mix Fruit plate features a colorful assortment of fresh seasonal fruits, carefully sliced and arranged for a refreshing treat. Perfect for a healthy snack or dessert, this plate is bursting with natural sweetness and flavor.",
    price:.800
  },
  {
    id: 45,
    name: "Ferrero",
    category: "Ice Creams",
    description: "Experience the luxurious taste of our Ferrero ice cream, enriched with hazelnut flavor and chocolate swirls. This indulgent dessert is a heavenly treat for anyone who loves rich, nutty flavors.",
    price:.800
  },
  {
    id: 46,
    name: "Lotus",
    category: "Ice Creams",
    description: "Lotus ice cream offers a unique twist with its delightful blend of caramelized biscuit flavor. Each scoop provides a crunchy texture and sweet taste, making it a favorite for those who enjoy sweet treats with a hint of spice.",
    price:.800
  },
  {
    id: 47,
    name: "Pistachio",
    category: "Ice Creams",
    description: "Our Pistachio ice cream is made with real pistachio nuts, delivering a rich and nutty flavor in every scoop. This creamy treat is perfect for those looking for a unique and sophisticated dessert experience.",
    price:.800
  },
  {
    id: 48,
    name: "Oreo",
    category: "Ice Creams",
    description: "Oreo ice cream combines creamy vanilla ice cream with crunchy Oreo cookie pieces, creating a delightful treat. This classic flavor is a crowd-pleaser, perfect for anyone who loves the combination of cream and cookie.",
    price:.800
  },
  {
    id: 49,
    name: "KitKat",
    category: "Ice Creams",
    description: "KitKat ice cream features a delicious blend of creamy chocolate and crispy wafer pieces. Each scoop delivers a satisfying crunch and rich chocolate flavor, making it a fun and indulgent dessert option.",
    price:.800
  },
  {
    id: 50,
    name: "Hambana",
    category: "Fruit Plates",
    description: "Hambana is a vibrant fruit plate showcasing a variety of tropical fruits, beautifully presented for a refreshing experience. This colorful mix is perfect for a healthy snack or a light dessert option.",
    price:1.200
  },
  {
    id: 51,
    name: "Diet Fruit",
    category: "Fruit Plates",
    description: "Our Diet Fruit plate is a carefully curated selection of low-calorie fruits, ideal for a light and healthy snack. Packed with vitamins and minerals, this plate provides a guilt-free way to enjoy nature’s sweets.",
    price:1.400
  },
  {
    id: 52,
    name: "Choco Fruity",
    category: "Fruit Plates",
    description: "Choco Fruity ice cream combines a rich chocolate base with chunks of fresh fruit, creating a delightful contrast of flavors and textures. This indulgent treat is perfect for anyone who loves a fusion of chocolate and fruit.",
    price:1.500
  },
  {
    id: 53,
    name: "Fruit Plate",
    category: "Fruit Plates",
    description: "The Fruit Plate features a generous assortment of fresh, seasonal fruits, cut into bite-sized pieces for a refreshing snack. This healthy option is perfect for those looking to enjoy the natural sweetness of fruits.",
    price:2.000
  },
  {
    id: 54,
    name: "Crazy Fruit",
    category: "Fruit Plates",
    description: "Crazy Fruit is an exciting mix of exotic fruits, providing a burst of flavors in every bite. This colorful plate is a great choice for those looking to explore a variety of tastes and textures in one serving.",
    price:1.300
  },
  {
    id: 55,
    name: "Berry Fruit",
    category: "Fruit Plates",
    description: "Berry Fruit features a delicious medley of fresh berries, including strawberries, blueberries, and raspberries. This plate is perfect for berry lovers, offering a burst of flavor and antioxidants in each serving.",
    price:1.400
  },
  {
    id: 56,
    name: "Romana",
    category: "Fruit Plates",
    description: "The Romana plate offers a delightful selection of fresh fruits, carefully arranged to create an appealing presentation. This colorful dish is perfect for sharing or enjoying as a healthy dessert option.",
    price:1.300
  },
  {
    id: 57,
    name: "Redbull Passion",
    category: "Mojito",
    description: "Redbull Passion combines the energizing flavor of Redbull with a hint of tropical passion fruit. This refreshing drink is perfect for a hot day, offering a unique twist on the classic mojito with a vibrant taste.",
    price:1.600
  },
  {
    id: 58,
    name: "Redbull Blue",
    category: "Mojito",
    description: "Experience the invigorating blend of Redbull Blue, featuring a refreshing combination of blue raspberry and the classic mojito elements. This drink is perfect for those looking for a cool and energizing refreshment.",
    price:1.600
  },
  {
    id: 59,
    name: "Redbull Strawberry",
    category: "Mojito",
    description: "Redbull Strawberry infuses the sweet and juicy flavor of strawberries with the signature zing of Redbull. This mojito variation is a delightful choice for anyone craving a fruity, refreshing drink.",
    price:1.600
  },
  {
    id: 60,
    name: "Mr. Green",
    category: "Mojito",
    description: "Mr. Green offers a refreshing mix of mint and lime, combined with a hint of sweetness. This mojito variation is perfect for mint lovers, providing a cooling sensation that pairs perfectly with warm weather.",
    price:1.500
  },
  {
    id: 61,
    name: "Watermelon Mojito",
    category: "Mojito",
    description: "Watermelon Mojito is a delightful blend of fresh watermelon and mint, creating a refreshing drink that’s perfect for summer. This vibrant mojito offers a sweet and juicy flavor profile that quenches your thirst.",
    price:.900
  },
  {
    id: 62,
    name: "Bubblegum",
    category: "Mojito",
    description: "Bubblegum Mojito brings a playful twist to the classic cocktail, featuring the sweet and nostalgic flavor of bubblegum. This fun and colorful drink is sure to delight anyone looking for a unique refreshment.",
    price:.900
  },
  {
    id: 63,
    name: "Vitamin C Passion",
    category: "Mojito",
    description: "Vitamin C Passion combines the zesty flavors of citrus fruits with passion fruit, creating a refreshing mojito that’s bursting with flavor. This drink is perfect for anyone looking to enjoy a fruity and tangy refreshment.",
    price:1.500
  },
  {
    id: 64,
    name: "Lemon Mojito",
    category: "Mojito",
    description: "Lemon Mojito offers a bright and zesty flavor profile, featuring fresh lemon juice and mint for a refreshing twist. This cocktail is perfect for those who enjoy a citrusy and invigorating drink.",
    price:.900
  },
  {
    id: 65,
    name: "Blue Mojito",
    category: "Mojito",
    description: "Blue Mojito combines the refreshing taste of mint and lime with a splash of blue curaçao for a vibrant twist. This visually stunning drink is as delicious as it is eye-catching, perfect for summer gatherings.",
    price:.900
  },
  {
    id: 66,
    name: "Strawberry Mojito",
    category: "Mojito",
    description: "Strawberry Mojito features ripe strawberries muddled with mint and lime, creating a refreshing and fruity cocktail. This drink is perfect for summer parties, offering a sweet and tart flavor combination.",
    price:.900
  },
  {
    id: 67,
    name: "Passion Mojito",
    category: "Mojito",
    description: "Passion Mojito offers a tropical twist with the addition of passion fruit, blended with fresh mint and lime. This cocktail is perfect for those who enjoy exotic flavors and refreshing beverages.",
    price:.900
  },
  {
    id: 68,
    name: "Orange Mojito",
    category: "Mojito",
    description: "Orange Mojito combines the sweet and tangy flavor of fresh oranges with mint for a refreshing and invigorating drink. This cocktail is ideal for anyone looking for a citrusy and refreshing mojito.",
    price:.900
  },
  {
    id: 69,
    name: "Mango Mojito",
    category: "Mojito",
    description: "Mango Mojito features the sweet and tropical flavor of fresh mango, combined with mint and lime for a refreshing twist. This drink is perfect for summer, providing a deliciously fruity experience.",
    price:.900
  },
  {
    id: 70,
    name: "Passion Peach",
    category: "Mojito",
    description: "Passion Peach Mojito combines the sweetness of ripe peaches with the tangy notes of passion fruit, creating a refreshing and fruity drink. This mojito is perfect for those who enjoy a delightful twist on classic flavors.",
    price:.900
  },
  {
    id: 71,
    name: "Green Apple",
    category: "Mojito",
    description: "Green Apple Mojito features the crisp and refreshing taste of green apples, combined with mint and lime for a zesty cocktail. This drink is perfect for those looking for a unique and invigorating mojito.",
    price:.900
  },
  {
    id: 72,
    name: "Blackberry",
    category: "Mojito",
    description: "Blackberry Mojito offers a delightful mix of fresh blackberries, mint, and lime, creating a refreshing and fruity cocktail. This drink is perfect for summer gatherings, providing a burst of flavor in every sip.",
    price:.900
  },
  {
    id: 73,
    name: "Cherry",
    category: "Mojito",
    description: "Cherry Mojito combines the sweet flavor of cherries with fresh mint and lime for a refreshing twist on the classic cocktail. This drink is perfect for cherry lovers, providing a delightful and fruity experience.",
    price:.900
  },
  {
    id: 74,
    name: "4 Season",
    category: "Cocktail Blends",
    description: "4 Season is a delightful cocktail that brings together the flavors of four different fruits, creating a refreshing and vibrant drink. Perfect for any occasion, this blend is sure to tantalize your taste buds with its fruity goodness.",
    price:1.200
  },
  {
    id: 75,
    name: "Twister",
    category: "Cocktail Blends",
    description: "Twister is a fun and zesty cocktail blend that combines citrus fruits with a splash of soda, offering a refreshing and invigorating experience. This cocktail is ideal for summer parties and celebrations, delivering a burst of flavor in every sip.",
    price:1.200
  },
  {
    id: 76,
    name: "Wi-Fi",
    category: "Cocktail Blends",
    description: "Wi-Fi is a trendy and energizing cocktail that combines the taste of fresh fruits with a hint of mint, creating a refreshing and modern drink. Perfect for social gatherings, this blend is sure to keep the vibe lively and enjoyable.",
    price:1.100
  },
  {
    id: 77,
    name: "Smoozy",
    category: "Cocktail Blends",
    description: "Smoozy is a creamy and smooth cocktail blend that features a mix of fruits and a hint of coconut, delivering a tropical paradise in a glass. This indulgent drink is perfect for those looking for a sweet and refreshing escape.",
    price:1.100
  },
  {
    id: 78,
    name: "Sweet Dream",
    category: "Cocktail Blends",
    description: "Sweet Dream is a luscious cocktail that combines sweet fruits with a splash of soda, creating a delightful and dreamy drink. Ideal for relaxing evenings, this blend offers a perfect balance of sweetness and refreshment.",
    price:1.100
  },
  {
    id: 79,
    name: "Ajeeb",
    category: "Cocktail Blends",
    description: "Ajeeb is an exotic cocktail that brings together unique flavors from around the world, creating a fascinating blend that is both refreshing and intriguing. This drink is perfect for adventurous palates seeking new taste experiences.",
    price:1.100
  },
  {
    id: 80,
    name: "Waw",
    category: "Cocktail Blends",
    description: "Waw is a bold and vibrant cocktail blend that features a mix of tropical fruits and spices, delivering an exciting flavor experience. This drink is perfect for parties, offering a taste of adventure with every sip.",
    price:1.100
  },
  {
    id: 81,
    name: "Eazy",
    category: "Cocktail Blends",
    description: "Eazy is a light and refreshing cocktail that combines fresh fruits with a touch of lemonade, making it an ideal drink for casual gatherings. This easy-going blend is perfect for those who enjoy a simple yet delicious cocktail.",
    price:1.100
  },
  {
    id: 82,
    name: "4 Square",
    category: "Cocktail Blends",
    description: "4 Square is a delightful cocktail blend that features a combination of four distinct flavors, offering a unique and enjoyable drinking experience. Perfect for celebrations, this drink is sure to impress with its vibrant taste.",
    price:1.100
  },
  {
    id: 83,
    name: "Immune Booster",
    category: "Healthy Juices",
    description: "Immune Booster is a revitalizing juice blend packed with vitamin-rich ingredients like citrus fruits, ginger, and turmeric. This powerful combination helps strengthen your immune system, providing a refreshing and healthy way to support your body's defenses.",
    price:1.000
  },
  {
    id: 84,
    name: "Body Cooler",
    category: "Healthy Juices",
    description: "Body Cooler is a refreshing juice designed to hydrate and rejuvenate. With a blend of cucumber, mint, and watermelon, this drink offers a cooling effect, making it perfect for hot summer days while replenishing your body's essential fluids.",
    price:1.200
  },
  {
    id: 85,
    name: "Green Planet",
    category: "Healthy Juices",
    description: "Green Planet is a nutrient-dense juice that combines leafy greens like spinach and kale with fruits like green apple and lemon. This wholesome blend is rich in antioxidants and vitamins, promoting overall health and vitality in a delicious way.",
    price:1.000
  },
  {
    id: 86,
    name: "Health Classic",
    category: "Healthy Juices",
    description: "Health Classic is a timeless juice made from a blend of fresh fruits and vegetables, including carrots, oranges, and beets. This revitalizing drink is packed with essential nutrients, making it a great choice for those seeking a healthy lifestyle.",
    price:1.200
  },
  {
    id: 87,
    name: "Mango",
    category: "Fresh Juices",
    description: "Mango juice is a tropical delight made from ripe, juicy mangoes. This refreshing drink is packed with vitamins A and C, providing a sweet and tangy flavor that’s perfect for quenching your thirst on a hot day.",
    price:1.000
  },
  {
    id: 88,
    name: "Avocado",
    category: "Fresh Juices",
    description: "Avocado juice is a creamy and nutrient-rich beverage made from ripe avocados. This unique juice is full of healthy fats, vitamins, and minerals, offering a smooth and rich flavor that can be enjoyed on its own or blended with other fruits.",
    price:1.000
  },
  {
    id: 89,
    name: "Cocktail",
    category: "Fresh Juices",
    description: "Cocktail juice is a vibrant mix of various fruits, creating a deliciously sweet and tangy drink. This refreshing blend offers a burst of flavor and is perfect for parties or gatherings, providing a delightful tropical experience in every sip.",
    price:1.000
  },
  {
    id: 90,
    name: "Pomegranate",
    category: "Fresh Juices",
    description: "Pomegranate juice is a rich, ruby-red drink known for its health benefits. Packed with antioxidants and vitamins, this juice provides a sweet and tart flavor that’s perfect for boosting your energy and overall wellness.",
    price:1.100
  },
  {
    id: 91,
    name: "Carrot",
    category: "Fresh Juices",
    description: "Carrot juice is a vibrant orange drink that’s both sweet and nutritious. Rich in beta-carotene and vitamins, this juice is great for eye health and offers a refreshing, earthy flavor that can be enjoyed on its own or mixed with other juices.",
    price:1.000
  },
  {
    id: 92,
    name: "Orange",
    category: "Fresh Juices",
    description: "Orange juice is a classic, refreshing beverage made from freshly squeezed oranges. Bursting with vitamin C, this tangy and sweet juice is perfect for breakfast or as a revitalizing drink anytime during the day.",
    price:1.000
  },
  {
    id: 93,
    name: "Banana",
    category: "Fresh Juices",
    description: "Banana juice is a creamy and satisfying drink made from ripe bananas. Rich in potassium and vitamins, this smoothie-like juice offers a naturally sweet flavor that’s great for energy boosts and can be enjoyed alone or blended with other fruits.",
    price:.700
  },
  {
    id: 94,
    name: "Lemon Mint",
    category: "Fresh Juices",
    description: "Lemon Mint juice is a refreshing drink that combines the zesty flavor of lemons with the coolness of mint leaves. This invigorating beverage is perfect for hot days, offering a burst of freshness and revitalization in every sip.",
    price:.700
  },
  {
    id: 95,
    name: "Kiwi",
    category: "Fresh Juices",
    description: "Kiwi juice is a tangy and tropical drink made from ripe kiwis. Packed with vitamin C and antioxidants, this vibrant green juice offers a unique flavor profile that’s both refreshing and invigorating, making it a great addition to your diet.",
    price:1.000
  },
  {
    id: 96,
    name: "Pineapple",
    category: "Fresh Juices",
    description: "Pineapple juice is a sweet and tangy beverage made from fresh pineapples. Rich in vitamins and bromelain, this juice offers a refreshing tropical taste that’s perfect for boosting your mood and providing a burst of energy.",
    price:1.000
  },
  {
    id: 97,
    name: "Strawberry",
    category: "Fresh Juices",
    description: "Strawberry juice is a sweet and delicious drink made from ripe strawberries. Packed with antioxidants and vitamin C, this refreshing beverage offers a bright flavor that’s perfect for summertime enjoyment or as a delightful addition to smoothies.",
    price:1.000
  },
  {
    id: 98,
    name: "Papaya",
    category: "Fresh Juices",
    description: "Papaya juice is a tropical delight that’s both sweet and nutritious. Made from ripe papayas, this juice is rich in vitamins A and C, providing digestive benefits while offering a smooth, velvety texture that’s incredibly refreshing.",
    price:1.000
  },
  {
    id: 99,
    name: "Apple",
    category: "Fresh Juices",
    description: "Apple juice is a classic favorite made from freshly pressed apples. This naturally sweet and crisp beverage is rich in antioxidants and provides a refreshing taste that’s perfect for any time of the day, whether served chilled or warm.",
    price:1.000
  },
  {
    id: 100,
    name: "Guava",
    category: "Fresh Juices",
    description: "Guava juice is a tropical drink that combines the sweet and fragrant flavors of ripe guavas. This juice is packed with vitamins, fiber, and antioxidants, offering a refreshing taste that’s both delicious and beneficial for digestion.",
    price:1.000
  },
  {
    id: 101,
    name: "Grape",
    category: "Fresh Juices",
    description: "Grape juice is a sweet and luscious beverage made from freshly pressed grapes. Known for its rich flavor and health benefits, this juice is a great source of antioxidants, making it a refreshing choice for quenching your thirst.",
    price:1.000
  },
  {
    id: 102,
    name: "Sweet Melon",
    category: "Fresh Juices",
    description: "Sweet Melon juice is a light and refreshing drink made from sweet melons like cantaloupe and honeydew. This hydrating juice offers a naturally sweet flavor and is perfect for hot days, providing a deliciously fruity experience.",
    price:.700
  },
  {
    id: 103,
    name: "Watermelon",
    category: "Fresh Juices",
    description: "Watermelon juice is a hydrating and refreshing drink made from ripe watermelons. This naturally sweet juice is perfect for cooling down on hot days, packed with vitamins and minerals that offer a delightful taste with every sip.",
    price:.700
  },
  {
    id: 104,
    name: "Lemon Ginger",
    category: "Fresh Juices",
    description: "Lemon Ginger juice is a zesty and invigorating drink that combines the refreshing tartness of lemons with the warm spice of ginger. This juice is not only delicious but also provides digestive benefits, making it a great choice for wellness.",
    price:.700
  },
  {
    id: 105,
    name: "Lemon",
    category: "Fresh Juices",
    description: "Lemon juice is a tangy and refreshing beverage made from freshly squeezed lemons. Packed with vitamin C, this versatile juice can be enjoyed on its own or mixed with other juices for a flavorful and revitalizing drink.",
    price:.600
  },
  {
    id: 106,
    name: "Vimto",
    category: "Fresh Juices",
    description: "Vimto juice is a unique and fruity drink made from a blend of berries and spices. This refreshing beverage offers a sweet and tangy flavor profile, making it a popular choice for special occasions and casual enjoyment.",
    price:.600
  },
  {
    id: 107,
    name: "Beetroot",
    category: "Fresh Juices",
    description: "Beetroot juice is a vibrant and earthy drink made from fresh beets. Rich in nitrates and antioxidants, this juice offers numerous health benefits and a unique flavor that’s great for boosting stamina and overall vitality.",
    price:1.100
  },
  {
    id: 108,
    name: "Mango Orange",
    category: "Fresh Juices",
    description: "Mango Orange juice is a tropical blend that combines the sweetness of mangoes with the citrusy zing of oranges. This refreshing drink is packed with vitamins, offering a deliciously sweet and tangy flavor that’s perfect for any occasion.",
    price:1.100
  },
  {
    id: 109,
    name: "Orange Pineapple",
    category: "Fresh Juices",
    description: "Orange Pineapple juice is a tropical delight that brings together the sweet and tangy flavors of oranges and pineapples. This vibrant juice is perfect for energizing your day and is rich in vitamins, making it a deliciously healthy choice.",
    price:1.100
  },
  {
    id: 110,
    name: "Avocado",
    category: "Bottle Juices",
    description: "Avocado juice is a creamy and nutritious drink made from ripe avocados. This delightful beverage is packed with healthy fats, vitamins, and minerals, offering a smooth and rich flavor that can be enjoyed on its own or blended with other fruits for an extra twist.",
    price:3.000
  },
  {
    id: 111,
    name: "Passion Mango",
    category: "Bottle Juices",
    description: "Passion Mango juice is a tropical fusion that combines the exotic flavor of passion fruit with the sweetness of ripe mangoes. This refreshing drink is rich in vitamins A and C, providing a deliciously sweet and tangy flavor that transports you to a sunny paradise.",
    price:3.500
  },
  {
    id: 112,
    name: "Pomegranate",
    category: "Bottle Juices",
    description: "Pomegranate juice is a rich and vibrant beverage known for its health benefits. Made from freshly pressed pomegranates, this antioxidant-packed drink provides a sweet and tart flavor, making it an excellent choice for refreshing your day and boosting overall wellness.",
    price:3.000
  },
  {
    id: 113,
    name: "Mango",
    category: "Bottle Juices",
    description: "Mango juice is a sweet and delicious beverage made from ripe mangoes. Known for its tropical flavor and vibrant color, this juice is rich in vitamins A and C, making it a refreshing choice that’s perfect for enjoying any time of the year.",
    price:2.500
  },
  {
    id: 114,
    name: "Orange",
    category: "Bottle Juices",
    description: "Orange juice is a classic favorite made from freshly squeezed oranges. This tangy and sweet drink is bursting with vitamin C, providing a refreshing taste that’s perfect for breakfast or as a revitalizing beverage throughout the day.",
    price:2.500
  },
  {
    id: 115,
    name: "Pineapple",
    category: "Bottle Juices",
    description: "Pineapple juice is a sweet and tangy drink made from fresh pineapples. This tropical beverage is packed with vitamins and minerals, offering a refreshing taste that’s perfect for boosting your mood and providing a deliciously sunny experience in every sip.",
    price:2.500
  },
  {
    id: 116,
    name: "Strawberry",
    category: "Bottle Juices",
    description: "Strawberry juice is a delightful and sweet beverage made from ripe strawberries. Rich in antioxidants and vitamin C, this refreshing drink provides a vibrant flavor that’s perfect for summertime enjoyment or as a delightful addition to smoothies and cocktails.",
    price:2.500
  },
  {
    id: 117,
    name: "Cocktail",
    category: "Bottle Juices",
    description: "Cocktail juice is a vibrant mix of various fruits, creating a deliciously sweet and tangy drink. This refreshing blend is perfect for parties or gatherings, providing a burst of flavor and a fun experience that can be enjoyed by everyone.",
    price:2.500
  },
  {
    id: 118,
    name: "Milano",
    category: "Bottle Juices",
    description: "Milano juice is a unique and flavorful beverage inspired by Italian tastes. This drink combines various fruit flavors to create a rich and indulgent experience that’s both refreshing and satisfying, perfect for enjoying at any time of the day.",
    price:3.500
  },
  {
    id: 119,
    name: "Awar Galb",
    category: "Bottle Juices",
    description: "Awar Galb juice is a traditional drink known for its refreshing qualities. Made from a blend of fruits and spices, this beverage offers a delightful and unique flavor that’s perfect for cooling down on hot days and satisfying your thirst.",
    price:3.000
  },
  {
    id: 120,
    name: "Mix Berry",
    category: "Bottle Juices",
    description: "Mix Berry juice is a deliciously sweet and tangy blend of various berries. Packed with antioxidants and vitamins, this vibrant juice provides a refreshing taste that’s perfect for breakfast, snacks, or as a delightful addition to any meal.",
    price:3.500
  },
  {
    id: 121,
    name: "Watermelon",
    category: "Bottle Juices",
    description: "Watermelon juice is a hydrating and refreshing drink made from fresh watermelons. This naturally sweet juice is perfect for cooling down on hot days, packed with vitamins and minerals that offer a deliciously fruity experience in every sip.",
    price:1.800
  },
  {
    id: 122,
    name: "Banana",
    category: "Bottle Juices",
    description: "Banana juice is a creamy and satisfying drink made from ripe bananas. Rich in potassium and vitamins, this smoothie-like juice offers a naturally sweet flavor that’s great for energy boosts and can be enjoyed alone or blended with other fruits.",
    price:2.000
  },
  {
    id: 123,
    name: "Lemon Mint",
    category: "Bottle Juices",
    description: "Lemon Mint juice is a refreshing drink that combines the zesty flavor of lemons with the coolness of mint leaves. This invigorating beverage is perfect for hot days, offering a burst of freshness and revitalization that can brighten any occasion.",
    price:1.800
  },
  {
    id: 124,
    name: "Roob Strawberry",
    category: "Roob Special",
    description: "Roob Strawberry is a delightful and refreshing drink made with the essence of ripe strawberries. This vibrant beverage offers a sweet and tangy flavor, perfect for enjoying on warm days. It's not only delicious but also packed with vitamins, making it a fantastic choice for hydration.",
    price:1.200,
    homeDescription: "A refreshing and vibrant strawberry-flavored drink, perfect for hydration.",
  },
  {
    id: 125,
    name: "Roob Passion",
    category: "Roob Special",
    description: "Roob Passion is a tropical-inspired drink that blends the exotic flavors of passion fruit. This refreshing beverage has a unique sweet and tart profile, making it a perfect thirst-quencher. Ideal for summer, it can be enjoyed alone or as a mix in cocktails, providing a burst of tropical delight.",
    price:1.400,
    homeDescription: "A tropical, sweet-tart passion fruit drink, perfect for summer refreshment or cocktails.",
  },
  {
    id: 126,
    name: "Roob Ruman",
    category: "Roob Special",
    description: "Roob Ruman is a rich and flavorful drink made from pomegranates. Known for its deep red color and tangy sweetness, this beverage is loaded with antioxidants and nutrients. It’s a great way to refresh and nourish your body while enjoying a deliciously fruity experience.",
    price:1.200,
    homeDescription: "A tangy-sweet pomegranate drink, rich in antioxidants and nutrients.",
  },
  {
    id: 127,
    name: "Roob Mango",
    category: "Roob Special",
    description: "Roob Mango is a luscious drink that captures the essence of ripe mangoes. This sweet and creamy beverage is a tropical delight, perfect for indulging in any season. Packed with vitamins and minerals, it's a delicious way to hydrate and enjoy the taste of summer.",
    price:1.200,
    homeDescription: "A sweet, creamy mango drink packed with vitamins, perfect for tropical refreshment",
  },
  {
    id: 128,
    name: "Roob Tooth",
    category: "Roob Special",
    description: "Roob Tooth is a unique and delightful beverage designed to be both tasty and beneficial. This drink combines a variety of flavors that cater to the palate while also offering health benefits. Perfect for any time of day, it brings a sweet and satisfying experience that delights the senses.",
    price:1.200
  },
  {
    id: 129,
    name: "Cerelac",
    category: "MilkShake",
    description: "Cerelac Milkshake combines nourishing Cerelac with creamy milk for a delightful drink.",
    price:1.200
  },
  {
    id: 130,
    name: "Super Thamar",
    category: "MilkShake",
    description: "Super Thamar Milkshake features a unique blend of flavors, offering energy and nutrition.",
    price:1.200
  },
  {
    id: 131,
    name: "Grand",
    category: "MilkShake",
    description: "Grand Milkshake provides a luxurious blend of creamy flavors for a smooth experience.",
    price:1.200
  },
  {
    id: 132,
    name: "Mango Joy",
    category: "MilkShake",
    description: "Mango Joy Milkshake is a tropical delight with ripe mangoes and creamy milk.",
    price:1.200
  },
  {
    id: 133,
    name: "Awar Galb",
    category: "MilkShake",
    description: "Awar Galb Milkshake combines unique flavors for a refreshing and satisfying drink.",
    price:1.100
  },
  {
    id: 134,
    name: "Crystal",
    category: "MilkShake",
    description: "Crystal Milkshake brings elegance with its smooth and creamy texture.",
    price:1.100
  },
  {
    id: 135,
    name: "Passion Mango",
    category: "MilkShake",
    description: "Passion Mango Milkshake combines mango and passion fruit for a refreshing treat.",
    price:1.200
  },
  {
    id: 136,
    name: "Rooberry",
    category: "MilkShake",
    description: "Rooberry Milkshake blends berries and creamy milk for a delightful drink.",
    price:1.200
  },
  {
    id: 137,
    name: "Aroob",
    category: "MilkShake",
    description: "Aroob Milkshake offers a creamy drink with a hint of sweetness.",
    price:1.200
  },
  {
    id: 138,
    name: "Milano",
    category: "MilkShake",
    description: "Milano Milkshake is inspired by Italian flavors, offering a luxurious experience.",
    price:1.200
  },
  {
    id: 139,
    name: "Aboodi Special",
    category: "MilkShake",
    description: "Aboodi Special Milkshake features a rich and indulgent blend of flavors.",
    price:1.100
  },
  {
    id: 140,
    name: "Mango Nana",
    category: "MilkShake",
    description: "Mango Nana Milkshake delivers tropical sweetness with ripe mangoes.",
    price:1.100
  },
  {
    id: 141,
    name: "Sp. Falooda",
    category: "MilkShake",
    description: "Sp. Falooda Milkshake combines traditional falooda flavors with creamy milk.",
    price:1.200
  },
  {
    id: 142,
    name: "Mix Berry",
    category: "MilkShake",
    description: "Mix Berry Milkshake is bursting with the sweet and tangy flavors of various berries.",
    price:1.200
  },
  {
    id: 143,
    name: "Classic",
    category: "MilkShake",
    description: "Classic Milkshake offers a timeless blend of creamy milk and sweet ice cream.",
    price:1.200
  },
  {
    id: 144,
    name: "Cocktail Shakaf",
    category: "MilkShake",
    description: "Cocktail Shakaf Milkshake features a fun blend of flavors for a refreshing drink.",
    price:1.200
  },
  {
    id: 145,
    name: "Dry Fig",
    category: "MilkShake",
    description: "Dry Fig Milkshake combines rich flavors of dried figs with creamy milk.",
    price:1.200
  },
  {
    id: 146,
    name: "Cerlac Nutella",
    category: "MilkShake",
    description: "Cerlac Nutella Milkshake blends Cerelac with the rich flavor of Nutella.",
    price:1.200
  },
  {
    id: 147,
    name: "Al Hilal",
    category: "MilkShake",
    description: "Al Hilal Milkshake offers a delightful creamy texture and flavor.",
    price:1.200
  },
  {
    id: 148,
    name: "Raffaello",
    category: "MilkShake",
    description: "Raffaello Milkshake blends coconut and creamy flavors for a luxurious treat.",
    price:1.200
  },
  {
    id: 149,
    name: "Desert",
    category: "MilkShake",
    description: "Desert Milkshake features rich flavors for a satisfying drink.",
    price:1.200
  },
  {
    id: 150,
    name: "Mix Max",
    category: "MilkShake",
    description: "Mix Max Milkshake blends various flavors for a fun and refreshing drink.",
    price:1.200
  },
  {
    id: 151,
    name: "Manchester",
    category: "MilkShake",
    description: "Manchester Milkshake combines creamy flavors for a delightful experience.",
    price:1.200
  },
  {
    id: 152,
    name: "Glory",
    category: "MilkShake",
    description: "Glory Milkshake offers a smooth and creamy texture for a satisfying drink.",
    price:1.200
  },
  {
    id: 153,
    name: "Boo Boo",
    category: "MilkShake",
    description: "Boo Boo Milkshake combines creamy milk with sweet flavors for a fun beverage.",
    price:1.000
  },
  {
    id: 154,
    name: "Protein",
    category: "MilkShake",
    description: "Protein Milkshake provides a nutritious and energizing drink with packed protein.",
    price:1.200
  },
  {
    id: 155,
    name: "Master",
    category: "MilkShake",
    description: "Master Milkshake combines various flavors for a truly satisfying experience.",
    price:1.200
  },
  {
    id: 156,
    name: "Star",
    category: "MilkShake",
    description: "Star Milkshake offers a deliciously creamy texture and smooth flavor.",
  },
  {
    id: 157,
    name: "Lotus",
    category: "MilkShake",
    description: "Lotus Milkshake features a unique blend of creamy and sweet flavors.",
    price:1.200
  },
  {
    id: 158,
    name: "Oreo",
    category: "MilkShake",
    description: "Oreo Milkshake combines the rich flavor of Oreos with creamy milk.",
    price:1.200
  },
  {
    id: 159,
    name: "Nutella",
    category: "MilkShake",
    description: "Nutella Milkshake offers the indulgent taste of Nutella blended with milk.",
    price:1.200
  },
  {
    id: 160,
    name: "Galaxy",
    category: "MilkShake",
    description: "Galaxy Milkshake is a unique drink that combines various flavors for a delightful experience.",
    price:1.200
  },
  {
    id: 161,
    name: "KitKat",
    category: "MilkShake",
    description: "KitKat Milkshake blends the iconic flavors of KitKat with creamy milk.",
    price:1.200
  },
  {
    id: 162,
    name: "Kinder",
    category: "MilkShake",
    description: "Kinder Milkshake combines the sweet flavor of Kinder chocolate with creamy milk.",
    price:1.200
  },
  {
    id: 163,
    name: "Snickers",
    category: "MilkShake",
    description: "Snickers Milkshake blends the rich taste of Snickers with creamy goodness.",
    price:1.200
  },
  {
    id: 164,
    name: "Milkshake Strawberry",
    category: "MilkShake",
    description: "Milkshake Strawberry features the sweet taste of strawberries blended with milk.",
    price:1.000
  },
  {
    id: 165,
    name: "Milkshake Mango",
    category: "MilkShake",
    description: "Milkshake Mango offers the refreshing taste of mangoes blended with creamy milk.",
    price:1.000
  },
  {
    id: 166,
    name: "Milkshake Pistachio",
    category: "MilkShake",
    description: "Milkshake Pistachio combines the unique flavor of pistachios with creamy goodness.",
    price:1.000
  },
  {
    id: 167,
    name: "Milkshake Vanilla",
    category: "MilkShake",
    description: "Milkshake Vanilla offers a classic vanilla flavor blended into a creamy shake.",
    price:1.000
  },
  {
    id: 168,
    name: "Milkshake Chocolate",
    category: "MilkShake",
    description: "Milkshake Chocolate combines rich chocolate flavor with creamy milk.",
    price:1.000
  },
  {
    id: 169,
    name: "Majoon",
    category: "MilkShake",
    description: "Majoon Milkshake features a blend of unique flavors for a refreshing drink.",
    price:1.400
  },
  {
    id: 170,
    name: "Newton",
    category: "MilkShake",
    description: "Newton Milkshake offers a delightful mix of flavors for a satisfying beverage.",
    price:1.200
  },
  {
    id: 171,
    name: "Vaccine",
    category: "MilkShake",
    description: "Vaccine Milkshake is a fun and unique blend of flavors for a delicious drink.",
    price:1.200
  },
  {
    id: 172,
    name: "Lexus",
    category: "MilkShake",
    description: "Lexus Milkshake combines creamy flavors with a touch of sweetness.",
    price:1.200
  },
  {
    id: 173,
    name: "Mehrish",
    category: "MilkShake",
    description: "Mehrish Milkshake offers a rich and creamy drink known for its delicious flavor.",
    price:1.400
  },
  {
    id: 174,
    name: "Gazpacho",
    category: "MilkShake",
    description: "Gazpacho Milkshake features a refreshing blend of flavors for a unique experience.",
    price:1.400
  },
  {
    id: 175,
    name: "Rambo",
    category: "MilkShake",
    description: "Rambo Milkshake combines various flavors for a fun and energizing drink.",
    price:1.200
  },
  {
    id: 176,
    name: "Al Nasser",
    category: "MilkShake",
    description: "Al Nasser Milkshake offers a creamy blend of flavors for a satisfying beverage.",
    price:1.200
  },
  {
    id: 177,
    name: "Saffron Coffee",
    category: "Coffee Time",
    description: "Saffron Coffee blends aromatic saffron with rich coffee for a unique flavor.",
    price:1.200
  },
  {
    id: 178,
    name: "Cold Coffee",
    category: "Coffee Time",
    description: "Cold Coffee is a refreshing blend of brewed coffee served chilled with milk and ice.",
    price:1.200
  },
  {
    id: 179,
    name: "Mocha",
    category: "Coffee Time",
    description: "Mocha is a delicious combination of espresso, steamed milk, and rich chocolate.",
    price:1.200
  },
  {
    id: 180,
    name: "Pistachio Coffee",
    category: "Coffee Time",
    description: "Pistachio Coffee offers a delightful mix of coffee and the nutty flavor of pistachios.",
    price:1.200
  },
  {
    id: 181,
    name: "Toffee Coffee",
    category: "Coffee Time",
    description: "Toffee Coffee features the sweet taste of toffee blended with rich coffee.",
    price:1.300
  },
  {
    id: 182,
    name: "Pistachio Frappe",
    category: "Coffee Time",
    description: "Pistachio Frappe is a creamy iced coffee drink with a hint of pistachio flavor.",
    price:1.200
  },
  {
    id: 183,
    name: "Strawberry Frappe",
    category: "Coffee Time",
    description: "Strawberry Frappe combines fresh strawberries with blended coffee and ice.",
    price:1.200
  },
  {
    id: 184,
    name: "Blueberry Frappe",
    category: "Coffee Time",
    description: "Blueberry Frappe blends the sweetness of blueberries with rich coffee and ice.",
    price:1.200
  },
  {
    id: 185,
    name: "Pistachio Latte",
    category: "Coffee Time",
    description: "Pistachio Latte features espresso and steamed milk with a delightful pistachio flavor.",
    price:1.200
  },
  {
    id: 186,
    name: "Banana Coffee",
    category: "Coffee Time",
    description: "Banana Coffee blends ripe bananas with rich coffee for a creamy and sweet beverage.",
    price:1.200
  },
  {
    id: 187,
    name: "Spanish Latte",
    category: "Coffee Time",
    description: "Spanish Latte combines espresso with sweetened condensed milk for a rich and creamy drink.",
    price:1.300
  },
  {
    id: 188,
    name: "PSG",
    description: "A delicious and energizing milkshake.",
    category: "Milk Shake",
    price:1.300
  },
  {
    id: 189,
    name: "Iron Booster",
    description: "A rich blend for an iron-packed treat.",
    category: "Milk Shake",
    price:1.100
  },
  { 
    id: 190, 
    name: "Thabakath", 
    description: "A unique milkshake with bold flavors.", 
    category: "Milk Shake",
    price:1.000
  },
  { 
    id: 191, 
    name: "Delight", 
    description: "A delightful and creamy milkshake.", 
    category: "Milk Shake",
    price:1.200 
  },
  { 
    id: 192, 
    name: "Real Madrid", 
    description: "A winning milkshake, full of flavor.", 
    category: "Milk Shake",
    price:1.200 
  },
  { 
    id: 193, 
    name: "Barcelona", 
    description: "A smooth, indulgent treat to enjoy.", 
    category: "Milk Shake",
    price:1.200 
  },
  { 
    id: 194, 
    name: "Passion Breeze", 
    description: "A tropical milkshake with passion fruit flavors.", 
    category: "Milk Shake",
    price:1.200 
  },
  { 
    id: 195, 
    name: "Viagra", 
    description: "A powerful, invigorating milkshake.", 
    category: "Milk Shake",
    price:1.400 
  },
  { 
    id: 196, 
    name: "Choco Falooda", 
    description: "A classic falooda twist with rich chocolate.", 
    category: "Milk Shake",
    price:1.200 
  },
  { 
    id: 197, 
    name: "Mango Saffron", 
    description: "A luxurious milkshake with mango and saffron.", 
    category: "Milk Shake",
    price:1.200 
  },
  { 
    id: 198, 
    name: "Einstein", 
    description: "A genius blend of flavors for the mind.", 
    category: "Milk Shake",
    price:1.200 
  },
  { 
    id: 199, 
    name: "Mango Shakaf", 
    description: "A refreshing mango-flavored shake.", 
    category: "Milk Shake",
    price:1.200 
  }

];;

export default foodProducts;

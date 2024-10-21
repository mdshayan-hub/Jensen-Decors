// Counter
let targetElements = document.querySelectorAll(".digit-box");
let animationtimming = 0.0001;

targetElements.forEach((targetElement) => {
  let ValueOne = 0;
  let ValueTwo = parseInt(targetElement.getAttribute("data-value"));
  let timing = Math.floor(animationtimming / ValueTwo);
  let Counter = setInterval(function () {
    ValueOne += 1;
    targetElement.textContent = ValueOne;
    if (ValueOne == ValueTwo) {
      clearInterval(Counter);
    }
  }, timing);
});


// Compare Page JS Start


var products = [{
  "id": 0,
  "title": "",
  "price": "",
  "description": "",
  "brand": "",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
}, {
  "id": 1,
  "title": "Geometric Abstract Metal Wall Art",
  "price": 67000,
  "description": "Transform your living space with our Geometric Abstract Metal Wall Art. This piece isn’t just decor; it's a statement. Crafted with precision, its sleek lines and dynamic shapes capture the essence of modern design, offering a touch of sophistication to any room. The interplay of metal and geometric patterns creates a striking visual impact that’s both timeless and contemporary.Whether you’re looking to add an artistic flair to your living room, office, or hallway, this wall art is the perfect choice. Its versatile design complements various styles, from minimalistic to eclectic, making it a must-have for those who appreciate the finer things in life. Let this Geometric Abstract Metal Wall Art be the centerpiece that brings your walls to life, inviting admiration and sparking conversation among your guests. ",
  "brand": "Statements2000",
  "image": "image/Metal Wall Art/Geometric Abstract Metal Wall Art 01.jpeg"
}, {
  "id": 2,
  "title": "Tree of Life Metal Wall Sculpture",
  "price": 67000,
  "description": "Bring the timeless beauty of nature into your home with our Tree of Life Metal Wall Sculpture. This captivating piece embodies growth, strength, and connection, making it more than just a decorative item—it's a symbol of life itself. Expertly crafted from high-quality metal, the intricate branches and roots intertwine to create a stunning representation of the Tree of Life, a design that resonates with people across cultures. Perfect for adding warmth and depth to any room, this wall sculpture blends seamlessly with both traditional and modern decor. Its natural finish and detailed craftsmanship make it an eye-catching addition to your living room, bedroom, or entryway. The Tree of Life Metal Wall Sculpture is not just art; it’s a meaningful addition to your space that reminds you of the enduring beauty of nature and the strength that lies within. ",
  "brand": "Statements2000",
  "image": "image/Metal Wall Art/Tree of Life Metal Wall Sculpture 02.jpeg"
}, {
  "id": 3,
  "title": "Rustic World Map Metal Wall Art",
  "price": 67000,
  "description": "Explore the world from the comfort of your home with our Rustic World Map Metal Wall Art. This piece is more than just a map; it's a journey. Handcrafted with care, the weathered metal finish and rustic detailing give this world map an antique charm, making it a perfect blend of adventure and style. Each continent is meticulously outlined, bringing a sense of wanderlust and history to your space.Ideal for the travel enthusiast or anyone with a love for global culture, this wall art adds a touch of worldly elegance to your living room, office, or study. Its rustic design effortlessly complements a variety of decor styles, from industrial to farmhouse, creating a warm and inviting atmosphere.Let the Rustic World Map Metal Wall Art be a reminder of past travels and inspire future adventures. It’s more than just decoration—it’s a gateway to the world, sparking curiosity and conversation every time you glance at it.",
  "brand": "Statements2000",
  "image": "image/Metal Wall Art/Rustic World Map Metal Wall Art 03.jpeg"
}, {
  "id": 4,
  "title": "Floral Bouquet Metal Wall Hanging",
  "price": 67000,
  "description": "Bring the beauty of a blooming garden into your home with our Floral Bouquet Metal Wall Hanging. This stunning piece captures the elegance and grace of nature’s finest blooms, all crafted from durable metal that will last a lifetime. Each flower and leaf is intricately designed, with delicate details that add a touch of sophistication to any room.Perfect for adding a splash of color and life to your living room, bedroom, or hallway, this wall hanging blends the timeless charm of florals with a modern, artistic twist. The soft, earthy tones and three-dimensional design create a warm, inviting ambiance that brightens up any space.Whether you’re a lover of flowers or simply want to bring a touch of nature indoors, the Floral Bouquet Metal Wall Hanging is the perfect choice. It’s not just decor; it’s a piece of art that celebrates the beauty of nature and adds a touch of elegance to your home.",
  "brand": "Statements2000",
  "image": "image/Metal Wall Art/Floral Bouquet Metal Wall Hanging 04.jpeg"
}, {
  "id": 5,
  "title": "Abstract Waves Metal Wall Art",
  "price": 67000,
  "description": "Dive into the soothing rhythm of the ocean with our Abstract Waves Metal Wall Art. This captivating piece captures the fluidity and grace of waves in motion, bringing a sense of tranquility and harmony to your living space. Crafted from high-quality metal, the intricate curves and flowing lines evoke the beauty of the sea, creating a mesmerizing visual effect that draws the eye and calms the mind.Perfect for those who love the ocean or simply appreciate abstract design, this wall art adds a touch of modern elegance to any room. Whether it’s your living room, bedroom, or office, the Abstract Waves Metal Wall Art complements various decor styles, from coastal to contemporary. The subtle play of light and shadow on the metal surface enhances its dynamic feel, making it a striking focal point in any space.Let the Abstract Waves Metal Wall Art bring a wave of serenity and style into your home, reminding you of the peaceful, endless horizon of the sea. It’s not just art; it’s an expression of nature’s beauty, captured in metal for you to enjoy every day.",
  "brand": "Statements2000",
  "image": "image/Metal Wall Art/Abstract Waves Metal Wall Art 05.jpeg"
}, {
  "id": 6,
  "title": "Sunburst Metal Wall Decor",
  "price": 67000,
  "description": "Brighten up your space with the radiant charm of our Sunburst Metal Wall Decor. This stunning piece captures the vibrant energy of the sun, bringing warmth and positivity into your home. Crafted with precision, each ray of the sunburst is meticulously designed to reflect light, creating a dazzling effect that instantly uplifts any room.Whether you’re looking to add a bold statement to your living room, dining area, or entryway, this wall decor piece is the perfect choice. Its timeless design blends effortlessly with various decor styles, from mid-century modern to contemporary, adding a touch of brilliance wherever it’s placed. The metallic finish and intricate detailing make it not just a piece of decor, but a true work of art that symbolizes light, life, and inspiration.Let the Sunburst Metal Wall Decor be the centerpiece that radiates warmth and elegance throughout your home, turning your walls into a canvas of light and beauty.",
  "brand": "Statements2000",
  "image": "image/Metal Wall Art/Sunburst Metal Wall Decor 06.jpeg"
}, {
  "id": 7,
  "title": "Vintage Floral Wallpaper",
  "price": 57000,
  "description": "Transform your space into a nostalgic haven with our Vintage Floral Wallpaper. This timeless design brings the elegance of yesteryear into your home, featuring delicate blooms and intricate patterns that evoke a sense of classic charm. Each floral motif is carefully crafted to capture the essence of vintage beauty, making it perfect for those who appreciate the romance of the past.Ideal for living rooms, bedrooms, or even a cozy reading nook, this wallpaper adds a touch of warmth and character to any space. The soft, muted tones blend seamlessly with various decor styles, from traditional to shabby chic, creating a cozy and inviting atmosphere that feels like stepping into a bygone era.Whether you’re looking to add a touch of nostalgia to a modern home or complete a vintage-inspired room, our Vintage Floral Wallpaper is the perfect choice. It’s not just wallpaper; it’s a piece of history, bringing the timeless beauty of floral design into your everyday life.",
  "brand": "York Wallcoverings",
  "image": "image/Wall Paper/Vintage Floral Wallpaper 01.jpeg"
}, {
  "id": 8,
  "title": "Modern Geometric Pattern Wallpaper",
  "price": 57000,
  "description": "Elevate your space with the sleek sophistication of our Modern Geometric Pattern Wallpaper. This eye-catching design brings a contemporary edge to any room, featuring bold shapes and clean lines that create a dynamic visual impact. The geometric patterns are thoughtfully arranged to add depth and dimension, making your walls the perfect canvas for modern artistry.Ideal for living rooms, offices, or accent walls, this wallpaper seamlessly blends with minimalist, industrial, or modern decor styles. The versatile color palette allows you to play with contrasts or keep it subtle, offering endless possibilities to express your personal style. Whether you choose to make a bold statement or create a serene backdrop, the crisp design of this wallpaper adds a fresh and stylish touch to your space.Let the Modern Geometric Pattern Wallpaper redefine your interiors, turning ordinary walls into a masterpiece of design. It’s more than just decor; it’s a celebration of modern aesthetics, bringing creativity and elegance into your home.",
  "brand": "York Wallcoverings",
  "image": "image/Wall Paper/Modern Geometric Pattern Wallpaper 02.jpeg"
}, {
  "id": 9,
  "title": "Tropical Jungle Wallpaper",
  "price": 57000,
  "description": "Escape to an exotic paradise with our Tropical Jungle Wallpaper. This vibrant design immerses your space in the lush beauty of the tropics, featuring an array of vivid greens, bold foliage, and striking botanical details. Each leaf and vine is carefully crafted to bring the wild beauty of a jungle oasis into your home, creating a sense of adventure and tranquility.Perfect for living rooms, bedrooms, or any space that could use a touch of nature’s wonder, this wallpaper transforms your walls into a captivating jungle scene. The rich colors and intricate patterns add depth and life to your interiors, making you feel like you’ve stepped into a tropical retreat. Whether you’re looking to create a bold feature wall or an entire room filled with lush greenery, this wallpaper is the ideal choice for those who love nature and vibrant decor.Let the Tropical Jungle Wallpaper bring the outdoors in, turning your home into a lush sanctuary where every day feels like a getaway. It’s not just wallpaper; it’s a gateway to your own personal paradise, filled with the beauty and serenity of the jungle.",
  "brand": "York Wallcoverings",
  "image": "image/Wall Paper/Tropical Jungle Wallpaper 03.jpg"
}, {
  "id": 10,
  "title": "Rustic Wood Panel Wallpaper",
  "price": 57000,
  "description": "Bring the charm of the countryside into your home with our Rustic Wood Panel Wallpaper. This design captures the natural beauty and texture of weathered wood, creating a warm and inviting atmosphere that instantly makes any space feel cozier. Each wood panel is intricately detailed, showcasing the grain, knots, and natural imperfections that give it an authentic, lived-in look.Ideal for creating a farmhouse feel in your living room, bedroom, or study, this wallpaper adds a touch of rustic elegance that pairs beautifully with both traditional and modern decor. The earthy tones and realistic wood textures make it easy to create a feature wall that adds depth and character to your interiors, without the hassle of real wood paneling.Whether you’re looking to evoke the simplicity of rural living or add a touch of natural warmth to a contemporary space, the Rustic Wood Panel Wallpaper is the perfect choice. It’s more than just a backdrop; it’s a way to bring the timeless appeal of wood into your home, creating a space that feels both grounded and inviting.",
  "brand": "York Wallcoverings",
  "image": "image/Wall Paper/Rustic Wood Panel Wallpaper 04.jpeg"
}, {
  "id": 11,
  "title": "Marble Effect Wallpaper",
  "price": 57000,
  "description": "Elevate your interiors with the luxurious elegance of our Marble Effect Wallpaper. This stunning design mimics the timeless beauty of real marble, bringing the sophistication and refinement of this classic material into your home. The intricate veining and subtle color variations capture the essence of genuine marble, creating a sophisticated backdrop that exudes timeless charm.Perfect for adding a touch of opulence to any room, from living areas and bedrooms to dining spaces and bathrooms, this wallpaper provides a high-end look without the cost or maintenance of actual marble. Its versatile design complements a wide range of decor styles, from modern minimalism to classic luxury, making it a versatile choice for any space.Let the Marble Effect Wallpaper transform your walls into a statement of refined elegance, creating an atmosphere of grandeur and style. It’s not just a decorative choice; it’s a way to bring the allure of marble into your everyday life, adding a touch of timeless sophistication to your home.",
  "brand": "York Wallcoverings",
  "image": "image/Wall Paper/Marble Effect Wallpaper 05.jpeg"
}, {
  "id": 12,
  "title": "Metallic Hexagon Wallpaper",
  "price": 57000,
  "description": "Add a touch of modern glamour to your space with our Metallic Hexagon Wallpaper. This striking design features a contemporary hexagonal pattern with a stunning metallic finish that catches the light and adds a dynamic sparkle to your walls. The geometric shapes create a sense of depth and movement, transforming your room into a chic, stylish haven.Perfect for accent walls, living rooms, or modern offices, this wallpaper blends effortlessly with various decor styles, from sleek and minimalist to bold and eclectic. The metallic sheen adds a layer of sophistication and visual interest, making it a standout feature in any room.Elevate your interior design with the Metallic Hexagon Wallpaper, where cutting-edge style meets timeless elegance. It’s more than just wallpaper; it’s a statement piece that reflects your unique sense of style and brings a touch of modern luxury into your home.",
  "brand": "York Wallcoverings",
  "image": "image/Wall Paper/Metallic Hexagon Wallpaper 06.jpeg"
}, {
  "id": 13,
  "title": "Vintage Ornate Photo Frame",
  "price": 96000,
  "description": "Add a touch of timeless elegance to your cherished memories with our Vintage Ornate Photo Frame. This exquisite frame showcases intricate detailing and classic design, reminiscent of vintage artistry. Crafted with ornate patterns and delicate flourishes, it brings a sense of grace and sophistication to any photograph you display.Perfect for preserving your favorite photos, artwork, or keepsakes, this frame enhances your space with its antique charm. Ideal for living rooms, bedrooms, or hallways, it complements a variety of decor styles, from traditional to shabby chic, adding a beautiful, nostalgic touch to your home.Let the Vintage Ornate Photo Frame be the perfect setting for your most treasured moments, transforming them into timeless pieces of art. It’s more than just a frame; it’s a celebration of elegance and history, making your memories feel even more special.",
  "brand": "Umbra",
  "image": "image/Photo frame art/Vintage Ornate Photo Frame 01.jpeg"
}, {
  "id": 14,
  "title": "Rustic Wooden Collage Frame",
  "price": 96000,
  "description": "Showcase your treasured moments with the charming appeal of our Rustic Wooden Collage Frame. This beautifully crafted frame combines the warmth of natural wood with a versatile design that holds multiple photos, making it perfect for creating a personalized display of your favorite memories.Featuring a rustic finish and natural imperfections, this frame adds a cozy, vintage touch to any room. Its collage format allows you to arrange and display a collection of photos, artwork, or mementos, turning them into a unique and eye-catching focal point. Ideal for living rooms, bedrooms, or entryways, the Rustic Wooden Collage Frame complements a range of decor styles, from farmhouse to contemporary, with its inviting, handcrafted look.Let the Rustic Wooden Collage Frame become a centerpiece of your home, celebrating your memories in a way that’s both stylish and heartfelt. It’s more than just a frame; it’s a way to bring a touch of rustic charm and personal flair to your walls.",
  "brand": "Umbra",
  "image": "image/Photo frame art/Rustic Wooden Collage Frame 02.jpeg"
}, {
  "id": 15,
  "title": "Modern Minimalist Metal Frame",
  "price": 96000,
  "description": "Elevate your space with the sleek sophistication of our Modern Minimalist Metal Frame. Designed with clean lines and a simple, elegant profile, this frame embodies the essence of modern minimalism, allowing your photos and artwork to take center stage without distraction.Crafted from high-quality metal with a contemporary finish, the frame’s understated design complements a variety of decor styles, from industrial chic to modern elegance. Its minimalistic approach ensures that it blends seamlessly into any setting while adding a touch of refined style.Perfect for showcasing your favorite photographs or artwork, the Modern Minimalist Metal Frame brings a touch of modern sophistication to your living room, office, or gallery wall. It’s more than just a frame; it’s a statement of contemporary design, enhancing your space with its simple yet striking presence.",
  "brand": "Umbra",
  "image": "image/Photo frame art/Modern Minimalist Metal Frame 03.jpeg"
}, {
  "id": 16,
  "title": "Geometric Patterned Photo Frame",
  "price": 96000,
  "description": "Add a contemporary twist to your photo display with our Geometric Patterned Photo Frame. This eye-catching frame features a dynamic geometric design that brings a modern, artistic flair to your cherished memories. The bold patterns and clean lines create a visually striking backdrop that enhances any photo, making it a standout piece in your home.Crafted with attention to detail, this frame combines style and functionality, making it perfect for showcasing your favorite photographs or artwork. Its versatile design complements a range of decor styles, from modern and eclectic to mid-century and industrial.Whether you’re decorating your living room, office, or gallery wall, the Geometric Patterned Photo Frame adds a touch of creativity and sophistication to any space. It’s more than just a frame; it’s a stylish statement that turns your memories into a work of art.",
  "brand": "Umbra",
  "image": "image/Photo frame art/Geometric Patterned Photo Frame 04.jpeg"
}, {
  "id": 17,
  "title": "Classic Black and White Photo Frame Set",
  "price": 96000,
  "description": "Elevate your photo display with the timeless elegance of our Classic Black and White Photo Frame Set. This sophisticated set features a collection of sleek, monochromatic frames that provide a versatile and stylish way to showcase your most cherished memories. The classic black and white color scheme adds a touch of refinement, seamlessly blending with any decor while highlighting the beauty of your photos.Each frame is designed with clean lines and a minimalist aesthetic, making it easy to create a cohesive gallery wall or to enhance individual displays throughout your home. Ideal for living rooms, offices, or hallways, this set complements a range of decor styles, from contemporary to traditional.Let the Classic Black and White Photo Frame Set bring a touch of timeless charm to your space, turning your favorite moments into elegant displays that capture the essence of your personal style. It’s not just a frame set; it’s a statement of classic sophistication and enduring beauty.",
  "brand": "Umbra",
  "image": "image/Photo frame art/Classic Black and White Photo Frame Set 05.jpeg"
}, {
  "id": 18,
  "title": "Bohemian Woven Photo Frame",
  "price": 96000,
  "description": "Infuse your space with a touch of eclectic charm with our Bohemian Woven Photo Frame. This unique frame combines natural textures and artisanal craftsmanship to create a stylish showcase for your favorite photos. The intricate woven design adds a cozy, handcrafted feel that perfectly complements bohemian and rustic decor styles.Crafted from high-quality materials, the Bohemian Woven Photo Frame features a blend of textures and patterns that make it a standout piece on any wall or shelf. Whether you're displaying cherished memories in your living room, bedroom, or a boho-inspired gallery wall, this frame adds a warm, personal touch to your space.Let the Bohemian Woven Photo Frame turn your photos into artistic statements, celebrating the beauty of handmade design and adding a layer of unique, textured elegance to your home. It’s not just a frame; it’s a reflection of your personal style and a piece of art in its own right.",
  "brand": "Umbra",
  "image": "image/Photo frame art/Bohemian Woven Photo Frame 06.jpeg"
}, {
  "id": 19,
  "title": "Sunburst Mirror Art",
  "price": 88000,
  "description": "Illuminate your space with the radiant charm of our Sunburst Mirror Art. This striking piece combines the classic elegance of a mirror with a bold, sunburst design, creating a dazzling focal point that brightens up any room. The geometric rays extend outward in a burst of brilliance, capturing light and adding a touch of modern glamour to your decor.Perfect for living rooms, entryways, or bedrooms, the Sunburst Mirror Art adds both functionality and flair. Its reflective surface enhances natural light and makes your space feel more open and inviting, while the eye-catching design serves as a stylish statement piece.Let the Sunburst Mirror Art bring a burst of energy and elegance to your home, turning your walls into a canvas of light and beauty. It’s more than just a mirror; it’s a stylish centerpiece that reflects your unique sense of style and adds a touch of sophistication to your space.",
  "brand": "Howard Elliott",
  "image": "image/Mirror Art/Sunburst Mirror Art 01.jpeg"
}, {
  "id": 20,
  "title": "Vintage Window Pane Mirror",
  "price": 88000,
  "description": "Bring a touch of old-world charm to your home with our Vintage Window Pane Mirror. This beautifully crafted mirror evokes the nostalgic elegance of classic window panes, featuring a distinctive grid pattern that adds character and sophistication to any room. The aged finish and intricate detailing give it an authentic vintage feel, transforming it into a statement piece that tells a story.Ideal for creating a focal point in your living room, hallway, or bedroom, the Vintage Window Pane Mirror enhances your space with a timeless charm and a sense of history. Its reflective surface not only brightens up your room but also adds a sense of depth and openness, making it a perfect addition to both modern and traditional decor styles.Let the Vintage Window Pane Mirror be a window to the past, infusing your home with a sense of elegance and grace. It’s more than just a mirror; it’s a piece of art that captures the essence of classic design and adds a touch of vintage beauty to your space.",
  "brand": "Howard Elliott",
  "image": "image/Mirror Art/Vintage Window Pane Mirror 02.jpeg"
}, {
  "id": 21,
  "title": "Geometric Diamond Mirror",
  "price": 88000,
  "description": "Elevate your decor with the striking elegance of our Geometric Diamond Mirror. This unique mirror features a bold diamond shape, creating a stunning focal point that adds a touch of modern sophistication to any room. The geometric design combines clean lines with a chic, reflective surface, reflecting light and making your space feel brighter and more open.Perfect for contemporary living rooms, stylish bedrooms, or sleek entryways, the Geometric Diamond Mirror complements a variety of decor styles, from minimalistic to eclectic. Its distinctive shape and reflective quality make it not just a mirror but a statement piece that enhances the aesthetic of your home.Let the Geometric Diamond Mirror bring a touch of modern glamour to your space, creating a dazzling effect that captures attention and adds a touch of contemporary flair to your interiors. It’s more than just a mirror; it’s a design element that transforms your walls into a canvas of style and sophistication.",
  "brand": "Howard Elliott",
  "image": "image/Mirror Art/Geometric Diamond Mirror 03.jpeg"
}, {
  "id": 22,
  "title": "Antique Gold Leaf Mirror",
  "price": 88000,
  "description": "Add a touch of opulence to your space with our Antique Gold Leaf Mirror. This exquisite mirror features a rich, gilded frame adorned with intricate gold leaf detailing, evoking the timeless elegance of classic design. The ornate frame captures the essence of vintage luxury, making it a standout piece that elevates any room with its regal charm.Ideal for enhancing living rooms, dining areas, or bedrooms, the Antique Gold Leaf Mirror serves as both a functional mirror and a decorative artwork. Its reflective surface brings light and depth to your space, while the antique gold finish adds a warm, golden glow that complements a range of decor styles, from traditional to transitional.Let the Antique Gold Leaf Mirror be the crowning jewel of your home decor, adding a touch of historical elegance and sophistication. It’s more than just a mirror; it’s a statement piece that brings a sense of grandeur and timeless beauty to your interiors.",
  "brand": "Howard Elliott",
  "image": "image/Mirror Art/Antique Gold Leaf Mirror 04.jpeg"
}, {
  "id": 23,
  "title": "Industrial Metal Frame Mirror",
  "price": 88000,
  "description": "Infuse your space with the rugged charm of urban design with our Industrial Metal Frame Mirror. This bold mirror features a robust metal frame with a raw, industrial aesthetic, perfect for adding a touch of edgy sophistication to any room. The minimalist design highlights the strength and simplicity of metal, while the clean lines and industrial finish offer a modern, yet timeless appeal.Ideal for lofts, modern offices, or contemporary living areas, the Industrial Metal Frame Mirror enhances your decor with its sleek, no-nonsense style. The metal frame not only provides a striking contrast but also ensures durability and a sturdy presence in your space.Let the Industrial Metal Frame Mirror be a defining element of your interior design, reflecting both light and your unique sense of style. It’s more than just a mirror; it’s a statement piece that brings a bold, industrial edge to your home.",
  "brand": "Howard Elliott",
  "image": "image/Mirror Art/Industrial Metal Frame Mirror 05.jpg"
}, {
  "id": 24,
  "title": "Bohemian Round Woven Mirror",
  "price": 88000,
  "description": "Elevate your decor with the natural elegance of our Bohemian Round Woven Mirror. This beautifully crafted mirror features a round frame intricately woven with natural fibers, creating a textured and eye-catching design that exudes bohemian charm. The warm, earthy tones and artisanal craftsmanship make it a standout piece that adds a touch of handcrafted beauty to any room.Perfect for enhancing your living room, bedroom, or entryway, the Bohemian Round Woven Mirror complements a variety of decor styles, from relaxed and eclectic to coastal and rustic. Its round shape and woven details create a harmonious blend of form and function, bringing a sense of light and spaciousness to your space.Let the Bohemian Round Woven Mirror become a stylish focal point in your home, reflecting both your unique taste and the natural beauty of bohemian design. It’s not just a mirror; it’s a piece of art that transforms your walls into a showcase of warmth and creativity.",
  "brand": "Howard Elliott",
  "image": "image/Mirror Art/Bohemian Round Woven Mirror 06.jpeg"
}, {
  "id": 25,
  "title": "Rustic Floating Wood Shelf",
  "price": 45000,
  "description": "Enhance your space with the warm, inviting charm of our Rustic Floating Wood Shelf. This beautifully crafted shelf features a natural wood finish that showcases the unique grain and texture of the wood, adding a touch of rustic elegance to any room. Its floating design creates a seamless look, making your display items appear as if they’re effortlessly suspended in mid-air.Perfect for showcasing books, plants, or decorative accents in your living room, kitchen, or office, the Rustic Floating Wood Shelf blends seamlessly with various decor styles, from farmhouse to industrial. The sturdy construction ensures it can hold your favorite items while adding a stylish, earthy element to your decor.Let the Rustic Floating Wood Shelf bring a sense of natural beauty and functionality to your home. It’s more than just a shelf; it’s a piece of art that enhances your space with its rustic charm and practical design.",
  "brand": "Danya B",
  "image": "image/Wall Shelves/Rustic Floating Wood Shelf 01.jpeg"
}, {
  "id": 26,
  "title": "Modern Geometric Wall Shelf",
  "price": 45000,
  "description": "Add a touch of contemporary flair to your space with our Modern Geometric Wall Shelf. This stylish shelf features a sleek geometric design that combines form and function, offering a unique way to display your favorite items. Its clean lines and modern aesthetic make it a standout piece that complements a variety of decor styles, from minimalist to industrial.Crafted with high-quality materials, the Modern Geometric Wall Shelf provides a practical yet artistic solution for organizing and showcasing books, plants, or decorative objects. Its geometric shape adds a dynamic element to your walls, creating visual interest and a modern touch that elevates your home decor.Perfect for living rooms, offices, or bedrooms, this wall shelf turns everyday storage into a design statement. Let the Modern Geometric Wall Shelf enhance your space with its blend of contemporary style and functional elegance. It’s more than just a shelf; it’s a piece of modern art that transforms your walls into a canvas of style.",
  "brand": "Danya B",
  "image": "image/Wall Shelves/Modern Geometric Wall Shelf 02.jpeg"
}, {
  "id": 27,
  "title": "Industrial Pipe Wall Shelf",
  "price": 45000,
  "description": "Bring an edgy, industrial vibe to your space with our Industrial Pipe Wall Shelf. This distinctive shelf combines rugged metal pipes with sturdy wooden planks, creating a bold statement piece that adds character and functionality to any room. The exposed pipe design and vintage finish evoke the raw charm of industrial design, making it perfect for adding a touch of urban sophistication to your decor.Ideal for showcasing books, plants, or decorative items, the Industrial Pipe Wall Shelf is a versatile addition to living rooms, offices, or kitchens. Its robust construction ensures durability, while the unique combination of materials creates a striking contrast that enhances your space with both style and practicality.Let the Industrial Pipe Wall Shelf become a focal point in your home, reflecting your taste for modern design and functionality. It’s not just a shelf; it’s a statement piece that turns everyday storage into a showcase of industrial elegance.",
  "brand": "Danya B",
  "image": "image/Wall Shelves/Industrial Pipe Wall Shelf 03.jpeg"
}, {
  "id": 28,
  "title": "Minimalist White Floating Shelf",
  "price": 45000,
  "description": "Elevate your space with the sleek simplicity of our Minimalist White Floating Shelf. This elegantly designed shelf features a crisp, white finish and a floating installation that creates a clean, streamlined look. Its minimalist design allows it to blend seamlessly with any decor style, making it a versatile addition to modern living rooms, bedrooms, or offices.Crafted with high-quality materials, the Minimalist White Floating Shelf offers a practical solution for displaying books, plants, or decorative items without overwhelming your space. The floating design not only saves floor space but also adds a touch of contemporary sophistication to your walls.Let the Minimalist White Floating Shelf enhance your home with its understated elegance and functional beauty. It’s more than just a shelf; it’s a design element that brings a sense of lightness and modernity to your interiors, making your space feel more open and stylish.",
  "brand": "Danya B",
  "image": "image/Wall Shelves/Minimalist White Floating Shelf 04.jpeg"
}, {
  "id": 29,
  "title": "Hexagonal Honeycomb Wall Shelves",
  "price": 45000,
  "description": "Add a touch of modern flair and functionality to your walls with our Hexagonal Honeycomb Wall Shelves. These unique shelves feature a contemporary honeycomb design, combining geometric shapes with practical storage. The hexagonal pattern creates a visually intriguing display that enhances any room, while offering a stylish way to showcase your favorite books, plants, or decorative items.Crafted with attention to detail, the Hexagonal Honeycomb Wall Shelves are perfect for creating a dynamic feature wall or organizing your space with a touch of sophistication. Their versatile design complements a range of decor styles, from modern and minimalist to eclectic and industrial.Let the Hexagonal Honeycomb Wall Shelves transform your interiors into a stylish showcase, blending artistic design with everyday functionality. They’re more than just shelves; they’re a statement piece that adds a contemporary twist to your home decor, turning your walls into a canvas of creativity and elegance.",
  "brand": "Danya B",
  "image": "image/Wall Shelves/Hexagonal Honeycomb Wall Shelves 05.jpeg"
}, {
  "id": 30,
  "title": "Rustic Ladder Wall Shelf",
  "price": 45000,
  "description": "Infuse your home with rustic charm and practicality with our Rustic Ladder Wall Shelf. This stylish shelf combines the classic appeal of a ladder design with versatile storage, offering a unique way to display and organize your favorite items. The weathered wood finish and sturdy construction give it an authentic, farmhouse-inspired look that adds warmth and character to any room.Perfect for living rooms, kitchens, or entryways, the Rustic Ladder Wall Shelf provides ample space for books, plants, or decorative accents. Its ladder-like design allows for easy access and a customizable display, making it a functional and eye-catching addition to your decor.Let the Rustic Ladder Wall Shelf bring a touch of rustic elegance and practicality to your space. It’s not just a shelf; it’s a piece of functional art that enhances your home with its blend of style and utility, turning your walls into a showcase of rustic beauty.",
  "brand": "Danya B",
  "image": "image/Wall Shelves/Rustic Ladder Wall Shelf 06.jpeg"
}, {
  "id": 31,
  "title": "Majestic Deer Head Wall Mount",
  "price": 55000,
  "description": "Make a bold statement in your space with our Majestic Deer Head Wall Mount. This striking wall art piece captures the grandeur of the wild with its intricately designed antlers and regal presence. Crafted with attention to detail, the deer head brings a touch of nature-inspired elegance and sophistication to any room.Ideal for adding a focal point to living rooms, studies, or entryways, the Majestic Deer Head Wall Mount blends seamlessly with various decor styles, from rustic and cabin chic to modern and eclectic. Its majestic design evokes a sense of wilderness and adventure, turning your wall into a canvas of natural beauty.Let the Majestic Deer Head Wall Mount transform your space into a haven of timeless style and character. It’s not just a piece of wall decor; it’s a tribute to the majesty of the natural world, adding a touch of grandeur and intrigue to your home.",
  "brand": "White Faux Taxidermy",
  "image": "image/Wall mounted animals/Majestic Deer Head Wall Mount 01.jpeg"
}, {
  "id": 32,
  "title": "Rustic Metal Bear Wall Art",
  "price": 55000,
  "description": "Bring the spirit of the wild into your home with our Rustic Metal Bear Wall Art. This captivating piece features a detailed metal silhouette of a bear, crafted to evoke the rugged beauty and strength of nature. The rustic finish adds a touch of earthy charm, making it a striking focal point for any room.Ideal for cabins, living rooms, or offices with a nature-inspired theme, the Rustic Metal Bear Wall Art combines durability with artistic flair. Its bold design and textured metal create a dramatic contrast against your walls, adding both character and a sense of adventure to your space.Let the Rustic Metal Bear Wall Art become a centerpiece of your home, celebrating the majesty of wildlife and adding a touch of rustic elegance. It’s more than just wall decor; it’s a tribute to the wild, infusing your interiors with a sense of natural wonder and rugged charm.",
  "brand": "White Faux Taxidermy",
  "image": "image/Wall mounted animals/Rustic Metal Bear Wall Art 02.jpeg"
}, {
  "id": 33,
  "title": "Artistic Elephant Head Wall Sculpture",
  "price": 55000,
  "description": "Add a touch of grandeur and artistic flair to your space with our Artistic Elephant Head Wall Sculpture. This elegant piece captures the majesty and grace of the elephant, featuring intricately detailed textures and a modern design that makes it a standout addition to any wall. The artistic interpretation of the elephant’s form brings a sophisticated and contemporary edge to traditional wildlife art.Perfect for enhancing living rooms, offices, or entryways, the Artistic Elephant Head Wall Sculpture blends beautifully with various decor styles, from eclectic and bohemian to modern and minimalist. Its commanding presence and refined craftsmanship make it a unique statement piece that exudes both strength and elegance.Let the Artistic Elephant Head Wall Sculpture transform your walls into a showcase of artistic excellence and cultural richness. It’s not just a sculpture; it’s a tribute to the beauty and majesty of one of nature’s most revered creatures, adding a touch of refined artistry and inspiration to your home.",
  "brand": "White Faux Taxidermy",
  "image": "image/Wall mounted animals/Artistic Elephant Head Wall Sculpture 03.jpeg"
}, {
  "id": 34,
  "title": "Modern Geometric Lion Wall Mount",
  "price": 55000,
  "description": "Bring a fierce and stylish edge to your decor with our Modern Geometric Lion Wall Mount. This striking piece features a bold geometric interpretation of the lion’s head, combining sharp angles and sleek lines to create a contemporary statement. The modern design captures the lion’s majestic presence while adding a touch of artistic sophistication to your space.Ideal for living rooms, offices, or creative spaces, the Modern Geometric Lion Wall Mount complements various decor styles, from modern and minimalist to industrial and eclectic. Its unique design not only serves as a captivating focal point but also adds a dynamic, eye-catching element to your walls.Let the Modern Geometric Lion Wall Mount infuse your space with a sense of strength and style. It’s more than just wall art; it’s a powerful statement piece that combines contemporary design with the timeless grandeur of the lion, enhancing your home with a touch of bold elegance.",
  "brand": "White Faux Taxidermy",
  "image": "image/Wall mounted animals/Modern Geometric Lion Wall Mount 04.jpeg"
}, {
  "id": 35,
  "title": "Colorful Peacock Wall Art",
  "price": 55000,
  "description": "Infuse your space with vibrant elegance and artistic flair with our Colorful Peacock Wall Art. This stunning piece showcases the peacock’s majestic plumage in a burst of vivid colors and intricate patterns, bringing a lively and sophisticated touch to your decor. The rich hues and detailed design capture the beauty and grace of this regal bird, making it a captivating focal point for any room.Perfect for brightening up living rooms, bedrooms, or creative spaces, the Colorful Peacock Wall Art complements a variety of decor styles, from bohemian and eclectic to modern and traditional. Its eye-catching design not only enhances your walls but also adds a sense of dynamic energy and artistic charm to your home.Let the Colorful Peacock Wall Art transform your space into a vibrant haven of beauty and creativity. It’s more than just wall decor; it’s a celebration of nature’s splendor and artistic expression, bringing a touch of colorful elegance to your interiors.",
  "brand": "White Faux Taxidermy",
  "image": "image/Wall mounted animals/Colorful Peacock Wall Art 05.jpeg"
}, {
  "id": 36,
  "title": "Whimsical Owl Wall Hanging",
  "price": 55000,
  "description": "Add a touch of charm and playfulness to your space with our Whimsical Owl Wall Hanging. This delightful piece captures the quirky and endearing nature of owls with its imaginative design and vibrant colors. Featuring a detailed owl perched in a whimsical pose, it brings a sense of fun and character to any room.Ideal for children's bedrooms, playrooms, or any space in need of a touch of whimsy, the Whimsical Owl Wall Hanging complements a range of decor styles, from playful and eclectic to cozy and inviting. Its unique design adds a splash of personality and warmth, making it a charming addition to your home.Let the Whimsical Owl Wall Hanging become a beloved focal point in your space, infusing it with a sense of joy and creativity. It’s more than just wall decor; it’s a cheerful companion that brings a smile and a touch of magic to your interiors.",
  "brand": "White Faux Taxidermy",
  "image": "image/Wall mounted animals/Whimsical Owl Wall Hanging 06.jpeg"
}]





for (let i = 0; i < products.length; i++) {
  document.querySelectorAll("#select1").innerHTML += `<option value="${i}">${products[i].title}</option>`;
}


function item1(a) {
  let select2 = document.getElementById("select2").value;
  if (a != select2) {
    document.getElementById("brand1").innerHTML = products[a].brand
    document.getElementById("price1").innerHTML = products[a].price
    document.getElementById("desc1").innerHTML = products[a].description
    document.getElementById("img1").src = products[a].image
  } else {
    document.getElementById("brand1").innerHTML = "N/A"
    document.getElementById("price1").innerHTML = "N/A"
    document.getElementById("desc1").innerHTML = "N/A"
    document.getElementById("img1").src = products[0].image
  }
}

function item2(a) {
  let select1 = document.getElementById("select1").value;
  if (a != select1) {
    document.getElementById("brand2").innerHTML = products[a].brand
    document.getElementById("price2").innerHTML = products[a].price
    document.getElementById("desc2").innerHTML = products[a].description
    document.getElementById("img2").src = products[a].image
  } else {
    document.getElementById("brand2").innerHTML = "N/A"
    document.getElementById("price2").innerHTML = "N/A"
    document.getElementById("desc2").innerHTML = "N/A"
    document.getElementById("img2").src = products[0].image
  }
}

// Compare Page JS End











// Shop Page JS Start




let category1 = document.querySelectorAll("#metalWallProducts");
let category2 = document.querySelectorAll("#WallPaperProducts");
let category3 = document.querySelectorAll("#photoFrameProducts");
let category4 = document.querySelectorAll("#mirrorArtProducts");
let category5 = document.querySelectorAll("#wallShelvesProducts");
let category6 = document.querySelectorAll("#wallMountedProducts");

function hideAllCategories() {
  let allCategories = [category1, category2, category3, category4, category5, category6];

  for (let i = 0; i < allCategories.length; i++) {
    for (let j = 0; j < allCategories[i].length; j++) {
      allCategories[i][j].style.display = "none";
    }
  }
}

function showProducts1() {
  hideAllCategories();
  for (let i = 0; i < category1.length; i++) {
    category1[i].style.display = "block";
  }
}

function showProducts2() {
  hideAllCategories();
  for (let i = 0; i < category2.length; i++) {
    category2[i].style.display = "block";
  }
}

function showProducts3() {
  hideAllCategories();
  for (let i = 0; i < category3.length; i++) {
    category3[i].style.display = "block";
  }
}


function showProducts4() {
  hideAllCategories();
  for (let i = 0; i < category4.length; i++) {
    category4[i].style.display = "block";
  }
}


function showProducts5() {
  hideAllCategories();
  for (let i = 0; i < category5.length; i++) {
    category5[i].style.display = "block";
  }
}



function showProducts6() {
  hideAllCategories();
  for (let i = 0; i < category6.length; i++) {
    category6[i].style.display = "block";
  }
}








// Shop Page JS End

// Contact Page JS Start


function openMail() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (name && email && message) {

    window.location.href = "mailto:naimatansari31@gmail.com";

    // alert("Thank you for contacting us. We will get back to you soon.");
  }
}


// Contact Page JS End






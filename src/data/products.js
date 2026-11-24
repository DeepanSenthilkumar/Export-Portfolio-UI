/**
 * Product catalog — static dataset mirroring the reference site's offering.
 * Shape: { [categorySlug]: [{ group, items: [{ name, origin, desc, icon }] }] }
 * `icon` keys resolve through components/ui/Icon.jsx (lucide-react).
 */
export const PRODUCTS = {
  'fresh-produce': [
    {
      group: 'Vegetables',
      items: [
        { name: 'Onions', origin: 'Nashik & Lasalgaon, MH', desc: 'Export-grade red onions, size-graded and cured for long-haul shipping.', icon: 'CircleDot' },
        { name: 'Small Onions', origin: 'Erode & Coimbatore, TN', desc: 'Sambar onions with tight skins and uniform grading for bulk buyers.', icon: 'CircleDot' },
        { name: 'Potatoes', origin: 'Agra UP · Hooghly WB · Indore MP', desc: 'Low-sugar, table and processing varieties from certified cold stores.', icon: 'Egg' },
        { name: 'Moringa / Drumstick', origin: 'Thoothukudi & Madurai, TN', desc: 'Tender drumsticks harvested to order, pre-cooled for freshness.', icon: 'Leaf' },
        { name: 'Tomato', origin: 'Kolar KA · Nashik MH', desc: 'Firm, deep-red tomatoes graded for domestic and export channels.', icon: 'Apple' },
        { name: 'Eggs', origin: 'Namakkal & Erode, TN', desc: 'NECC-standard table eggs from integrated poultry farms, tray-packed.', icon: 'Egg' },
      ],
    },
    {
      group: 'Roots & Vegetables',
      items: [
        { name: 'Elephant Foot Yam', origin: 'Salem & Villupuram, TN', desc: 'Mature yam corms, cleaned and sorted for retail and processing.', icon: 'Sprout' },
        { name: 'Ginger', origin: 'Wayanad KL · Sikkim', desc: 'High-oil fresh ginger, washed and graded, low fibre content.', icon: 'Sprout' },
        { name: 'Garlic', origin: 'Mandsaur MP · Rajasthan', desc: 'Bold cloves with strong pungency, cured for extended shelf life.', icon: 'Flower2' },
      ],
    },
    {
      group: 'Coconut & Coconut Products',
      items: [
        { name: 'Coconut', origin: 'Pollachi · Erode · Kozhikode', desc: 'Mature de-husked coconuts, 12–13 month crop, export packed.', icon: 'TreePine' },
        { name: 'Coco Peat', origin: 'Pollachi & Coimbatore, TN', desc: 'Low-EC buffered pith blocks and grow bags for horticulture.', icon: 'Package' },
        { name: 'Tender Coconut', origin: 'Pollachi · Erode · Kozhikode', desc: 'Sweet 7-month tender nuts, trimmed and chilled-chain ready.', icon: 'Droplets' },
        { name: 'Coconut Oil', origin: 'Kangeyam & Pollachi, TN', desc: 'Cold-pressed and RBD grades in bulk drums and retail packs.', icon: 'Milk' },
      ],
    },
  ],

  spices: [
    {
      group: 'Chillies & Spices',
      items: [
        { name: 'Red Chilli', origin: 'Guntur & Warangal', desc: 'Teja, Sannam and 334 grades — stemless, machine-cleaned, ASTA quality.', icon: 'Flame' },
        { name: 'Green Chilli', origin: 'Guntur AP · Salem TN', desc: 'Firm G4 variety, pre-cooled and packed for fresh-market export.', icon: 'Flame' },
        { name: 'Black Pepper', origin: 'Kerala · Coorg KA', desc: 'Malabar and Tellicherry bold berries, 500–570 g/l density grades.', icon: 'CircleDot' },
        { name: 'Turmeric', origin: 'Erode TN · Sangli MH', desc: 'High-curcumin (3–5%) fingers and powder, polished and sorted.', icon: 'Flame' },
        { name: 'Cardamom', origin: 'Idukki KL · Theni TN', desc: 'Alleppey green 8mm bold pods, colour-sorted and aroma-sealed.', icon: 'Flower2' },
        { name: 'Coriander', origin: 'Rajasthan · Gujarat', desc: 'Eagle and Scooter grades, split and whole, low moisture.', icon: 'Leaf' },
        { name: 'Cumin Seeds', origin: 'Rajasthan · Gujarat', desc: 'Machine-cleaned 99% purity cumin, Singapore and Europe quality.', icon: 'Wheat' },
        { name: 'Cloves', origin: 'Kerala', desc: 'Hand-picked mature buds, sun-dried with full oil retention.', icon: 'Flower2' },
      ],
    },
    {
      group: 'Tea & Plantation',
      items: [
        { name: 'Coffee', origin: 'Nilgiris · Assam · Darjeeling', desc: 'Arabica and Robusta green beans, plantation and cherry grades.', icon: 'Coffee' },
        { name: 'Tea', origin: 'Chikmagalur · Coorg', desc: 'Orthodox and CTC leaf from high-grown estates, garden-fresh lots.', icon: 'CupSoda' },
      ],
    },
    {
      group: 'Rice & Grains',
      items: [
        { name: 'Basmati Rice', origin: 'Haryana · Punjab', desc: '1121 & 1509 steam and raw basmati, 2-year aged, sortex clean.', icon: 'Wheat' },
        { name: 'Ponni Rice', origin: 'Thanjavur & Trichy', desc: 'Classic delta ponni, raw and parboiled, 5% broken max.', icon: 'Wheat' },
        { name: 'Sona Masoori Rice', origin: 'AP · Karnataka', desc: 'Lightweight premium sona, polished and sortex graded.', icon: 'Wheat' },
        { name: 'Jeera Samba Rice', origin: 'Tamil Nadu', desc: 'Aromatic short-grain jeera samba for biryani and retail packs.', icon: 'Wheat' },
        { name: 'IR64 Rice', origin: 'Andhra Pradesh', desc: 'IR64 parboiled 5% / 25% broken, export-standard milling.', icon: 'Wheat' },
        { name: 'Brown Rice', origin: 'Kerala · Karnataka', desc: 'Whole-grain red and brown rice, minimally processed.', icon: 'Wheat' },
        { name: 'Wheat', origin: 'Punjab · Haryana', desc: 'Milling-grade sharbati and lokwan, bulk vessel loading.', icon: 'Wheat' },
        { name: 'Maize / Corn', origin: 'Karnataka · AP', desc: 'Yellow maize for feed and starch, moisture-controlled lots.', icon: 'Wheat' },
      ],
    },
  ],

  fruits: [
    {
      group: 'Premium Fresh Fruits',
      items: [
        { name: 'Grapes', origin: 'Nashik, MH', desc: 'Thompson seedless, residue-tested, pre-cooled for EU/UK export.', icon: 'Grape' },
        { name: 'Apple', origin: 'Himachal · Kashmir', desc: 'Royal Delicious and Gala, CA-stored and colour-graded.', icon: 'Apple' },
        { name: 'Banana', origin: 'Trichy & Theni, TN', desc: 'G9 Cavendish, 13–14 day maturity, export carton packed.', icon: 'Banana' },
        { name: 'Pomegranate', origin: 'Solapur · Nashik', desc: 'Bhagwa variety, deep-red arils, 300–450g fruit grades.', icon: 'Cherry' },
        { name: 'Orange', origin: 'Nagpur, MH', desc: 'Nagpur santra, juicy and hand-graded, waxed for retail.', icon: 'Citrus' },
        { name: 'Mango', origin: 'Salem · Krishnagiri · AP', desc: 'Alphonso, Totapuri and Banganapalli, hot-water treated.', icon: 'Citrus' },
        { name: 'Guava', origin: 'UP · Tamil Nadu', desc: 'Allahabad Safeda and pink-flesh grades, firm-ripe harvest.', icon: 'Apple' },
        { name: 'Pineapple', origin: 'Assam · Kerala', desc: 'Kew and Queen varieties, sweet and fibre-less, sized lots.', icon: 'Citrus' },
        { name: 'Papaya', origin: 'AP · Gujarat', desc: 'Red Lady papaya, 75% maturity, export carton packed.', icon: 'Citrus' },
      ],
    },
    {
      group: 'Dry Fruits',
      items: [
        { name: 'Almonds', origin: 'Kashmir · Himachal', desc: 'Mamra and California-grade kernels, shell-cracked and sorted.', icon: 'Nut' },
        { name: 'Cashew Nuts', origin: 'Goa · Kerala', desc: 'W180–W320 white wholes, vacuum-packed, moisture controlled.', icon: 'Nut' },
        { name: 'Raisins', origin: 'Nashik & Sangli', desc: 'Thompson green raisins, graded and laser-sorted.', icon: 'Grape' },
        { name: 'Walnuts', origin: 'Kashmir', desc: 'Kagzi thin-shell walnuts and light-half kernels.', icon: 'Nut' },
        { name: 'Dates', origin: 'Gujarat · Rajasthan', desc: 'Kimiya and seedless dates, soft-cured and retail packed.', icon: 'Candy' },
      ],
    },
  ],

  processed: [
    {
      group: 'Powders & Mixes',
      items: [
        { name: 'Moringa Powder', origin: 'Madurai & Theni, TN', desc: 'Shade-dried leaf powder, 60–100 mesh, lab-tested purity.', icon: 'Leaf' },
        { name: 'Vegetables & Fruits Mix', origin: 'Coimbatore · Hyderabad · Pune', desc: 'Custom dehydrated blends for food-service and retail brands.', icon: 'Soup' },
        { name: 'Spices Mix', origin: 'Erode · Kochi', desc: 'Private-label masala blends, steam-sterilised and sealed.', icon: 'Flame' },
      ],
    },
    {
      group: 'Specialty & Handicrafts',
      items: [
        { name: 'Bamboo Craft', origin: 'Assam · Tripura · Kerala', desc: 'Handwoven utility and decor lines from artisan clusters.', icon: 'TreeDeciduous' },
        { name: 'Bamboo Salt', origin: 'Tamil Nadu · Kerala', desc: 'Traditional roasted bamboo salt, mineral-rich specialty grade.', icon: 'FlaskConical' },
        { name: 'Wooden Handicrafts', origin: 'Rajasthan · Saharanpur', desc: 'Sheesham and mango-wood decor, carved and polished.', icon: 'Armchair' },
        { name: 'Brass Handicrafts', origin: 'Moradabad, UP', desc: 'Export-grade brass decor and tableware, lacquer finished.', icon: 'Lamp' },
        { name: 'Terracotta Products', origin: 'West Bengal', desc: 'Bankura-style terracotta planters and artisan pottery.', icon: 'Amphora' },
      ],
    },
  ],

  industrial: [
    {
      group: 'Garments & Textiles',
      items: [
        { name: 'Cotton T-Shirts', origin: 'Tiruppur, TN', desc: '180–240 GSM combed cotton, private-label knits at scale.', icon: 'Shirt' },
        { name: 'Oversized T-Shirts', origin: 'Tiruppur, TN', desc: 'Streetwear-fit heavy knits, custom washes and prints.', icon: 'Shirt' },
        { name: 'Polo T-Shirts', origin: 'Tiruppur, TN', desc: 'Pique polos with tipping options, corporate bulk programs.', icon: 'Shirt' },
        { name: 'Formal Shirts', origin: 'Tiruppur · Bengaluru', desc: 'Woven cotton and blends, export-quality finishing.', icon: 'Shirt' },
        { name: 'Jeans', origin: 'Tiruppur · Ahmedabad', desc: 'Denim in stretch and rigid, wash-developed to spec.', icon: 'Shirt' },
        { name: 'Kurtis', origin: 'Jaipur · Tiruppur', desc: 'Printed and embroidered ethnic wear, boutique to bulk.', icon: 'Shirt' },
      ],
    },
    {
      group: 'Machinery',
      items: [
        { name: 'Textile Machinery', origin: 'Coimbatore, TN', desc: 'Spinning, weaving and knitting lines with spares support.', icon: 'Cog' },
        { name: 'Packaging Machinery', origin: 'Pune · Ahmedabad', desc: 'FFS, cartonning and wrapping systems, turnkey supply.', icon: 'Package' },
        { name: 'Food Processing Machinery', origin: 'Coimbatore · Hyderabad', desc: 'Grinding, mixing and dehydration lines, SS304 build.', icon: 'Factory' },
        { name: 'Agricultural Machinery', origin: 'Ludhiana · Rajkot', desc: 'Tillers, harvesters and implements, OEM-sourced.', icon: 'Tractor' },
      ],
    },
    {
      group: 'Electrical Products',
      items: [
        { name: 'Electrical Panels', origin: 'Chennai · Coimbatore', desc: 'LT/HT panels, PCC and MCC builds to IEC standards.', icon: 'CircuitBoard' },
        { name: 'LED Lights', origin: 'Noida · Chennai', desc: 'Commercial and street lighting, BIS-certified lots.', icon: 'Lightbulb' },
        { name: 'Transformers', origin: 'Hyderabad · Gujarat', desc: 'Distribution and power transformers up to 5 MVA.', icon: 'Zap' },
        { name: 'Motors & Pumps', origin: 'Coimbatore, TN', desc: 'IE2/IE3 motors and centrifugal pump sets, bulk supply.', icon: 'Fan' },
      ],
    },
    {
      group: 'Auto Spare Parts',
      items: [
        { name: 'Auto Spare Parts', origin: 'Chennai · Pune', desc: 'OEM and aftermarket components for CV and PV segments.', icon: 'Car' },
        { name: 'CNC Components', origin: 'Coimbatore · Rajkot', desc: 'Precision-machined parts to drawing, batch consistency.', icon: 'Settings2' },
        { name: 'Bearings', origin: 'Rajkot · Ahmedabad', desc: 'Ball and roller bearings, industrial-grade clearance lots.', icon: 'CircleDot' },
        { name: 'Hydraulic Parts', origin: 'Pune · Chennai', desc: 'Cylinders, valves and fittings, pressure-tested supply.', icon: 'Droplets' },
      ],
    },
  ],

  'granite-tiles': [
    {
      group: 'Premium Granite',
      items: [
        { name: 'Black Granite', origin: 'Krishnagiri TN · AP', desc: 'Absolute Black in polished, honed and flamed finishes.', icon: 'Gem' },
        { name: 'Red Granite', origin: 'Rajasthan', desc: 'Jhansi and Ruby red slabs, calibrated thickness.', icon: 'Gem' },
        { name: 'White Granite', origin: 'Rajasthan', desc: 'Moon-white and Alaska grades, book-matched slabs.', icon: 'Diamond' },
      ],
    },
    {
      group: 'Industrial Tiles',
      items: [
        { name: 'Vitrified Tiles', origin: 'Morbi, Gujarat', desc: 'GVT/PGVT 600×1200 and 800×1600, double-charged lots.', icon: 'Grid3x3' },
        { name: 'Ceramic Tiles', origin: 'Morbi, Gujarat', desc: 'Floor and wall ceramic, digital-print designs.', icon: 'Grid3x3' },
        { name: 'Wall Tiles', origin: 'Gujarat', desc: 'High-gloss and matte elevation tiles, container loads.', icon: 'Square' },
      ],
    },
  ],
};

/** Flat list of every product with its category + group attached. */
export const ALL_PRODUCTS = Object.entries(PRODUCTS).flatMap(([slug, groups]) =>
  groups.flatMap((g) => g.items.map((item) => ({ ...item, category: slug, group: g.group })))
);

export const countProducts = (slug) =>
  (PRODUCTS[slug] || []).reduce((n, g) => n + g.items.length, 0);

export const TOTAL_PRODUCTS = ALL_PRODUCTS.length;
document.addEventListener("DOMContentLoaded", () => {
  // Preserve existing menu tab behavior
  const tabButtons = document.querySelectorAll('.tab-btn');
  const menuContents = document.querySelectorAll('.menu-content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;

      tabButtons.forEach((btn) => btn.classList.remove('active'));
      menuContents.forEach((content) => content.classList.remove('active'));

      button.classList.add('active');
      const el = document.getElementById(category);
      if (el) el.classList.add('active');
    });
  });

  // Simple client-side translations (minimal, safe)
  const translations = {
    en: {}, // default text in HTML
    fr: {
      "about.about.eyebrow": "À propos",
      "about.about.h2": "Plus qu’un restaurant.",
      "about.eyebrow": "Notre histoire",
      "about.family.text": "Excellentes options pour les individus, les familles et les groupes.",
      "about.family.title": "Convivial pour les familles",
      "about.fresh.text": "Repas préparés frais tout au long de la journée avec des ingrédients de qualité.",
      "about.fresh.title": "Frais chaque jour",
      "about.h1": "Saveurs libanaises authentiques servies à Iqaluit.",
      "about.local.text": "Fièrement au service de la communauté d’Iqaluit.",
      "about.local.title": "Favori local",
      "about.portions.text": "Portions généreuses qui font revenir les clients.",
      "about.portions.title": "Portions généreuses",
      "about.text": "Ingrédients frais, portions généreuses et menu rempli des favoris des clients.",
      "contact.callNow": "Appelez maintenant",
      "contact.eyebrow": "Visitez-nous",
      "contact.h1": "Nourriture fraîche, prête quand vous l’êtes.",
      "contact.info.eyebrow": "Informations de contact",
      "contact.info.title": "Yummy Shawarma",
      "contact.label.address": "Adresse :",
      "contact.label.hours": "Heures :",
      "contact.label.phone": "Téléphone :",
      "contact.label.sunday": "Dimanche :",
      "contact.text": "Trouvez Yummy Shawarma à Iqaluit et découvrez shawarma, pizza, pâtes, desserts et boissons.",
      "contact.viewMenu": "Voir le menu",
      "gallery.eyebrow": "Galerie",
      "gallery.h2": "Un coup d'œil frais sur les favoris locaux.",
      "footer.copy": "© 2026 Yummy Shawarma. Concept de site démo conçu par Krylance Agency.",
      "home.eyebrow": "Frais • Authentique • Rapide",
      "home.h1": "Cuisine libanaise authentique à Iqaluit.",
      "home.orderOnline": "Commander en ligne",
      "home.text": "Shawarma frais • Pizza • Pâtes • Offres familiales",
      "home.viewMenu": "Voir le menu",
      "menu.cat.burgers": "Hamburgers",
      "menu.cat.combo": "Boîte combo",
      "menu.cat.italian": "Plats italiens",
      "menu.cat.pizza": "Pizzas",
      "menu.cat.plates": "Assiettes",
      "menu.cat.platters": "Plateaux",
      "menu.cat.salads": "Salades",
      "menu.cat.sides": "Accompagnements",
      "menu.cat.starters": "Entrées",
      "menu.cat.wraps": "Wraps shawarma",
      "menu.eyebrow": "Notre menu",
      "menu.h1": "Explorez le menu complet de Yummy Shawarma.",
      "menu.text": "Burgers, entrées, boîtes combo, pizzas, plateaux, wraps, salades et plus.",
      "menu.item.1.cheese-burger.name": "Burger au fromage",
      "menu.item.10.fish-burger.name": "Burger de poisson",
      "menu.item.11.mozzarella-sticks.desc": "Petite ou grande.",
      "menu.item.11.mozzarella-sticks.name": "Bâtonnets de mozzarella",
      "menu.item.12.french-fries.desc": "Petite ou grande.",
      "menu.item.12.french-fries.name": "Frites",
      "menu.item.13.onion-rings.desc": "Petite ou grande.",
      "menu.item.13.onion-rings.name": "Rondelles d’oignon",
      "menu.item.14.poutine.desc": "Petite ou grande.",
      "menu.item.14.poutine.name": "Poutine",
      "menu.item.15.donair-poutine.desc": "Petite ou grande.",
      "menu.item.15.donair-poutine.name": "Poutine au donair",
      "menu.item.16.italian-poutine.name": "Poutine italienne",
      "menu.item.17.fish-chips.name": "Poisson et frites",
      "menu.item.18.2-fingers.name": "2 doigts",
      "menu.item.19.1-fish.name": "1 poisson",
      "menu.item.2.bacon-cheeseburger.name": "Cheeseburger au bacon",
      "menu.item.20.3-nuggets.name": "3 bouchées de poulet",
      "menu.item.21.3-wings.name": "3 ailes",
      "menu.item.22.onion-rings.name": "Rondelles d’oignon",
      "menu.item.23.fries.name": "Frites",
      "menu.item.24.cheese.desc": "9\", 12\", 16\", 18\"",
      "menu.item.24.cheese.name": "Fromage",
      "menu.item.25.pepperoni.desc": "9\", 12\", 16\", 18\"",
      "menu.item.25.pepperoni.name": "Pepperoni (Pizza)",
      "menu.item.26.two-toppings.desc": "9\", 12\", 16\", 18\"",
      "menu.item.26.two-toppings.name": "Deux garnitures",
      "menu.item.27.all-dressed.desc": "Pepperoni, champignons, poivrons verts.",
      "menu.item.27.all-dressed.name": "Tout garni",
      "menu.item.28.canadian.desc": "Bacon, pepperoni, champignons.",
      "menu.item.28.canadian.name": "Canadienne",
      "menu.item.29.deluxe.desc": "9\", 12\", 16\", 18\"",
      "menu.item.29.deluxe.name": "Déluxe",
      "menu.item.3.double-patty.name": "Double galette",
      "menu.item.30.yummy-special.desc": "Pepperoni, saucisse, poivrons verts, champignon, oignon.",
      "menu.item.30.yummy-special.name": "Spécial Yummy",
      "menu.item.31.vegetarian.desc": "Champignons, poivron vert, oignon, tomates, olives.",
      "menu.item.31.vegetarian.name": "Végétarien",
      "menu.item.32.meat-lover.desc": "Bœuf, poulet, pepperoni, bacon, donair.",
      "menu.item.32.meat-lover.name": "Carnivore",
      "menu.item.33.donair.desc": "Ail ou sauce rouge, olive, champignon, poivron vert.",
      "menu.item.33.donair.name": "Donair (Pizza)",
      "menu.item.34.smoked-meat.desc": "Viande fumée, poivrons verts, olive, oignon.",
      "menu.item.34.smoked-meat.name": "Viande fumée",
      "menu.item.35.hawaiian.desc": "Jambon et ananas.",
      "menu.item.35.hawaiian.name": "Hawaïen",
      "menu.item.36.mexican.desc": "Poulet, champignon, poivrons verts, piment, olive.",
      "menu.item.36.mexican.name": "Mexicain",
      "menu.item.37.triple-meat.desc": "Saucisse, pepperoni, bacon.",
      "menu.item.37.triple-meat.name": "Triple viande",
      "menu.item.38.supreme.desc": "Bacon, poulet, champignon, poivrons verts, piment.",
      "menu.item.38.supreme.name": "Suprême",
      "menu.item.39.sausage.desc": "Saucisse, poivron vert, champignon, oignon.",
      "menu.item.39.sausage.name": "Saucisse",
      "menu.item.4.chicken-breast-burger.name": "Burger de poitrine de poulet",
      "menu.item.40.mediterranean.desc": "Champignon, poivron vert, oignon, tomate, olive, feta.",
      "menu.item.40.mediterranean.name": "Méditerranéen",
      "menu.item.41.chicken-or-beef.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.41.chicken-or-beef.name": "Poulet ou bœuf",
      "menu.item.42.donair.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.42.donair.name": "Donair (Assiette)",
      "menu.item.43.mixed.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.43.mixed.name": "Mixte",
      "menu.item.44.kafta.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.44.kafta.name": "Kefta (Assiette)",
      "menu.item.45.shish-kabab-2x-beef.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.45.shish-kabab-2x-beef.name": "Shish kabab (2x bœuf)",
      "menu.item.46.shish-taouk-2x-chicken.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.46.shish-taouk-2x-chicken.name": "Shish taouk (2x poulet)",
      "menu.item.47.falafel.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.47.falafel.name": "Falafel (Assiette)",
      "menu.item.48.vegetarian.desc": "Viande, riz, salade, pommes de terre, sauce, pita.",
      "menu.item.48.vegetarian.name": "Végétarien",
      "menu.item.49.chicken.desc": "Garnitures : laitue, tomates, cornichons, oignons, navets et sauce.",
      "menu.item.49.chicken.name": "Poulet",
      "menu.item.5.smoked-meat.name": "Viande fumée",
      "menu.item.50.beef.desc": "Garnitures : laitue, tomates, cornichons, oignons, navets et sauce.",
      "menu.item.50.beef.name": "Bœuf",
      "menu.item.51.donair.desc": "Garnitures : laitue, tomates, cornichons, oignons, navets et sauce.",
      "menu.item.51.donair.name": "Donair (Wrap)",
      "menu.item.52.falafel.desc": "Garnitures : laitue, tomates, cornichons, oignons, navets et sauce.",
      "menu.item.52.falafel.name": "Falafel (Wrap)",
      "menu.item.53.vegetarian.desc": "Garnitures : laitue, tomates, cornichons, oignons, navets et sauce.",
      "menu.item.53.vegetarian.name": "Végétarien",
      "menu.item.54.kafta.desc": "Garnitures : laitue, tomates, cornichons, oignons, navets et sauce.",
      "menu.item.54.kafta.name": "Kefta (Wrap)",
      "menu.item.55.chicken-beef-donair-combo.desc": "Wrap, riz ou salade ou pommes de terre, et boisson.",
      "menu.item.55.chicken-beef-donair-combo.name": "Combo poulet/boeuf/donair",
      "menu.item.56.vegetarian-combo.desc": "Wrap, riz ou salade ou pommes de terre, et boisson.",
      "menu.item.56.vegetarian-combo.name": "Combo végétarien",
      "menu.item.57.falafel-combo.desc": "Wrap, riz ou salade ou pommes de terre, et boisson.",
      "menu.item.57.falafel-combo.name": "Combo falafel",
      "menu.item.58.mixed-combo.desc": "Wrap, riz ou salade ou pommes de terre, et boisson.",
      "menu.item.58.mixed-combo.name": "Combo mixte",
      "menu.item.59.kafta-combo.desc": "Wrap, riz ou salade ou pommes de terre, et boisson.",
      "menu.item.59.kafta-combo.name": "Combo kafta",
      "menu.item.6.chicken-wings.desc": "Par livre.",
      "menu.item.6.chicken-wings.name": "Ailes de poulet",
      "menu.item.60.lasagna.name": "Lasagne",
      "menu.item.61.pasta-meat-sauce.name": "Pâtes sauce viande",
      "menu.item.62.pasta-w-meat-balls.name": "Pâtes aux boulettes de viande",
      "menu.item.63.garlic-cheese-bread.desc": "3 pièces.",
      "menu.item.63.garlic-cheese-bread.name": "Pain à l’ail et fromage",
      "menu.item.64.garlic-bread.desc": "3 pièces.",
      "menu.item.64.garlic-bread.name": "Pain à l’ail",
      "menu.item.65.calzone.name": "Calzone",
      "menu.item.66.kibbeh.name": "Kibbé",
      "menu.item.67.meat-spinach-pie.name": "Tarte viande/épinards",
      "menu.item.68.fattoush-salad.name": "Salade fattoush",
      "menu.item.69.tabouleh-salad.name": "Salade taboulé",
      "menu.item.7.chicken-fingers-w-fries.name": "Doigts de poulet avec frites",
      "menu.item.70.greek-salad.name": "Salade grecque",
      "menu.item.71.caesar-salad.name": "Salade César",
      "menu.item.72.vine-leaves.name": "Feuilles de vigne",
      "menu.item.73.pita-bread-pack.name": "Pack de pain pita",
      "menu.item.74.fattoush-salad.name": "Salade fattoush",
      "menu.item.75.tabouleh-salad.name": "Salade taboulé",
      "menu.item.76.greek-salad.name": "Salade grecque",
      "menu.item.77.caesar-salad.name": "Salade César",
      "menu.item.78.chicken-or-beef.desc": "Viande, riz, salade, pommes de terre.",
      "menu.item.78.chicken-or-beef.name": "Poulet ou bœuf",
      "menu.item.79.donair.desc": "Viande, riz, salade, pommes de terre.",
      "menu.item.79.donair.name": "Donair",
      "menu.item.8.club-sandwich-w-fries.name": "Club sandwich avec frites",
      "menu.item.80.mixed.desc": "Viande, riz, salade, pommes de terre.",
      "menu.item.80.mixed.name": "Mixte",
      "menu.item.81.kafta.desc": "Viande, riz, salade, pommes de terre.",
      "menu.item.81.kafta.name": "Kefta",
      "menu.item.82.shish-kabab-2x-beef.desc": "Viande, riz, salade, pommes de terre.",
      "menu.item.82.shish-kabab-2x-beef.name": "Shish kabab (2x bœuf)",
      "menu.item.83.shish-taouk-2x-chicken.desc": "Viande, riz, salade, pommes de terre.",
      "menu.item.83.shish-taouk-2x-chicken.name": "Shish taouk (2x poulet)",
      "menu.item.9.beef-or-chicken-stir-fry.name": "Sauté de bœuf ou poulet",
      "menu.tab.burgers": "Hamburgers",
      "menu.tab.combo": "Boîte combo",
      "menu.tab.italian": "Plats italiens",
      "menu.tab.pizza": "Pizzas",
      "menu.tab.plates": "Assiettes",
      "menu.tab.platters": "Plateaux",
      "menu.tab.salads": "Salades",
      "menu.tab.sides": "Accompagnements",
      "menu.tab.starters": "Entrées",
      "menu.tab.wraps": "Wraps shawarma",
      "menu.text": "Burgers, entrées, boîtes combo, pizzas, plateaux, wraps, salades et plus.",
      "nav.contact": "Nous joindre",
      "nav.home": "Accueil",
      "nav.menu": "Menu",
      "nav.order": "Commander maintenant",
      "nav.story": "Histoire",
      "reviews.eyebrow": "Avis des clients",
      "reviews.h2": "Apprécié par les clients à Iqaluit.",
      "reviews.r1": "Vraiment une cuisine libanaise authentique avec beaucoup de saveur et un service sympathique.",
      "reviews.r2": "Toujours délicieux, livraison fiable et portions généreuses.",
      "reviews.r3": "Un favori local avec des frites impressionnantes et un excellent shawarma.",
      "reviews.r4": "Un des meilleurs endroits pour manger à Iqaluit.",
      "spec.burgers.text": "Cheeseburgers, burgers de poulet, fish burgers et club sandwiches.",
      "spec.burgers.title": "Hamburgers",
      "spec.family.text": "Boîtes combo, plateaux et repas généreux pour groupes et familles.",
      "spec.family.title": "Repas familiaux",
      "spec.italian.text": "Lasagnes, pâtes à la sauce viande, boulettes de viande, pain à l’ail et calzone.",
      "spec.italian.title": "Plats italiens",
      "spec.pizza.text": "Cheese, pepperoni, meat lover, végétarien, donair et Yummy Special.",
      "spec.pizza.title": "Nos Pizzas",
      "spec.shawarma.text": "Wraps frais, assiettes, donair, kafta, shish taouk et shish kabab.",
      "spec.shawarma.title": "Nos Shawarmas",
      "spec.sides.text": "Poutine, frites, rondelles d’oignon, bâtonnets de mozzarella, salades et pain pita.",
      "spec.sides.title": "Entrées et accompagnements",
      "specialties.eyebrow": "Nos spécialités",
      "specialties.h2": "Des favoris frais pour tous les appétits.",
      "title.home": "Yummy Shawarma | Cuisine libanaise à Iqaluit",
      "title.menu": "Notre Menu | Yummy Shawarma",
      "title.about": "Histoire | Yummy Shawarma",
      "title.contact": "Nous joindre | Yummy Shawarma",
    }
  };

  // Build `en` baseline from current DOM so missing translations reliably fall back to English
  const nodesInit = document.querySelectorAll('[data-i18n]');
  nodesInit.forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (key && !translations.en[key]) {
      translations.en[key] = node.tagName.toLowerCase() === 'title' ? document.title : node.textContent;
    }
  });


  function translateTo(lang) {
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (!key) return;
      // Only apply translations if they exist for the requested language
      // Do not mix languages via fallback
      const value = (translations[lang] && translations[lang][key]) || null;
      if (!value) return; // Keep existing text when no translation in the requested language
      if (node.tagName.toLowerCase() === 'title') {
        document.title = value;
      } else {
        node.textContent = value;
      }
    });

    // mark active language button
    document.querySelectorAll('.lang').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('site-lang', lang);
  }

  // initialize language (default to English; accept en, fr)
  let saved = localStorage.getItem('site-lang') || 'en';
  if (!['en', 'fr'].includes(saved)) {
    saved = 'en';
    localStorage.setItem('site-lang', 'en');
  }
  translateTo(saved);

  document.querySelectorAll('.lang').forEach(btn => {
    btn.addEventListener('click', () => {
      translateTo(btn.dataset.lang);
    });
  });
});
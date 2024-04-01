function Animal(animalClass, species, lifespan, group, food, description, length, weight, found, image, longDescription) {
    this.animalClass = animalClass;
    this.species = species;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
    this.image = image;
    this.longDescription = longDescription; 
}

const kookaburra = new Animal(
    "kookaburra",
    "Kookaburra",
    "20 years",
    "birds",
    "Insects and small animals including snakes, frogs and lizards",
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    "43cm",
    "300g",
    "Australia wide",
    "kookaburra.jpg",
    "The laughing kookaburra, scientifically known as Dacelo novaeguineae, is a charismatic bird native to Australia, famous for its distinctive call resembling human laughter. As the largest member of the kingfisher family, it measures up to 45 centimeters in length and weighs around 300 grams. Sporting predominantly brown plumage with blue streaks on the wings and tail, the kookaburra has a stout build, large head, and a powerful, hooked beak. These birds primarily feed on insects, small vertebrates, and occasionally snakes, frogs, and lizards. However, they exhibit opportunistic feeding behavior and have been observed consuming fruits and seeds, especially in suburban areas. Kookaburras are highly social, forming close-knit family units characterized by cooperative behaviors such as hunting and territory defense. In Aboriginal folklore, the kookaburra holds cultural significance, often symbolizing good luck and prosperity. Despite their adaptability and relatively common status, habitat loss, fragmentation, and competition from invasive species pose threats to their survival. Conservation efforts aimed at preserving their natural habitats are crucial for ensuring the continued existence of these iconic Australian birds."
);

const cassowary = new Animal(
    "cassowary",
    "Cassowary",
    "20 years",
    "birds",
    "Plants matter like fruit, insects and small animals like mice and lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7m",
    "44kg",
    "Queensland",
    "cassowary.jpg",
    "The cassowary, known scientifically as Casuarius casuarius, is a large flightless bird native to the tropical forests of New Guinea and northeastern Australia. With its striking appearance and vibrant colors, the cassowary stands as one of the largest bird species globally, reaching heights of up to two meters and weighing as much as 60 kilograms. Despite their impressive size, cassowaries are known for their agility and speed, capable of reaching speeds of up to 50 kilometers per hour. These remarkable birds play a crucial role in their ecosystem as seed dispersers, helping to maintain the health and diversity of the rainforest. They primarily feed on fallen fruits, but also consume a variety of plants, insects, and small animals. Cassowaries are equipped with powerful legs and sharp claws, which they use for foraging and defense. Despite their ecological importance, cassowaries face numerous threats, including habitat loss, fragmentation, and hunting. Encroachment of human activities into their natural habitats has led to increased conflict and mortality rates. Conservation efforts are underway to protect cassowary populations and their habitats, including habitat restoration initiatives and public awareness campaigns. In Aboriginal culture, the cassowary holds significant spiritual importance, often revered as a symbol of strength and power. However, these magnificent birds are currently listed as endangered, highlighting the urgent need for conservation action to safeguard their future. Through collaborative efforts involving governments, conservation organizations, and local communities, we can work towards ensuring the survival of this iconic species for generations to come."
);

const cockatoo = new Animal(
    "cockatoo",
    "Yellow-tailed black cockatoo",
    "41 years",
    "birds",
    "Fruit, seeds and other plant material",
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
    "65 cm",
    "900 grams",
    "SE Australia",
    "cockatoo.jpg",
    "The yellow-tailed black cockatoo, scientifically known as Calyptorhynchus funereus, is a charismatic bird found in southeastern Australia. With its distinctive appearance and loud, wailing calls, the cockatoo is a familiar sight in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia. These birds play an essential role in forest ecosystems, dispersing seeds and creating nest hollows for other wildlife. The yellow-tailed black cockatoo exhibits sexual dimorphism, with males and females displaying differences in their physical characteristics. Adult males have a black beak and pinkish-red eye-rings, while females have a bone-colored beak and grey eye-rings. In flight, these cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Despite their ecological importance, yellow-tailed black cockatoos face threats from habitat loss, fragmentation, and poaching. Encroachment of human activities into their natural habitats has resulted in declines in their populations, making them a conservation concern. Conservation efforts, including habitat restoration and captive breeding programs, are underway to protect these magnificent birds and ensure their survival in the wild. In addition to their ecological significance, yellow-tailed black cockatoos hold cultural importance in indigenous communities. They are often featured in Aboriginal folklore and are associated with spiritual beliefs and practices. By addressing the various challenges facing yellow-tailed black cockatoos and their habitats, we can work towards preserving their populations and maintaining the balance of forest ecosystems for future generations."
);

const perentie = new Animal(
    "perentie",
    "Perentie",
    "20 years",
    "reptiles",
    "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "2.5 m",
    "20kg",
    "Deserts",
    "perentie.jpg",
    "The perentie, scientifically known as Varanus giganteus, holds a significant place in the ecosystem of Australia's arid regions, earning its status as the largest monitor lizard on the continent. With an imposing length of up to 2.5 meters and a weight reaching around 20 kilograms, the perentie embodies strength and resilience in its habitat. Thriving primarily in the remote and harsh landscapes west of the Great Dividing Range, this lizard species maintains a reclusive lifestyle, rarely encountering humans due to its elusive nature. As a carnivorous predator, the perentie preys upon a diverse range of animals including kangaroos, rabbits, lizards, and birds, asserting its dominance as a top predator in the food chain. Beyond its ecological significance, the perentie holds cultural importance in Aboriginal traditions, representing totemic connections and featuring prominently in indigenous folklore such as the Ngiṉṯaka dreaming. Despite its adaptation to harsh conditions, the perentie faces threats from habitat degradation and human activities. Conservation efforts are crucial to ensure the survival of this iconic species and preserve its role in Australia's rugged landscapes."
);

const hawksbillTurtle = new Animal(
    "hawksbill",
    "Hawksbill turtle",
    "50 years",
    "reptiles",
    "Other animals (sponges & jellyfish), sea plants",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80cm (carapace)",
    "50kg",
    "Tropical coasts of Queensland, Northern Territory and Western Australia",
    "hawksbillTurtle.jpg",
    "The hawksbill turtle is a critically endangered species found in tropical oceans around the world. These turtles play a crucial role in marine ecosystems, helping to maintain the health of coral reefs by controlling populations of sponge and jellyfish. Unfortunately, hawksbill turtles are facing numerous threats including habitat loss, pollution, and poaching. Conservation efforts are underway to protect these magnificent creatures and ensure their survival for future generations."
);

const frillNeckedLizard = new Animal(
    "frillneck",
    "Frill-necked lizard",
    "20 years",
    "reptiles",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90cm",
    "1 kg",
    "Northern Australia",
    "frillNeckedLizard.jpg",
    "The frill-necked lizard, also known as the frilled lizard, is a unique reptile found in northern Australia and New Guinea. It is known for its distinctive frill, which it displays when threatened to intimidate predators. Frill-necked lizards are skilled climbers and spend much of their time in trees, hunting for insects and other small prey. Despite their fearsome appearance, these lizards are generally shy and will usually flee from danger rather than confront it."
);

const echidna = new Animal(
    "echidna",
    "Echidna",
    "50 years",
    "mammals",
    "Insects such as ants and termites, beetle larvae and worms",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "76cm",
    "10kg",
    "Throughout Australia",
    "echidna.jpg",
    "The echidna, also known as the spiny anteater, is a unique mammal found throughout Australia and New Guinea. It is one of only two egg-laying mammals in the world, known as monotremes. Echidnas are covered in sharp spines, which serve as protection against predators. They have a long, sticky tongue which they use to catch ants, termites, and other insects. Echidnas are solitary animals, only coming together to mate. They are important contributors to their ecosystems, helping to control insect populations and aerate the soil with their digging behavior."
);

const tasmanianDevil = new Animal(
    "devil",
    "Tasmanian devil",
    "5 years",
    "mammals",
    "A predator, then eat meat from other animals such as wallabies and wombats",
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    "70cm",
    "10kg",
    "Tasmania",
    "tasmanianDevil.jpg",
    "The Tasmanian devil is a carnivorous marsupial native to the island of Tasmania. It is known for its ferocious temperament and powerful bite, which allows it to consume every part of its prey, including bones and fur. Tasmanian devils play a vital role in maintaining ecosystem health by controlling populations of small mammals and scavenging on carrion. Unfortunately, they are facing numerous threats including habitat loss, disease, and persecution by humans. Conservation efforts are underway to protect these iconic animals and ensure their survival in the wild."
);

const quokka = new Animal(
    "quokka",
    "Quokka",
    "10 years",
    "mammals",
    "Plant eaters, they munch on shrubs and grasses",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    "50cm",
    "3kg",
    "Only found on Rottnest Island and a few places on mainland Western Australia",
    "quokka.jpg",
    "The quokka is a small marsupial found in southwestern Australia. It is known for its friendly and curious nature, often approaching humans without fear. Quokkas primarily feed on shrubs and grasses, using their sharp claws to dig for roots and tubers. They are important prey for predators such as foxes and feral cats, but their main threat comes from habitat loss and fragmentation. Conservation efforts are underway to protect quokka populations and their habitats, including predator control programs and habitat restoration projects."
);

export const mammals = [echidna, tasmanianDevil, quokka];
export const reptiles = [perentie, hawksbillTurtle, frillNeckedLizard];
export const birds = [kookaburra, cassowary, cockatoo];
export const allAnimals = [
    echidna,
    tasmanianDevil,
    quokka,
    perentie,
    hawksbillTurtle,
    frillNeckedLizard,
    kookaburra,
    cassowary,
    cockatoo,
];
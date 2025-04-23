const questions = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                answers: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                answers: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest mammal in the world?",
                answers: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                correct: 1
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                answers: ["China", "Korea", "Japan", "Thailand"],
                correct: 2
            },
            {
                question: "What is the largest organ in the human body?",
                answers: ["Heart", "Brain", "Liver", "Skin"],
                correct: 3
            },
            {
                question: "How many continents are there?",
                answers: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Which is the longest river in the world?",
                answers: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                correct: 1
            },
            {
                question: "What is the capital of Australia?",
                answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            },
            {
                question: "Which is the smallest prime number?",
                answers: ["0", "1", "2", "3"],
                correct: 2
            },
            {
                question: "How many players are there in a soccer team?",
                answers: ["9", "10", "11", "12"],
                correct: 2
            },
            {
                question: "What is the main component of the Sun?",
                answers: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
                correct: 2
            },
            {
                question: "Which animal is known as the King of the Jungle?",
                answers: ["Tiger", "Lion", "Elephant", "Gorilla"],
                correct: 1
            },
            {
                question: "What is the chemical symbol for silver?",
                answers: ["Si", "Ag", "Au", "Fe"],
                correct: 1
            },
            {
                question: "How many teeth does an adult human have?",
                answers: ["28", "30", "32", "34"],
                correct: 2
            },
            {
                question: "Which planet is closest to the Sun?",
                answers: ["Venus", "Mars", "Mercury", "Earth"],
                correct: 2
            },
            {
                question: "What is the capital of Canada?",
                answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
                correct: 3
            },
            {
                question: "How many sides does a hexagon have?",
                answers: ["5", "6", "7", "8"],
                correct: 1
            },
            {
                question: "Which gas do plants absorb from the air?",
                answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "How many colors are in a rainbow?",
                answers: ["5", "6", "7", "8"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Who painted the Mona Lisa?",
                answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                answers: ["Ag", "Fe", "Au", "Cu"],
                correct: 2
            },
            {
                question: "Which element has the atomic number 1?",
                answers: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
                correct: 1
            },
            {
                question: "What is the capital of Brazil?",
                answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                correct: 2
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the speed of sound in air?",
                answers: ["343 m/s", "443 m/s", "543 m/s", "643 m/s"],
                correct: 0
            },
            {
                question: "Which planet has the most moons?",
                answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What is the capital of Egypt?",
                answers: ["Alexandria", "Cairo", "Luxor", "Giza"],
                correct: 1
            },
            {
                question: "Who discovered penicillin?",
                answers: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
                correct: 0
            },
            {
                question: "What is the hardest mineral on Earth?",
                answers: ["Ruby", "Sapphire", "Diamond", "Emerald"],
                correct: 2
            },
            {
                question: "Which country invented paper?",
                answers: ["Japan", "Korea", "China", "India"],
                correct: 2
            },
            {
                question: "What is the longest bone in the human body?",
                answers: ["Femur", "Tibia", "Humerus", "Radius"],
                correct: 0
            },
            {
                question: "Who developed the theory of relativity?",
                answers: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
                correct: 1
            },
            {
                question: "What is the capital of Argentina?",
                answers: ["Santiago", "Lima", "Buenos Aires", "Montevideo"],
                correct: 2
            },
            {
                question: "Which instrument measures atmospheric pressure?",
                answers: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
                correct: 1
            },
            {
                question: "What is the largest species of shark?",
                answers: ["Great White", "Whale Shark", "Tiger Shark", "Hammerhead"],
                correct: 1
            },
            {
                question: "Who painted 'The Starry Night'?",
                answers: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dalí"],
                correct: 2
            },
            {
                question: "What is the capital of South Korea?",
                answers: ["Seoul", "Busan", "Incheon", "Daegu"],
                correct: 0
            },
            {
                question: "Which planet is known as the Morning Star?",
                answers: ["Mars", "Venus", "Mercury", "Jupiter"],
                correct: 1
            },
            {
                question: "What is the main component of natural gas?",
                answers: ["Ethane", "Propane", "Methane", "Butane"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "In which year did World War I begin?",
                answers: ["1914", "1915", "1916", "1917"],
                correct: 0
            },
            {
                question: "What is the speed of light in kilometers per second?",
                answers: ["299,792", "199,792", "399,792", "499,792"],
                correct: 0
            },
            {
                question: "Who discovered the structure of DNA?",
                answers: ["Watson and Crick", "Franklin and Wilkins", "Mendel and Darwin", "Einstein and Bohr"],
                correct: 0
            },
            {
                question: "What is the atomic number of Uranium?",
                answers: ["92", "94", "96", "98"],
                correct: 0
            },
            {
                question: "Which year was the Magna Carta signed?",
                answers: ["1215", "1225", "1235", "1245"],
                correct: 0
            },
            {
                question: "What is the deepest point in the ocean?",
                answers: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Puerto Rico Trench"],
                correct: 0
            },
            {
                question: "Who wrote 'The Prince'?",
                answers: ["Machiavelli", "Rousseau", "Voltaire", "Locke"],
                correct: 0
            },
            {
                question: "What is the smallest particle of an element?",
                answers: ["Atom", "Electron", "Proton", "Quark"],
                correct: 0
            },
            {
                question: "Which element has the highest melting point?",
                answers: ["Tungsten", "Carbon", "Platinum", "Titanium"],
                correct: 0
            },
            {
                question: "Who discovered radioactivity?",
                answers: ["Henri Becquerel", "Marie Curie", "Wilhelm Röntgen", "Ernest Rutherford"],
                correct: 0
            },
            {
                question: "What is the largest known prime number?",
                answers: ["2⁸²,⁵⁸⁹,⁹³³-1", "2⁸²,⁵⁸⁹,⁹³³+1", "2⁸²,⁵⁸⁹,⁹³³×2", "2⁸²,⁵⁸⁹,⁹³³÷2"],
                correct: 0
            },
            {
                question: "Which philosopher wrote 'Thus Spoke Zarathustra'?",
                answers: ["Nietzsche", "Kant", "Hegel", "Schopenhauer"],
                correct: 0
            },
            {
                question: "What is the half-life of Carbon-14?",
                answers: ["5,730 years", "5,740 years", "5,750 years", "5,760 years"],
                correct: 0
            },
            {
                question: "Who proved the law of universal gravitation?",
                answers: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Albert Einstein"],
                correct: 0
            },
            {
                question: "What is the most abundant element in the universe?",
                answers: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
                correct: 0
            },
            {
                question: "Which ancient wonder was located in Rhodes?",
                answers: ["Colossus", "Lighthouse", "Mausoleum", "Gardens"],
                correct: 0
            },
            {
                question: "What is the smallest known subatomic particle?",
                answers: ["Quark", "Electron", "Neutrino", "Photon"],
                correct: 0
            },
            {
                question: "Who developed quantum mechanics?",
                answers: ["Max Planck", "Niels Bohr", "Werner Heisenberg", "Erwin Schrödinger"],
                correct: 0
            },
            {
                question: "What is the age of the universe in billions of years?",
                answers: ["13.8", "14.8", "15.8", "16.8"],
                correct: 0
            },
            {
                question: "Which mathematician proved Fermat's Last Theorem?",
                answers: ["Andrew Wiles", "Grigori Perelman", "Terence Tao", "Edward Witten"],
                correct: 0
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is the chemical formula for water?",
                answers: ["CO2", "H2O", "O2", "N2"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                answers: ["Brain", "Heart", "Liver", "Skin"],
                correct: 3
            },
            {
                question: "Which planet is closest to the Sun?",
                answers: ["Venus", "Earth", "Mercury", "Mars"],
                correct: 2
            },
            {
                question: "What is the hardest natural substance?",
                answers: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "What is the speed of light?",
                answers: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
                correct: 0
            },
            {
                question: "Which gas do plants absorb?",
                answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the atomic number of Hydrogen?",
                answers: ["1", "2", "3", "4"],
                correct: 0
            },
            {
                question: "Which blood type is known as the universal donor?",
                answers: ["A", "B", "AB", "O"],
                correct: 3
            },
            {
                question: "What is the main component of the Sun?",
                answers: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
                correct: 2
            },
            {
                question: "How many bones are in the human body?",
                answers: ["206", "207", "208", "209"],
                correct: 0
            },
            {
                question: "What is the study of weather called?",
                answers: ["Geology", "Meteorology", "Biology", "Astronomy"],
                correct: 1
            },
            {
                question: "Which vitamin is produced by sunlight?",
                answers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                correct: 3
            },
            {
                question: "What is the largest planet in our solar system?",
                answers: ["Mars", "Saturn", "Jupiter", "Neptune"],
                correct: 2
            },
            {
                question: "Which metal is liquid at room temperature?",
                answers: ["Iron", "Copper", "Mercury", "Gold"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for oxygen?",
                answers: ["O", "O2", "Os", "Ox"],
                correct: 0
            },
            {
                question: "Which animal has the longest lifespan?",
                answers: ["Elephant", "Tortoise", "Whale", "Parrot"],
                correct: 1
            },
            {
                question: "What is the smallest unit of life?",
                answers: ["Cell", "Atom", "Molecule", "Gene"],
                correct: 0
            },
            {
                question: "Which gas makes up most of Earth's atmosphere?",
                answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the study of fossils called?",
                answers: ["Archaeology", "Paleontology", "Biology", "Geology"],
                correct: 1
            },
            {
                question: "Which planet is known as the Red Planet?",
                answers: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the hardest natural substance on Earth?",
                answers: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "Which element has the symbol 'Fe'?",
                answers: ["Iron", "Gold", "Silver", "Copper"],
                correct: 0
            },
            {
                question: "What is the process of plants making food called?",
                answers: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
                correct: 0
            },
            {
                question: "Which part of the brain controls balance?",
                answers: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
                correct: 1
            },
            {
                question: "What is the unit of electrical resistance?",
                answers: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 2
            },
            {
                question: "Which gas is responsible for the ozone layer?",
                answers: ["O2", "O3", "CO2", "N2"],
                correct: 1
            },
            {
                question: "What is the study of heredity called?",
                answers: ["Biology", "Genetics", "Evolution", "Anatomy"],
                correct: 1
            },
            {
                question: "Which element is essential for human bones?",
                answers: ["Iron", "Calcium", "Potassium", "Sodium"],
                correct: 1
            },
            {
                question: "What is the speed of sound in air?",
                answers: ["343 m/s", "443 m/s", "543 m/s", "643 m/s"],
                correct: 0
            },
            {
                question: "Which planet has the most moons?",
                answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What is the smallest bone in the human body?",
                answers: ["Stapes", "Hammer", "Anvil", "Stirrup"],
                correct: 0
            },
            {
                question: "Which blood vessels carry blood away from the heart?",
                answers: ["Veins", "Arteries", "Capillaries", "Venules"],
                correct: 1
            },
            {
                question: "What is the chemical symbol for silver?",
                answers: ["Si", "Ag", "Au", "Sr"],
                correct: 1
            },
            {
                question: "Which scientist discovered penicillin?",
                answers: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
                correct: 0
            },
            {
                question: "What is the unit of force?",
                answers: ["Pascal", "Joule", "Newton", "Watt"],
                correct: 2
            },
            {
                question: "Which element is a noble gas?",
                answers: ["Nitrogen", "Oxygen", "Helium", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the study of earthquakes called?",
                answers: ["Geology", "Seismology", "Volcanology", "Meteorology"],
                correct: 1
            },
            {
                question: "Which organ produces insulin?",
                answers: ["Liver", "Kidney", "Pancreas", "Gallbladder"],
                correct: 2
            },
            {
                question: "What is the unit of electric current?",
                answers: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 1
            },
            {
                question: "Which planet is known as the Evening Star?",
                answers: ["Mars", "Venus", "Mercury", "Jupiter"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the atomic number of Uranium?",
                answers: ["92", "90", "94", "88"],
                correct: 0
            },
            {
                question: "What is Avogadro's number?",
                answers: ["6.022 × 10²³", "6.022 × 10²²", "6.022 × 10²⁴", "6.022 × 10²¹"],
                correct: 0
            },
            {
                question: "Which particle has a negative charge?",
                answers: ["Proton", "Neutron", "Electron", "Positron"],
                correct: 2
            },
            {
                question: "What is the half-life of Uranium-238?",
                answers: ["4.5 billion years", "3.5 billion years", "5.5 billion years", "2.5 billion years"],
                correct: 0
            },
            {
                question: "Which law states that energy cannot be created or destroyed?",
                answers: ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics", "Zeroth Law of Thermodynamics"],
                correct: 0
            },
            {
                question: "What is the molecular formula for glucose?",
                answers: ["C6H12O6", "C6H6O6", "C6H10O6", "C6H8O6"],
                correct: 0
            },
            {
                question: "Which scientist proposed the uncertainty principle?",
                answers: ["Heisenberg", "Bohr", "Schrödinger", "Einstein"],
                correct: 0
            },
            {
                question: "What is the pH of a neutral solution?",
                answers: ["7", "6", "8", "7.5"],
                correct: 0
            },
            {
                question: "Which element has the highest atomic number?",
                answers: ["Oganesson", "Tennessine", "Livermorium", "Moscovium"],
                correct: 0
            },
            {
                question: "What is the speed of light in a vacuum?",
                answers: ["299,792,458 m/s", "299,792,457 m/s", "299,792,459 m/s", "299,792,456 m/s"],
                correct: 0
            },
            {
                question: "Which quantum number describes the shape of an orbital?",
                answers: ["Angular Momentum", "Magnetic", "Principal", "Spin"],
                correct: 0
            },
            {
                question: "What is the strongest known force in nature?",
                answers: ["Strong Nuclear", "Weak Nuclear", "Electromagnetic", "Gravitational"],
                correct: 0
            },
            {
                question: "Which particle mediates the electromagnetic force?",
                answers: ["Photon", "Gluon", "W Boson", "Z Boson"],
                correct: 0
            },
            {
                question: "What is the unit of luminous intensity?",
                answers: ["Candela", "Lumen", "Lux", "Watt"],
                correct: 0
            },
            {
                question: "Which law describes the behavior of ideal gases?",
                answers: ["PV = nRT", "F = ma", "E = mc²", "F = kx"],
                correct: 0
            },
            {
                question: "What is the charge of a proton in coulombs?",
                answers: ["1.602 × 10⁻¹⁹", "1.602 × 10⁻²⁰", "1.602 × 10⁻¹⁸", "1.602 × 10⁻²¹"],
                correct: 0
            },
            {
                question: "Which element has the highest electronegativity?",
                answers: ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
                correct: 0
            },
            {
                question: "What is the SI unit of pressure?",
                answers: ["Pascal", "Bar", "Atmosphere", "Torr"],
                correct: 0
            },
            {
                question: "Which scientist discovered nuclear fission?",
                answers: ["Otto Hahn", "Ernest Rutherford", "Marie Curie", "Enrico Fermi"],
                correct: 0
            },
            {
                question: "What is the wavelength of visible light?",
                answers: ["380-700 nm", "300-600 nm", "400-800 nm", "350-750 nm"],
                correct: 0
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                answers: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "In which year did World War II end?",
                answers: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who was the first man to walk on the moon?",
                answers: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"],
                correct: 1
            },
            {
                question: "Which empire was the largest in history?",
                answers: ["Roman Empire", "British Empire", "Mongol Empire", "Persian Empire"],
                correct: 1
            },
            {
                question: "When did the American Civil War begin?",
                answers: ["1861", "1862", "1863", "1864"],
                correct: 0
            },
            {
                question: "Who painted the Mona Lisa?",
                answers: ["Van Gogh", "Da Vinci", "Michelangelo", "Raphael"],
                correct: 1
            },
            {
                question: "Which country was the first to use paper money?",
                answers: ["Egypt", "Greece", "China", "India"],
                correct: 2
            },
            {
                question: "When did the French Revolution begin?",
                answers: ["1789", "1790", "1791", "1792"],
                correct: 0
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                answers: ["Mother Teresa", "Marie Curie", "Pearl Buck", "Jane Addams"],
                correct: 1
            },
            {
                question: "Which civilization built the pyramids?",
                answers: ["Greek", "Roman", "Egyptian", "Persian"],
                correct: 2
            },
            {
                question: "When did Columbus reach America?",
                answers: ["1490", "1491", "1492", "1493"],
                correct: 2
            },
            {
                question: "Who was the first Emperor of China?",
                answers: ["Qin Shi Huang", "Han Wudi", "Sun Yat-sen", "Kublai Khan"],
                correct: 0
            },
            {
                question: "Which country was the first to reach the South Pole?",
                answers: ["USA", "Norway", "Britain", "Russia"],
                correct: 1
            },
            {
                question: "When did World War I end?",
                answers: ["1916", "1917", "1918", "1919"],
                correct: 2
            },
            {
                question: "Who wrote the Declaration of Independence?",
                answers: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
                correct: 2
            },
            {
                question: "Which ancient wonder was in Egypt?",
                answers: ["Hanging Gardens", "Colossus", "Great Pyramid", "Temple of Artemis"],
                correct: 2
            },
            {
                question: "When did the Renaissance begin?",
                answers: ["13th century", "14th century", "15th century", "16th century"],
                correct: 1
            },
            {
                question: "Who was the first female pharaoh?",
                answers: ["Nefertiti", "Cleopatra", "Hatshepsut", "Tiye"],
                correct: 2
            },
            {
                question: "Which empire invented paper?",
                answers: ["Roman", "Greek", "Chinese", "Persian"],
                correct: 2
            },
            {
                question: "When did the Industrial Revolution begin?",
                answers: ["1750s", "1760s", "1770s", "1780s"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "In which year did the Berlin Wall fall?",
                answers: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Who was the first Emperor of Rome?",
                answers: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                correct: 1
            },
            {
                question: "When was the Magna Carta signed?",
                answers: ["1215", "1225", "1235", "1245"],
                correct: 0
            },
            {
                question: "Which battle ended the Napoleonic Wars?",
                answers: ["Waterloo", "Austerlitz", "Leipzig", "Borodino"],
                correct: 0
            },
            {
                question: "Who was the longest-reigning British monarch?",
                answers: ["Victoria", "Elizabeth II", "George III", "Henry VIII"],
                correct: 1
            },
            {
                question: "When did the Russian Revolution occur?",
                answers: ["1905", "1917", "1921", "1925"],
                correct: 1
            },
            {
                question: "Which civilization built Machu Picchu?",
                answers: ["Maya", "Aztec", "Inca", "Olmec"],
                correct: 2
            },
            {
                question: "Who wrote 'The Art of War'?",
                answers: ["Confucius", "Sun Tzu", "Lao Tzu", "Mencius"],
                correct: 1
            },
            {
                question: "When did the Ottoman Empire fall?",
                answers: ["1918", "1920", "1922", "1924"],
                correct: 2
            },
            {
                question: "Which pharaoh built the Great Pyramid of Giza?",
                answers: ["Khufu", "Khafre", "Menkaure", "Djoser"],
                correct: 0
            },
            {
                question: "When was the United Nations founded?",
                answers: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who was the first Tudor monarch?",
                answers: ["Henry VII", "Henry VIII", "Edward VI", "Mary I"],
                correct: 0
            },
            {
                question: "Which year was the American Constitution signed?",
                answers: ["1776", "1783", "1787", "1789"],
                correct: 2
            },
            {
                question: "Who discovered penicillin?",
                answers: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
                correct: 0
            },
            {
                question: "When did the Cold War end?",
                answers: ["1989", "1990", "1991", "1992"],
                correct: 2
            },
            {
                question: "Which empire was ruled by Justinian I?",
                answers: ["Roman", "Byzantine", "Ottoman", "Persian"],
                correct: 1
            },
            {
                question: "When was the Declaration of Independence signed?",
                answers: ["July 2, 1776", "July 4, 1776", "August 2, 1776", "September 4, 1776"],
                correct: 1
            },
            {
                question: "Who was the first female Prime Minister of Britain?",
                answers: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
                correct: 0
            },
            {
                question: "Which battle changed the course of WWII in the Pacific?",
                answers: ["Midway", "Pearl Harbor", "Iwo Jima", "Guadalcanal"],
                correct: 0
            },
            {
                question: "When did the Spanish Civil War end?",
                answers: ["1936", "1937", "1938", "1939"],
                correct: 3
            }
        ],
        hard: [
            {
                question: "Which empire was ruled by Kublai Khan?",
                answers: ["Roman Empire", "Mongol Empire", "Ottoman Empire", "Persian Empire"],
                correct: 1
            },
            {
                question: "When was the Battle of Hastings?",
                answers: ["1066", "1076", "1086", "1096"],
                correct: 0
            },
            {
                question: "Who was the last Ptolemaic ruler of Egypt?",
                answers: ["Cleopatra VII", "Ptolemy XV", "Ptolemy XIV", "Arsinoe IV"],
                correct: 0
            },
            {
                question: "When was the Treaty of Westphalia signed?",
                answers: ["1648", "1649", "1650", "1651"],
                correct: 0
            },
            {
                question: "Which battle ended the Western Roman Empire?",
                answers: ["Ravenna", "Constantinople", "Rome", "Carthage"],
                correct: 0
            },
            {
                question: "Who was the first Shogun of Japan?",
                answers: ["Minamoto Yoritomo", "Tokugawa Ieyasu", "Oda Nobunaga", "Toyotomi Hideyoshi"],
                correct: 0
            },
            {
                question: "When was the Rosetta Stone discovered?",
                answers: ["1799", "1800", "1801", "1802"],
                correct: 0
            },
            {
                question: "Which dynasty ruled China the longest?",
                answers: ["Zhou", "Han", "Ming", "Qing"],
                correct: 0
            },
            {
                question: "Who was the last Sassanid Emperor?",
                answers: ["Yazdegerd III", "Khosrow II", "Hormizd IV", "Kavad II"],
                correct: 0
            },
            {
                question: "When was the Battle of Adrianople?",
                answers: ["378 CE", "379 CE", "380 CE", "381 CE"],
                correct: 0
            },
            {
                question: "Which civilization first used the wheel?",
                answers: ["Sumerians", "Egyptians", "Indus Valley", "Chinese"],
                correct: 0
            },
            {
                question: "When was the Council of Nicaea?",
                answers: ["325 CE", "326 CE", "327 CE", "328 CE"],
                correct: 0
            },
            {
                question: "Who was the first Umayyad Caliph?",
                answers: ["Muawiyah I", "Yazid I", "Marwan I", "Abd al-Malik"],
                correct: 0
            },
            {
                question: "When was the Battle of Teutoburg Forest?",
                answers: ["9 CE", "10 CE", "11 CE", "12 CE"],
                correct: 0
            },
            {
                question: "Which empire defeated the Aztecs?",
                answers: ["Spanish", "Portuguese", "French", "British"],
                correct: 0
            },
            {
                question: "When was the Battle of Kadesh?",
                answers: ["1274 BCE", "1273 BCE", "1272 BCE", "1271 BCE"],
                correct: 0
            },
            {
                question: "Who was the first Ming Emperor?",
                answers: ["Hongwu", "Yongle", "Hongxi", "Xuande"],
                correct: 0
            },
            {
                question: "When was the Battle of Salamis?",
                answers: ["480 BCE", "479 BCE", "478 BCE", "477 BCE"],
                correct: 0
            },
            {
                question: "Which civilization built Göbekli Tepe?",
                answers: ["Pre-Pottery Neolithic", "Sumerians", "Akkadians", "Babylonians"],
                correct: 0
            },
            {
                question: "When was the Battle of Gaugamela?",
                answers: ["331 BCE", "330 BCE", "329 BCE", "328 BCE"],
                correct: 0
            }
        ]
    }
};
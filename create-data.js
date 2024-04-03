// from Wikipedia
//  https://en.wikipedia.org/wiki/List_of_films_featuring_extraterrestrials
const tsv = `	
10 Cloverfield Lane	2016	Cloverfield	
20 Million Miles to Earth	1957		
2001: A Space Odyssey	1968	Space Odyssey	
2001: A Space Travesty	2000		
2010: The Year We Make Contact	1984	Space Odyssey	
The 5th Wave	2016		
6 Days on Earth	2011		
Abbott and Costello Go to Mars	1953	Abbott and Costello	
Abraxas, Guardian of the Universe	1990		
Absolutely Anything	2015		
The Abyss	1989		
The Adventures of Buckaroo Banzai Across the 8th Dimension	1984		
Aelita	1924		
After Earth	2013		
Airplane II: The Sequel	1982	Airplane!	
Algol: Tragedy of Power	1920		
Alien	1979	Alien	
Alien 2: On Earth	1980		
Alien3	1992	Alien	
Alien Abduction	2005		
Alien Abduction	2014		
Alien Abduction: Incident in Lake County	1998		
Alien Agent	2007		
Alien Apocalypse	2005		
Alien Arsenal	1999		
Alien: Covenant	2017	Alien	
The Alien Factor	1978		
Alien Hunter	2003		
Alien Intruder	1993		
Alien Invasion Arizona	2005		
Alien Nation	1988	Alien Nation	
Alien Origin	2012		
Alien Raiders	2008		
Alien Resurrection	1997	Alien	
Alien: Romulus	2024	Alien	
Alien Siege	2005		
Alien Trespass	2009		
Aliens	1986	Alien	
Aliens Ate My Homework	2018		
Aliens in the Attic	2009		
Aliens vs. Avatars	2011		
Alien vs. Predator	2004	Alien vs. Predator	
Aliens vs. Predator: Requiem	2007	Alien vs. Predator	
Alien vs Ninja	2010		
All-Star Superman	2011	DC - Superman	
Allegro Non Troppo	1976		
Almost Human	2013		
Altered	2006		
Amazon Women on the Moon	1987		
The Andromeda Strain	1971		
The Angry Red Planet	1959		
Angry Video Game Nerd: The Movie	2014		
Annihilation	2018		
Apollo 18	2011		
Area 51	2015		
Area Q	2011		
Arena	1989		
The Arrival	1996	Arrival	
Arrival	2016		
Arrival II	1998	Arrival	
The Astronaut's Wife	1999		
Los astronautas	1964		
Atom Man vs. Superman (serial)	1950	DC - Superman	
Attack the Block	2011		
Attack of the 50 Foot Woman	1958	Attack of the 50 Foot Woman	
Attack of the 50 Ft. Woman (TV)	1993	Attack of the 50 Foot Woman	
Attraction	2017		
Avatar	2009	Avatar	
Avatar: The Way of Water	2022	Avatar	
The Avengers	2012	Marvel Cinematic Universe	
Avengers: Age of Ultron	2015	Marvel Cinematic Universe	
Avengers: Endgame	2019	Marvel Cinematic Universe	
Avengers: Infinity War	2018	Marvel Cinematic Universe	
AVH: Alien vs. Hunter	2007		
Ayalaan	2024	Ayalaan	
Babylon 5: A Call to Arms (TV)	1999		
Babylon 5: The Gathering (TV)	1993		
Babylon 5: In the Beginning (TV)	1998		
Babylon 5: The Legend of the Rangers	2002		
Babylon 5: The Lost Tales (TV)	2007		
Babylon 5: The River of Souls (TV)	1998		
Babylon 5: Thirdspace (TV)	1998		
Bad Taste	1987		
Barbarella	1968		
Batman v Superman: Dawn of Justice	2016	DC Extended Universe	
Batteries Not Included	1988		
Battle Beyond the Stars	1980		
Battle for Terra	2007		
Battle in Outer Space	1959	Godzilla	
Battle: Los Angeles	2011		
Battlefield Earth	2001		
Battleship	2012		
Batman: Hush	2019	DC Animated Movie Universe	
Ben 10: Alien Swarm	2009	Ben 10	
Ben 10: Destroy All Aliens	2012	Ben 10	
Ben 10: Race Against Time	2007	Ben 10	
Beware! The Blob	1972	The Blob	
Beyond Skyline	2017	Skyline	
Beyond Witch Mountain	1982	Witch Mountain	
Bill & Ted's Bogus Journey	1991	Bill & Ted	
Black Antenna	2019		
The Blob	1958	The Blob	
The Blob	1988	The Blob	
Bloodbath at the House of Death	1983		
Bloodsuckers from Outer Space	1984		
Body Snatchers	1993	Body Snatchers	
The Box	2009	Based on The Twilight Zone	
The Brain	1988		
The Brain from Planet Arous	1957		
Breeders	1986		
Brightburn	2019		
The Brother from Another Planet	1984		
Buck Rogers (serial)	1939	Buck Rogers	
Buzz Lightyear of Star Command: The Adventure Begins	2000	Toy Story	
The Cabbage Soup	1981		
Can of Worms	1999		
The Cape Canaveral Monsters	1960		
Captain Marvel	2019	Marvel Cinematic Universe	
Captain Video: Master of the Stratosphere (serial)	1951	Captain Video and His Video Rangers	
Captive State	2019		
Caravan of Courage: An Ewok Adventure	1984	Star Wars	
The Cat	1992		
The Cat from Outer Space	1978		
Cat-Women of the Moon	1953		
Ché OVNI	1968		
Chicken Little	2005		
Children of the Damned	1964	...of the Damned	
Christmas on Mars	2008		
The Chronicles of Riddick	2004	The Chronicles of Riddick	
Clara	2018		
CJ7	2008		
Close Encounters of the Third Kind	1977		
Cloverfield	2008	Cloverfield	
The Cloverfield Paradox	2018	Cloverfield	
Cocoon	1985	Cocoon	
Cocoon: The Return	1988	Cocoon	
Color Out of Space	2019		
Commando Cody: Sky Marshal of the Universe (serial)	1953	Commando Cody	
Communion	1989		
Coneheads	1993		
Contact	1997		
Cowboys & Aliens	2011		
Creature	1985		
The Creature Wasn't Nice	1983		
The Creeping Terror	1964		
Creepshow	1982		
Critters	1986	Critters	
Critters 2: The Main Course	1988	Critters	
Critters 3	1991	Critters	
Critters 4	1992	Critters	
Critters Attack!	2019	Critters	
The Curse	1987		
Daleks' Invasion Earth 2150 A.D.	1966	Doctor Who	
Dark City	1998		
The Dark Crystal	1982		
Dark Skies	2013		
Dark Star	1974		
Dark Universe	1993		
Darkening Sky	2010		
The Darkest Hour	2011		
The Day the Earth Stood Still	1951		
The Day the Earth Stood Still	2008	The Day the Earth Stood Still	
The Day the Earth Stopped	2008		
The Day Mars Invaded Earth	1963		
The Day of the Triffids	1962		
The Day the World Ended	2001		
The Deadly Spawn	1983		
Deadpool 2	2018	Marvel - X-Men 	
The Death of Superman	2018	DC Animated Movie Universe	
Decoys	2004	Decoys 	
Decoys 2: Alien Seduction	2007	Decoys 	
Destroy All Monsters	1968	Godzilla	
Devil Girl from Mars	1954		
District 9	2009		
Doctor Strange	2016	Marvel Cinematic Universe	
Doctor Who	1996	Doctor Who 	
Don't Look Up	2021		
Doom	2005		
Dr. Alien	1989		
Dr. Who and the Daleks	1965	Doctor Who	
Dreamcatcher	2003		
Dragonball Evolution	2009		
Dude, Where's My Car?	2000		
Dune	1984	Dune	
Dune: Part One	2021	Dune	
Dune: Part Two	2024	Dune	
E.T. the Extra-Terrestrial	1982		
Earth Girls Are Easy	1988		
Earth to Echo	2014		
Earth vs. the Flying Saucers	1956		
Edge of Tomorrow	2014		
Ender's Game	2013		
Enemy Mine	1985		
Escape from Planet Earth	2013		
Escape to Witch Mountain	1975	Witch Mountain	
Disney's Escape to Witch Mountain	1995	Witch Mountain	
Eternals	2021		
Europa Report	2013		
Evangelion: 1.0 You Are (Not) Alone	2007	Neon Genesis Evangelion	
Evangelion: 2.0 You Can (Not) Advance	2009	Neon Genesis Evangelion	
Evangelion: 3.0 You Can (Not) Redo	2012	Neon Genesis Evangelion	
Evangelion: 3.0+1.0 Thrice Upon a Time	2021	Neon Genesis Evangelion	
Evolution	2001		
Ewoks: The Battle for Endor	1985	Star Wars	
Excursion to the Moon	1908		
Explorers	1985		
Extinction	2018		
Extraterrestrial	2011		
Extraterrestrial	2014		
The Eye Creatures	1965		
The Faculty	1998		
Fantastic Four: Rise of the Silver Surfer	2007	Marvel - Fantastic Four	
Fantastic Planet	1973		
Feeders	1996		
The Fifth Element	1997		
Fire in the Sky	1993		
Fire Maidens from Outer Space	1956		
First Men in the Moon	1964	The First Men in the Moon	
First Spaceship on Venus	1962		
Flash Gordon (serial)	1936	Flash Gordon	
Flash Gordon	1980	Flash Gordon	
Flash Gordon Conquers the Universe (serial)	1940	Flash Gordon	
Flash Gordon's Trip to Mars (serial)	1938	Flash Gordon	
Flesh Gordon	1974	Flesh Gordon	
Flesh Gordon Meets the Cosmic Cheerleaders	1989	Flesh Gordon	
Flight of the Navigator	1986		
Flight to Mars	1950		
The Flintstones in Viva Rock Vegas	2000	The Flintstones	
Flying Disc Man from Mars (serial)	1950		
Flying Saucer Rock'n'Roll	1997		
Forbidden Planet	1956		
Forbidden World	1982		
The Forgotten	2004		
The Fourth Kind	2009		
Frankenstein Island	1981	Frankenstein	
Frankenstein Meets the Space Monster	1965	Frankenstein	
Freaks of Nature	2015		
Futurama: The Beast with a Billion Backs (TV)	2008	Futurama	
Futurama: Bender's Big Score (TV)	2007	Futurama	
Galaxy Invader	1985		
Galaxy of Terror	1981		
Galaxy Quest	1999		
Gamera: Super Monster	1980	Gamera	
Gamera vs. Viras	1968	Gamera	
Gamera vs. Zigra	1971	Gamera	
The Gendarme and the Extra-Terrestrials	1979	Le gendarme series	
Ghidorah, the Three-Headed Monster	1964	Godzilla	
Ghosts of Mars	2001		
The Giant Spider Invasion	1975		
God Told Me To	1976		
Godzilla 2000	1999	Godzilla	
Godzilla: City on the Edge of Battle	2018	Godzilla	
Godzilla: Final Wars	2004	Godzilla	
Godzilla: King of the Monsters	2019	MonsterVerse	
Godzilla: The Planet Eater	2018	Godzilla	
Godzilla: Planet of the Monsters	2017	Godzilla	
Godzilla vs. Destoroyah	1995	Godzilla	
Godzilla vs. Gigan	1972	Godzilla	
Godzilla vs. Hedorah	1971	Godzilla	
Godzilla vs. Mechagodzilla	1974	Godzilla	
Godzilla vs. SpaceGodzilla	1994	Godzilla	
Goke, Body Snatcher from Hell	1968	One-shot	
Good Boy!	2003		
Grabbers	2012		
The Great Wall	2016		
Green Lantern	2011	DC - Green Lantern	
Green Lantern: First Flight	2014	DC - Green Lantern	
The Green Slime	1968		
Guardians of the Galaxy	2014	Marvel Cinematic Universe	
Guardians of the Galaxy Vol. 2	2017	Marvel Cinematic Universe	
Guardians of the Galaxy Vol. 3	2023	Marvel Cinematic Universe	
H.G. Wells' The War of the Worlds	2005	The War of the Worlds	
H.G. Wells' War of the Worlds	2005	The War of the Worlds	
Hangar 18	1980		
HappinessCharge PreCure! the Movie: The Ballerina of the Land of Dolls	2014	Pretty Cure	
Hardware Wars	1978		
Have Rocket, Will Travel	1959	The Three Stooges	
Heavy Metal	1981	Heavy Metal	
Heavy Metal 2000	2000	Heavy Metal	
The Hidden	1987	Hidden	
The Hidden II	1993	"Hidden 
Hidden 2015"	
High Plains Invaders (TV)	2009		
Highlander II: The Quickening	1991	Highlander	
The Hitchhiker's Guide to the Galaxy	2005		
Hobgoblins	1988		
Home	2015		
Honeymoon	2014		
Horror Express	1972		
The Host	2013		
How to Talk to Girls at Parties	2018		
Howard the Duck	1986	Marvel - Howard 	
I Am Number Four	2011		
I Come in Peace	1990		
I Married a Monster from Outer Space	1958		
I Was a Zombie for the F.B.I.	1982		
Illegal Aliens	2007		
Impostor	2002		
Independence Day	1996	Independence Day	
Independence Day: Resurgence	2016	Independence Day	
Indiana Jones and the Kingdom of the Crystal Skull	2008	Indiana Jones	
Infected (TV)	2008		
Inseminoid	1981		
Interstella 5555: The 5tory of the 5ecret 5tar 5ystem	2003		
Invader Zim: Enter the Florpus	2019	Invader Zim	
Invaders from Mars	1953	Invaders from Mars	
Invaders from Mars	1986	Invaders from Mars	
Invasion	1966		
The Invasion	2007	Body Snatchers	
Invasion from Inner Earth	1974		
Invasion of Astro-Monster	1965	Godzilla	
Invasion of the Body Snatchers	1956	Body Snatchers	
Invasion of the Body Snatchers	1978		
Invasion of the Neptune Men	1961		
Invasion of the Saucer Men	1957		
Invasion of the Star Creatures	1962		
Invisible Invaders	1959		
The Iron Giant	1999		
Iron Invader	2011		
It Came from Outer Space	1953		
It: Chapter One	2017	Stephen King's It	
It Chapter Two	2019	Stephen King's It	
It Conquered the World	1956		
It! The Terror from Beyond Space	1958		
Jetsons: The Movie	1990	Jetsons	
Jimmy Neutron: Boy Genius	2001	Jimmy Neutron	
Jiu Jitsu	2020		
John Carter	2012	Barsoom	
Joker	2012		
Journey to the Seventh Planet	1962		
Jules	2023		
Jupiter Ascending	2015		
Just Imagine	1930		
Justice League	2017	DC Extended Universe	
Justice League: Crisis on Two Earths	2010	DC	
Justice League Dark	2017	DC Animated Movie Universe	
Justice League Dark: Apokolips War	2020	DC Animated Movie Universe	
Justice League: Doom	2012	DC	
Justice League: The Flashpoint Paradox	2011	DC Animated Movie Universe	
Justice League: The New Frontier	2008	DC	
Justice League: Throne of Atlantis	2011	DC Animated Movie Universe	
Justice League vs. the Fatal Five	2019	DC	
Justice League: War	2014	DC Animated Movie Universe	
Kalai Arasi	1963		
Kids vs. Aliens	2022	V/H/S	
Killer Klowns from Outer Space	1988		
Killers from Space	1954		
Kin-dza-dza!	1986		
Knowing	2009		
Koi... Mil Gaya	2003	Krrish	
Kronos	1957		
Krrish	2006	Krrish	
Krrish 3	2013	Krrish	
Krull	1983		
Landscape with Invisible Hand	2023		
The Last Starfighter	1984		
Leroy & Stitch	2006	Lilo & Stitch	
Life	2017		
Lifeforce	1985		
Lifted	2006		
Lightyear	2022	Toy Story	
Lilo & Stitch	2002	Lilo & Stitch	
Lilo & Stitch 2: Stitch Has a Glitch	2005	Lilo & Stitch	
Liquid Sky	1982		
The Little Shop of Horrors	1960	The Little Shop of Horrors	
Little Shop of Horrors	1986	The Little Shop of Horrors	
Looney Tunes: Back in Action	2003	Looney Tunes 	
Lost in Space	1998	Lost in Space	
The Lost Skeleton of Cadavra	2001		
The Love War (TV)	1970		
Mac and Me	1988		
The Man from Planet X	1951		
Man of Steel	2013	DC Extended Universe	
The Man Who Fell to Earth	1976		
The Man Who Wasn't There	2001		
Mars Attacks!	1996		
Mars Needs Moms	2011		
Mars Needs Women (TV)	1967		
Martians Go Home	1990		
Max Steel	2016	Max Steel	
Meatball Machine	2005		
Meatballs Part II	1984	Meatballs	
Meet Dave	2008		
Megamind	2010		
Men in Black	1997	Men in Black	
Men in Black II	2002	Men in Black	
Men in Black 3	2012	Men in Black	
Men in Black: International	2019	Men in Black	
A Message from Mars	1913		
Metamorphosis: The Alien Factor	1990		
Mighty Morphin Power Rangers: The Movie	1995	Power Rangers	
The Miracle of P. Tinto	1998		
Missile to the Moon	1958		
Mission to Mars	2000		
Mom and Dad Save the World	1992		
Monster X Strikes Back: Attack the G8 Summit	2008		
Monsters	2010	Monsters	
Monsters: Dark Continent	2014	Monsters	
Monsters vs. Aliens	2009		
Los Monstruos del Terror	1970	Waldemar Daninsky series	
Monty Python's Life of Brian	1979	Monty Python	
Moonfall	2022		
Morons from Outer Space	1985		
Münchhausen	1943	Baron Munchausen	
Muppets from Space	1999	Muppets	
Mutant Swinger from Mars	2009		
My Favorite Martian	1999		
My Stepmother Is an Alien	1988		
The Mysterians	1957	Godzilla	
New Mutants	2020	Marvel - X-Men 	
Night Caller from Outer Space	1966		
Night of the Blood Beast	1958		
Night of the Creeps	1986		
Night Skies	2007		
Nightbeast	1982		
No One Will Save You	2023		
Nope	2022		
Not of This Earth	1957	Not of This Earth	
Not of This Earth	1988	Not of This Earth	
Nowhere	1997		
Nude on the Moon	1961		
Nukie	1987		
Oblivion	1994		
Oblivion	2013		
Occupation	2018		
Ōgon Bat	1966		
Outlander	2008	Beowulf	
Pacific Rim	2013	Pacific Rim	
Pacific Rim Uprising	2018	Pacific Rim	
Pajama Party	1964	Beach Party	
Pandorum	2009		
Parasyte: Part 1	2014	Parasyte	
Parasyte: Part 2	2015	Parasyte	
Paul	2011		
Pee-wee's Big Holiday	2016	Pee-wee Herman	
PG: Psycho Goreman	2020		
Phantom from Space	1953		
Phineas and Ferb the Movie: Candace Against the Universe	2020	Phineas and Ferb	
Phoenix Forgotten	2017		
The Phoenix Incident	2015		
Pinocchio in Outer Space	1965		
Pitch Black	2000	The Chronicles of Riddick	
Pixels	2015		
Plan 9 from Outer Space	1959		
Plan 10 from Outer Space	1994		
Planet 51	2009		
Planet of the Apes	2001	Planet of the Apes	
Planet of the Vampires	1965		
Planeta Bur	1962		
The Pod People	1983		
Power Rangers	2017	Power Rangers	
Predator	1987	Predator	
The Predator	2018	Predator	
Predator 2	1990	Predator	
Predators	2010	Predator	
Prey	2022	Predator	
Princess of Mars	2009	Barsoom	
Progeny	1999		
Project ALF	1996	ALF	
Prometheus	2012	Alien	
Proximity	2020		
The Puppet Masters	1994		
The Purple Monster Strikes (serial)	1945		
The Quatermass Xperiment	1955	Quatermass	
Quatermass 2	1957	Quatermass	
Quatermass and the Pit	1967	Quatermass	
Queen of Blood	1966		
Queen of Outer Space	1958		
A Quiet Place	2018	A Quiet Place	
A Quiet Place: Day One	2024	A Quiet Place	
A Quiet Place Part II	2021	A Quiet Place	
A Quiet Place Part III	2025	A Quiet Place	
Race to Witch Mountain	2009	Witch Mountain	
Radar Men from the Moon (serial)	1952	Commando Cody	
Ratchet & Clank	2016		
Real Men	1987		
Rebel Moon – Part One: A Child of Fire	2023	Rebel Moon	
Rebel Moon – Part Two: The Scargiver	2024	Rebel Moon	
The Recall	2017		
Red Planet	2000		
Reign of the Supermen	2019	DC Animated Movie Universe	
Repo Man	1984		
Return from Witch Mountain	1978	Witch Mountain	
Returner	2002		
Riddick	2013	The Chronicles of Riddick	
Rise of the Teenage Mutant Ninja Turtles: The Movie	2022	Teenage Mutant Ninja Turtles 	
Robinson Crusoe on Mars	1964	Robinson Crusoe	
Robot Monster	1953		
Rocketship X-M	1950		
The Rocky Horror Picture Show	1975	The Rocky Horror Picture Show	
The Rocky Horror Picture Show: Let's Do the Time Warp Again	2016	The Rocky Horror Picture Show	
Rogue One: A Star Wars Story	2016	Star Wars	
Santa Claus Conquers the Martians	1964		
Scary Movie 3	2003	Scary Movie	
Scary Movie 4	2006	Scary Movie	
Scooby-Doo	2002	Scooby-Doo	
Scooby-Doo and the Alien Invaders	2000	Scooby-Doo	
The Shadow Men	1998		
Shazam!	2019	DC Extended Universe	
A Shaun the Sheep Movie: Farmageddon	2019	Wallace and Gromit	
Shin Ultraman	2022	Ultraman	
The Signal	2014		
Signs	2002		
Silent Warnings	2003		
Skyline	2010	Skyline 	
Skyline Radial	2024	Skyline	
Skylines	2020	Skyline	
Slither	2006		
Solaris (TV)	1972		
Solaris	2002		
Solo: A Star Wars Story	2018	Star Wars	
Sonic the Hedgehog	2020	Sonic the Hedgehog 	
Sonic the Hedgehog 2	2022	Sonic the Hedgehog	
Space Invasion of Lapland	1959		
Space Jam	1996	Looney Tunes	
Spaceman	2024		
Space Probe Taurus	1965		
Space Travelers: The Animation	2000		
Spaceballs	1987		
Spaced Invaders	1990		
Spacehunter: Adventures in the Forbidden Zone	1983		
Species	1995	Species	
Species II	1998	Species	
Species III	2004	Species	
Species – The Awakening	2007	Species	
Spice World	1997		
Spider-Man: Far From Home	2019	Marvel Cinematic Universe	
Spider-Man 3	2007	Marvel - Spider-Man	
Star Crystal	1986		
Star Odyssey	1978		
Star Trek	2009	Star Trek	
Star Trek II: The Wrath of Khan	1982	Star Trek	
Star Trek III: The Search for Spock	1984	Star Trek	
Star Trek IV: The Voyage Home	1986	Star Trek	
Star Trek V: The Final Frontier	1989	Star Trek	
Star Trek VI: The Undiscovered Country	1991	Star Trek	
Star Trek Beyond	2016	Star Trek	
Star Trek: First Contact	1996	Star Trek	
Star Trek Generations	1994	Star Trek	
Star Trek: Insurrection	1998	Star Trek	
Star Trek Into Darkness	2013	Star Trek	
Star Trek: The Motion Picture	1979	Star Trek	
Star Trek: Nemesis	2002	Star Trek	
Star Wars: The Clone Wars	2008	Star Wars	
Star Wars: Episode I – The Phantom Menace	1999	Star Wars	
Star Wars: Episode II – Attack of the Clones	2002	Star Wars	
Star Wars: Episode III – Revenge of the Sith	2005	Star Wars	
Star Wars: Episode IV - A New Hope	1977	Star Wars	
Star Wars: Episode V - The Empire Strikes Back	1980	Star Wars	
Star Wars: Episode VI - Return of the Jedi	1983	Star Wars	
Star Wars: Episode VII - The Force Awakens	2015	Star Wars	
Star Wars: Episode VIII - The Last Jedi	2017	Star Wars	
Star Wars: Episode IX - The Rise of Skywalker	2019	Star Wars	
Star Wars Holiday Special (TV)	1978	Star Wars	
Starcrash	1978		
Stargate	1994	Stargate	
Stargate: Continuum	2008	Stargate	
Stargate: The Ark of Truth	2008	Stargate	
Starman	1984		
Starship Invasions	1977		
Starship Troopers	1997	Starship Troopers	
Starship Troopers 2: Hero of the Federation	2004	Starship Troopers	
Starship Troopers 3: Marauder	2008	Starship Troopers	
Starship Troopers: Invasion	2012	Starship Troopers	
Starship Troopers: Traitor of Mars	2017	Starship Troopers	
Stepsister from Planet Weird	2000		
Steven Universe: The Movie	2019		
Stitch! The Movie	2003	Lilo & Stitch	
Stranded	1987		
Strange Invaders	1983		
Suburban Commando	1991		
The Suicide Squad	2021	DC Extended Universe	
Super 8	2011		
Super Deluxe	2019		
Supergirl	1984	DC - Superman	
Superlópez	2018		
Superman (serial)	1948	DC - Superman	
Superman	1978	DC - Superman	
Superman II	1980	DC - Superman	
Superman III	1983	DC - Superman	
Superman IV: The Quest for Peace	1987	DC - Superman	
Superman and the Mole Men	1951	DC - Superman	
Superman/Batman: Apocalypse	2010	DC - Superman 	
Superman/Batman: Public Enemies	2009	DC - Superman 	
Superman: Brainiac Attacks	2006	DC - Superman	
Superman: Doomsday	2007		
Superman: Man of Tomorrow	2020	DC - Superman	
Superman: Red Son	2020	DC - Superman	
Superman Returns	2006	DC - Superman	
Superman: Unbound	2013	DC - Superman	
Superman vs. The Elite	2012	DC - Superman	
Supersonic Man	1979		
Tales of Halloween	2015	One-shot	
Target Earth	1954		
Teen Titans Go! To the Movies	2018	Teen Titans Go!	
Teenage Mutant Ninja Turtles: Out of the Shadows	2016	Teenage Mutant Ninja Turtles	
Teenagers from Outer Space	1959		
Terror of Mechagodzilla	1975	Godzilla	
The Terrornauts	1967		
TerrorVision	1987		
They Came from Beyond Space	1967		
They Live	1988		
The Thing	1982	Who Goes There?	
The Thing	2011	Who Goes There?	
The Thing from Another World	1951	Who Goes There?	
This Island Earth	1955		
Thor	2011	Marvel Cinematic Universe	
Thor: The Dark World	2013	Marvel Cinematic Universe	
Thor: Love and Thunder	2022	Marvel Cinematic Universe	
Thor: Ragnarok	2017	Marvel Cinematic Universe	
The Three Stooges in Orbit	1962	The Three Stooges	
Thunderbirds Are Go	1966	Thunderbirds	
Titan A.E.	2000		
Tom and Jerry: Blast Off to Mars	2005	Tom and Jerry	
The Tomorrow War	2021		
Too Many Cooks	2014		
Toomorrow	1970		
Transformers	2007	Transformers	
Transformers: Age of Extinction	2014	Transformers	
Transformers: Bumblebee	2018	Transformers	
Transformers: Dark of the Moon	2011	Transformers	
Transformers: The Last Knight	2017	Transformers	
The Transformers: The Movie	1986	Transformers: The Animated Series	
Transformers One	2024	Transformers	
Transformers: Revenge of the Fallen	2009	Transformers	
Transformers: Rise of the Beasts	2023	Transformers	
Transmorphers	2007	Transmorphers	
Transmorphers: Fall of Man	2009	Transmorphers	
Treasure Planet	2002	One-Shot	
A Trip to Mars (Himmelskibet)	1918		
A Trip to the Moon	1902	From the Earth to the Moon	
The Trollenberg Terror	1958		
Tropico	2013		
Turbo: A Power Rangers Movie	1997	Power Rangers	
U.F.O.	1993		
U.F.O.	2012		
UFO Abduction	1989		
The UFO Incident	1975		
UHF	1989		
Ultimate Avengers - The Movie	2006	Marvel - Animated 	
Unaware	2013		
Under the Mountain	2009		
Under the Skin	2013		
V/H/S	2012	V/H/S 	
V/H/S/2	2013	V/H/S	
V/H/S: Viral	2014	V/H/S	
V/H/S/85	2023	V/H/S	
Untitled V/H/S film	2024	V/H/S	
Valerian and the City of a Thousand Planets	2017		
Vampirella	1996		
The Vast of Night	2019		
Venom	2018	Marvel - Sony's Spider-Man Universe	
Venom: Let There Be Carnage	2021	Marvel - Sony's Spider-Man Universe	
Village of the Damned	1960	...of the Damned	
Village of the Damned	1995	...of the Damned	
Virus	1999		
Visit to a Small Planet	1960		
The Visitor	1979		
Voyage of the Rock Aliens	1984		
Voyage to the Planet of Prehistoric Women	1968		
Voyage to the Prehistoric Planet	1965		
War of the Planets	1966		
The War of the Worlds	1953	The War of the Worlds	
War of the Worlds	2005	The War of the Worlds	
War of the Worlds 2: The Next Wave	2008	The War of the Worlds	
War of the Worlds: Goliath	2012	The War of the Worlds	
War of the Worlds: The True Story	2012	The War of the Worlds	
Warlords of Atlantis	1978		
Warning from Space	1956		
The Watch	2012		
Wavelength	1983		
Welcome to the Space Show	2010		
What on Earth!	1966		
What Planet Are You From?	2000		
When the Man in the Moon Seeks a Wife	1908		
The Whisperer in Darkness	2011		
Within the Rock	1996		
Without Warning	1980		
The Wizard of Mars	1965		
The World's End	2013		
The X from Outer Space	1967		
The X-Files: Fight the Future	1998	The X-Files	
The X-Files: I Want to Believe	2008	The X-Files	
X-Men: Dark Phoenix	2019	Marvel - X-Men	
Xtro	1982	Xtro	
Xtro II: The Second Encounter	1991	Xtro	
Xtro 3: Watch the Skies	1995	Xtro	
Zack Snyder's Justice League	2021	DC Extended Universe	
Zarkorr! The Invader	1995		
Zathura: A Space Adventure	2005	Jumanji	
Zenon: The Zequel	2001		
Zeta One	1969		
Zombies of the Stratosphere	1952		
Zone Troopers	1985		
Zontar, the Thing from Venus	1966		
`.split('\n')
.map(_=>_.trim())
.filter(_=>_!=='')
.map(_=>{
    const [title,year,franchise = ''] = _.split('\t');
    return {title,year:parseInt(year,10),franchise}
})
function pbcopy(data) {
    const proc = require('child_process').spawn('pbcopy', { env: { LC_CTYPE: 'UTF-8' } })
    proc.stdin.write(data)
    proc.stdin.end()
}
pbcopy(JSON.stringify(tsv))

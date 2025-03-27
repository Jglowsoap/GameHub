import GameGrid from "@/components/game-grid"
import type { GameItem } from "@/types/game"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeSelector } from "@/components/theme-selector"

export default function Home() {
  // Define games array with proper typing
  const games: GameItem[] = [
    { name: "SD", url: "https://nintendoboi222.github.io/games/SD/" },
    { name: "Space Company", url: "https://nintendoboi222.github.io/games/space-company/" },
    { name: "Sort the Court", url: "https://nintendoboi222.github.io/games/sort-the-court/" },
    { name: "Sonic CD", url: "https://nintendoboi222.github.io/games/sonic-cd/" },
    { name: "Soccer Random", url: "https://nintendoboi222.github.io/games/soccer-random/" },
    { name: "Snake IO", url: "https://nintendoboi222.github.io/games/snake-io/" },
    { name: "Snow Rider", url: "https://nintendoboi222.github.io/games/snow-rider/" },
    { name: "Run 2", url: "https://nintendoboi222.github.io/games/run-2/" },
    { name: "Rooftop Snipers", url: "https://nintendoboi222.github.io/games/rooftopsnipers/" },
    { name: "Riddle School 5", url: "https://nintendoboi222.github.io/games/Riddle-School-5/" },
    { name: "Riddle School 3", url: "https://nintendoboi222.github.io/games/Riddle-School-3/" },
    { name: "Riddle School 2", url: "https://nintendoboi222.github.io/games/riddle-school-2/" },
    { name: "Riddle School 1", url: "https://nintendoboi222.github.io/games/Riddle-school-1/" },
    { name: "Retro Bowl Collage", url: "https://nintendoboi222.github.io/games/retro-bowl-collage/" },
    { name: "Retro Bowl", url: "https://nintendoboi222.github.io/games/retro-bowl/" },
    { name: "REAL FS", url: "https://nintendoboi222.github.io/games/REAL-FS/" },
    { name: "Random R6 OP", url: "https://nintendoboi222.github.io/games/random-r6-op/" },
    { name: "Ragdoll Hit", url: "https://nintendoboi222.github.io/games/ragdoll-hit/" },
    { name: "Ragdoll Archers", url: "https://nintendoboi222.github.io/games/ragdoll-archers/" },
    { name: "Push Your Luck", url: "https://nintendoboi222.github.io/games/push-your-luck/" },
    { name: "Poly Track", url: "https://nintendoboi222.github.io/games/poly-track/" },
    { name: "Pcraft", url: "https://nintendoboi222.github.io/games/pcraft/" },
    { name: "PC Breakdown", url: "https://nintendoboi222.github.io/games/PC-breakdown/" },
    { name: "Papery Planes", url: "https://nintendoboi222.github.io/games/papery-planes/" },
    { name: "Papa's Wingeria", url: "https://nintendoboi222.github.io/games/papas-wingeria/" },
    { name: "Papa's Taco Mia", url: "https://nintendoboi222.github.io/games/papas-taco-mia/" },
    { name: "Papa's Sushiria", url: "https://nintendoboi222.github.io/games/papas-sushiria/" },
    { name: "Papa's Scooperia", url: "https://nintendoboi222.github.io/games/papas-scooperia/" },
    { name: "Papa's Pizzeria", url: "https://nintendoboi222.github.io/games/papas-pizzeria/" },
    { name: "Papa's Pancakeria", url: "https://nintendoboi222.github.io/games/papas-pancakeria/" },
    { name: "Papa's Hotdoggeria", url: "https://nintendoboi222.github.io/games/papas-hotdoggeria/" },
    { name: "Papa's Cupcakeria", url: "https://nintendoboi222.github.io/games/papas-cupcakeria/" },
    { name: "Papa's Burgeria", url: "https://nintendoboi222.github.io/games/papas-burgeria/" },
    { name: "Papa's Bakeria", url: "https://nintendoboi222.github.io/games/papas-bakeria/" },
    { name: "Papa Louie", url: "https://nintendoboi222.github.io/games/papa-louie/" },
    { name: "Pandemic 2", url: "https://nintendoboi222.github.io/games/pandemic-2/" },
    { name: "OVO", url: "https://nintendoboi222.github.io/games/OVO/" },
    { name: "Oh Flip", url: "https://nintendoboi222.github.io/games/oh-flip/" },
    { name: "Nintendo 64 Emulator", url: "https://nintendoboi222.github.io/games/nintendo-64/dist/index.html" },
    { name: "Rusty Submarine", url: "https://nintendoboi222.github.io/games/rusty-submarine/" },
    { name: "N-Gon", url: "https://nintendoboi222.github.io/games/n-gon/" },
    { name: "Murder", url: "https://nintendoboi222.github.io/games/murder/" },
    { name: "Deal or No Deal", url: "https://nintendoboi222.github.io/games/deal-or-no-deal/" },
    { name: "DNA to RNA and Amino Acids", url: "https://nintendoboi222.github.io/games/DNAtoRNAandAminoAcids/" },
    { name: "Doom", url: "https://nintendoboi222.github.io/games/doom/" },
    { name: "Drift Hunters", url: "https://nintendoboi222.github.io/games/drift-hunters/" },
    { name: "Drift Boss", url: "https://nintendoboi222.github.io/games/drift-boss/" },
    { name: "Duck Life 1", url: "https://nintendoboi222.github.io/games/duck-life-1/" },
    { name: "Duck Life 2", url: "https://nintendoboi222.github.io/games/duck-life-2/" },
    { name: "Duck Life 3", url: "https://nintendoboi222.github.io/games/duck-life-3/" },
    { name: "Duck Life 4", url: "https://nintendoboi222.github.io/games/duck-life-4/" },
    { name: "Dune 2", url: "https://nintendoboi222.github.io/games/dune-2/" },
    { name: "Goofy Ahh Dune", url: "https://nintendoboi222.github.io/games/goofy-ahh-dune/" },
    { name: "Eggy Car", url: "https://nintendoboi222.github.io/games/eggy-car/" },
    { name: "Evil Glitch", url: "https://nintendoboi222.github.io/games/evil-glitch/" },
    { name: "Funny Shooter 2", url: "https://nintendoboi222.github.io/games/Funny-Shooter-2/" },
    { name: "Getaway Shootout", url: "https://nintendoboi222.github.io/games/getaway-shootout/" },
    { name: "Gimme the Airpod", url: "https://nintendoboi222.github.io/games/gimme-the-aripod/" },
    { name: "Google Snake", url: "https://nintendoboi222.github.io/games/Google-snake/" },
    { name: "Grind Craft", url: "https://nintendoboi222.github.io/games/grind-craft/" },
    { name: "Helicopter", url: "https://nintendoboi222.github.io/games/helicopter/" },
    { name: "Hextris", url: "https://nintendoboi222.github.io/games/hextris/" },
    { name: "Idle Breakout", url: "https://nintendoboi222.github.io/games/idle-breakout/" },
    { name: "Idle Web Tycoon", url: "https://nintendoboi222.github.io/games/idle-web-tycoon/" },
    { name: "Impossible Quiz", url: "https://nintendoboi222.github.io/games/impossiblequiz/" },
    { name: "Impossible Quiz 2", url: "https://nintendoboi222.github.io/games/impossiblequiz-2/" },
    { name: "Jacksmith", url: "https://nintendoboi222.github.io/games/jacksmith/" },
    { name: "Learn to Fly 3", url: "https://nintendoboi222.github.io/games/learn-to-fly-3/" },
    { name: "Learn to Fly Idle", url: "https://nintendoboi222.github.io/games/learn-to-fly-idle/" },
    { name: "Madalin Stunt Cars 2", url: "https://nintendoboi222.github.io/games/madalin-stunt-cars-2/" },
    { name: "2 Minute Football", url: "https://nintendoboi222.github.io/games/2MinuteFootball/" },
    { name: "2048", url: "https://nintendoboi222.github.io/games/2048/" },
    { name: "10 Minutes Till Dawn", url: "https://nintendoboi222.github.io/games/10-minutes-till-dawn/" },
    { name: "Wheely 1", url: "https://nintendoboi222.github.io/games/wheely-1/" },
    { name: "Volley Random", url: "https://nintendoboi222.github.io/games/volley-random/" },
    { name: "Unicycle Hero", url: "https://nintendoboi222.github.io/games/unicycle-hero/" },
    { name: "Tunnel Rush 2", url: "https://nintendoboi222.github.io/games/tunnel-rush-2/" },
    { name: "Tomb of the Mask", url: "https://nintendoboi222.github.io/games/tomb-of-the-mask/" },
    { name: "Tiny Fishing", url: "https://nintendoboi222.github.io/games/tiny-fishing/" },
    { name: "Time Shooter 3", url: "https://nintendoboi222.github.io/games/time-shooter-3/" },
    { name: "Time Shooter 2", url: "https://nintendoboi222.github.io/games/time-shooter-2/" },
    { name: "There is No Game", url: "https://nintendoboi222.github.io/games/there-is-no-game/" },
    { name: "Tetris", url: "https://nintendoboi222.github.io/games/tetris/" },
    { name: "Territorial IO", url: "https://nintendoboi222.github.io/games/territorial-io/" },
    { name: "Terminus JS", url: "https://nintendoboi222.github.io/games/Terminus.JS/" },
    { name: "Tanuki Sunset Halloween", url: "https://nintendoboi222.github.io/games/tanuki-sunset-halloween/" },
    { name: "Tag", url: "https://nintendoboi222.github.io/games/tag/" },
    { name: "Shell Shockers", url: "https://eggwars.io/" },
    { name: "Subway Surfers SF", url: "https://nintendoboi222.github.io/games/subwaysurfers-sf/" },
    { name: "Subway Surfers Beijing", url: "https://nintendoboi222.github.io/games/subway-surfers-beijing/" },
    { name: "Super Mario 64", url: "https://nintendoboi222.github.io/games/SM64/" },
    { name: "Super Mario 63", url: "https://nintendoboi222.github.io/games/SM63/" },
    { name: "Superhot", url: "https://nintendoboi222.github.io/games/superhot/" },
    { name: "SRP", url: "https://nintendoboi222.github.io/games/SRP/" },
    { name: "Stickman Hook", url: "https://nintendoboi222.github.io/games/stickman-hook/" },
    { name: "Awesome Tanks 2", url: "https://nintendoboi222.github.io/games/awesome-tanks-2/" },
    { name: "Basket Random", url: "https://nintendoboi222.github.io/games/basket-random/" },
    { name: "Basketball Stars", url: "https://nintendoboi222.github.io/games/basketball-stars/" },
    { name: "Bit Planes", url: "https://nintendoboi222.github.io/games/bit-planes/" },
    { name: "BitLife", url: "https://nintendoboi222.github.io/games/bitlife/" },
    { name: "Block Blast", url: "https://nintendoboi222.github.io/games/block-blast/" },
    { name: "Bloxors", url: "https://nintendoboi222.github.io/games/bloxors/" },
    { name: "BTD 1", url: "https://nintendoboi222.github.io/games/BTD-1/" },
    { name: "BTD 2", url: "https://nintendoboi222.github.io/games/BTD-2/" },
    { name: "BTD 3", url: "https://nintendoboi222.github.io/games/BTD-3/" },
    { name: "BTD 4", url: "https://nintendoboi222.github.io/games/BTD-4/" },
    { name: "BTD 5", url: "https://nintendoboi222.github.io/games/BTD-5/" },
    { name: "Boxing Random", url: "https://nintendoboi222.github.io/games/boxing-random/" },
    { name: "Burrito Bison", url: "https://nintendoboi222.github.io/games/Burrito-Bison/" },
    { name: "FNAF 2", url: "https://nintendoboi222.github.io/games/FNAF-2/" },
    { name: "FNAF 3", url: "https://nintendoboi222.github.io/games/FNAF-3/" },
    { name: "Flappy Birb", url: "https://nintendoboi222.github.io/games/flappy-birb/" },
    { name: "Geometry Dash", url: "https://nintendoboi222.github.io/games/geometrydash/" },
    { name: "JS Roulette", url: "https://nintendoboi222.github.io/games/js-roulette/" },
    { name: "Learn to Fly 2", url: "https://nintendoboi222.github.io/games/learn-to-fly-2/" },
    { name: "Moto X3M", url: "https://nintendoboi222.github.io/games/moto-x3m/" },
    { name: "Slope", url: "https://nintendoboi222.github.io/games/slope/" },
  ]

  // Sort games alphabetically by name (case-insensitive)
  const sortedGames = [...games].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

  return (
    <main className="min-h-screen bg-background">
      <header className="py-8 shadow-md header-gradient">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-white drop-shadow-md">GameHub</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        <GameGrid games={sortedGames} />
      </section>

      <footer className="bg-primary py-4 text-center text-primary-foreground">
        <p>&copy; {new Date().getFullYear()} GameHub | All Rights Reserved</p>
      </footer>

      <ThemeToggle />
      <ThemeSelector />
    </main>
  )
}

import './App.css';
import React from 'react';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap"

import Card from './Card';

import death from './images/death.PNG';
import hangedMan from './images/hangedMan.PNG';
import judgement from './images/judgement.PNG';
import justice from './images/justice.PNG';
import strength from './images/strength.PNG';
import temperance from './images/temperance.PNG';
import theChariot from './images/theChariot.PNG';
import theDevil from './images/theDevil.PNG';
import theEmperor from './images/theEmperor.PNG';
import theEmpress from './images/theEmpress.PNG';
import theFool from './images/theFool.PNG';
import theHermit from './images/theHermit.PNG';
import theHierophant from './images/theHierophant.PNG';
import theHighPriestess from './images/theHighPriestess.PNG';
import theLovers from './images/theLovers.PNG';
import theMagician from './images/theMagician.PNG';
import theMoon from './images/theMoon.PNG';
import theStar from './images/theStar.PNG';
import theSun from './images/theSun.PNG';
import theTower from './images/theTower.PNG';
import theWorld from './images/theWorld.PNG';
import wheelOfFortune from './images/wheelOfFortune.PNG';
import kingOfCups from './images/kingOfCups.PNG';
import kingOfPentacles from './images/kingOfPentacles.PNG';
import kingOfSwords from './images/kingOfSwords.PNG';
import kingOfWands from './images/kingOfWands.PNG';

const cards = [
  {
    name: "Death",
    description: "The card features a flat, light red background, emphasizing a left-facing cybernetic figure. The figure has a skull-shaped metallic head with spikes and glowing yellow eyes, with wires extending from the back. Holding a short, angular sword in its right hand, the figure, adorned in samurai-like plated armor, creates a harsh angular silhouette",
    meaning: "Death is the card of becoming. It signifies an imminent and difficult transition – the conclusion of one phase of life and the beginning of another. Inevitably, something gets lost during the transformation, but something else will rise and take its place",
    image: death
  },
  {
    name: "Hanged Man",
    description: "The card background features four onlooking figures with singular cybernetic eyes against abstract shades of orange, brown, and pink. In the foreground, a man hangs upside-down with legs bound from above, wearing plain black pants, a white shirt, and a black jacket resembling a business suit. The figure is bald, and their face is replaced by a golden skul",
    meaning: "The Hanged Man is the card of sacrifice. It says that a price must be paid in order to achieve enlightenment. The Hanged Man's forsakenness opens the path for rebirth into a new life, though this path is wrought with pain suspended in time and ultimately ends in death",
    image: hangedMan
  },
  {
    name: "Judgement",
    description: "Similar to the classical Judgement depiction, this card presents a trumpeter under whom numerous nude figures emerge from grave-like holes, signifying resurrection. However, instead of an angel, the trumpeter is a cloaked, skeletal figure. Dark shapes behind the trumpeter, each with an intently-gazing eye and teeth-like spikes, form a vertical maw-like shape where wings might have been",
    meaning: "Judgement is the card of renewal. The angel blowing into the horn heralds resurrection and liberation. This card foretells an important change that will result in healing or fulfillment. It is also a symbol of self-worth",
    image: judgement
  },
  {
    name: "Justice",
    description: "The abstract background has orange haze at the bottom and a black center flanked by two purple buildings. In the card's center stands a black figure with light purple accents and bone-like scales on the back, resembling the scales of justice with skull plates. Facing away, the figure looks back at the viewer, holding a sword with clenched left hand. Wires extend from the back of the skull, and the left eye appears muted grey, as if seen through goggles",
    meaning: "Justice is the card of conflict resolution. It proclaims the need for order, to see through lies and deceit, and a return to the natural state of affairs. Justice implies a just sentence, but also due process",
    image: justice
  },
  {
    name: "Strength",
    description: "The background is minimal, featuring a chest-up view of a hooded feminine figure with a metallic facial structure and red eyes. The exposed skin leads to a partly bare chest with a deep blue-tinted tattoo depicting a woman opening a wolf's jaws. The hooded cloak, adorned with metallic features, reveals most of the chest, modestly covering the breasts",
    meaning: "Strength is the card of resilience. It is associated with determination, bravery and internal struggle. One must have dedication in order to overcome obstacles and reach one's goal. Strength is about physical prowess and spiritual fortitude – the power that must be unleashed to achieve the impossible",
    image: strength
  },
  {
    name: "Temperance",
    description: "The central figure, a seated cyborg man, wears a grey tank-top with a black triangle in a white square, symbolizing spirit and the four elements of the physical world. At his feet lies an unconscious second person, connected by a tube strapped to their right arms, blending their bloodstreams. Additional tubing extends from the primary figure's clenched jaw to various piping in the background",
    meaning: "Temperance is the card of balance. It may symbolize self-restraint or the gradual shift toward a more mature state of equilibrium. Temperance is associated with being in control of oneself as well as the desire to achieve inner peace",
    image: temperance
  },
  {
    name: "The Chariot",
    description: "The abstract, dark purple background with light purple lines suggests momentum. The main figure, occupying the top two-thirds, is hunched over in thick, purple-tinted leather clothing. A black curved helmet covers the figure's face, revealing a ghoulish, white skin tone and an open mouth. Riding a light grey, reflective motorcycle, only the center is visible, and the figure drives toward the left",
    meaning: "The Chariot is always charging ahead despite being pulled by its steeds in opposite directions. The rider who steers it constantly reins in the light and dark sides of the soul with the help of Reason. To ride in The Chariot is to experience highs and lows – ups and downs",
    image: theChariot
  },
  {
    name: "The Devil",
    description: "The Devil is portrayed as a cruel face of a man on a blood-red background, hungrily smiling, teeth barred. His many eyes are red, their placement copies the shape of optic implants used by members of Maelstrom gang",
    meaning: "The Devil is addiction, craving and passion. He brings fame and fortune, but at the price of losing oneself to a world of material distractions. The Devil lures unsuspecting souls into traps, but always grants them a choice. One can try their luck and take him up on his offer, but one should always know when to call quits",
    image: theDevil
  },
  {
    name: "The Emperor",
    description: "The yellow-tinted background is mostly obstructed, resembling warehouse windows or a grid of computer monitors in the upper left. Dominating the dark space are machinery and wires forming a throne-like chair, seen from behind and to the left. Connected to the chair with numerous wires is a humanoid figure, draped in loose, robe-like clothing, with a head turned towards the viewer, featuring two bright red eyes and no other clearly visible facial features",
    meaning: "The Emperor represents patriarchal control and is pleased with the authority and power he possesses to shape the future. The Emperor makes the rules and enforces them for the common good. But prestige has its dark sides – the Emperor is dominating and ruthless and will climb over a mountain of bodies to achieve his aim",
    image: theEmperor
  },
  {
    name: "The Empress",
    description: "In the background, two towering red-tinted skyscrapers contrast a pitch-black sky. Below, floral and natural imagery, shifting from muted purples to reddish pinks, fills the scene. In the center, a lone female figure, tinted in blue, stands with closed eyes, facing left. Her long white hair flows behind her, and she holds an unsheathed katana in her left hand, with a female-gender symbol on her kimono's left sleeve",
    meaning: "The empress is a card of femininity and motherhood. She is authoritative, knows what she wants, and exhibits refinement and sensuousness. The Empress symbolizes creativity and growth, and instructs us not to dismiss our unconscious impulses, but to trust our intuition",
    image: theEmpress
  },
  {
    name: "the Fool",
    description: "The image features a red industrial backdrop with metal buildings and wires. In the foreground, a punk with a malnourished dog walks on a rooftop, lit in yellow. The punk walks left, one arm stretched forward, the other carrying a stick. His right leg hovers near the building's edge, suggesting an unawareness of the potential step-off",
    meaning: "The Fool is everyone - including you and me. Each step he takes on his journey feels like stepping into a brave new world. Ultimately, the journey will change him. But as the card shows, he's a trustworthy lad whose tireless hope drives him toward his goal",
    image: theFool
  },
  {
    name: "The Hermit",
    description: "The card is set amid metallic beams with a gradient from deep red to bright yellow. A cloaked figure stands on a concrete ledge, holding a staff and torch, facing slightly left. Dark robes conceal them, and a gas mask with a yellow eye is partially visible under the hood",
    meaning: "The Hermit is a card of self-imposed isolation. It represents an escape from the hustle and bustle of the city, a turning away from constant newness toward Ye Olde ways. For the hermit, solitude is the road to the sublime – a road that is taken not with great bounds and strides, but with small, concentrated steps",
    image: theHermit
  },
  {
    name: "The Hierophant",
    description: "The background features cracked buildings and machinery in blue and purple hues, with smoke rising from the bottom left. In the center, a red-hued figure hovers in a cross-legged position, with a machine-like head, two bright red eyes, and tubes and wires extending from the front and back. Two crossed keys adorn the chest, and the figure holds a staff with key-like teeth. The clothes are tattered and old",
    meaning: "The Hierophant symbolizes a respect for tradition. It represents one who tries to maintain the established order, even though their very character is shaped by it. The Hierophant places his faith in institutions – for the alternative is pure chaos. Only by placing his faith in order can he draw strength",
    image: theHierophant
  },
  {
    name: "The High Pristess",
    description: "The white-robed High Priestess, in a T-pose, faces the viewer with a singular red eye. Adhering to the classical depiction, she wears horned headwear and stands between two pillars—dark with the letter B on her left (Boaz) and light with the letter J on her right (Jachin), symbolizing the metal pillars of Solomon's Temple",
    meaning: "The High Priestess is a card of mystery. It shows how all our secrets hang by a delicate thread and the struggle between common sense and intuition. The High Priestess symbolizes the cold, calm waters as well as the mysteries hidden in their depths",
    image: theHighPriestess
  },
  {
    name: "The Lovers",
    description: "The layered background includes dark orange, a yellow circle, and a black triangle. A plant with green and red flames is at the bottom. The card's focus is two skeletons with unnaturally long tongues, facing each other. The top skeleton has a striped snake, and the bottom one shows cybernetic damage on its left skull half",
    meaning: "The Lovers is the card of dichotomies. It points to the contradictions that clash within each of us and of the challenge of striking a balance between extremes. The Lovers is also the card of dilemmas, like The Fool who stands at the crossroads, unable to make his choice",
    image: theLovers
  },
  {
    name: "The Magician",
    description: "The gold-jacketed, skull-faced Magician, reminiscent of the Rider-Waite-Smith depiction, stands by a table with a wall of red masks. The infinity symbol is below their chest. On the table, there are knives (Swords) and a beverage can with a five-pointed star (Pentacles), but notably absent is any representation of the suit of Wands",
    meaning: "The Magician is the card of self-confidence and adapting to situations through intellect and sheer will. The Magician is a schemer who always has one last trick up his sleeve, who despite everything manages to stay afloat and remain in control of his own destiny",
    image: theMagician
  },
  {
    name: "The Moon",
    description: "This card depicts a chaotic urban scene with a light yellow full moon dominating the top center. Fiery pink and black wires crisscross over it, while a distant cityscape frames the moon's bottom. Close to the viewer are two wolves, one on the right howling, surrounded by scrap metal and bones, including a skull in the pile",
    meaning: "The Moon reminds us that reality is not always what it seems at first glance. In a world of appearances and illusions, the best course is often charted by one's own intuition. The Moon is also the card of dreams, desires, and of course, sleep - Death's nightly ritual",
    image: theMoon
  },
  {
    name: "The Star",
    description: "The dark, abstract background has purple sparkles. The central figure, surrounded by shadowy figures with singular cyclops-like purple eyes, dances on a crystalline-seeming purple stage. Kneeling, her open dress reveals her breasts and torso, facing the right of the card, with arms raised, and purple hair flowing back, obscuring her face",
    meaning: "The Star is the card of hope. In the darkest of nights there is a light that shines the path to home. The Star is inspiration, motivation and gives us strength to move forward",
    image: theStar
  },
  {
    name: "The Sun",
    description: "In contrast to the classical depiction, this card features a white-clad cowgirl on a golden motorcycle, symbolizing a Western aesthetic linked to a 'simpler, better time' according to Bryce Mosley. Behind her, space stations silhouette against a full moon or planet, resembling the Crystal Palace from the card's ending. A brilliant glint reflects off the cowgirl's metallic face, likely from the Sun",
    meaning: "The Sun symbolizes success. It is a card of freedom, renewal and a bright future that lies ahead. The Sun also represents truth, for its light will always pull back the curtain of shadow that hides the world's secrets. It is also represents greatness and splendor",
    image: theSun
  },
  {
    name: "The Tower",
    description: "This unique card features a solitary dark purple obelisk-like pillar rising at a slight left angle in the center. Abstract industrial infrastructure manifests on either side and at the bottom, while a sparking bundle of lightning descends from the top right",
    meaning: "The Tower is an omen of radical change, chaos and destruction. The lightning striking The Tower signifies a return to the old order that lies buried under the ruins, and a new order that will rise from it. It is a symbol of tragedy, apocalypse, and self-destruction",
    image: theTower
  },
  {
    name: "The World",
    description: "The image features the silhouette of a person with a singular yellow cybernetic eye against a pink background, limited to small portions in the top corners. The silhouette is filled with vibrant city lights in yellows, oranges, and greens, forming building facades along its torso and shoulders. Around the neck, buildings fade into vein-like, jagged lines leading to the eye-like circle at the silhouette's head center",
    meaning: "The World lies at the end of The Fool's long and winding journey. Wiser and more world-weary than he started out, the Fool faces a moment of reckoning. Some of us accept where our journey has led us to, while others embark on a new challenge. One thing in this World is certain – you can't have it all",
    image: theWorld
  },
  {
    name: "Wheel of Fortune",
    description: "The card features a background of a wall or pillar with bullet holes, displaying the Wheel of Fortune with alchemical symbols. The dead figure slumps against the design, covered in bleeding bullet wounds. An open briefcase full of credit cards is near their legs. The color palette includes green and white for the figure, muted orange for the tablet, and purple, pink, and red for the floor",
    meaning: "The Wheel of Fortune means that change is coming. One's destiny could turn out for the better or the worse, yet it also bears the promise of new possibilities. The Wheel reminds us that nobody remains at the top forever, but also that not every situation is hopeless",
    image: wheelOfFortune
  },
  {
    name: "King of Cups",
    description: "A man sits upon a seat covered with cloth and cabelling. His has a modified face showing a single red eye in the center with light coming from it and in his right hand is a challace containing some red liquid. His left hand rests on it's respective knee",
    meaning: "A King of Cups is a creative and emotionally-driven person. They are strong individuals, who realize the importance of feelings. Intuition helps them navigate their lives. When fate is in their favor, compassion guides their actions. When they're at odds with fate, it'd be unwise to trust them",
    image: kingOfCups
  },
  {
    name: "King of Pentacles",
    description: "The King of Pentacles is a green, cloaked figure with various cabled devices hanging from their clothes. While their hands and arms are not shown, in the background is a glowing five-pointed star befitting this King of Pentacles, possibly also reminiscent of the star of the New United States. Likewise the King of Pentacles' mask has five glowing dots, unlike the other three Kings",
    meaning: "The King of Pentacles is imperious. They represent entreprise, pragmatism, but also attachement. From such a person one can expect coldness or attachment to material possessions; they are likely to turn your world upside down sooner or later",
    image: kingOfPentacles
  },
  {
    name: "King of Wands",
    description: "The King sits among a mess of wires in the center of a room. He is himself shirtless displaying heavy cyberware modification and in his left hand is is a wand with a large light at it's summit - many of the room's wires go into the wand and the hand that holds it",
    meaning: "The master of planning and unorthodox ideas. An individual who brings people together and radiates inspiration to those they consider friends. However, their enemies will soon find they are an impulsive, devastating force of nature, capable of breaking oaths and crossing any line, just to see their goals achieved",
    image: kingOfWands
  },
  {
    name: "King of Swords",
    description: "At the center of this card is a man's torso and head. The face is hidden behind cyberward modification and framed by sword swirds that are crossed over the face. These swords are held by the King who wears a black coat. In the background a dark cityscape can be seen",
    meaning: "Two things matter above all else for a King of Swords: logic and conviction. They represent a person with a precise moral compass, who is known for their caring demeanor. However, enemies beware - the King of Swords is a ruthless opponent, who will not rest until you are punished and left to be torn apart by hounds of fate",
    image: kingOfSwords
  }
]

const App = () => {
  let nums = [];
  while(nums.length < 3){
      let r = Math.floor(Math.random() * cards.length);
      if(nums.indexOf(r) === -1) nums.push(r);
  }
  console.log(nums)
  return (
    <>
      <div className='container-fluid m-0 p-0' style={{backgroundColor: "var(--black)"}}>
        <div className='row'>
          <div className='column d-flex justify-content-center'>
            <div className='container m-5 p-0 border-top border-start border-info border-3' style={{backgroundColor: "var(--grey)"}}>
              <div className='container m-0 p-0 border-bottom border-end border-danger border-3' style={{backgroundColor: "var(--grey)"}}>
                <p className='display-2 text-center' style={{color: "var(--yellow)"}} id='title'><strong>Tarot R Us</strong></p>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='container-fluid d-flex justify-content-evenly' id='card_deck'>
              {nums.map((num) => (
                <Card name={cards[num].name} description={cards[num].description} image={cards[num].image} meaning={cards[num].meaning} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { StyleOption } from './types';

export const styleOptions: StyleOption[] = [
  {
    id: 'black_tie',
    name: 'Black Tie',
    description: 'The pinnacle of formal evening wear.',
    prompt: 'Edit the photo to place the person in a glamorous evening gala setting. Change their outfit to a classic black tuxedo, a white formal shirt, a black bow tie, and patent leather shoes. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, full-body, photorealistic image.',
    hashtags: ['#BlackTie', '#Tuxedo', '#GalaReady', '#FormalEvent', '#RedCarpet']
  },
  {
    id: 'black_tie_optional',
    name: 'Black Tie Optional',
    description: 'Formal, but with a degree of flexibility.',
    prompt: 'Edit the photo to place the person in the lobby of a grand theater. Change their outfit to a dark, well-fitted navy suit, a crisp white dress shirt, a conservative silk tie, and polished black leather shoes. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, full-body, photorealistic image.',
    hashtags: ['#SemiFormal', '#NavySuit', '#CocktailAttire', '#TheaterNight', '#ClassicStyle']
  },
  {
    id: 'business_formal',
    name: 'Business Formal',
    description: 'Perfect for boardrooms and meetings.',
    prompt: 'Edit the photo to place the person in a modern, high-rise office with a city view. Change their outfit to a high-quality, dark charcoal business suit, a crisp white dress shirt, a silk tie, and polished black oxford shoes. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, full-body, photorealistic image.',
    hashtags: ['#BusinessFormal', '#PowerSuit', '#CEOStyle', '#Boardroom', '#CorporateElite']
  },
  {
    id: 'business_professional',
    name: 'Business Professional',
    description: 'A step down from formal, but still sharp.',
    prompt: 'Edit the photo to place the person into a bright, modern corporate meeting room. Change their attire to a classic grey suit, a light blue dress shirt, a patterned tie, and brown leather derby shoes. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, full-body, photorealistic image.',
    hashtags: ['#BusinessPro', '#GreySuit', '#OfficeStyle', '#Professional', '#WorkWear']
  },
  {
    id: 'business_casual',
    name: 'Business Casual',
    description: 'Smart yet comfortable for the modern office.',
    prompt: 'Edit the photo to place the person in a stylish, creative co-working space. Change their outfit to a navy blue blazer, a light-colored button-down shirt (no tie), grey chinos, and brown leather loafers. They should be sitting casually. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, photorealistic image.',
    hashtags: ['#BusinessCasual', '#SmartCasual', '#ModernOffice', '#NoTie', '#StartupStyle']
  },
  {
    id: 'dress_to_impress',
    name: 'Dress to Impress',
    description: 'For events where you want to stand out.',
    prompt: 'Edit the photo to place the person at a trendy rooftop bar at dusk. Change their outfit to a fashionable grey patterned blazer, dark, slim-fit trousers, a crisp white dress shirt (top button undone), and stylish leather boots. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, photorealistic image.',
    hashtags: ['#DressToImpress', '#NightOut', '#Fashionable', '#DateNight', '#StandOut']
  },
  {
    id: 'smart_casual',
    name: 'Smart Casual',
    description: 'Effortlessly stylish for dates or socials.',
    prompt: 'Edit the photo to place the person on a charming European cobblestone street. Change their outfit to a well-fitted dark sports coat, a quality crewneck t-shirt, dark wash denim jeans, and minimalist white leather sneakers. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, full-body, photorealistic image.',
    hashtags: ['#SmartCasual', '#WeekendStyle', '#DateReady', '#EffortlessChic', '#CityStyle']
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Relaxed and comfortable for your days off.',
    prompt: 'Edit the photo to place the person in a city park on a sunny afternoon. Change their outfit to a classic dark-colored t-shirt, light-wash blue jeans, and casual sneakers. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, full-body, photorealistic image.',
    hashtags: ['#CasualStyle', '#WeekendVibes', '#Relaxed', '#DayOff', '#ComfortFirst']
  },
  {
    id: 'beachwear',
    name: 'Beachwear',
    description: 'Stylish and ready for sun and sand.',
    prompt: 'Edit the photo to place the person on a beautiful tropical beach at the water\'s edge. Change their outfit to tailored khaki shorts, a white linen short-sleeve shirt, and classic sunglasses. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, full-body, photorealistic image with bright, sunny lighting.',
    hashtags: ['#BeachReady', '#SummerStyle', '#VacationMode', '#Tropical', '#SunAndSand']
  },
  {
    id: 'loungewear',
    name: 'Loungewear',
    description: 'Ultimate comfort for relaxing at home.',
    prompt: 'Edit the photo to place the person in a cozy, modern living room. Change their outfit to a high-quality grey hoodie, matching grey sweatpants, and clean sneakers. The person should be in a relaxed pose. The person\'s original face and head must be preserved exactly as they are in the original photo. The final result should be a single, photorealistic image with a warm, comfortable atmosphere.',
    hashtags: ['#Loungewear', '#Cozy', '#HomeStyle', '#ComfortWear', '#ChillMode']
  }
];
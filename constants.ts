import { StyleOption } from './types';

export const styleOptions: StyleOption[] = [
  {
    id: 'black_tie',
    name: 'Black Tie',
    description: 'The pinnacle of formal evening wear.',
    prompt: 'Using the face from the provided image, generate a new, full-body photograph of the man. Place him at a glamorous evening gala with chandeliers and a blurred background of other guests. He should be standing confidently, wearing a classic black tuxedo, white formal shirt, black bow tie, and patent leather shoes. The lighting must be elegant and atmospheric.'
  },
  {
    id: 'black_tie_optional',
    name: 'Black Tie Optional',
    description: 'Formal, but with a degree of flexibility.',
    prompt: 'Using the face from the provided image, create a new photograph of the man in the lobby of a grand theater. He is leaning slightly against a marble column, looking relaxed but sophisticated. Dress him in a dark, well-fitted navy suit, a crisp white dress shirt, a conservative silk tie, and polished black leather shoes. The scene should be warmly lit and upscale.'
  },
  {
    id: 'business_formal',
    name: 'Business Formal',
    description: 'Perfect for boardrooms and meetings.',
    prompt: 'Using the face from the provided image, generate a new photograph. The man is in a modern, high-rise office with a stunning city view through a floor-to-ceiling window. He is standing with a confident, professional posture. He is wearing a high-quality, dark charcoal business suit, a crisp white dress shirt, a powerful silk tie (e.g., navy or burgundy), and polished black oxford shoes.'
  },
  {
    id: 'business_professional',
    name: 'Business Professional',
    description: 'A step down from formal, but still sharp.',
    prompt: 'Using the face from the provided image, generate a new photograph of the man in a bright, modern corporate meeting room. He could be mid-presentation, gesturing towards a screen out of frame. He is wearing a classic grey suit, a light blue dress shirt, a patterned tie, and brown leather derby shoes.'
  },
  {
    id: 'business_casual',
    name: 'Business Casual',
    description: 'Smart yet comfortable for the modern office.',
    prompt: 'Using the face from the provided image, create a new scene. The man is in a stylish, creative co-working space with exposed brick and plants. He is sitting casually at a wooden table with a laptop. Dress him in a navy blue blazer, a light-colored button-down shirt (no tie), grey chinos, and brown leather loafers.'
  },
  {
    id: 'dress_to_impress',
    name: 'Dress to Impress',
    description: 'For events where you want to stand out.',
    prompt: 'Using the face from the provided image, generate a new photograph of the man at a trendy rooftop bar at dusk, with the city lights twinkling in the background. He is holding a drink and smiling. He is wearing a fashionable grey patterned blazer, dark, slim-fit trousers, a crisp white dress shirt (top button undone), and stylish leather boots.'
  },
  {
    id: 'smart_casual',
    name: 'Smart Casual',
    description: 'Effortlessly stylish for dates or socials.',
    prompt: 'Using the face from the provided image, create a new photograph of the man strolling down a charming European cobblestone street. He is wearing a well-fitted dark sports coat, a quality crewneck t-shirt, dark wash denim jeans, and clean, minimalist white leather sneakers. The afternoon light should be warm and inviting.'
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Relaxed and comfortable for your days off.',
    prompt: 'Using the face from the provided image, generate a new, full-body photo of the man relaxing in a city park on a sunny afternoon. He is sitting on a bench or leaning against a tree. Dress him in a comfortable and stylish casual outfit: a classic dark-colored t-shirt, light-wash blue jeans, and casual sneakers.'
  },
  {
    id: 'beachwear',
    name: 'Beachwear',
    description: 'Stylish and ready for sun and sand.',
    prompt: 'Using the face from the provided image, create a new photograph of the man walking along a beautiful tropical beach at the edge of the water. The scene should be bright, with clear blue skies and turquoise water. He is wearing tailored khaki shorts, a white linen short-sleeve shirt, and a pair of classic sunglasses.'
  },
  {
    id: 'loungewear',
    name: 'Loungewear',
    description: 'Ultimate comfort for relaxing at home.',
    prompt: 'Using the face from the provided image, generate a new scene. The man is relaxing in a cozy, modern living room with a fireplace and a comfortable sofa. He is wearing a high-quality grey hoodie, matching grey sweatpants, and clean, simple sneakers. The atmosphere is warm, comfortable, and serene.'
  }
];
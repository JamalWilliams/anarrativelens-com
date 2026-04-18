import os
import re

components_dir = '/Users/jamalwilliams/code/anarrativelens.com/src/components'

def refactor_component(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # 1. Update imports
    content = content.replace("import { formatText } from '../lib/textFormatter';", "import { formatText } from '../utils/textFormatter';")
    content = content.replace("import { formatText } from '../lib/textFormatter.ts';", "import { formatText } from '../utils/textFormatter';")

    # 2. High-Contrast Borders: border-white/20 -> border-2 border-white/20
    # First, handle border-white/20 and border-white/10
    # Ensure border-2 is present if border-white/20 or border-white/10 is present
    content = re.sub(r'border-(white/[0-9]+)', r'border-2 border-\1', content)
    # Cleanup double border-2
    content = content.replace('border-2 border-2', 'border-2')
    
    # 3. Remove transparencies and muted effects
    # Replace bg-white/10, bg-zinc-900/30, bg-brand-bg/95, bg-white/5 with bg-brand-bg
    content = re.sub(r'bg-(white|zinc-900|brand-bg|brand-secondary)/([0-9]+|95)', r'bg-brand-bg', content)
    
    # Remove opacity-x classes
    content = re.sub(r'\bopacity-[0-9]+\b', '', content)
    
    # Remove text-white/x or text-brand-text/x modifiers
    content = re.sub(r'text-(white|brand-text|brand-secondary)/[0-9]+', r'text-\1', content)
    
    # Remove backdrop-blur classes
    content = re.sub(r'backdrop-blur-[a-z]+', '', content)

    # 4. Scroll Reveals: Ensure reveal class is on the top-level container (usually section)
    # Check if 'reveal' is present. If not, add it to the first <section or the first <div> if no section.
    if 'reveal' not in content:
        if '<section' in content:
            content = content.replace('<section', '<section class="reveal"', 1)
        elif '<div' in content:
            content = content.replace('<div', '<div class="reveal"', 1)

    # Cleanup extra spaces in classes
    content = re.sub(r'class=" +', 'class="', content)
    content = re.sub(r' +class="', ' class="', content)
    content = re.sub(r'  +', ' ', content)

    with open(file_path, 'w') as f:
        f.write(content)

for filename in os.listdir(components_dir):
    if filename.endswith('.astro'):
        refactor_component(os.path.join(components_dir, filename))

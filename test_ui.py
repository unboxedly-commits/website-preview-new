import os
from playwright.sync_api import sync_playwright

output_dir = 'C:/Users/AI/.gemini/antigravity/brain/16efe738-4187-4f43-8423-4eeec5547011/scratch/screenshots'
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # Desktop
    context_desktop = browser.new_context(viewport={'width': 1920, 'height': 1080})
    page = context_desktop.new_page()
    try:
        page.goto('http://localhost:3000', timeout=30000)
        page.wait_for_load_state('networkidle', timeout=10000)
        page.screenshot(path=f'{output_dir}/desktop.png', full_page=True)
        print("Desktop screenshot saved.")
    except Exception as e:
        print(f"Failed desktop: {e}")
    context_desktop.close()

    # Tablet
    context_tablet = browser.new_context(viewport={'width': 768, 'height': 1024})
    page = context_tablet.new_page()
    try:
        page.goto('http://localhost:3000', timeout=30000)
        page.wait_for_load_state('networkidle', timeout=10000)
        page.screenshot(path=f'{output_dir}/tablet.png', full_page=True)
        print("Tablet screenshot saved.")
    except Exception as e:
        print(f"Failed tablet: {e}")
    context_tablet.close()

    # Mobile
    context_mobile = browser.new_context(viewport={'width': 375, 'height': 667})
    page = context_mobile.new_page()
    try:
        page.goto('http://localhost:3000', timeout=30000)
        page.wait_for_load_state('networkidle', timeout=10000)
        page.screenshot(path=f'{output_dir}/mobile.png', full_page=True)
        print("Mobile screenshot saved.")
    except Exception as e:
        print(f"Failed mobile: {e}")
    context_mobile.close()
    
    browser.close()

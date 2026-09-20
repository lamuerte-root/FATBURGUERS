import urllib.request
import re
import json

with open('/tmp/fatburgers_page.html') as f:
    html = f.read()

scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', html)
print('Scripts count:', len(scripts))
for s in scripts:
    print('Script:', s)

base_url = 'https://fatburgersdelivery.lovable.app'
for s in scripts:
    script_url = s if s.startswith('http') else base_url + s
    print('Fetching script:', script_url)
    try:
        req = urllib.request.Request(script_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            print(f'Script {s} size: {len(content)}')
            with open('/tmp/' + s.split('/')[-1], 'w') as sf:
                sf.write(content)
    except Exception as e:
        print('Error fetching script:', e)

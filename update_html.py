import os, glob, re

target_dir = r'c:\Users\Chrisbin Thomas\Downloads\mgm-master\mgm'
html_files = glob.glob(os.path.join(target_dir, '*.html'))
html_files = [f for f in html_files if not f.endswith('index.html')]

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add CSS Link
    if 'material-orthodox.css' not in content:
        content = content.replace(
            '<link href="css/style1.css" rel="stylesheet">',
            '<link href="css/style1.css" rel="stylesheet">\n    <link href="css/material-orthodox.css" rel="stylesheet">'
        )

    # 2. Modify classes using regex
    def replace_classes(match):
        attrs = match.group(0)
        # Find the class attribute
        class_match = re.search(r'class=(["\'])(.*?)\1', attrs)
        if not class_match: return attrs
        
        classes = class_match.group(2).split()
        new_classes = []
        has_btn = False
        has_rounded = False
        
        for c in classes:
            if c.startswith('btn-') and c in ['btn-primary', 'btn-outline-primary', 'btn-dark']:
                has_btn = True
                new_classes.append(c)
            elif c.startswith('rounded') and c != 'rounded-0':
                has_rounded = True
                # skip adding it, we will add rounded-0 instead
            elif c == 'ortho-square' or c == 'ortho-btn-hover' or c == 'rounded-0':
                # skip to avoid duplicates
                pass
            else:
                new_classes.append(c)
                
        if has_btn:
            new_classes.extend(['ortho-square', 'ortho-btn-hover'])
        if has_rounded:
            new_classes.extend(['rounded-0', 'ortho-square'])
            
        new_class_str = ' '.join(new_classes)
        # Replace the class string inside the original match
        new_attrs = attrs[:class_match.start(2)] + new_class_str + attrs[class_match.end(2):]
        return new_attrs

    # Match any opening tag with a class attribute
    new_content = re.sub(r'<\w+[^>]+class=["\'].*?["\'][^>]*>', replace_classes, content)

    # 3. Add ortho-form-input to forms
    new_content = new_content.replace('class="form-control"', 'class="form-control ortho-square"')
    new_content = new_content.replace('class="form-control ', 'class="form-control ortho-square ')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

print(f'Processed {len(html_files)} HTML files.')

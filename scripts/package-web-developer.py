"""Package only tutorial source and guides; include .gitignore, exclude runtime data."""
from pathlib import Path
import zipfile
root = Path(__file__).resolve().parents[1]
for name in ('web-foundations', 'git-publish-lab'):
    folder = root / 'examples' / name
    with zipfile.ZipFile(root / 'examples' / (name + '-starter.zip'), 'w', zipfile.ZIP_DEFLATED) as archive:
        for file in sorted(folder.rglob('*')):
            if file.is_file() and not any(part in ('data', '__pycache__', '.git') for part in file.relative_to(folder).parts):
                archive.write(file, file.relative_to(root / 'examples').as_posix())
    print('Packaged ' + name)

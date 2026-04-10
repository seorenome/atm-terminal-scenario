import os
import sys
from pathlib import Path

def should_include(file_path: Path, root: Path) -> bool:
    """Перевіряє, чи варто включати файл."""
    # Виключити зайве
    exclude_dirs = {'node_modules', '.git', 'dist', 'build', '__pycache__', '.next'}
    if any(part in exclude_dirs for part in file_path.parts):
        return False
    
    # Розширення, які включаємо
    extensions = {'.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.html', '.py', '.txt', '.svg', '.woff2'}
    return file_path.suffix in extensions

def collect_files():
    root = Path('.')
    output_file = 'atm.md'
    
    # Збираємо всі файли рекурсивно
    all_files = []
    for file_path in root.rglob('*'):
        if file_path.is_file() and should_include(file_path, root):
            all_files.append(file_path)
    
    # Сортуємо для консистентності
    all_files.sort()
    
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for file_path in all_files:
            outfile.write(f'=== {file_path} ===\n')
            try:
                content = file_path.read_text(encoding='utf-8')
                outfile.write(content)
                if not content.endswith('\n'):
                    outfile.write('\n')
            except Exception as e:
                outfile.write(f'[Помилка читання: {e}]\n')
            outfile.write('\n')
    
    print(f"✅ Створено {output_file} з {len(all_files)} файлів")

if __name__ == "__main__":
    collect_files()
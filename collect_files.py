import os
import sys

def collect_files():
    # Get list of all files from the command output
    files = [
        "src/App.tsx",
        "src/components/layout/TerminalFooter/TerminalFooter.styled.ts",
        "src/components/layout/TerminalFooter/TerminalFooter.tsx",
        "src/components/layout/TerminalFooter/TerminalFooter.types.ts",
        "src/components/layout/TerminalHeader/TerminalHeader.styled.ts",
        "src/components/layout/TerminalHeader/TerminalHeader.tsx",
        "src/components/layout/TerminalHeader/TerminalHeader.types.ts",
        "src/components/layout/TerminalLayout/TerminalLayout.styled.ts",
        "src/components/layout/TerminalLayout/TerminalLayout.tsx",
        "src/components/layout/TerminalViewport/TerminalViewport.styled.ts",
        "src/components/layout/TerminalViewport/TerminalViewport.tsx",
        "src/components/ui/Button/Button.styled.ts",
        "src/components/ui/Button/Button.tsx",
        "src/components/ui/Button/Button.types.ts",
        "src/components/ui/CardInput/CardInput.styled.ts",
        "src/components/ui/CardInput/CardInput.tsx",
        "src/components/ui/CardInput/CardInput.types.ts",
        "src/components/ui/InputField/InputField.styled.ts",
        "src/components/ui/InputField/InputField.tsx",
        "src/components/ui/InputField/InputField.types.ts",
        "src/components/ui/NumericKeypad/NumericKeypad.styled.ts",
        "src/components/ui/NumericKeypad/NumericKeypad.tsx",
        "src/components/ui/NumericKeypad/NumericKeypad.types.ts",
        "src/components/ui/OperationCard/OperationCard.styled.ts",
        "src/components/ui/OperationCard/OperationCard.tsx",
        "src/components/ui/OperationCard/OperationCard.types.ts",
        "src/components/ui/PhoneInput/PhoneInput.styled.ts",
        "src/components/ui/PhoneInput/PhoneInput.tsx",
        "src/components/ui/PhoneInput/PhoneInput.types.ts",
        "src/config/screenConfig.ts",
        "src/constants/routePaths.ts",
        "src/locale/en.ts",
        "src/locale/index.ts",
        "src/locale/types.ts",
        "src/locale/uk.ts",
        "src/main.tsx",
        "src/pages/CardInput/CardInputPage.tsx",
        "src/pages/CardInput/CardInputView.styled.ts",
        "src/pages/CardInput/CardInputView.tsx",
        "src/pages/ChooseOperationType/ChooseOperationTypePage.tsx",
        "src/pages/ChooseOperationType/ChooseOperationTypeView.styled.ts",
        "src/pages/ChooseOperationType/ChooseOperationTypeView.tsx",
        "src/pages/PhoneInput/PhoneInputPage.tsx",
        "src/pages/PhoneInput/PhoneInputView.styled.ts",
        "src/pages/PhoneInput/PhoneInputView.tsx",
        "src/pages/PrinterError/PrinterErrorPage.tsx",
        "src/pages/PrinterError/PrinterErrorView.styled.ts",
        "src/pages/PrinterError/PrinterErrorView.tsx",
        "src/routes/router.tsx",
        "src/styles/GlobalStyles.ts"
    ]
    
    with open('atm.md', 'w', encoding='utf-8') as outfile:
        for file_path in files:
            if os.path.exists(file_path):
                outfile.write(f'=== {file_path} ===\n')
                with open(file_path, 'r', encoding='utf-8') as infile:
                    content = infile.read()
                    outfile.write(content)
                    if not content.endswith('\n'):
                        outfile.write('\n')
                outfile.write('\n')
            else:
                print(f"Warning: File not found: {file_path}")
    
    print(f"Created atm.md with {len(files)} files")

if __name__ == "__main__":
    collect_files()
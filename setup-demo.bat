@echo off
echo 🚀 Setting up ASafariM NavLinks Demo...

REM Build the main package
echo 📦 Building main package...
call pnpm run build

REM Install demo dependencies
echo 📥 Installing demo dependencies...
cd demo
call pnpm install

echo ✅ Setup complete!
echo.
echo 🎯 To run the demo:
echo    cd demo && pnpm start
echo.
echo 🌐 Or use the package script:
echo    pnpm run demo

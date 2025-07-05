#!/bin/bash

echo "🚀 Setting up ASafariM NavLinks Demo..."

# Build the main package
echo "📦 Building main package..."
pnpm run build

# Install demo dependencies
echo "📥 Installing demo dependencies..."
cd demo
pnpm install

echo "✅ Setup complete!"
echo ""
echo "🎯 To run the demo:"
echo "   cd demo && pnpm start"
echo ""
echo "🌐 Or use the package script:"
echo "   pnpm run demo"

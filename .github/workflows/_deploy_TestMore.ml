
name: Build and Deploy
on:
  push:
    branches:
      - master
permissions:
  contents: write
jobs:
  deploy:
    concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Configure Node
        uses: actions/setup-node@v1
        with:
          node-version: '16.19.0'
      
      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4.4.3
        with:
          folder: public # The folder the action should deploy.
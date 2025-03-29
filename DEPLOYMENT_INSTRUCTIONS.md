# GitHub Pages Deployment Instructions

## Overview
This document provides step-by-step instructions for deploying the Interactive AI Course to GitHub Pages at http://ibrahimmalick.github.io/.

## Prerequisites
- GitHub account
- Git installed on your local machine
- Basic knowledge of Git commands

## Step 1: Create a GitHub Repository
1. Log in to your GitHub account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name the repository exactly as: `ibrahimmalick.github.io`
   - This specific name is required for GitHub Pages user sites
   - The repository must be public
4. Click "Create repository"

## Step 2: Clone the Repository
1. Open a terminal or command prompt on your local machine
2. Clone the empty repository:
   ```
   git clone https://github.com/ibrahimmalick/ibrahimmalick.github.io.git
   cd ibrahimmalick.github.io
   ```

## Step 3: Add Course Files
1. Copy all files from the provided course directory to your local repository:
   ```
   # Replace /path/to/course with the actual path to the course files
   cp -r /path/to/course/* /path/to/ibrahimmalick.github.io/
   ```
   
   Or manually copy these files:
   - index.html
   - css/styles.css
   - js/charts.js
   - js/main.js
   - modules/module1_exercises.html
   - modules/module2_exercises.html
   - modules/module3_exercises.html
   - README.md

## Step 4: Commit and Push Files
1. Add all files to Git:
   ```
   git add .
   ```
2. Commit the changes:
   ```
   git commit -m "Initial commit of Interactive AI Course"
   ```
3. Push to GitHub:
   ```
   git push origin main
   ```
   (If your default branch is called "master" instead of "main", use `git push origin master`)

## Step 5: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch (or "master" if that's your default)
5. Click "Save"
6. Wait a few minutes for GitHub to build and deploy your site

## Step 6: Verify Deployment
1. After GitHub Pages builds your site, you'll see a message with the URL
2. Visit http://ibrahimmalick.github.io/ to verify your site is working
3. Test all interactive elements and navigation

## Troubleshooting
- If your site doesn't appear, check that the repository name is exactly `ibrahimmalick.github.io`
- Ensure all file paths in HTML files are relative and correct
- Check the GitHub Pages section in repository settings for any error messages
- If images or resources aren't loading, verify the paths in your HTML files

## Making Updates
To update your site after initial deployment:
1. Make changes to your local files
2. Commit the changes:
   ```
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
3. GitHub will automatically rebuild and deploy your site

## Custom Domain (Optional)
If you want to use a custom domain instead of ibrahimmalick.github.io:
1. Go to repository Settings
2. In the GitHub Pages section, enter your custom domain
3. Update your domain's DNS settings as instructed by GitHub
4. Wait for DNS propagation (can take up to 48 hours)

## Need Help?
If you encounter any issues during deployment, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages) or reach out for assistance.

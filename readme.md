# Cloudinary Image Upload App

This is a simple Node.js application that demonstrates how to upload images to [Cloudinary](https://cloudinary.com/) using the [Formidable](https://www.npmjs.com/package/formidable) library for file uploads and the [Cloudinary Node.js SDK](https://cloudinary.com/documentation/node_integration) for image manipulation and storage.

## Learning Outcomes

By working on this project, i have learnt how to:

- Use Formidable to handle file uploads in a Node.js application
- Configure the Cloudinary SDK to interact with your Cloudinary account
- Upload images to Cloudinary using the Cloudinary SDK
- Handle multiple file uploads using Formidable
- Dynamically generate public URLs for uploaded images
- Organize uploaded images into folders based on user input

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using the `npm install` command.
3. Configure your Cloudinary account by updating the `cloud_name`, `api_key`, and `api_secret` values in the `cloudinary.config()` method call.
4. Run the app using the `npm start` command.

## Usage

1. Open your web browser and navigate to `http://localhost:3000/`.
2. Select one or more image files to upload.
3. Enter a folder name (optional).
4. Click the "Upload" button to upload the images to Cloudinary.


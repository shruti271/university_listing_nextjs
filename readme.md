<h1> Composite backend server </h1>

**Important: keep secrets out of github. Use environment variables.**

<h3> Steps to get the project on your computer</h3>

    # Create a directory where you want to clone the project
    mkdir compo

    # Change into the directory
    cd compo
    
    # Make a virtual environment
    python -m venv <env_name>
    
    # Activate virtual environment
    source env/bin/activate <env_name> mac/linux
    env\Scripts\activate.bat Windows
   

    # clone the project
    git clone git@github.com:Composite-App/compo-server.git
    
    # Change into project directory
    cd compo_server
     
    # Install requirements (make sure env in active)
    pip install -r requirements.txt
    
    # Start the development server
    python manage.py runserver
   

<h3> Required environment variables</h3>

- SECRET_KEY
- DEBUG (set to 1 in dev mode)

<p> <strong> Important note: </strong> Please don't push your .env file to the remote repository </p>


## Getting Started NextJS

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# composite-frontend

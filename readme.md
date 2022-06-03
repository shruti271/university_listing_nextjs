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
    env\Scripts\activate.bat
    
    # Install requirements
    pip install -r requirements.txt

    # clone the project
    git clone git@github.com:Composite-App/compo-server.git
    
    # Change into project directory
    cd compo_server
    
    # Start the development server
    python manage.py runserver
   

<h3> Required environment variables</h3>

- SECRET_KEY
- DEBUG (set to 1 in dev mode)

<p> <strong> Important note: </strong> Please don't push the .env file to the remote repository </p>


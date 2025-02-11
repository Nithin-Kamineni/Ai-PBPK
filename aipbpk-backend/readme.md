# creating venv
python -m venv pbpkv1

# to get into virtual env
.\pbpkv1\Scripts\activate


pip install -r requirements.txt

python runserver manage.py 

pip freeze > requirements.txt
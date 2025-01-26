import firebase_admin
from firebase_admin import credentials

# Provide the corrected path to the JSON file
cred = credentials.Certificate("C:\\Users\\nanda\\Downloads\\skillswap-ab21f-firebase-adminsdk-fbsvc-7667d9d719.json")


# Initialize the Firebase app
firebase_admin.initialize_app(cred)

print("Firebase initialized successfully!")

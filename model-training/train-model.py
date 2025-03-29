import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score
import joblib

df = pd.read_csv("mental_health_data.csv")

X = df['Statements']
y = df['status'].map({"positive": 1, "negative": 0})

X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.20, random_state=42, stratify=y
)
X_val, X_test, y_val, y_test = train_test_split(
    X_temp, y_temp, test_size=0.50, random_state=42, stratify=y_temp
)

pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(
        stop_words='english',
        max_features=5000
    )),
    ('clf', LogisticRegression(solver='liblinear', random_state=42))
])

pipeline.fit(X_train, y_train)

val_predictions = pipeline.predict(X_val)
print("Validation Accuracy:", accuracy_score(y_val, val_predictions))
print("Validation Classification Report:")
print(classification_report(y_val, val_predictions, target_names=["Negative", "Positive"]))

test_predictions = pipeline.predict(X_test)
print("Test Accuracy:", accuracy_score(y_test, test_predictions))
print("Test Classification Report:")
print(classification_report(y_test, test_predictions, target_names=["Negative", "Positive"]))

joblib.dump(pipeline, 'mental_health_model.pkl')

print("Model training complete and exported as mental_health_model.pkl")

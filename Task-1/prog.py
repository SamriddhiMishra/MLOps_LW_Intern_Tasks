import joblib
model = joblib.load('reg.pk1')

yrs = int(input("Enter the \'Years of Experience\' to predict the salary:- "))

print("Predicted Salary:- ", model.predict([[yrs]])[0])
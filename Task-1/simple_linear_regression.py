# Import Dataset
import pandas
ds = pandas.read_csv("SalaryData.csv")

# Split X and y
X = ds['YearsExperience'].values
X = X.reshape(-1,1)
y = ds['Salary']

# Creating train and test dataset
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)

# Training the model
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train,y_train)

# y = wx + b
# Print the weight:- w
print("Weight :- ", model.coef_[0])

#Print the bias:- b
print("Bias :- ", model.intercept_)

#Save the model
import joblib
joblib.dump(model, 'reg.pk1')
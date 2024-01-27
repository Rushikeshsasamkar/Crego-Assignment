# Problem statement:
  
  ### Frontend Developer Assignment (React & Bootstrap)
  **Objective:**
Create a web-based Expression Engine UI using Bootstrap and React

**Requirements:**

1. Use Bootstrap for styling to ensure a responsive and visually appealing UI.
2. Implement a form where users can 
    1. input connector type: AND/OR
    2. input expressions. Every expressions contains following fields
        1. Dropdown: Rule Type with values - Age, Credit Score, Account Balance
        2. Operator: >, <, ≥, ≤, =
        3. Value
        4. Score
3. User should be able to add and delete expressions.

**Expected Output:**

{
    "rules": [
        {
            "key": "age",
            "output": {
                "value": 60,
                "operator": ">=",
                "score": 50
            },
        },
        {
            "key": "age",
            "output": {
                "value": 40,
                "operator": ">=",
                "score": 100
            }
        },
        {
            "key": "account_balance",
            "output": {
                "value": 100000,
                "operator": ">=",
                "score": 200
            },
        },
    ],
    "combinator": "and"
}

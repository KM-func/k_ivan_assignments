


#name prompt variable
name_prompt = "hello! what's your name?: "

def hello_name(prompt):
    #name input and variable
    name = input(f"{prompt}")

    #printing function proper
    print(f"hello, {name}!")


hello_name(name_prompt)
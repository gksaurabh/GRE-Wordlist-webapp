import json
import csv

#open our csv file
with open ("sheet2.csv", "r") as file:
    #store the file as a reader object
    reader = csv.reader(file)

    #skip the header line
    next(reader)

    data = {"words": []}
    
    #itterate through the file by line and add key value pairs to 
    #our words array in JSON format
    for row in reader:
        data["words"].append({"word": row[0], "definition": row[1]})

#open our json file and dump/write our data JSON object into it
with open ("words.json", "w") as file:
    json.dump(data, file, indent=4)


#open our csv file
with open ("sheet1.csv", "r") as file:
    #store the file as a reader object
    reader = csv.reader(file)

    #skip the header line
    next(reader)

    data = {"words": []}
    
    #itterate through the file by line and add key value pairs to 
    #our words array in JSON format
    for row in reader:
        data["words"].append({"word": row[0], "definition": row[1], "difficulty": row[2]})

#open our json file and dump/write our data JSON object into it
with open ("words-difficulty.json", "w") as file:
    json.dump(data, file, indent=4)
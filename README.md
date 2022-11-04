# hngCsvconversionTask

# Notice
Update has been made to CSV file to create structured and well formatted data for transformation and processing.

In the case of the attribute values, each pair is delimited with a ; else using a comman "," will create a complex data set that is difficult to process and transform;

# Description

converting a csv file to json, calculating the sha256 of the json file and append it to each line in the csv

the file to be converted should be in the same folder for easy access

the code converts the Team Engine file to json then calculate the sha256 of the csv file and then converts it back to csv file

# comand
After cloning and install all necessary dependencies by running "npm install" in your terminal,

run 'node app.js' and the filename that you want to convert

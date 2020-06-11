import pymongo
import dateparser
import datetime
import wget
import csv
import os

def load(file_path, data_type):
    print("Load {0}".format(data_type))
    file_name = "{0}.csv".format(data_type)
    os.remove(file_name)
    wget.download(file_path, file_name)
    days = []
    with open(file_name, "r") as source:
        count = 0
        for fields in csv.reader(source, quotechar='"', delimiter=",", quoting=csv.QUOTE_ALL):
            if count > 0:
                day = 0
                while day < len(days):
                    date = dateparser.parse(days[day])
                    db.data.update_one(
                        { 
                            "country": fields[1].replace('"',""),
                            "state": fields[0].replace('"',"")
                        },
                        {
                            "$set": {
                                "geo": {
                                    "type": "Point",
                                    "coordinates": [
                                        float(fields[2]),
                                        float(fields[3])
                                    ]
                                },
                                "geoMongoDB": {
                                    "type": "Point",
                                    "coordinates": [
                                        float(fields[3]),
                                        float(fields[2])
                                    ]
                                }
                            },
                            "$addToSet":{
                                data_type: {
                                    "date": date,
                                    "quantity": float(fields[day + 4]) if day == 0 else float((float(fields[(day + 4) - 1]) - float(fields[day + 4]))) * -1
                                }
                            }
                        },
                        upsert=True                        
                    )
                    day += 1
            else:
                total_fields = len(fields) - 4
                i = 4
                while i < total_fields:
                    days.append(fields[i])
                    i +=1
            count += 1



covid = pymongo.MongoClient("mongodb+srv://<username>:<password>@<your_cluster>/covidData?retryWrites=true&w=majority")
db = covid["covidData"]

path_global_deaths = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"
path_global_confirmed = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
path_global_recovered = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv"

db.data.remove()
load(path_global_deaths, "deaths")
load(path_global_confirmed, "confirmed")
load(path_global_recovered, "recovered")
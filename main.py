from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request

from pyrebase import pyrebase

app = Flask(__name__)


config = {
    "apiKey": "AIzaSyACjlfd8559iiA3xbW7WItAb_f1gMQ-uIs",
    "authDomain": "ualr-cybersecurity.firebaseapp.com",
    "databaseURL": "https://ualr-cybersecurity.firebaseio.com",
    "projectId": "ualr-cybersecurity",
    "storageBucket": "ualr-cybersecurity.appspot.com"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

# telemetryData = db.child("telemetry_data").child("humidity").get()
xacc_data = db.child("telemetry_data").child("xacc").get().val()
yacc_data = db.child("telemetry_data").child("yacc").get().val()
zacc_data = db.child("telemetry_data").child("zacc").get().val()

print(xacc_data)
print(yacc_data)
print(zacc_data)

# def stream_handler(message):
#     print(message["event"]) # put
#     print(message["path"]) # /-K7yGTTEp7O549EzTYtI
#     print(message["data"]) # {'title': 'Pyrebase', "body": "etc..."}

# my_stream = db.child("telemetry_data").stream(stream_handler)



# my_stream.close()


# try:
#     while True:
#         my_stream = db.child("telemetry_data").stream(stream_handler)

# except KeyboardInterrupt:
#     print('interrupted!')

@app.route('/')
def index():

    accData = {
                'xacc': xacc_data,
                'yacc': yacc_data,
                'zacc': zacc_data,
            }

    return render_template('index.html', accData=accData)


@app.route('/update')
def update():

    xacc_data = db.child("telemetry_data").child("xacc").get().val()
    yacc_data = db.child("telemetry_data").child("yacc").get().val()
    zacc_data = db.child("telemetry_data").child("zacc").get().val()

    newAccData = {
                'xacc': xacc_data,
                'yacc': yacc_data,
                'zacc': zacc_data,
            }

    print(newAccData)

    return jsonify({
            'xvalue' : xacc_data,
            'yvalue' : yacc_data,
            'zvalue' : zacc_data
        })


# @app.route('/processjson', methods=['POST'])
# def processjson():

#     data = request.get_json()

#     xacc = data['xacc']
#     yacc = data['yacc']
#     zacc = data['zacc']

#     return jsonify({'xacc' : xacc, 'yacc' : yacc, 'zacc' : zacc})
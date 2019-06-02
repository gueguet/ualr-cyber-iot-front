from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request

app = Flask(__name__)

@app.route('/')
def index():

    accData = {
                'xacc': 100,
                'yacc': 2000,
                'zacc': 2350,
            }

    return render_template('index.html', accData=accData)


# @app.route('/processjson', methods=['POST'])
# def processjson():

#     data = request.get_json()

#     xacc = data['xacc']
#     yacc = data['yacc']
#     zacc = data['zacc']

#     return jsonify({'xacc' : xacc, 'yacc' : yacc, 'zacc' : zacc})
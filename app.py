from flask import Flask,render_template,request,jsonify
import cv2
import mediapipe as mp

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__' :
    app.run(debug=True)

@app.route('/process', methods=['POST'])
def process():
    frame_data =request.form['frame']
    nparr =np.fromstring(frame_data.decode('base64'),np.uint8)
    frame =cv2.imdecode(nparr,cv2.IMREAD_COLOR)
    return jsonify({'prediction':'A'})
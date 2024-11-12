from flask import Flask, jsonify, request
import os
from deployer.main import deploy_contract
from zk_model import compile_model, get_proof

app = Flask(__name__)

# Set up an upload folder if needed
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/compilemodel', methods=['POST'])
def compile_model():
    # Check if a file was included in the request
    if 'file' not in request.files:
        return jsonify({"status": "error", "message": "No file part in the request"}), 400
    
    file = request.files['file']

    # If no file was selected
    if file.filename == '':
        return jsonify({"status": "error", "message": "No selected file"}), 400

    # Save the file to the upload folder
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)

    compile_model(filepath)
    response = {
        "status": "success",
        "message": f"Model compiled successfully from file '{file.filename}'",
        "compiled_model_path": filepath  # Include the path for reference
    }
    
    return jsonify(response)

@app.route('/deploy_verifier', methods=['POST'])
def deploy_verifier():
    
    addr = deploy_contract()

    response = {
       "verifier_addr":addr
    }
    
    return jsonify(response)

@app.route('/get_proof', methods=['POST'])
def get_proof():
    return get_proof()

if __name__ == '__main__':
    app.run(debug=True)

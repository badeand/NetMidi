cd /
rm -rf NetMidi
sudo apt-get update -y 
sudo apt-get install nodejs npm git -y 
git clone https://github.com/badeand/NetMidi.git
cd ./NetMidi/server
npm install
node index.js

rm -rf temp
mkdir temp
cd temp
mkdir collected
mkdir target
cd target
mkdir resources
cd ..
cd ..
cp -r /Users/badeand/SynologyDrive/Documents/notater-privat/Fag/Maker/Prosjekter/NetMidi/Documentation/* ./temp/collected
rm temp/collected/resources/*.md
rm temp/collected/resources/*.svg

cp temp/collected/resources/* temp/target/resources/

node index.js

cp ./resources/reference.docx temp/target

cd temp/target

pandoc -s "NetMidi System Documentation.md"  -o "NetMidi System Documentation.docx" \
 --reference-doc=reference.docx 
 
/Applications/LibreOffice.app/Contents/MacOS/soffice --headless --convert-to pdf "NetMidi System Documentation.docx" --outdir .

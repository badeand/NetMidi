
rm -rf markdown

rm -rf binary
mkdir binary

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
rm ./temp/collected/resources/*.md
rm ./temp/collected/resources/*.svg

cp temp/collected/resources/* temp/target/resources/

node index.js

cp ./resources/reference.docx temp/target

cd temp/target

pandoc -s "NetMidi_System_Documentation.md"  -o "NetMidi_System_Documentation.docx" \
 --reference-doc=reference.docx 

 rm reference.docx
 
/Applications/LibreOffice.app/Contents/MacOS/soffice --headless --convert-to pdf "NetMidi_System_Documentation.docx" --outdir .

cd ../..

cp ./temp/target/*.pdf ./binary/
rm ./temp/target/*.pdf
cp ./temp/target/*.docx ./binary/
rm ./temp/target/*.docx


cp -r ./temp/target .
mv target markdown

cat README-epilogue.md >> markdown/README.md

rm -rf temp

mv ./markdown/README.md ..